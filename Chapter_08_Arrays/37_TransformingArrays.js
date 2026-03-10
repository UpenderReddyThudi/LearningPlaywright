let scores = [50,60,70,80,90,100];

//Map - Transfor every element return new array
let grades = scores.map(s => s>=60 ? "Pass" : "Fail");
console.log(grades);

//Filter - Keeps elements that match the condition
let result = scores.filter(s => s>=60);
console.log(result);

//reduce - accumulates to a single value
let total = scores.reduce((sum, s) => sum + s, 0);
console.log(total);

// flat — flattens nested arrays
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());