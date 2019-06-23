import { NodeEditor, Input, Output } from "rete";

export default function (editor: NodeEditor, key: string) {
    let mouseEvent: MouseEvent | null = null;
    let targetIO: Input | Output | null = null;
    let ctrl = false;

    editor.view.container.addEventListener('mousemove', e => {
        mouseEvent = e;
    });
    document.addEventListener('keydown', e => {
        if(e.key === key) ctrl = true;
    });
    document.addEventListener('keyup', e => {
        if(e.key === key) ctrl = false;
    })
    editor.on('connectiondrop', io => {
        if(!mouseEvent) throw 'Error not found';
        if(!ctrl) return;

        targetIO = io;

        editor.trigger('contextmenu', {
            e: mouseEvent
        })
    });
    editor.on('nodecreated', node => {
        if(!ctrl) return;
        const io = targetIO;

        console.log(io);

        if(io instanceof Output) {
            const inputs = Array.from(node.inputs.values());
            const compatibleInput = inputs.find(i => io.socket.compatibleWith(i.socket))

            if(compatibleInput) {
                console.log('compatibleInput');
                editor.connect(io, compatibleInput)
            }
        } else if(io instanceof Input) {
            const outputs = Array.from(node.outputs.values());
            const compatibleOutput = outputs.find(o => o.socket.compatibleWith(io.socket))

            if(compatibleOutput) {
                console.log('compatibleOutput');
                editor.connect(compatibleOutput, io)
            }
        }
    });
}