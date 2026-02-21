// Compasion Operator (will always result in the boolean, true or false)

let x = 10;
let y = 20;

//= Assignment operator
//== Equality operator (loose equality)
console.log(x == y); // output: false - 10 is not equal to 20

//=== Strict equality operator (strict equality)
console.log(x === y); // output: false - 10 is not equal to 20

//!= Inequality operator (loose inequality)
console.log(x != y); // output: true - 10 is not equal to 20

//!== Strict inequality operator (strict inequality)
console.log(x !== y); // output: true - 10 is not equal to 20

// Greater than operator - >
console.log(x > y); // output: false - 10 is not greater than 20    

// Less than operator - <
console.log(x < y); // output: true - 10 is less than 20

// Greater than or equal to operator - >=
console.log(x >= y); // output: false - 10 is not greater than or equal to 20

// Less than or equal to operator - <=
console.log(x <= y); // output: true - 10 is less than or equal to 20

// Comparing different data types
let a = 5;  
let b = '5';
console.log(a == b); // output: true - loose equality allows type coercion
console.log(a === b); // output: false - strict equality does not allow type coercion

console.log(a != b); // output: false - loose inequality allows type coercion
console.log(a !== b); // output: true - strict inequality does not allow type coercion  
//console.log(a !=== b); // Invalid syntax - there is no such operator as !=== in JavaScript



