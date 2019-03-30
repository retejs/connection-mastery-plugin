import { NodeEditor, Input, Output } from 'rete';
import 'rete-connection-plugin/types';

function install(editor: NodeEditor) {
    let mouseEvent: MouseEvent | null = null;
    let targetIO: Input | Output | null = null;
    let ctrl = false;
    
    editor.view.container.addEventListener('mousemove', e => {
        mouseEvent = e;
    });
    document.addEventListener('keydown', e => {
        if(e.key === 'Control') ctrl = true;
    });
    document.addEventListener('keyup', e => {
        if(e.key === 'Control') ctrl = false;
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

        if(io instanceof Output) {
            const inputs = Array.from(node.inputs.values());
            const compatibleInput = inputs.find(i => io.socket.compatibleWith(i.socket))

            if(compatibleInput) {
                editor.connect(io, compatibleInput)
            }
        } else if(io instanceof Input) {
            const outputs = Array.from(node.outputs.values());
            const compatibleOutput = outputs.find(o => o.socket.compatibleWith(io.socket))

            if(compatibleOutput) {
                editor.connect(compatibleOutput, io)
            }
        }
    });

}

export default {
    name: 'connection-mastery',
    install
}