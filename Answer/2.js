//Number is Odd or Even
function checkIfEvenOrOdd(a) {
    const remainder = a % 2;

    if(remainder === 0) {
        return "even"
    }
    else {
        return "odd";
    }
}

function checkIfEvenOrOdd2(a) {
    return a % 2 === 0 ? "even" : "odd";
}

console.log(checkIfEvenOrOdd(13));
console.log(checkIfEvenOrOdd(-2));

//-------------------------------------

//Find Smallest of Three
function smallestOfThree(a, b, c) {
    if(a < b && a < c){
        return a;
    }
    else if(b < a && b < c) {
        return b;
    }
    else if(c < a && c < b) {
        return c;
    }

    return a;
}

function smallestOfThree2(a, b, c) {
    let smallestNumber = a;
    if(b < smallestNumber) {
        smallestNumber = b;
    }
    if(c < smallestNumber) {
        smallestNumber = c;
    }

    return smallestNumber;
}

console.log("smallestOfThree(3, 1, 6)", smallestOfThree(3, 1, 6));
console.log("smallestOfThree(-1, -6, 9)", smallestOfThree(-1, -6, 9));

console.log("smallestOfThree2(3, 1, 6)", smallestOfThree2(3, 1, 6));
console.log("smallestOfThree2(-1, -6, 9)", smallestOfThree2(-1, -6, 9));


//-------------------------------------

