const inputUnions = (value: string | number | boolean): string | number | boolean => {
    if (typeof value === 'string') {
        console.log("string--------->", value);
        return value;
    } else if (typeof value === 'number') {
        console.log("number--------->", value);
        return value;
    } else if (typeof value === 'boolean') {
        console.log("boolean--------->", value);
        return value;
    } else {
        throw new Error("Invalid Value");
    }
}

inputUnions("jasmin");
inputUnions(2);

