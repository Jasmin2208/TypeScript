"use strict";
let a = 5;
a = "jasmin";
console.log("a---->", a);
let b;
b = 5;
// b = "jasmin"
// b = true
if (typeof b === 'number') {
    console.log("Number----------->", b);
}
else if (typeof b === 'string') {
    console.log("String----------->", b);
}
else if (typeof b === 'boolean') {
    console.log("Boolean----------->", b);
}
else {
    console.log("B----------------->", b);
}
