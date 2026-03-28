// //MD Pattern Right
// //*
// //**
// //***

let n = 3;

for (let i=1; i<=n; i++){
    let row = " ";
    for (let j=1; j<=i; j++){
        row += "*";
    }
    console.log(row.trim());
}

console.log("------------");
console.log();

// //MD Pattern Left
// //*****
// //****
// //***
// //**
// //*

// let m = 5;

// for (let i=m; i<=m; i--){
//     let row = " ";
//     for (let j=1; j<=i; j++){
//         row += "*";
//     }
//     console.log(row.trim());
// }

// console.log("------------");
// console.log();

//Pyramid Pattern
//   *
//  ***
// ***** 

let o = 5;
for (let i = 1; i <= o; i++) {
    let row = "";
    for (let j = 1; j <= o - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= 2 * (i - 1); j++) {
        row += "*";
    }
    console.log(row);
}