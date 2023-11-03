"use strict";
class Persons {
    constructor(name, hobbies) {
        // if (age > 120 || age < 0) {
        //     throw new Error("Age is not valid!");
        this.name = name;
        this.hobbies = hobbies;
        // }
    }
    set age(age) {
        if (age > 120 || age < 0) {
            throw new Error("Age is not valid!");
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("Age is not defined!");
        }
        return this._age;
    }
    introduce() {
        return `Hi, I am ${this.name} and I am ${this._age} old. I love ${this.hobbies.join(", ")}`;
    }
}
const persons1 = new Persons("jasmin", ["chess", "travelling"]);
const persons2 = new Persons("happy", ["chess", "travelling"]);
const persons3 = new Persons("vraj", ["chess", "travelling"]);
persons1.age = 12;
console.log(persons1);
console.log(persons1.age);
console.log(persons1.introduce());
