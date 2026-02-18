//var Hoisting
console.log(a); //undefined
var a = 10;
console.log(a); //10 

//Function Hoisting - variable and function declarations are hoisted, but not the assignments
testscore(); //100
function testscore() {
    console.log(d); //undefined
    var d = 100;
    console.log(d); //100
}  

//let Hoisting
//console.log(b); //ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); //20   

//const Hoisting
//console.log(c); //ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log(c); //30   



//Temporal Dead Zone (TDZ) - The period between the start of the block and the point where the variable is declared and initialized

T20score(); 

function T20score() {
    //console.log(score); //ReferenceError: Cannot access 'score' before initialization
    let score = 50;
    console.log(score); //50
}   


onedayscore(); 

function onedayscore() {
    //console.log(score); //ReferenceError: Cannot access 'score' before initialization
    const score = 75;
    console.log(score); //75
}  