interface Testconfig{
    Browser: string;
    Headless: boolean;
    BaseURL: string;
    Timeout?: number;
    Retries?: number;
}

let CIConfig: Testconfig = {
    Browser: "Chrome",
    Headless: true,
    BaseURL: "WWW.Google.com"
}

let LocalConfig: Testconfig = {
    Browser: "Firefox",
    Headless: false,
    BaseURL: "WWW.Amazon.com",
    Timeout: 1000,
    Retries: 3,
}

console.log("CI:", CIConfig.Browser, "| timeout:", CIConfig.Timeout);
console.log("Local:", LocalConfig.Browser, "| timeout:", LocalConfig.Timeout);