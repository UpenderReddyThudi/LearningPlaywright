/*
After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). 
Write a JavaScript program using a for loop that counts how many tests passed, 
failed, and were skipped. Print a test report with total tests, counts, 
pass rate percentage, and a verdict (all passed → ready for release,
 ≤2 failures → review, >2 failures → block release).
*/

let TestResults = ["Pass", "Pass", "Fail", "Pass", "Skip", "Pass", "Fail", "Pass"];
let count = TestResults.length;
let Passcount = 0;
let Failcount = 0;
let Skipcount = 0;

for (i=0; i<count; i++){
     if(TestResults[i]=="Pass"){
       Passcount = Passcount+1;
    }
    else if(TestResults[i]=="Fail"){
       Failcount = Failcount+1;
    }
    else if(TestResults[i]=="Skip"){
       Skipcount = Skipcount+1;
    }
    else{
        console.log("Invalid TestResult");
    }
}
console.log("Total Tests: " +count+ ", Passed: " + Passcount + ", Failed: " + 
             Failcount + ", Skipped: " + Skipcount);

var PassRate = Passcount / count * 100; 
console.log(PassRate);           
if (Passcount == count){
    console.log("PassRate: " + PassRate + " - VERDICT: All Passed - Ready For Release");
}
else if(Failcount<=2){
    console.log("PassRate: " + PassRate + " - VERDICT: Minor failures. Review before release");
}
else{
   console.log("PassRate: " + PassRate + " - VERDICT: Block Release");
} 

 
