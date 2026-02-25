console.log("Hello World");

//Sum of 2 numbers
function sum(a, b) {
    const sum = a + b;
    console.log('Sum is', sum);
}

sum(1, 2);

//-------------------------------------

//Find Area of Rectangle
function calculateArea(length, width) {
    if(length <= 0) {
        throw new RangeError("Length should be a positive number");
    } 

    if(width <= 0) {
        throw new RangeError("Width should be a positive number");
    } 

    const area = length * width;
    console.log("Area of a rectangle is", area);
}

calculateArea(2, 3);