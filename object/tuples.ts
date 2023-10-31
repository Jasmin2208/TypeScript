type Personinfo = readonly [string, number, boolean] //after appling readonly, can not push 4th element in array

const personinfo1: Personinfo = ['jasmin', 21, true]
const personinfo2: Personinfo = ['happy', 21, false]

const personInfoCheck = (person: Personinfo) => {
    const [name, age, student] = person
    console.log(`${name} has ${age} old and it has ${student ? "student" : "not student"}`)
}

personInfoCheck(personinfo1)
personInfoCheck(personinfo2)
