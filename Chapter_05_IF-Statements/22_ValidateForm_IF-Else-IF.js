//Validate form Function

//Test the function
let email = 'xyz@gmail.com';
let password = 'password123';

function validateForm(email, password){
    if (email && password){
        return true;  
    }
    else{
        return false;
    }
}

if (validateForm(email, password)){
    console.log('Form is valid');
}
else {
    console.log('Form is invalid');
}

