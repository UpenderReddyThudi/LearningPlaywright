// Default Parameters

function retry(testname, max = 3, wait = 1000){
    console.log('Retry ' + testname + ' Upto ' + max + " Times " + wait +"ms" + " Delay");
}
retry("Login");
retry("Login", 2);
retry("Login", 4, 500);

//RestParameters
function add(Name, ...results){
    console.log(Name , results);
}
console.log("Login", "Pass","Fail","Pass");