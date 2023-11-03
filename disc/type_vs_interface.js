"use strict";
const s1 = {
    name: "jasmin",
    age: 21,
    grade: 1,
    class: 15
};
console.log(s1);
const teacher1 = {
    name: "Komal",
    age: 31,
    subject: "Math"
};
console.log(teacher1);
class schoolInfo {
    constructor(name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
}
schoolInfo.teacher1 = `teacher name is komal`;
const teacher2 = new schoolInfo("jay", 22, "phy");
console.log(teacher2);
console.log(schoolInfo.teacher1);
