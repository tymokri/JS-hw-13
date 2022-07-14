"use strict";

// Task 1

let x = 10;
let y = 7;

x > y ? console.log("x більше, ніж y") : console.log("x не більше, ніж y");

// Task 2

let num = +prompt("Input number");

if( num % 2 === 0) {
    console.log("Input " + num + " is even");
} else {
    console.log("Input " + num + " is odd");
}

// Task 3

let resultMessage = "";

let num = +prompt("Input the even number");

resultMessage += `Number of digits ${String(num).length}`;

resultMessage += "\n";

if( num % 2 === 0) {
    resultMessage += "Input " + num + " is even";
} else {
    resultMessage += "Input " + num + " is odd";
}

alert(resultMessage);

// Task 4

let num1 = +prompt("Input the first number");
let num2 = +prompt("Input the second number");
let num3 = +prompt("Input the third number");

let maxNumber = num1;

if( num2 > maxNumber ) {
    maxNumber = num2;
}
if( num3 > maxNumber ) {
    maxNumber = num3;
}

alert(`The biggest number is ${maxNumber}`);

// Task 5

let triangleSideA = +prompt("Input the length of the first side");
let triangleSideB = +prompt("Input the length of the second side");
let triangleSideC = +prompt("Input the length of the third side");

if( triangleSideA + triangleSideC > triangleSideB) {
    console.log("The triangle can exist");
} else {
    console.log("The triangle can not exist");
}