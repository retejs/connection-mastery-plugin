import { NodeEditor } from 'rete';
import initializeCreateAndConnect from './features/create-and-connect';
import initializePickConnection from './features/pick-connection';
import 'rete-connection-plugin/types';

type Params = {
    createAndConnect?: boolean | { keyCode: string };
    pickConnection?: boolean | { keyCode: string };
} 

function install(editor: NodeEditor, params: Params) {
    const createAndConnect = params.createAndConnect === false ? false : (params.createAndConnect || { keyCode: 'Control' })
    const pickConnection = params.pickConnection === false ? false : (params.pickConnection || { keyCode: 'KeyD' })

    if(typeof createAndConnect === 'object') initializeCreateAndConnect(editor, createAndConnect.keyCode);
    if(typeof pickConnection === 'object') initializePickConnection(editor, pickConnection.keyCode);
}

export default {
    name: 'connection-mastery',
    install
}