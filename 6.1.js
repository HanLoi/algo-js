class Circle {
    xPos;
    yPos;
    radius;

    constructor(xPos, yPos, radius) {
    this.xPos = xPos ;
    this.yPos = yPos ;
    this.radius= radius ;
    }
    move(xOffset, yOffset) {
        this.xPos=xOffset
        this.yPos=yOffset
    }

    get surface() {
        return Math.PI *  Math.pow(this.radius,2)
    }
}

var circle = new Circle(5, 5, 5);

console.log(circle.surface)
