// Basic Async/Await

async function getTestResults() {
    return "Pass";
}


// async function ALWAYS returns a Promise
getTestResults().then(function (result) {
    console.log(result);
});


async function runTest() {
    let result1 = await Promise.resolve("Login test passed");
    console.log(result1);

    let result2 = await Promise.resolve("Dashboard test passed");
    console.log(result2);
}

runTest();