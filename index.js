"use strict";
function greet(name, id) {
    return `Welcome, ${name} your id is ${id}.`;
}
const greetFunction = greet("jasmin", 22);
console.log(greetFunction);
const isPalindrom = (palindrom) => {
    const myPalindrom = palindrom.split("").reverse().join("");
    return palindrom === myPalindrom;
};
const palindrom = isPalindrom("12321");
console.log(palindrom);
