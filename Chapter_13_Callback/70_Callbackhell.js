function openbrowser(callback){
    setTimeout(function(){
        console.log("Step 1 - Browser Starting");
        callback();
    },500);
}

function goToLoginPage(callback) {
    setTimeout(function () {
        console.log("Step 2 - Login page loaded");
        callback();
    }, 500);
}

function enterCredentials(callback) {
    setTimeout(function () {
        console.log("Step 3 - Credentials entered");
        callback();
    }, 500);
}
function clickLogin(callback) {
    setTimeout(function () {
        console.log("Step 4 - Login button clicked");
        callback();
    }, 500);
}
//Call Bcak Hell
openbrowser(function () {
    goToLoginPage(function () {
        enterCredentials(function () {
            clickLogin(function () {
                console.log("Test Completed!")
            })
        })
    })
})