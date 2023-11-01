class Persons {
    name: string;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies
    }

    introduce(): string {
        return `Hi, I am ${this.name} and I am ${this.age} old. I love ${this.hobbies.join(", ")}`
    }
}

//This is inheritance
class Student extends Persons {
    grade: number;

    constructor(name: string, age: number, hobbies: string[], grade: number) {
        super(name, age, hobbies); //super() is used for get parent class property inherit.
        this.grade = grade;
    }

    introduce(): string {
        return `Hi, I am ${this.name} and I am ${this.age} old.I am in grade ${this.grade}. I love ${this.hobbies.join(", ")}`
    }
}

const persons1: Persons = new Persons("jasmin", 21, ["chess", "travelling"])
const persons2: Persons = new Persons("happy", 23, ["chess", "travelling"])
const persons3: Persons = new Persons("vraj", 16, ["chess", "travelling"])

const student1: Student = new Student("vraj", 16, ["chess", "travelling"], 1)

// console.log(person1, person2, person3)
console.log(student1.introduce())