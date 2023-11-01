type personIntro = {
    name: string,
    age: number
}

type employeeIntro = {
    emp_id: number,
    department: string
}

type employeeDetail = personIntro & employeeIntro

type employeeInfo = personIntro | employeeIntro

const employee: employeeDetail = {
    name: "jasmin korat",
    age: 21,
    emp_id: 1221,
    department: "Web Developer"
}
console.log("employee----------->",  employee)

const emp: employeeInfo = {
    name: "jasmin korat",
    age: 21
}
console.log("emp----------->",  emp)
