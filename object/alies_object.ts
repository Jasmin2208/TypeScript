type People = {
    name: string,
    age: number,
    isStudent: boolean,
    class?: string, // option property
    address: {
        city: string,
        state: string
        country: string,
        PIN: number
    }
}

const people1: People = {
    name: "Jasmin Korat",
    age: 21,
    isStudent: true,
    address: {
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India",
        PIN: 382350
    }
}

const people2: People = {
    name: "Happy Korat",
    age: 23,
    isStudent: true,
    address: {
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India",
        PIN: 382350
    }
}

const people3: People = {
    name: "Vraj Korat",
    age: 16,
    isStudent: true,
    address: {
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India",
        PIN: 382350
    }
}

function peopleDetail(people: People) {
    console.log(`Student name is ${people.name}.`)
}

peopleDetail(people1)

console.log([people1, people2, people3])