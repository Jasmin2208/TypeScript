"use strict";
// set default value in parameter
function greet1(name, id = 1) {
    return `Welcome, ${name} your id is ${id}.`;
}
const greetFunction1 = greet1("jasmin");
console.log(greetFunction1);
//set optional value in parameter
function greet2(name, id) {
    if (id) {
        return `Welcome, ${name} your id is ${id}.`;
    }
    else {
        return `Welcome, ${name}.`;
    }
}
const greetFunction2 = greet2("jasmin");
console.log(greetFunction2);
