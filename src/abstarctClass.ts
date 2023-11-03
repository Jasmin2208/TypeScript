abstract class Shape {
    constructor(protected color: string) { }

    abstract calculateArea(): number
    abstract displayArea(): void
}

class Circle extends Shape {
    constructor(protected color: string, protected radius: number) {
        super(color)
    }

    public calculateArea(): number {
        return Math.PI * this.radius * this.radius
    }

    displayArea(): void {
        console.log(`This is a color ${this.color} and redius ${this.radius}`)
    }
}

const circle = new Circle("red", 3)

circle.displayArea()
console.log("Area------>", circle.calculateArea())
