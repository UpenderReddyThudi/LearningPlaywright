//Sync - Callback

let testResults = ["PASS", "FAIL", "PASS", "SKIP"];

testResults.forEach(function (result, index) {
    console.log("Test " + index + " -> " + result);
});

// "All done" prints LAST because forEach is synchronous — it finishes all 4 iterations first, then moves on.

//Async Call Bcak
console.log("Test 1: started");

setTimeout(function () {
    console.log("Test 2 : API response received!")
}, 2000);

console.log("Test 3: Moving to next last");


// Async
console.log("A: Test suite started");

setTimeout(function () {
    console.log("B: Slow API test finished");
}, 1000);

console.log("C: Fast unit test finished");