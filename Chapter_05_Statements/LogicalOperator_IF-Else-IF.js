//Logical Operators in If-Else-IF

let temperature = 30;
let isRaining = true;
let isholiday = true;

if ((temperature > 25 && !isRaining) && isholiday){
    console.log('It is a nice day for outdoor activities');
}
else if ((temperature > 25 && isRaining) && isholiday){ 
    console.log('It is a nice day but it is raining');
}
else if ((temperature <= 25 && !isRaining) && !isholiday){
    console.log('It is a bit chilly but not raining');
}   
else{
    console.log('It is a bit chilly and it is raining');
}