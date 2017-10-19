// src/components/Form.js
import React from 'react';
import FormType from '../models/FieldType'
import DayPickerInput from 'react-day-picker/DayPickerInput';

export default class Form extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props.value)
    console.log(this.props.value || {})
    this.state = { values: this.props.value || {} };
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateInputValue(evt) {
    console.log(evt.target);
    const model = this.props.model;
    if (model.hasOwnProperty(evt.target.name)) {
      let values = this.state.values;
      values[ evt.target.name ] = evt.target.value;
      this.setState({
        values: values
      });
    }
  }

  collectModel() {
    this.props.onAdd(this.state.values);
    this.props.onCancel();
  }

  selectDate(value, name) {
    console.log(value);
    console.log(name);
    let formattedDate = value.format('DD/MM/YYYY')
    let eventResult = {
      target: {
        name: name,
        value: formattedDate
      }
    }
    this.updateInputValue(eventResult)
  }

  render() {
    const model = this.props.model;
    let components = []
    for (let field in model) {
      let item = model[ field ];
      switch (item.type) {
        case FormType.NUMERIC:
          components.push(
            <div>{item.displayName}
              <input type="number" step="1" name={item.name} onChange={this.updateInputValue}/>
            </div>
          );
          break;
        case FormType.TEXT:
          components.push(
            <div>{item.displayName}
              <input type="text" name={item.name} onChange={this.updateInputValue}/>
            </div>
          );
          break;
        case FormType.DATE:
          let thisItemName = item.name;
          components.push(
            <DayPickerInput
              format="DD/MM/YYYY"
              onDayChange={(date) => this.selectDate(date, thisItemName)}
              showPreviousYear
              showNextYear
            />
            // <DatePicker
            //   name={item.name}
            //   selected={this.state.startDate}
            //   dateFormat="DD/MM/YYYY"
            //   placeholderText="Click to select a date"
            //   onChange={(date, event) => this.selectDate(date, event, thisItemName)}
            //   value={item.value}
            //   showYearDropdown
            //   showMonthDropdown
            // />
          );
          break;
        case FormType.COMBOBOX:
        default:
          components.push(
            <div>{item.displayName} TYPE={item.type}</div>
          )
      }
    }
    const classname = 'popup ' + (this.props.isVisible ? 'shown' : 'hidden');
    return (
      <div className={classname}>
        <div className="overlay" onClick={this.props.onCancel}>test</div>
        <div className="content">
          <div className="title">Title</div>
          {components}
          <div>
            <span className="button green" onClick={this.collectModel.bind(this)}>Add</span>
            <span className="button red" onClick={this.props.onCancel}>Cancel</span>
          </div>
        </div>
      </div>
    );
  }
}