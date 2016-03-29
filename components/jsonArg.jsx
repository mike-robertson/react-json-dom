import React, {PropTypes} from 'react';

const JsonArg = (props) => {

  const objStyle = {
    color: 'maroon',
    listStyleType: 'none',
    fontWeight: 'bold'
  };

  const arrStyle = {
    listStyleType: 'none',
    fontWeight: 'normal'
  };

  const stringStyle = {
    color: 'green',
    listStyleType: 'none',
    fontWeight: 'normal'
  };

  const numStyle = {
    color: 'purple',
    listStyleType: 'none',
    fontWeight: 'normal'
  };

  const isObject = (obj) => {
    return typeof obj === 'object';
  };

  const puncStyle = {
    color: 'black',
    fontWeight: 'normal'
  };

  const wrapChar = (val) => {
    return typeof val === 'string' ? <span style={puncStyle}><q style={stringStyle}>{val}</q>,</span> : <span>{val}<span style={puncStyle}>,</span></span>;
  };

  const getStyle = (obj) => {
    return typeof obj === 'string' ? stringStyle : (
      typeof obj === 'number' ? numStyle : objStyle
    )
  };

  const getOpenBrace = (obj) => {
    console.log('[', obj, Array.isArray(obj))
    return Array.isArray(obj) ? '[' : '{';
  };

  const getCloseBrace = (obj) => {
    console.log(']', obj, Array.isArray(obj))
    return Array.isArray(obj) ? ']' : '}';
  };

  return (
    <li style={getStyle(props.obj)}>
      {props.val}: {
        isObject(props.obj[props.val])
          ? <span style={puncStyle}>{getOpenBrace(props.obj[props.val])}
              <div>{props.children}<span>{getCloseBrace(props.obj[props.val])}</span></div>
            </span>
          : <span style={getStyle(props.obj[props.val])}>{wrapChar(props.obj[props.val])}</span>
      }
    </li>
  );
};

export default JsonArg;
