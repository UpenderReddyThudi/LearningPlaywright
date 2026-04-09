class basetest{
    setup(){
        console.log("Base: Open Browser");
    }
}

class APITest extends basetest{
    setup(){
        console.log("APITest: Open Browser");
    }
}

let test = new APITest();
test.setup(); // Whoever object is present, it will call that. 

//*****************************
console.log("\n-----*************-----\n");

class BaseTest {
    setup() {
        console.log("Base: open browser");

    }

    teardown() {
        console.log("Base: close browser");
    }
}

class UITest extends BaseTest {
    setup() {
        super.setup(); // UITest will help you to call your parent function. super() - Constrcutor, super.fname() - functions name
        console.log("UI: maximize window");
    }

    teardown() {
        console.log("UI: take screenshot");
        super.teardown();
    }

}

let test1 = new UITest();
test1.setup();
console.log("-----^^^^^^^^^-----");
test1.teardown();

//*****************************
console.log("\n-----*************-----\n");

class testcase{
    execute(){
        console.log("Running Smoke Test Cases");
    }
}

class UnitTest extends testcase{
    execute(){
        console.log("Running Unit Test cases");
    }
}

class RegressionTest extends testcase{
    execute(){
        console.log("Running Regression Test Cases"); 
    }  
}

class E2ETest extends testcase{
    execute(){
        console.log("Running E2E Test Cases");
    }
}

let tests = [new UnitTest(), new RegressionTest(), new E2ETest()];

tests.forEach(function (test){
      test.execute();
})
