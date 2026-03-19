//Spread Function
function add(a,b,c){
    return a+b+c;
}
let num = [1,2,3];
console.log(add(...num)); 

function error(...errorcode){
 return errorcode.some(s => s >= 400);
}
let responsecodes = [200, 201, 400];
console.log(error(...responsecodes));

//Return Codes
function getstatus(code){
    if (code>=200 && code<300) return "Success";
    if (code>=400 && code<500) return "Client Error";
    if (code>=500) return "Server Error";
}
console.log(getstatus(500));
console.log(getstatus(200));
console.log(getstatus(401));

//Return Nothing - Undefined

function logtest(name){
    console.log('Running ' + name);
}
logtest("This is a log");

// Return multiple values via array or object

function hello() {
    return [1, 2, 3, 5, 4];
    ///return "Test";
}
console.log(hello());