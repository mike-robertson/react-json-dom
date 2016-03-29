'use strict'

import React from 'react';
// import only the render function of react-dom using ES2015 destructuring
import { render } from 'react-dom';
import JsonComponent from './components/jsonComponent.jsx';

const exampleObject = {
  arg1: 'val1',
  arg2: {
    arg21: {
      arg211: 'val211'
    },
    arg22: 'val22'
  },
  arg3: 3,
  arg4: [
    'test',
    {
      val421: 'test',
      val422: 'test2'
    },
    'val3'
  ],
  arg5: '5'
}

render(
  <JsonComponent jsonObject={exampleObject}/>, document.getElementById('app')
);
