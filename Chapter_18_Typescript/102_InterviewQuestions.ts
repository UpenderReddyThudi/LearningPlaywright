function buildEndpoint(base: string, path: string): string {
    return base + path;
}

function isSuccessCode(code: number): boolean {
    return code >= 200 && code < 300;
}

function logTestStep(step: string): void {
    console.log("[STEP] " + step);
}

console.log(buildEndpoint("https://api.com", "/users"));
console.log("200 is success:", isSuccessCode(200));
console.log("404 is success:", isSuccessCode(404));
logTestStep("Navigate to login page");

//**********************************************************
console.log("-----********************8-----")

let statusCode: number[] = [200, 201, 404, 500];
let testSuites: string[] = ["Smoke", "Regression", "Sanity"];

console.log("Status codes:", statusCode);
console.log("Suites:", testSuites);

let testResult: { name: string; status: string; duration: number } = {
    name: "Login Test",
    status: "PASS",
    duration: 1200};

console.log(testResult.name + " → " + testResult.status + " (" + testResult.duration + "ms)");