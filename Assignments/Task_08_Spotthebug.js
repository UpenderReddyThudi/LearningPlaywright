//Exercise 2 — Spot the Bug
//What is wrong with this code? Fix it.

let responseTimes = [320, 85, 1200, 450, 99];
//Sort without comprator converts to string 
let sorted = responseTimes.sort();
console.log("Fastest:", sorted[0]);

//Number sorting can be done using comparator 
let responsevalue = [320, 85, 1200, 450, 99];
let sort = responsevalue.sort((a,b) => a-b);
console.log("Fastest:", sort[0]);

//Exercise 3 — Deep vs Shallow Copy (Tricky)
//What is the output and why? How would you fix it?

//shallow copy
let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";
console.log(suite1[0].status);

//Deep copy
let suite3 = [{ name: "login", status: "pass" }];
let suite4 = [suite3];

suite4[0].status = "fail";
console.log(suite4[0].status);
console.log(suite3[0].status);