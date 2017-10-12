// src/components/Form.js
import React from 'react';
import FormType from '../models/FieldType'

export default class Form extends React.Component {

  render() {
    const model = this.props.model;
    let components = []
    for (let item in model) {
      switch (item.type) {
        case FormType.TEXT:
        case FormType.NUMERIC:
        case FormType.DATE:
        case FormType.COMBOBOX:
          components.push(
            <div>{item.displayText} TYPE={item.type}</div>
          )
      }
    }
    return (
      <div className="popup-form">
        {components}
      </div>
    );
  }
}