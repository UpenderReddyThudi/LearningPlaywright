console.log(0 == ""); // true (both convert to 0)
console.log("" == 0); // true (both convert to 0)
console.log(0 == false); // true (both convert to 0)  
console.log(false == 0); // true (both convert to 0)  
console.log(0 == "0"); // true (both convert to 0)
console.log("0" == 0); // true (both convert to 0)
console.log(false == "0"); // true (both convert to 0)
console.log("0" == false); // true (both convert to 0)
console.log(false == ""); // true (both convert to 0)
console.log("" == false); // true (both convert to 0)

console.log(false == null); // false (null only equals undefined)
console.log(false == undefined); // false (undefined only equals null)
console.log(null == undefined); // true (null and undefined are considered equal in loose equality)
console.log(null == false); // false (null only equals undefined)
console.log(undefined == false); // false (undefined only equals null)      



//Rule breaker (all below are false)
console.log(null == 0); // false
console.log(null == ""); //false
console.log(null == false); //fasle
console.log(undefined == 0); //false
console.log(undefined == ""); //false
console.log(undefined == false); //false
console.log(NaN == NaN);  //false   

console.log("" === false); //false
console.log("" == false); // true
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(0 === false); // false


// var p = NaN;
// p = p +10;

var a = 0 / 0;
var a1 = 0.0 / 0.0;
console.log(a);


let a2;
console.log(a2);

let a3 = null;
console.log(a3);

let red = "#880808";

let inputAge = "true"; // This could be an empty string, 0, null, undefined, or any falsy value


if (inputAge == true) {
    console.log("Age is empty/invalid");  // WRONG! "0" == false is true
}

let Age =  30; // This could be an empty string, 0, null, undefined, or any falsy value
if (Age == 30) {
    console.log("Age is 30");  // WRONG! "30" == 30 is true
}   
