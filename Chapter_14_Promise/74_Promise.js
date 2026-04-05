let order = new Promise(function (resolve, reject) {
    let foodready = true;
    if (foodready) {
        resolve("Pizza is delivered!");
    } else {
        reject("Order Cancelled!");
    }
})

console.log(order);
// A Promise is an OBJECT. It wraps a value that will be available later.

let apiCall = new Promise(function (resolve, reject) {
    resolve({ status: 200, body: "User Data" });
});

apiCall.then(function (response) {
    console.log(response);
    console.log(response.status);
    console.log(response.body);
})

// .then() runs ONLY when the promise resolves successfully.