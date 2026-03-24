// Primitive data types - call by value
// Primitive, number, string, boolean, null, undefined

let a = 10;
let b = a;
console.log(b);
b = 99;
console.log(b);
console.log(a);

// Objects — copied by REFERENCE , call by ref. 
// Reference - object, array, function

let obj1 = {Val: 10};
let obj2 = obj1;
console.log(obj2);
obj2.Val = 20;
console.log(obj2);
console.log(obj1);


//Object Property Description
let obj = {Age: 25};
console.log(Object.getOwnPropertyDescriptor(obj, "Age" ));

