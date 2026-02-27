//Increment Operator - Pre and Post

// Pre Increment
let a = 10;
let b = ++a;
console.log(b); //11
console.log(a); //11

// Post Increment
let c = 10;
let d = c++;
console.log(d); //10
console.log(c); //11

// pre and Post increment and Add
let e = 10;
console.log(e++ + ++e); //22
console.log(e);

// A + B
// ExpA -> 10, e -> 11
// +
// ExpB -> 12, e-> 12
// ExpA. + ExpB ->  10+12 -> 22
// e -> 12

//Increment and add
let f = 10;
console.log(f++ + f); 
console.log(f)
// let f = 10;
// console.log(a++ + a);
// // A+B -> A -> a++ (  ExpA - 10, f-> 11 )
// // + 
// // B -> 11, f -> 11 ,  
// // Exp A. + ExpB -> 10 + 11

//Decrement
let g = 10;
console.log(g--); //10
console.log(g); // 9
console.log(--g); //8
console.log(g); //8