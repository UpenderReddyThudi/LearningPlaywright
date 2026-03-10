// String sorting

let fruits = ["Appale", "Lemon", "Banana"];
console.log(fruits.sort());

//Number sorting - Normal
let num = [10,1,20,2,30,3];
console.log(num.sort());

//Ascending Order
console.log(num.sort((a,b) => a-b));

//Descending Order
console.log(num.sort((a,b) => b-a));
