//typeof operator

//typeof operator can also be used to check the type of a variable before performing operations on it, which can help prevent errors in your code.

let a = 30;
console.log(typeof a); // Output: number - The typeof operator returns 'number' for numeric values.

let b = 'Hello, World!';
console.log(typeof b); // Output: string - The typeof operator returns 'string' for text values.    

let c = true;
console.log(typeof c); // Output: boolean - The typeof operator returns 'boolean' for true/false values.

let d = null;
console.log(typeof d); // Output: object - The typeof operator returns 'object' for null values, which is a known quirk in JavaScript.

let e = undefined;
console.log(typeof e); // Output: undefined - The typeof operator returns 'undefined' for variables that have not been assigned a value.

let f = { name: 'Alice', age: 25 };
console.log(typeof f); // Output: object - The typeof operator returns 'object' for objects, including arrays and null.

let g = [1, 2, 3];
console.log(typeof g); // Output: object - The typeof operator returns 'object' for arrays, as they are a type of object in JavaScript.

let h = function() { return 'Hello'; };
console.log(typeof h); // Output: function - The typeof operator returns 'function' for function expressions and declarations.  
