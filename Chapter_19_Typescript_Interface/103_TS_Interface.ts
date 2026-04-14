// Real QA use: In Playwright TypeScript projects, you define interfaces for API response shapes.
// If the backend changes a field name from userName to username, 
// TypeScript catches every place in your tests that uses the old name — instantly.

interface Testcase{
    ID: Number;
    Name: String;
    Status: String;
    Duration: Number;
}

let Test1: Testcase = {
    ID: 1,
    Name: "Login Success",
    Status: 'PASS',
    Duration: 1500
};
console.log("TC-" + Test1.ID + " : " + Test1.Name + " - " + Test1.Status + " - " + Test1.Duration);

let Test2: Testcase = {
    ID: 2,
    Name: "Login Fail",
    Status: 'FAIL',
    Duration: 1000
};
console.log("TC-" + Test2.ID + " : " + Test2.Name + " - " + Test2.Status + " - " + Test2.Duration);



// Interface with optional and readonly for API response

console.log("-----***********************-----");

interface APIResponse{
    readonly StatusCode: Number;
    Body: String;
    Headers?: Object; //Optional
    ResponseTime?: Number;
}

// Readonly - Can't modify the readonly
// ? - optional

let Response: APIResponse = {
    StatusCode: 200,
    Body: '{"User", "Admin"}',
};

console.log(Response.StatusCode);
console.log(Response.Body);
console.log(Response.Headers);

console.log(" ---------------------------")

interface Point {
    readonly x: number;
    readonly y: number;
}
const point: Point = { x: 10, y: 20 };
// point.x = 5; This is not possible. 
console.log(point.x + " - " + point.y);

// ReadonlyArray
interface Data {
    readonly items: readonly number[];
}

const data: Data = {
    items: [10,20,30]
};

console.log(data.items.length);
console.log(data.items[1]);