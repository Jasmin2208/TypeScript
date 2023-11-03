"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    displayArea() {
        console.log(`This is a color ${this.color} and redius ${this.radius}`);
    }
}
const circle = new Circle("red", 3);
circle.displayArea();
console.log("Area------>", circle.calculateArea());
