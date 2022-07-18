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

//  DATA INPUT AND VALIDATION

const triangleSideA = prompt("Input the length of the first side");
const triangleSideB = prompt("Input the length of the second side");
const triangleSideC = prompt("Input the length of the third side");

let errorText = "";

if (triangleSideA == null || triangleSideB == null || triangleSideC == null) {
    errorText = "Sorry that you do not want to create triangle";
    alert(errorText);
    throw errorText;
}
if (isNaN(triangleSideA) || isNaN(triangleSideB) || isNaN(triangleSideC)) {
    errorText = "Sorry, the length must be valid number";
    alert(errorText);
    throw errorText;
}
if (triangleSideA.trim() === "" || triangleSideB.trim() === "" || triangleSideC.trim() === "") {
    errorText = "Sorry, the length must be non-empty string";
    alert(errorText);
    throw errorText;
}

if (+triangleSideA === 0 || +triangleSideB === 0 || +triangleSideC === 0) {
    errorText = "Sorry, the length must be not zero";
    alert(errorText);
    throw errorText;
}

if (+triangleSideA < 0 || +triangleSideB < 0 || +triangleSideC < 0) {
    errorText = "Sorry, the length must be positive integer number";
    alert(errorText);
    throw errorText;
}

//   DATA PROCESSING

let resultMessage = "";

if (triangleSideA + triangleSideB > triangleSideC) {
    resultMessage = "The triangle can exist";
} else if (triangleSideA + triangleSideC > triangleSideB) {
    resultMessage = "The triangle can exist";
} else if (triangleSideB + triangleSideC > triangleSideA) {
    resultMessage = "The triangle can exist";
} else {
    resultMessage = "The triangle can not exist";
}

// DATA OUTPUT

alert(resultMessage);