'use strict';
import React from 'react';

export default class Person extends React.Component {

    render() {
        const person = this.props.person;
        return (
            <div className="person">
                <span className="lastname">{person.secondname}</span>
                <span className="firstname">{person.firstname}</span>
            </div>
        );
    }
}