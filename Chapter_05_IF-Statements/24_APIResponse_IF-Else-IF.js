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