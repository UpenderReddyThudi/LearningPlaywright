//API Response - 200: Success, 400: Bad Request, 401: Unauthorized, 404: Not Found, 500: Internal Server Error

let apiresponse = 404; 

switch(apiresponse){
    case 200:
        console.log(apiresponse, ' - Success');
        break;
    case 400:
        console.log(apiresponse, ' - Bad Request');
        break;
    case 401:
        console.log(apiresponse, ' - Unauthorized');
        break;
    case 404:
        console.log(apiresponse, ' - Not Found');
        break;
    default:
        console.log(apiresponse, ' - New Exception');
}