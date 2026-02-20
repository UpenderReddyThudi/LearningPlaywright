//=,== Equality and === TryEqual Operators in JavaScript
// The == operator checks for loose equality, meaning it performs type coercion if the operands are of different types. For example:
console.log(5 == '5'); // Output: true (number 5 is coerced to string '5')
console.log(0 == false); // Output: true (0 is coerced to false)
console.log(null == undefined); // Output: true (null and undefined are considered equal)
console.log(null == null); // Output: true
console.log(undefined == undefined); // Output: true  


// The === operator checks for strict equality, meaning it does not perform type coercion and requires both the value and the type to be the same. For example:
console.log(5 === '5'); // Output: false (number 5 is not the same type as string '5')
console.log(0 === false); // Output: false (0 is not the same type as false)
console.log(null === undefined); // Output: false (null and undefined are not the same type)   
console.log(null === null); // Output: true
console.log(undefined === undefined); // Output: true 

// In general, it is recommended to use the === operator for comparisons in JavaScript to avoid unexpected results due to type coercion. The == operator can lead to bugs if not used carefully, as it may produce true for values that are not actually equal in type or value.    

let a = 5;
let b = 5; 
console.log(a == b); // Output: true (loose equality, type coercion occurs)
console.log(a === b); // Output: true (strict equality, no type coercion)

let c = '5';
console.log(a == c); // Output: true (loose equality, type coercion occurs)
console.log(a === c); // Output: false (strict equality, no type coercion)

let d = 0;
console.log(d == false); // Output: true (loose equality, type coercion occurs)
console.log(d === false); // Output: false (strict equality, no type coercion)

let e = null;
let f = undefined;
console.log(e == f); // Output: true (loose equality, null and undefined are considered equal)
console.log(e === f); // Output: false (strict equality, null and undefined are not the same type)  

let g = null;
console.log(e == g); // Output: true (loose equality, null is equal to null)
console.log(e === g); // Output: true (strict equality, null is the same type and value as null)    

let h = undefined;
console.log(f == h); // Output: true (loose equality, undefined is equal to undefined)
console.log(f === h); // Output: true (strict equality, undefined is the same type and value as undefined)  

let i = 0;
let j = false;
console.log(i == j); // Output: true (loose equality, 0 is coerced to false)
console.log(i === j); // Output: false (strict equality, 0 is not the same type as false)     

let k = '';
let l = false;
console.log(k == l); // Output: true (loose equality, empty string is coerced to false)
console.log(k === l); // Output: false (strict equality, empty string is not the same type as false)    

let m = '0';
let n = false;
console.log(m == n); // Output: true (loose equality, string '0' is coerced to false)
console.log(m === n); // Output: false (strict equality, string '0' is not the same type as false)  

let o = [];
let p = false;
console.log(o == p); // Output: true (loose equality, empty array is coerced to false)
console.log(o === p); // Output: false (strict equality, empty array is not the same type as false) 

let q = {};
let r = false;
console.log(q == r); // Output: true (loose equality, empty object is coerced to false)
console.log(q === r); // Output: false (strict equality, empty object is not the same type as false)

let s = 0;
let t = '';
console.log(s == t); // Output: true (loose equality, 0 is coerced to empty string)
console.log(s === t); // Output: false (strict equality, 0 is not the same type as empty string)    

let u = null;
let v = 0;
console.log(u == v); // Output: false (loose equality, null is not coerced to 0)
console.log(u === v); // Output: false (strict equality, null is not the same type as 0)    

let w = undefined;
let x = 0;
console.log(w == x); // Output: false (loose equality, undefined is not coerced to 0)
console.log(w === x); // Output: false (strict equality, undefined is not the same type as 0)

let y = NaN;
console.log(y == NaN); // Output: false (NaN is not equal to anything, including itself)
console.log(y === NaN); // Output: false (NaN is not equal to anything, including itself)   

let z = 0/0;
console.log(z == NaN); // Output: false (0/0 results in NaN, which is not equal to anything, including itself)
console.log(z === NaN); // Output: false (0/0 results in NaN, which is not equal to anything, including itself)

let aa = 1;
let bb = '1';
console.log(aa == bb); // Output: true (loose equality, type coercion occurs)
console.log(aa === bb); // Output: false (strict equality, no type coercion)

let cc = true;
let dd = 1;
console.log(cc == dd); // Output: true (loose equality, true is coerced to 1)
console.log(cc === dd); // Output: false (strict equality, true is not the same type as 1)

let ee = false;
let ff = 0;
console.log(ee == ff); // Output: true (loose equality, false is coerced to 0)
console.log(ee === ff); // Output: false (strict equality, false is not the same type as 0)

let gg = 'true';
let hh = true;
console.log(gg == hh); // Output: true (loose equality, string 'true' is coerced to boolean true)
console.log(gg === hh); // Output: false (strict equality, string 'true' is not the same type as boolean true)

let ii = 'false';
let jj = false;
console.log(ii == jj); // Output: true (loose equality, string 'false' is coerced to boolean false)
console.log(ii === jj); // Output: false (strict equality, string 'false' is not the same type as boolean false)    

let kk = null;
let ll = undefined;
console.log(kk == ll); // Output: true (loose equality, null and undefined are considered equal)
console.log(kk === ll); // Output: false (strict equality, null and undefined are not the same type)

let mm = 0;
let nn = null;
console.log(mm == nn); // Output: false (loose equality, 0 is not coerced to null)
console.log(mm === nn); // Output: false (strict equality, 0 is not the same type as null)

let MyName = "Upender Reddy";
let myname = "Upender Reddy";
console.log(MyName == myname); // Output: true (loose equality, both strings are the same)
console.log(MyName === myname); // Output: true (strict equality, both strings are the same)

let MyAge = 30;
let myage = 30;
console.log(MyAge == myage); // Output: true (loose equality, both numbers are the same)
console.log(MyAge === myage); // Output: true (strict equality, both numbers are the same)

let isStudent = true;
let isstudent = true;
console.log(isStudent == isstudent); // Output: true (loose equality, both booleans are the same)
console.log(isStudent === isstudent); // Output: true (strict equality, both booleans are the same)

let Mygender = 'Male';
let mygender = "Male";
console.log(Mygender == mygender); // Output: true (loose equality, both strings are the same)
console.log(Mygender === mygender); // Output: true (strict equality, both strings are the same)

let MyCity = "Hyderabad";
let Pincode = 500079    ;
console.log(MyCity == Pincode); // Output: false (loose equality, string and number are not equal even with type coercion)
console.log(MyCity === Pincode); // Output: false (strict equality, string and number are not the same type or value)

let MyCountry = "India";
let MyState = "Telangana";
console.log(MyCountry == MyState); // Output: false (loose equality, both strings are different)
console.log(MyCountry === MyState); // Output: false (strict equality, both strings are different)

let MyNumber = 100;
let MyStringNumber = "100";
console.log(MyNumber == MyStringNumber); // Output: true (loose equality, number 100 is coerced to string '100')
console.log(MyNumber === MyStringNumber); // Output: false (strict equality, number 100 is not the same type as string '100')

