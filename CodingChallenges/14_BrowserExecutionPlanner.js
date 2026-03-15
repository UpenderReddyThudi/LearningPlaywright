/*
You have an array of all supported browsers and another array of temporarily blocked
browsers. Write a function that returns the runnable browsers, the blocked browsers,
and a printable execution plan string such as `"Run on: chromium, 
webkit | Skip: firefox"`.
*/

let allBrowsers = ["chromium", "firefox", "webkit"];
let blockedBrowsers = ["firefox"];

function run(a, b){
    
    let runnable = a.filter(s => s !=b);
    return (runnable);  
    }

result = run(allBrowsers, blockedBrowsers);
console.log("Runnable: ", result, ",","Blocked: ", blockedBrowsers,  ",",
            "Plan: ", 'Run On: ', result + " | " + "Skip: " + blockedBrowsers);

