"use strict";
const people1 = {
    name: "Jasmin Korat",
    age: 21,
    isStudent: true,
    address: {
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India",
        PIN: 382350
    }
};
const people2 = {
    name: "Happy Korat",
    age: 23,
    isStudent: true,
    address: {
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India",
        PIN: 382350
    }
};
const people3 = {
    name: "Vraj Korat",
    age: 16,
    isStudent: true,
    address: {
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India",
        PIN: 382350
    }
};
function peopleDetail(people) {
    console.log(`Student name is ${people.name}.`);
}
peopleDetail(people1);
console.log([people1, people2, people3]);
