'use strict';
import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import PersonList from './PersonList';
import Flag from './Flag';
import { persons } from '../data/mock';

export default class PersonPage extends React.Component {
    render() {
        const id = this.props.params.id;
        const person = persons.filter((person) => person.id === id)[0];
        if (!person) {
            return <NotFoundPage/>;
        }
        const headerStyle = { backgroundImage: `url(/img/${person.cover})` };
        return (
            <div className="athlete-full">
                <PersonList persons={persons}/>
                <div className="athlete">
                    <header style={headerStyle}/>
                    <div className="picture-container">
                        <img src={`/img/${athlete.image}`}/>
                        <h2 className="name">{athlete.name}</h2>
                    </div>
                    <section className="description">
                        Olympic medalist from <strong><Flag code={person.country} showName="true"/></strong>,
                        born in {person.birthdate} (Find out more on <a href={person.link} target="_blank">Wikipedia</a>).
                    </section>
                    {
                        person.medals && person.medals.length > 0 &&
                        <section className="medals">
                            <p>Winner of <strong>{person.medals.length}</strong> medals:</p>
                            <ul>{
                                person.medals.map((medal, i) => <Medal key={i} {...medal}/>)
                            }</ul>

                        </section>
                    }
                    </div>
                <div className="navigateBack">
                    <Link to="/">« Back to the index</Link>
                </div>
            </div>
        );
    }
}