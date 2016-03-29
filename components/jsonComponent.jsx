import React, {PropTypes} from 'react';
import JsonArg from './jsonArg';

const JsonComponent = (props) => {

  const divStyle = {
    fontFamily: ["HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", "sans-serif"]
  };

  const isObject = (obj) => {
    return typeof obj === 'object';
  };

  let expandJson = (obj) => {
    return (
      <ul>
        {Object.getOwnPropertyNames(obj).map((val, index) => {
          return (
            <JsonArg key={index} obj={obj} val={val}>{isObject(obj[val]) ? expandJson(obj[val]) : ''}</JsonArg>
          );
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
