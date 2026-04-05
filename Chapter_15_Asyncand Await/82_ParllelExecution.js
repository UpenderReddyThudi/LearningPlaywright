// When Step 2 depends on Step 1's result, you MUST run them sequentially.
// Ste1 - Step 2

function apicall(name){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(name);
        },1000);
    })
}

async function parllelTest(){
    console.log("Test Started");
    let start = Date.now();

    let [r1, r2, r3] = await Promise.all([
        apicall("Auth Service"),
        apicall("User Service"),
        apicall("Payment Service")
    ]);

    console.log(r1);
    console.log(r2);
    console.log(r3);
    console.log("Time: ~" + (Date.now() - start) + " ms");
}

parllelTest();