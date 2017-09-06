// src/components/IndexPage.js
import React from 'react';
import Person from './Person';
import { persons } from '../data/mock';

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="athletes-selector">
                    {persons.map(person => <Person person={person}/>)}
                </div>
            </div>
        );
    }
}