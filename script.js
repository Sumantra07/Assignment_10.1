/*
 *
 * Program to use ES6 class functionalities
 * 
 * 
 */

// class created
class Rectangle
{
	constructor(length,breadth)
	{
		this.length = length;
		this.breadth = breadth;
	}
	// method to calculate area
	findArea()
	{
		return this.length*this.breadth;
	}
}
// creating object of the class
var temp = new Rectangle(15,10);
console.log("The area is " + temp.findArea());
