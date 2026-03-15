/*Normalize Locator Error Messages
Given a raw Playwright error message string, write a function that trims 
extra spaces, converts the message to lowercase, collapses multiple spaces 
into a single space, and prints a category. Use `TIMEOUT` if the normalized 
message contains `"timeout"`, `LOCATOR` if it contains `"locator"`, 
otherwise `GENERAL`.
*/

let rawMessage = " Locator  not  found  after  TIMEOUT ";
let Category = 'GENERAL';

function normal(sentance){
    let Normalized = sentance.toLowerCase().trim().replace(/\s+/g, ' ');
    return Normalized;
}

let result = normal(rawMessage);
console.log(result);

if (result.includes('timeout')){
    console.log("Category: TIMEOUT");
}
else if(result.includes('locator')) {
    console.log("Category: LOCATOR");
}
else{
    console.log("Category: GENERAL");
}
