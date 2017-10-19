import React from 'react';
import Person from './Person';
import { persons } from '../data/mock';
import Form from "./Form";
import PersonModel, {add as addPerson} from '../models/Person'
import DayPickerInput from 'react-day-picker/DayPickerInput';

export default class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isVisible: false, counter:0, isToggleOn: true}
  }

  show(value) {
    console.log("show()");
    if (value) console.log("Value is set");
    this.setState({
      isVisible: true,
      value: value,
      counter: this.state.counter+1
    });
  }

  hide() {
    console.log("hide()");
    this.setState({
      isVisible: false,
      value: null
    });
    console.log(this.state.value);
  }

  render() {
    return (
      <div className="home">
        <div className="athletes-selector">
          {persons.map(person => <Person person={person}/>)}
          <Form model={PersonModel} isVisible={this.state.isVisible} value={this.state.value} onAdd={addPerson.bind(this)} onCancel={this.hide.bind(this)}/>
          <button onClick={this.show.bind(this, this.state.value)}>Add person</button>
          <div>{this.state.counter}</div>

        </div>
      </div>
    );
  }
}