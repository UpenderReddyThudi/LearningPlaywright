
//1
import {baseurl, formatUpperCaseString} from "./testutil.js";
console.log(baseurl);
console.log(formatUpperCaseString("test"));
//console.log(fname); //Its not 


//2
import {URL as Login_URL, formatTestName} from "./testutil.js";

console.log(Login_URL);
console.log(formatTestName("LOGIN"));

//3 Default Import
import log1 from "./testutil.js";
log1("Start the test case");

//Without Default
import {log2} from "./testutil.js";
log2("Test");