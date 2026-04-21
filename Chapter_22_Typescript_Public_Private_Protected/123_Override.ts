class BaseTest {
    setup(): void {
        console.log("[BASE] Open browser");
    }
    teardown(): void {
        console.log("[BASE] Close browser");
    }
}

class LoginTest extends BaseTest {

    override setup(): void {
        console.log("[LoginTest] Open browser");
        console.log("[LoginTest] Maximize");
    }
}

class APITest extends BaseTest {

    override setup(): void {
        console.log("[APITest] No Browser!");
    }
}

let test = new LoginTest();
let apitest = new APITest();
test.setup();
apitest.setup();


// Example 2 without override keyword
class Father {
    home(): void {
        console.log("2BHK");
    }
}

class Pramod extends Father {
    home(): void {
        console.log("3BHK");
    }
}

let pramod = new Pramod();
pramod.home();

