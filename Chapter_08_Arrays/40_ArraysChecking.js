// Check whether its array or not

let s = Array.isArray([1,2,3]);
console.log(s);

let z = Array.isArray(["Test"]);
console.log(z);

let m = Array.isArray([]);
console.log(m);

let n =Array.isArray([1,"Test", false]);
console.log(n);

//EVERY and SOME Validation

let a = [20,30,40,50,60];

console.log(a.every(s => s>50));
console.log(a.some(s => s>50));
