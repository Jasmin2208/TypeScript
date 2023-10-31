"use strict";
const age = [10, 20, 30, 40, 50];
age.map((a) => {
    console.log(a * 2);
});
const filterAge = age.filter(a => a > 20);
console.log(filterAge);
