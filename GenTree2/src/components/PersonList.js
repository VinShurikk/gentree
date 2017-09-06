// src/components/AthletesMenu.js
import React from 'react';
import { Link } from 'react-router';

export default class PersonList extends React.Component {
    render() {
        return (
            <nav className="persons-list">
                {this.props.persons.map(person => {
                    return <Link key={person.id} to={`/person/${person.id}`} activeClassName="active">
                        {person.fullName()}
                    </Link>;
                })}
            </nav>
        );
    }
}