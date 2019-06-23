Connection Mastery
====
#### Rete.js plugin

This plugin is intended to enhance `rete-connection-plugin` in terms of user interaction.

## Features:

- Create node for picked connection and connect ([example](https://youtu.be/8ew12FLgaMs?t=98))
  
    | # | User actions | Editor |
    |---|---|---|
    | 1 | Press Ctrl on connection drop | Context menu will appear |
    | 2 | Select a node by holding down Ctrl | Node will be added. The previously picked Input/Output will be connected with a compatible Output/Input of the added node |

- Delete connection by picking

    | # | User actions | Editor |
    |---|---|---|
    | 1 | Press D and click on the connection | Remove the connection |

## How to use

```js
import ConnectionMasteryPlugin from 'rete-connection-mastery-plugin';

editor.use(ConnectionMasteryPlugin); 
// or disable features
editor.use(ConnectionMasteryPlugin, {
    createAndConnect: false,
    pickConnection: false
});
// or change keys
editor.use(ConnectionMasteryPlugin, {
    createAndConnect: { keyCode: 'Control' },
    pickConnection: { keyCode: 'KeyD' }
});
```