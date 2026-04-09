// class C extends A, B { }  // ❌ SyntaxError

// Mixin concept can help you to perform the multiple inheritance. 

//Mixin 1: Adds Login Ability
let LoggerMixin = function(base){
    return class extends base{
        log(msg){
            console.log("[Log:] " + msg);
        }
    }
}

//Mixin 2: Adds Screenshot Ability
let ScreenshotMixin = function(base){
    return class extends base{
        screenshot(){
            console.log("[Screenshot:] Captured");
        }
    }
}

//Base Class

class Testcase{
    constructor(name){
        this.name = name;
    }

    run(){
        console.log("Running " + this.name);
    }
}

//Apply both Mixins

class SamrtTest extends ScreenshotMixin(LoggerMixin(Testcase)){
    constructor(name){
        super(name);
    }
}

let test = new SamrtTest("LoginFlow");

test.run();
test.log("Test Started");
test.screenshot();