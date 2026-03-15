//There are four types of functions which exist

//Type 1 - No Argument and Return Type 
function greet(){
    console.log("Type 1 - " + "Welcome");
}
greet();


//Type 2 - with Argument, No Return Type
function result(score){
    console.log(score>=60? "Type 2 - " + "Pass" : "Type 2 - " + "Fail");
}
result(61); //Pass
result(59); //Fail

//Type 3 - with Return Type No Arguments.
function responce(){
    return "API Response";
}

let res = responce();
console.log("Type 3 - " + res);

//Type 4 - with arguments and with return 

function sum(a,b){
    return a + b;
}
result = sum(2, 4);
console.log("Type 4 - " + result);

//No Output
function greet(name) {
    return `Hello, ${name}!`;
}
greet("Mahesh");
