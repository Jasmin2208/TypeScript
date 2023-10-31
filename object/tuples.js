"use strict";
const personinfo1 = ['jasmin', 21, true];
const personinfo2 = ['happy', 21, false];
const personInfoCheck = (person) => {
    const [name, age, student] = person;
    console.log(`${name} has ${age} old and it has ${student ? "student" : "not student"}`);
};
personInfoCheck(personinfo1);
personInfoCheck(personinfo2);
