// Strings

let url = "https://app.vwo.com";
let status = 'pass';
let message = `Test completed in ${320}ms`;  // template literal

// Single quotes
let a = 'hello';

// Double quotes
let b = "world";

// Template literals (backticks) — allows expressions & multiline
let name1 = "Alice";
let msg = `Hello, ${name1}! 2 + 2 = ${2 + 2}`;
console.log(msg);

// Multiline
let report = `
  Test: Login
  Status: Pass
  Duration: 320ms
`;
console.log(report);

// String() constructor (converts other types)
console.log(String(200));
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String([1, 2])); // "[1,2]"

// String Properties & Basic Access

let str = "Hello, World!";
// Length ( start from 1)
console.log(str.length);

// Access by index
console.log(str[0]);
console.log(str[7]);
console.log(str.at(-1));
console.log(str.at(-6));

// charAt()
str.charAt(0);   // "H"
// charCodeAt() — Unicode value
str.charCodeAt(0);  // 72