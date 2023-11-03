class Persons {
    private _age: number | undefined;
    constructor(public name: string, public hobbies: string[]) {
        // if (age > 120 || age < 0) {
        //     throw new Error("Age is not valid!");

        // }
    }

    public set age(age: number) {
        if (age > 120 || age < 0) {
            throw new Error("Age is not valid!");
        }
        this._age = age
    }

    public get age(){
        if(this._age === undefined){
            throw new Error("Age is not defined!");
        }
        return this._age
    }

    introduce(): string {
        return `Hi, I am ${this.name} and I am ${this._age} old. I love ${this.hobbies.join(", ")}`
    }
}


const persons1: Persons = new Persons("jasmin", ["chess", "travelling"])
const persons2: Persons = new Persons("happy", ["chess", "travelling"])
const persons3: Persons = new Persons("vraj", ["chess", "travelling"])

persons1.age = 12

console.log(persons1)
console.log(persons1.age);
console.log(persons1.introduce())