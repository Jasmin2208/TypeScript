type Teacher = {
    name: string,
    age: number,
    subject?: string,
    greet: (country: string) => string,
    // (state: string): string
}

const teacher1: Teacher = {
    name: "Komal Patel",
    age: 29,
    greet: (country): string => `Country---------> ${country}`,
    // state: (state: string) => `State---------> ${state}`
}

console.log(teacher1.greet("BHARAT"))
// console.log(teacher1("Gujarat"));
