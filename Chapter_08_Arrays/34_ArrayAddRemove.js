//Add/REmove from Last

let val = [10,20,30];
val.push(40); //Add at the end
console.log(val);

val.pop(); // Remove from the end 
console.log(val);

//Add/Remove from begining 
val.unshift(5);
console.log(val);

val.shift();
console.log(val);

// splice(start, deleteCount, ...itemsToAdd)

let val1 = [10,20,30,40,50];
val1.splice(0,2);
console.log(val1);

val1.splice(1,1,60);
console.log(val1);

//Slice 
let val2 = [10,20,30,40,50];
console.log(val2.slice(1,4));


let browser = ["Chrome","Opera","Firefox"];

for (i=0; i<browser.length; i++){
    console.log(browser[i]);
    if(browser[i]==="Firefox"){
        console.log("current browser is: " + browser[i] );
    }
}

