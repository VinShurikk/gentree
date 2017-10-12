// src/components/IndexPage.js
import React from 'react';
import Person from './Person';
import { persons } from '../data/mock';
import PersonModel from '../models/Person'
import Form from "./Form";

export default class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isVisible: false}
  }

  show() {
    this.setState({ isVisible: true });
  }

  hide() {
    this.setState({ isVisible: false });
  }

  render() {
    return (
      <div className="home">
        <div className="athletes-selector">
          {persons.map(person => <Person person={person}/>)}
          <Form model={PersonModel}/>
          <input type="button" value="Add person" onClick={this.show()}/>
        </div>
      </div>
    );
  }
}