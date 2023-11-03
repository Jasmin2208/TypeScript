"use strict";
class Person {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
Person.mathPI = Math.PI;
const person1 = new Person("jasmin", 21, ["chess", "travelling"]);
const person2 = new Person("happy", 23, ["chess", "travelling"]);
const person3 = new Person("vraj", 16, ["chess", "travelling"]);
console.log(person1, person2, person3);
console.log(Person.mathPI);
