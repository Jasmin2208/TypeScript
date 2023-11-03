type person = {
    name: string,
    age: number
}

type student = {
    grade: number,
    class: number
}

type studentDetail = person & student

const s1: studentDetail = {
    name: "jasmin",
    age: 21,
    grade: 1,
    class: 15
}

console.log(s1)

interface persons {
    name:string,
    age: number
}

interface teacher {
    subject: string
}

interface teacherDetail extends persons, teacher{}

const teacher1: teacherDetail = {
    name: "Komal",
    age: 31,
    subject: "Math"
}

console.log(teacher1)

class schoolInfo implements teacherDetail{
    constructor(public name: string, public age: number, public subject: string) {}
    public static teacher1 = `teacher name is komal`
}

const teacher2 = new schoolInfo("jay", 22, "phy")
console.log(teacher2)
console.log(schoolInfo.teacher1)