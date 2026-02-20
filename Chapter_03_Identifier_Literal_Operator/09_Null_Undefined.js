let value = null; // This variable is explicitly assigned the value 'null', indicating the absence of any object value.
console.log(value); // Output: null

let uninitialized; // This variable is declared but not assigned any value, so it is 'undefined'.
console.log(uninitialized); // Output: undefined

let explicitUndefined = undefined; // This variable is explicitly assigned the value 'undefined', which is generally not recommended.
console.log(explicitUndefined); // Output: undefined

let isNull = (value === null); // true, because 'value' is null
let isUndefined = (uninitialized === undefined); // true, because 'uninitialized' is undefined
console.log(isNull, isUndefined); // Output: true true

// It's important to note that 'null' and 'undefined' are distinct types in JavaScript. 
// 'null' is an intentional absence of any object value, while 'undefined' indicates
//  that a variable has been declared but not assigned a value.

console.log(typeof null); // Output: "object" (this is a quirk in JavaScript)
console.log(typeof undefined); // Output: "undefined"   





