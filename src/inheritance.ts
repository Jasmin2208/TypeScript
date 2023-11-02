class Persons {
    constructor(public name: string, protected age: number, private hobbies: string[]) { }

    introduce(): string {
        return `Hi, I am ${this.name} and I am ${this.age} old. I love ${this.hobbies.join(", ")}`
    }
}

//This is inheritance
class Student extends Persons {

    constructor(name: string, age: number, hobbies: string[], public grade: number) {
        super(name, age, hobbies); //super() is used for get parent class property inherit.
    }

    introduce(): string {
        return `Hi, I am ${this.name} and I am ${this.age} old.I am in grade ${this.grade}.`
    }
}

const persons1: Persons = new Persons("jasmin", 21, ["chess", "travelling"])
const persons2: Persons = new Persons("happy", 23, ["chess", "travelling"])
const persons3: Persons = new Persons("vraj", 16, ["chess", "travelling"])

const student1: Student = new Student("vraj", 16, ["chess", "travelling"], 1)

console.log(persons1.name)
console.log(student1.introduce())