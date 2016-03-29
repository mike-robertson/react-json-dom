import React, {PropTypes} from 'react';
import JsonArg from './jsonArg';

const JsonComponent = (props) => {

  const divStyle = {
    fontFamily: ["HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", "sans-serif"],
    backgroundColor: '#2F3030',
    borderRadius: '5px',
    padding: '20px 0',
    display: 'inline-block'
  };

  const ulStyle = {
    padding: '0 20px',
    margin: '0'
  };

  const isObject = (obj) => {
    return typeof obj === 'object';
  };

  let expandJson = (obj) => {
    let iterable = isObject(obj) ? (Array.isArray(obj) ? obj : Object.getOwnPropertyNames(obj)) : Object.getOwnPropertyNames({ obj });
    console.log(iterable);
    return (
      <ul style={ulStyle}>
        {iterable.map((val, index) => {
          console.log('val', val, obj[val])
          return Array.isArray(obj)
          ? (
              <JsonArg key={index} obj={val}>
                {(isObject(val) ? expandJson(val) : '')}
              </JsonArg>
            )
          : (
              <JsonArg key={index} obj={obj} val={val}>
                {(isObject(obj[val]) ? expandJson(obj[val]) : '')}
              </JsonArg>
          )
        })}
      </ul>
    );
  };

  return (
    <div className="json-tree" style={divStyle}>
      {expandJson(props.jsonObject)}
    </div>
  );
};

JsonComponent.propTypes = {
  jsonObject: React.PropTypes.object.isRequired
};

export default JsonComponent;
