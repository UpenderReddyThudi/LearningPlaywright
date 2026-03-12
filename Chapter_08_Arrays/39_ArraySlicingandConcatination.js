//Array Slicing
//slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically take from start to end.

let arr = [10,20,30,40,50,60];

console.log(arr.slice(2)); // Displays Index 2 to last 
console.log(arr.slice(2,5)); // Displays Index 2 to end-1
console.log(arr.slice(-1)); //Display last 1 item - 60
console.log(arr.slice(-2)); //Display last 2 items - 60,50
console.log(arr.slice(0)); // Display from Index 0 to last
console.log(arr.slice(-5)); //Display 60 to 20
console.log(arr.slice(-0)); //Display all from last to first
console.log(arr);

//Array concatination

let a = [1,2];
let b = [3,4];

let c = a.concat(b);
console.log(c);

//Moderen Way of concatination(...)

let d = [...a, ...b];
console.log(d);

//Array concatination using join
let s = ["pass", "fail", "skip"].join(" || ");
console.log(s);
