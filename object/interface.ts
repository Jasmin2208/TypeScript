interface User {
    name: string;
    age: number;
    isStudent: boolean;
    class?: string; // option property
    address: {
        city: string;
        state: string;
        country: string;
        PIN: number;
    }
}

const user: User = {
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

console.log(user)
