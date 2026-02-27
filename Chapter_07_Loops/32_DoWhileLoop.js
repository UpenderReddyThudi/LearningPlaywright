//Do While Loop - Do atleast once and then check for the condition

let number = 0;
do{
    console.log("Number - ", number);
    number++;
}while(number<5);

// Print once and then check for the condition
let age = 17;
do{
    if(age>=18){
        console.log("Eligible to vote - ", age);
    }
    else{
        console.log("Not Eligible to vote - ", age);
    }
    age++;
    console.log(age);
}while(age<=18);
