//Array Creation

let a = [];
console.log(a); //Empty array []

let arr = [10,20,30,40,50];
console.log(arr.length);
console.log(arr[0]); //10
console.log(arr[2]); //30
console.log(arr[5]); //undefined

//Array can hold anytype of values
let mix = [10,"Apple",true,null];
console.log(mix[0]);
console.log(mix[2]);

//Array literal
let browsers = ["Chrome","Firefox","Opera"];

//Array Constructores
//new Array
let TW2025 = new Array(3);
console.log(TW2025);

let TW2026 = new Array(50,70,90);
console.log(TW2026);
console.log(TW2026[0]);

//Array.of
let testscore = Array.of(10,20,30,40);
console.log(testscore);
console.log(testscore[2]);

//Array.from
let char = Array.from("Hello");
console.log(char);

//Access Modifiers

let statuses = ["Pass","Fail","Withheld"];
console.log(statuses);
console.log(statuses[2]);

console.log(statuses.at(0));
console.log(statuses.at(-1));

console.log(statuses.at(1));
console.log(statuses.at(-2));

console.log(statuses.length);