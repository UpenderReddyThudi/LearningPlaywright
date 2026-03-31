//Callback without parameters
function greet(name, callback){
    console.log("Welcome - " + name);
    callback();
}

greet("Team", function(){
    console.log("Lets begin testing");
});

//Callback with Parameters
function runtest(testname, callback){
    let status = 'PASS';
    console.log("Print the Test Result");
    callback(testname, status);
}

runtest("Login Test", function(name, result){
    console.log(name+" - "+ result);

});

// Sync Callback — forEach
let bugs = ["UI glitch", "API timeout", "Wrong redirect"];

bugs.forEach(function (bug, index) {
       console.log("Bug#" + (index + 1) + ": " + bug);
});

//console.log("Total bugs: " + bugs.length);

