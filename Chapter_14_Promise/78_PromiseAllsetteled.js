Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B failed"),
    Promise.resolve("Test C passed")
]).then(function (results) {
    results.forEach(function (result, i) {
        console.log("Test " + (i + 1) + ":", result.status, "-", result.value || result.reason);
    });
})
// This is like a test report — you want results for ALL tests, 
// not just stop at the first failure.