// var, let, const

// var - Global Scoped, Function Scoped, can be re-declared and updated

// Global Scope
var a = 10; 
console.log("Var Global Variable: a = ", a);

// Defination of the function
function printhellovar(){
        console.log("Hello! I am learning var in Java Script");
        var b = 20; // Local Scope
        console.log("Var Outer Black: b = ",b); // 20, var is function scoped, so it is accessible within the entire function

        if(true){
            var b = 30;
            console.log("Var Inner Block: b = ",b); // 30, var is function scoped, so it does not create a new scope inside the block
        }

        console.log("Var Inner Block: b = ",b); //30, var is function scoped, so it does not create a new scope inside the block
}

// Calling of the function 
printhellovar();


// var allows re-declaration:
var C = 10;
var C = 20; // No error, re-declaration is allowed
console.log("Variable Redeclaration: C = ", C); // 20


// let - Block Scoped, can be updated but not re-declared
let x = 10;
console.log("Let Global Variable: x = ", x);

function printhellolet(){
        console.log("Hello! I am learning let in Java Script");
        let y = 20;
        console.log("Let Outer Block: y = ",y);  //20 let is block scoped, so it is accessible only within the block it is defined in

        if(true){
            let y = 30; 
            console.log("Let Inner Block: y = ",y); // 30 // let is block scoped, so it creates a new scope inside the block, and this y is different from the y defined in the outer block
        }
        console.log("Let outer Block: y = ",y); // 20 // let is block scoped, so it is accessible only within the block it is defined in, and this y is the one defined in the outer block, not the one defined in the inner block
}
      
printhellolet();

// let does not allow re-declaration:
let Z = 10; 
console.log("Let Initial Value : Z = ", Z); // 10

// let Z = 20; // Error: Identifier 'Z' has already been declared

Z = 20; // Allowed, updating the value
console.log("Let Updated Value: Z = ", Z); // 20

// const - Block Scoped, cannot be updated or re-declared
const PI = 3.14;
console.log("Constant Variable: PI = ", PI); // 3.14

//PI = 3.14159; // Error: Assignment to constant variable




