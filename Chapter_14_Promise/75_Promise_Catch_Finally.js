let apiCall = new Promise(function (resolve, reject) {
    // I will make call...
    reject("500 Error");
});

apiCall.then(function (data) {
    console.log("Data is success!!")
}).catch(function (error) {
    console.log(error)
});

// .catch() runs ONLY when the promise is rejected.
//  .then() is completely skipped.

let testRun = new Promise(function (resolve, reject) {
    reject("Assertion Failed");

});

testRun.then(function (data) { // Resolve
    console.log(data);
}).catch(function (error) { // Reject
    console.log(error);
}).finally(function () { // Always Executed!
    console.log("I will be executed anyhow!!");
});

// .finally() ALWAYS runs — whether the test passed or failed. Just like afterEach() in Cypress or Playwright.