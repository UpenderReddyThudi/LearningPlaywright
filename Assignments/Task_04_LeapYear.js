/*
Create a program that determines whether a given year is a leap year. 
A leap year is divisible by 4, but not by 100 unless it is also divisible by 400. 
Use an if-else statement to make this determination.
*/

let year = 1900;
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    console.log(year, " - Is a Leap Year");
}
else {
    console.log(year, " - Is not a leap year");
}


//Alternate way
let number = 1900;
if (number % 4 == 0 ){

    if (number % 100 != 0){
         console.log(number," - Is a Leap Year - Divisable by 4 and Not divisable by 100"); 
    } 
    else {
    if (number % 400 == 0){
    console.log(number," - Is a Leap Year - Divisable by 4 , 100 and 400");
   } 
   else {
    console.log(number, " - Is not a Leap Year - Divisable by 4 but Not divisable by 400");
   }
    }      
   }
else {
    console.log(number, " - Is not a leap year - Not divisable by 4");
}