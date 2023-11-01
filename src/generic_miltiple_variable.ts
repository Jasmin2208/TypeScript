function add<T, U>(a: T, b: U, c: boolean) {
    console.log("a----->", a)
    console.log("b----->", b)
    console.log("c----->", c)
}

const result1 = add(10, "jasmin", true)
const result2 = add("jasmin", 10, false)