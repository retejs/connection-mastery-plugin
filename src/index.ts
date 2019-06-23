import { NodeEditor } from 'rete';
import initializeCreateAndConnect from './features/create-and-connect';
import 'rete-connection-plugin/types';

type Params = {
    createAndConnect: boolean | { key: string };
} 

function install(editor: NodeEditor, params: Params) {
    const createAndConnect = params.createAndConnect === false ? false : (params.createAndConnect || { key: 'Control' })

    if(typeof createAndConnect === 'object') initializeCreateAndConnect(editor, createAndConnect.key);
}

export default {
    name: 'connection-mastery',
    install
}