// Arrow Function (ES6)
const greet = function (name1) {
        return `Hello, ${name1}!`;
}
console.log(greet("Mahesh"));

// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>


const greet1 = (name2) => `Hello, ${name2}!`;
console.log(greet1("Pramod"));

// Arrow functions generally works whenever you have a single line. 
const double = n => n * 2;
console.log(double(2));

// No params — parens required
const getEnv = () => 'Staging';
console.log(getEnv());

// Suppose we have a multi-line. Can we use arrow function everywhere? 
// Multi-line — needs curly braces + return

let getresult = (score) => {
    if (score>=60) return "PASS";
    return "FAIL";
}
console.log(getresult(50));

//Regular function without Arrow 
let result = function (score){ {
    if (score>=60) return "PASS";
    return "FAIL";
}
}
console.log(result(60));

//Validate API Status Code

//Regula Function - API Status Code

function validatestatuscode(status){
    if (status >= 200 && status<=300){
        console.log(status + " - Request is fine");
    }   
    else{
        console.log(status + " - Request is Invalid");
    } 
    }
    validatestatuscode(201);

//Function Expression - API Status Code
const validatestatuscode_exp = function (status){
    if (status >= 200 && status<=300){
    console.log(status + " - Request is Valid");
    }
    else{
        console.log(status + " - Request is Invalid");
    }
}
validatestatuscode_exp(301);

//Arrow Function - API Status Code

const validatestatuscode_arrow = (status) => {
    if (status >= 200 && status<=300){
    console.log(status + " - Request is Valid");
    }
    else{
        console.log(status + " - Request is Invalid");
    }
}
validatestatuscode_arrow(305);