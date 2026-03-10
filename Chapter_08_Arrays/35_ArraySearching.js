let results = ["PASS", "FAIL", "ABSENT", "WITHHELD","FAIL", "PASS"];

// indexOf — Returns first index, or -1 if not found
console.log(results.indexOf("FAIL"));
console.log(results.indexOf("WITHHELD"));

// lastIndexOf — searches from the end
console.log(results.lastIndexOf("PASS"));

//Includes returns boolean
console.log(results.includes("PASS"));
console.log(results.includes("pass"));

// find — Returns first matching element

let num = [10,20,30,40,50];
console.log(num.find(x => x>20));
console.log(num.findIndex(x => x>30));

// findlast — Returns last matching element

let number = [10,20,30,40,50];
console.log(number.findLast(x => x>20));
console.log(number.findLastIndex(x => x>30));





