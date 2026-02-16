// var, let, const

// var - Global Scoped, Function Scoped, can be re-declared and updated

// Global Scope
var a = 10; 
console.log("Global Variable: a = ", a);

// Defination of the function
function printhellovar(){
        console.log("Hello! I am learning variables in Java Script");
        var b = 20; // Local Scope
        console.log("Local Variable: b = ",b);

        if(true){
            var b = 30;
            console.log("Block Variable: b = ",b); // 30
        }

        console.log("Block Variable: b = ",b);
}

// Calling of the function 
printhellovar();


// var allows re-declaration:
var C = 10;
var C = 20; // No error, re-declaration is allowed
console.log("Variable Redeclaration: C = ", C); // 20


// let - Block Scoped, can be updated but not re-declared
let x = 10;
console.log("Global Variable: x = ", x);

function printhellolet(){
        console.log("Hello! I am learning let in Java Script");
        let y = 20;
        console.log("Functioned Scope : y = ",y);  //20

        if(true){
            let y = 30; 
            console.log("Block Scoped: y = ",y); // 30
        }
        console.log("Function Scoped: y = ",y); // 20
}
      
printhellolet();

// let does not allow re-declaration:
let Z = 10; 
console.log("Let Variable : Z = ", Z); // 10

// let Z = 20; // Error: Identifier 'Z' has already been declared

Z = 20; // Allowed, updating the value
console.log("Let variable Update: Z = ", Z); // 20

// const - Block Scoped, cannot be updated or re-declared
const PI = 3.14;
console.log("Constant Variable: PI = ", PI); // 3.14

//PI = 3.14159; // Error: Assignment to constant variable




