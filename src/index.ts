import { NodeEditor } from 'rete';
import initializeCreateAndConnect from './features/create-and-connect';
import 'rete-connection-plugin/types';

type Params = {
    createAndConnect?: boolean | { keyCode: string };
} 

function install(editor: NodeEditor, params: Params) {
    const createAndConnect = params.createAndConnect === false ? false : (params.createAndConnect || { keyCode: 'Control' })

    if(typeof createAndConnect === 'object') initializeCreateAndConnect(editor, createAndConnect.keyCode);
}

export default {
    name: 'connection-mastery',
    install
}