//Logical Operators
let a = true;
let b = false;

// Logical AND operator - &&
console.log(a && b); // output: false - both a and b must be true for the result to be true

// Logical OR operator - ||
console.log(a || b); // output: true - at least one of a or b must be true for the result to be true

// Logical NOT operator - !
console.log(!a); // output: false - the NOT operator negates the value of a
console.log(!b); // output: true - the NOT operator negates the value of b

// Combining logical operators
console.log((a && b) || (!a && !b)); // output: false - this expression evaluates to false because both a and b are not true, and both !a and !b are not true either
console.log((a || b) && !(a && b)); // output: true - this expression evaluates to true because a is true, and !(a && b) is also true since a and b  are not both true   