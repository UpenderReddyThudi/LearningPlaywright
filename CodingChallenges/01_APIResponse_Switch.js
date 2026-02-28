/*
API Response Status Code Validator
As an SDET, you receive an API response status code and need to classify it. 
Write a JavaScript program using a switch statement that takes an HTTP status code 
stored in a variable and prints the category and a QA-friendly message.
*/

let statuscode = 401;

switch(statuscode){

    case 200:
        console.log(statuscode,'--> PASS - OK: Request successful');
        break;
    case 201:
        console.log(statuscode,'--> PASS - Created: Resource created successfully');
         break;
    case 301:
        console.log(statuscode,'--> WARNING - Moved Permanently: URL has changed');
         break;
    case 400:
        console.log(statuscode,'--> FAIL - Bad Request: Check request payload');
         break;
    case 401:
        console.log(statuscode,'--> FAIL - Unauthorized: Check auth token');
         break;
    case 403:
        console.log(statuscode,'--> FAIL - Forbidden: Insufficient permissions');
         break;
    case 404:
        console.log(statuscode,'--> FAIL - Not Found: Check endpoint URL');
         break;
    case 500:
        console.log(statuscode,'--> FAIL - Internal Server Error: Backend issue');
         break;
    default:
        console.log(statuscode,'--> UNKNOWN - Unhandled status code');
}