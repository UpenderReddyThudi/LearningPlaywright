// 1D array,list - duplicate element
let results = ["pass", "fail", "pass"];


// 2D — array of arrays (like a table/grid)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(matrix[i][j]);
//     }
// }

console.log(matrix[1][1]);
console.log(matrix[2][1]);

console.log(matrix.length); //No of rows
console.log(matrix[1].length); //No of columns in row 1
console.log(matrix[matrix.length-1][matrix[0].length-1]); //Last element


let testmatrix = [
        ["Login", "PASS", 200],
        ["Checkout", "FAIL", 401],
        ["Payment", "Fail", 500]
    ];

for (let i = 0; i<testmatrix.length; i++){
    for (let j = 0; j<testmatrix[0].length; j++){
        console.log(testmatrix[i][j]);
    }
    console.log();
}

//For in/off
for (let row of testmatrix) {
   for (let cell of row) {
    process.stdout.write(cell + " ");
   }
   console.log();
}

console.log("*****************");

// forEach
testmatrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " "));
    console.log();
});