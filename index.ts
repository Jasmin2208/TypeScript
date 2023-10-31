function greet(name: string, id: number): string {
    return `Welcome, ${name} your id is ${id}.`
}

const greetFunction = greet("jasmin", 22)
console.log(greetFunction)

const isPalindrom = (palindrom: string): boolean => {
    const myPalindrom = palindrom.split("").reverse().join("")
    return palindrom === myPalindrom
}

const palindrom = isPalindrom("12321")
console.log(palindrom)