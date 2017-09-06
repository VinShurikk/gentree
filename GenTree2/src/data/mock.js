"use strict";
export const persons = [
    {
        "id": 1,
        "firstname": "Alex",
        "secondname": "Gubarets",
        "birthdate": "1987-09-01",
        "description": "some long text"
    },
    {
        "id": 2,
        "firstname": "Test",
        "middlename": "M",
        "secondname": "Stest",
        "birthdate": "1924-09-01",
        "deathdate": "1948-11-24",
        "description": "some long text"
    },
    {
        "id": 3,
        "firstname": "Ivan",
        "secondname": "Petrov",
        "birthdate": "1959-11-30",
        "description": "some description"
    },
    {
        "id": 4,
        "firstname": "Sofia",
        "secondname": "Pototskaya",
        "birthdate": "1929-03-18",
        "deathdate": "1953-10-21",
        "description": "some description"
    }
]
export const linksTypes = [
    {
        "id": 1,
        "name": "Parent",
    },
    {
        "id": 2,
        "name": "Brother/Sister",
    },
    {
        "id": 3,
        "name": "Marriage",
    },
]
export const links = [
    {
        "leftPersonId": 1,
        "rightPersonId": 2,
        "linkTypeId": 1
    },
    {
        "leftPersonId": 2,
        "rightPersonId": 3,
        "linkTypeId": 2
    },
    {
        "leftPersonId": 2,
        "rightPersonId": 4,
        "linkTypeId": 3
    }
]

