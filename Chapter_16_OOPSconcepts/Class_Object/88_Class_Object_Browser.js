class TestCase{
    constructor(name,status,priority){
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display(){
        console.log(this.name + " -> "+ this.status+ " -> " + this.priority);
    }
}

let loginTest = new TestCase("Login Test", "Pass", "P1");
let signupTest = new TestCase("Signup Test", "Fail", "P2");

loginTest.display();
signupTest.display();

// Function vs Method
// method is functions but inside the class


class Browser {
    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(name + " launched");
    }

    startBrowser() {
        console.log("Starting the browser")
    }
    closeBrowser() {
        console.log("Closing the browser")
    }

}

let chrome = new Browser("Chrome");

console.log("\n****Chrome****");

chrome.startBrowser();
console.log(chrome.isOpen);
chrome.closeBrowser();


let firefox = new Browser("Firefox");

console.log("\n****firefox****");

firefox.startBrowser();
console.log(firefox.isOpen);
firefox.closeBrowser();

