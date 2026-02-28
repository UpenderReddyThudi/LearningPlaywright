/*
As a performance tester, you collect API response times in milliseconds. 
Write a JavaScript program using a while loop that analyzes an array of response 
times and prints a performance report with min, max, average, and how many 
responses breached the SLA threshold (> 500ms). Use comparison operators 
for min/max tracking.
*/

let responseTimes = [120, 230, 450, 510, 180, 620]; 
let SLA_LIMIT = 500;
let i = 0;
var limit = 0;
var minval = responseTimes[0];
var maxval = responseTimes[0];


while(i<responseTimes.length){
    var res = responseTimes[i];
    
    if (res==minval){
        var minval = res;
    }
    else{
        var maxval = res;
    }
    if (res>SLA_LIMIT){
    var limit = limit + 1;
    }
   i++;
}
console.log("Total Requests: ",responseTimes.length + " MIN Response ", minval + 
    "ms" + " Max Response ", maxval + "ms" + " SLA Breaches: ", limit +
    " --> Overall Status - SLA Brached");

