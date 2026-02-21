//Ternary Operators
let age = 18;
let CanVote = (age >= 18) ? 'Yes, You Can Vote' : 'No, You Cannot Vote';
console.log(CanVote); // Output: Yes, You Can Vote - Since age is 18, the condition is true, so the first expression is returned.

age = 16;
CanVote = (age >= 18) ? 'Yes, You Can Vote' : 'No, You Cannot Vote';
console.log(CanVote); // Output: No, You Cannot Vote - Since age is 16, the condition is false, so the second expression is returned.

