class Person {
    name: string;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies
    }

    public static mathPI = Math.PI

}

const person1: Person = new Person("jasmin", 21, ["chess", "travelling"])
const person2: Person = new Person("happy", 23, ["chess", "travelling"])
const person3: Person = new Person("vraj", 16, ["chess", "travelling"])

console.log(person1, person2, person3)
console.log(Person.mathPI)