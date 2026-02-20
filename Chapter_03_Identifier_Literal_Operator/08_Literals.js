//literals Allows us to represent fixed values in our code. They can be of various types, including strings, numbers, booleans, null, and undefined. Literals are essential for defining constants and initializing variables with specific values in JavaScript.

let myfirstname = "Upender Reddy"; // This is a string literal assigned to the variable 'myfirstname'.
let mylastname = 'Thudi'; // This is a string literal assigned to the variable 'mylastname'.
let isclod = true; // This is a boolean literal assigned to the variable 'isclod'.
let value = 10; // This is a numeric literal assigned to the variable 'value'.
let nullValue = null; // This is a null literal assigned to the variable 'nullValue'.
let undefinedValue; // This variable is declared but not assigned, so it has the value 'undefined'.


let count = 42;
let negative = -100;
let zero = 0;
console.log(count, negative, zero);

let h = 0xFF;
let color_hex = 0xFF0000;
console.log(h,color_hex);

let octal = 0o77;
let pi = 3.14159;
console.log(octal, pi);

let million = 1e6;
let tiny = 1.5e-4;
console.log(million, tiny);

// Single quotes
let single = 'Hello World';
let withDouble = 'She said "hi"';
console.log(single, withDouble);

// let name = 'It's a test';

// Double quotes
let double = "Hello World";
let withSingle = "It's a test";
console.log(double, withSingle);

// Template literal 
let first_name = "Upender Reddy";
let full_name = `Hi,${first_name} Thudi`;
console.log(first_name,full_name);

let math = `2+2=${2 + 2}`;
console.log(math)

// I want to store path of the file.
let path = "C:\\users\\Upenderd\\file.txt";
// Single slash is not allowed. We have to use double slash. 
console.log(path);

// ---> // - URLs
// ---> \\ - Path

let address = "https://app.vwo.com/#login";
console.log(address)

// String literal edge cases
let space = " ";                         // single space (truthy!)
let zero1 = "0";                        // string zero (truthy!)
console.log(space, zero1);

let isLoggedIn = true;
let hasPermission = false;
console.log(isLoggedIn, hasPermission);

let emptyString = "";                 // empty string (falsy)