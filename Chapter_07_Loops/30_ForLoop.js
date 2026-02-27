/* For Loop - ICU 
I - Initialization
C - Condition
U - Updation
*/

// 0-4 print 5 Times

for(let Rajesh = 0; Rajesh<5; Rajesh++){ 
    console.log("Rajesh joined in playwright Batch - ", Rajesh);
}

//0-10 Print 11 times
for(let i=0; i<=10; i++){
    console.log("Number - ", i);
}

// Condition not satisfy and wont print anything

for(let j=0; j>1; j++){
    console.log(j);
}

//Voter eligibility

for(let age=15; age<=18; age++){

    if (age>=18){
       console.log("Eligible to Vote - ", age);
    }
    else{
       console.log("Not Eligible to Vote - ", age);
    }
}

//Not met the condition as there is no incrment
for (let i = 0; i>10;) {
     console.log(i);
}