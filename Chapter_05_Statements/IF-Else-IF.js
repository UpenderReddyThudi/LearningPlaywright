//Statements: If-Else-IF

let age = 18;

if (age >= 18){

    console.log('Eligible to vote');
}
else if (age < 18){
    console.log('Not eligible to vote');
}

//Score Grading System
let score = 59;

if (score >= 90){
    console.log('Grade: A');
}
else if (score >= 80){
    console.log('Grade: B');
}
else if (score >= 70){
    console.log('Grade: C');
}
else if (score >= 60){
    console.log('Grade: D');
}   
else{
    console.log('Grade: F');
}

// Role Based Access Control
let isloggedin = false;
let userrole = 'Viewer';

if (isloggedin){
    if (userrole === 'Admin'){
        console.log('Welcome Admin');
    }
    else if (userrole === 'Editor'){
        console.log('Welcome Editor');
    }   
    else if (userrole === 'Viewer'){
        console.log('Welcome Viewer');
    }
    else{
        console.log('Unknown Role');
    }
}
else{
    console.log('Please Login');
}

//API Response Handling

let apiresponse = 400; //200: Success, 400: Bad Request, 401: Unauthorized, 404: Not Found, 500: Internal Server Error

if (apiresponse === 200){
    console.log('API Response: Success');
}
else if (apiresponse === 400){
    console.log('API Response: Bad Request');
}
else if (apiresponse === 401){
    console.log('API Response: Unauthorized');
}
else if (apiresponse === 404){
    console.log('API Response: Not Found');
}
else if (apiresponse === 500){
    console.log('API Response: Internal Server Error');
}
else{
    console.log('API Response: Unknown Status Code');
}
