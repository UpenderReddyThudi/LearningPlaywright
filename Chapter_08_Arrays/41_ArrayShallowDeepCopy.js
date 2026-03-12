//Array Copying - Shallow and Deep Copy

let original = [1,2,3,4];

let copy1 = [...original]; //spread
console.log(copy1);

let copy2 = Array.from(original);
console.log(copy2);

let copy3 = original.slice(0);
console.log(copy3);

let copy4 = original.concat();
console.log(copy4);

//Add some value to copy1
copy1.push(5);
console.log(copy1);
console.log(original);
console.log(copy2);

//Deep copy
let c = original;
c.push(5);
console.log(original);
console.log(copy1);
console.log(c);


//Task
let arr = [1, 2, 3];
let copy = arr;
copy.push(4);
console.log(arr.length);
console.log(copy);

