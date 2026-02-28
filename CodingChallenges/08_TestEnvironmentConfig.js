/*
In CI/CD pipelines, tests run against different environments. 
Write a JavaScript program using a switch statement that takes an environment name 
stored in a variable and prints the base URL, API key pattern, and timeout. 
Use const for fixed values and let for the assembled config.

Environments: dev, staging, qa, production/prod. Each has different base URL, 
API key prefix, timeout, and description.
*/

const envName = "STAGING";

//URL's
let stagingURL = "https://staging-api.testingacademy.com";
let prodURL = "https://prod-api.testingacademy.com";
let qaURL = "https://qa-api.testingacademy.com";
let devURL = "https://dev-api.testingacademy.com";

//APIKeys
let stagingAPIKey = "stg_key_001-001";
let prodAPIKey = "prod_key_002-002";
let qaAPIKey = "qa_key_003-003";
let devAPIKey = "dev_key_004-004";

//Timeout
let stagingTimeout = "8000ms";
let prodTimeout = "4000ms";
let qaTimeout = "5000ms";
let devTimeout = "6000ms";
//description
let stagingDescr = "Staging - Pre-production mirror";
let prodDescr = "Production Env";
let qaDescr = "QA ENV";
let devDescr = "DEV Env";


switch(envName){
    case "STAGING":
        console.log("StagingURL: " + stagingURL + " API KEY: " + stagingAPIKey + " Timeout " + stagingTimeout + " Description: " + stagingDescr );
        break;
    case "PRODUCTION":
        console.log("ProductionURL: " + prodURL + " API KEY: " + prodAPIKey + " Timeout " + prodTimeout + " Description: " + prodDescr );
        break;
    case "QA":
        console.log("QAURL: " + qaURL + " API KEY: " + qaAPIKey + " Timeout " + qaTimeout + " Description: " + qaDescr );
        break;
    case "DEV":
        console.log("DEVURL: " + devURL + " API KEY: " + devAPIKey + " Timeout " + devTimeout + " Description: " + devDescr );
        break;
    default:
        console.log("Invalid Environment");
}