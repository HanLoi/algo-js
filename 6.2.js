class Rectangle {
    topLeftXpos = 3;
    topLeftYpos = 3;
    width = 3;
    length = 3;

    constructor (topLeftXpos, topLeftYpos, width, length) {
    this.topLeftXpos=topLeftXpos
    this.topLeftYpos=topLeftYpos
    this.width=width
    this.length=length
    }

    get collides(){
    if (this.topLeftXPos < otherRectangle.leftX + otherRectangle.width &&
        this.topLeftXPos + this.#width > otherRectangle.leftX &&
        this.topLeftYPos < otherRectangle.leftY + otherRectangle.length &&
        this.length + this.topLeftYPos > otherRectangle.leftY)
    }
}

var otherRectangle = new Rectangle (5, 5, 5, 8)

console.log(otherRectangle.collides);