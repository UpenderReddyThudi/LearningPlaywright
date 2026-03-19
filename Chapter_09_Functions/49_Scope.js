//Scope

let env = 'QA'; //Global Scope

function setup(){
    let timeout = 3000; //Local Scope
    console.log(env); //can access Global
    return timeout; //Can access Local
}

console.log(setup());
console.log(env); //Can access Global scope
//console.log(timeout); // Reference Error - Cannot access Local scope

//Outer and Inner Scope

let x = 10;

function outer(){
    let y = 20;
    function inner(){
        let z = 30;
        console.log(z);
        console.log(y);
        //conseol.log(x); Reference error
    }
    inner();
        //console.log(z); Referance Error
        console.log(y);
        console.log(x);
}

outer();