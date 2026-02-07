//complete this code
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
		console.log(this._width * this._height);
	}


	
}

class Square extends Rectangle {
	constructor(side){
		super(side, side);
	}

	getPerimeter(){
		console.log(4*this._width)
}
}

let obj1 = new Rectangle(5, 6);
obj1.getArea();

let obj2 = new Square(4);
obj1.getPerimeter();

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
