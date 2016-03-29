##json-tree

A simple component which you can use to show what json looks like.

![Demo screenshot](/img/demo.png?raw=true "Demo")

```javascript
import JsonTree from 'react-json-dom';

let testObj = {
  arg1: 'val1',
  arg2: {
    arg21: {
      arg211: 'val211'
    },
    arg22: 'val22'
  },
  arg3: 3
}

<JsonTree jsonObject={testObj} />
```
