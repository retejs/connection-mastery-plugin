export default {
    input: 'src/index.ts',
    name: 'ConnectionMasteryPlugin',
    external: ['rete-connection-plugin/types', 'rete'],
    globals: { 'rete': 'Rete' }
}