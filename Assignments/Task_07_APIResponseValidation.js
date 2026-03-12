//Exercise 1 : API Response Validation
//You receive an array of API response codes. Write code to:
//1. Check if ALL responses are successful (200–299)
//2. Find the FIRST non-success code
//3. Return all unique error codes

//Exercise 1 : API Response Validation
let responses = [200, 201, 404, 500, 404, 200, 503];

//1. Check if ALL responses are successful (200–299)
let result = responses.every(s => s>=200 && s<=299);
console.log(result);

//2. Find the First non-success code
let firstNonSuccess = responses.find(S => S<200 || S>299);
console.log(firstNonSuccess);
let lastNonSuccess = responses.findLast(S => S<200 || S>299);
console.log(lastNonSuccess);

//3. Return all unique error codes
let unique = [...new Set(responses.filter(S => S<200 || S>299))];
console.log(unique);
