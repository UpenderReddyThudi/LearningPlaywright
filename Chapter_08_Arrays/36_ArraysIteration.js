//Arrays Iteration
let val = [10,20,30,40,50];

for (i=0; i<val.length; i++){
    console.log(val[i]);
}

console.log("-----For Of-----");

// For of - cleanest for values
for (let val1 of val){
    console.log(val1);
}

console.log("----For Each----");

// forEach (no return value)
val.forEach((val, index) => {
    console.log(`${index } : ${ val}`);
});

console.log("----");

// entries() — index + value
let browsers = ["Opera", "Chrome", "Firefox"];

for (let [i, browser] of browsers.entries()) {
    console.log(i, browser);
}

console.log("----");


let students = ["Mahesh", "Rajesh", "Mukesh", "Ramesh"];
for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}