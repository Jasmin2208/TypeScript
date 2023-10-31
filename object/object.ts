const person: {
    name: string,
    age: number,
    isStudent: boolean,
    address: {
        city: string,
        state: string
        country: string,
        PIN: number
    }
} = {
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

console.log("person-->", person)