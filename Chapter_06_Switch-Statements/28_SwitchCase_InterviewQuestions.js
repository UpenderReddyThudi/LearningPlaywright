// IQ1 - (0 === 0, NOT 0 === false)

let a = 0;

switch(a){
case false:
    console.log(a,' = False Matched');
    break;
case 0:
    console.log(a,' = 0 Matched');
    break;
}

// IQ2 - (5 and "5" are not same)

let val = '5';

switch(val){
case 5:
    console.log(val,' - Number 5 Matched');
    break;
case '5':
    console.log(val,' - String 5 Matched');
}

//IQ3: Duplicate Case will print the first one 

let x = 2;
switch (true){
    case 10:
        console.log("First Case");
        break;
    case 10:
        console.log("Second Case");
        break;
    case (x > 10):
        console.log("Third Case");
        break;
    default:
        console.log("Last Case");        
}


// Testscore

let testScore = 86;

switch (true) {
    case (testScore >= 95):
        console.log("Outstanding — Top performer");
        break;
    case (testScore >= 85):
        console.log("Excellent — Above expectations");
        break;
    case (testScore >= 70):
        console.log("Good — Meets expectations");
        break;
    case (testScore >= 50):
        console.log("Needs Improvement");
        break;
    default:
        console.log("Unsatisfactory — Requires training");
}

// without break - All cases will be dispalyed after match 
let fruit = "date";
switch (fruit) {
    case "apple":
        console.log("Apple selected");
    case "banana":
        console.log("Banana selected");
    case "cherry":
        console.log("Cherry selected");
    case "date":
        console.log("Date selected");
    default:
        console.log("Default reached");
}