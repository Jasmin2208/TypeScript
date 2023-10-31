const students: string[] = ["jasmin", "happy", "yash"]

students.push("parthil")
students.push("Ishan")
console.log("students1----------->", students)

students.pop()
console.log("students2----------->", students)

// for  loop
for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log("student in for loop---------->", student)
}

// for of loop
for (const student of students) {
    console.log("student in for of loop---------->", student)
}

//for each loop
students.forEach(student => console.log("student in forEach loop---->",student));