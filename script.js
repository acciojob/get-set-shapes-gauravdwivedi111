// complete this code
class Rectangle {
	constructor(width, height){
		this._width = width;
		this._height = height;
	}

	get width(){
		return this._width;
	}

	get height(){
		return this._height;
	}

	getArea(){
		return this._width * this._height;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side, side);
	}

	getPerimeter(){
		return 4 * this.width;
	}
}

// OUTPUT DEMO (you said: never write code without output)
let obj1 = new Rectangle(5, 6);
console.log(obj1.getArea()); // 30

let obj2 = new Square(4);
console.log(obj2.getArea());      // 16
console.log(obj2.getPerimeter()); // 16

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
