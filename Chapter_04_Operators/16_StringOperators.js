//String Operators
let str1 = 'Upender Reddy';
let str2 = 'Thudi';

// Concatenation operator
let FullName = str1 + ' ' + str2; // Concatenating str1 and str2 with a space in between
console.log('Full Name: ' + FullName); // Output: "Full Name: Upender Reddy Thudi"

// Concatenation assignment operator
let greeting = 'Hello';
greeting += ', ' + FullName + '!'; // Concatenating greeting with FullName and an exclamation mark
console.log(greeting); // Output: "Hello, Upender Reddy Thudi!"

// String length operator
console.log('String Length: ' + FullName.length); // Output: "String Length: 18" - The length of the FullName string is 18 characters)

// String index operator
console.log('2nd Character: ' + FullName[1]); // Output: "2nd Character: p" - The character at index 1 (second character) of FullName is 'p'

// String slice operator
console.log('First Name: ' + FullName.slice(0, 7)); // Output: "First Name: Upender" - Slicing the first 7 characters of FullName gives "Upender"
console.log('Middle Name: ' + FullName.slice(8, 13)); // Output: "Middle Name: Reddy" - Slicing from index 8 to 13 gives "Reddy"
console.log('Last Name: ' + FullName.slice(14)); // Output: "Last Name: Thudi" - Slicing from index 14 to the end gives "Thudi"

// String to Upper Case
console.log('Upper Case: ' + FullName.toUpperCase()); // Output: "Upper Case: UPENDER REDDY THUDI" - Converts FullName to upper case

// String to Lower Case
console.log('Lower Case: ' + FullName.toLowerCase()); // Output: "Lower Case: upender reddy thudi" - Converts FullName to lower case

// String includes Operator
console.log('Includes "Reddy": ' + FullName.includes('Reddy')); // Output: "Includes "Reddy": true" - Checks if "Reddy" is included in FullName
console.log('Includes "John": ' + FullName.includes('John')); // Output: "Includes "John": false" - Checks if "John" is included in FullName

// String Starts with Operator
console.log('Starts with "Upender"; ' + FullName.startsWith('Upender')); // Output: "Starts with "Upender": true" - Checks if FullName starts with "Upender"
console.log('Starts With "Thudi": ' + FullName.startsWith('Thudi')); // Output: "Starts with "Thudi": false" - Checks if FullName starts with "Thudi"

// String Ends with Operator
console.log('Ends with "Thudi": ' + FullName.endsWith('Thudi')); // Output: "Ends with "Thudi": true" - Checks if FullName ends with "Thudi"
console.log('Ends with "Reddy": ' + FullName.endsWith('Reddy')); // Output: "Ends with "Reddy": false" - Checks if FullName ends with "Reddy"

// String Replace Operator
let NewFullName = FullName.replace('Thudi', 'T'); // Replaces "Thudi" with "T" in FullName
console.log('New Full Name: ' + NewFullName); // Output: "New Full Name: Upender Reddy T" - The new FullName after replacement is "Upender Reddy T"

// String Trim Operator
let Strtrim = '  Welcome to the Play Ground!  ';
console.log('Trimmed String: ' + Strtrim.trim()); // Output: "Trimmed String: Welcome to the Play Ground!" - Removes whitespace from both ends of the string

// String Split Operator
let Strsplit = 'JavaScript is a funny language';
let words = Strsplit.split(' '); // Splits the string into an array of words using space as a delimiter
console.log('Words: ' + words); // Output: "Words: JavaScript,is,a,funny,language" - The string is split into an array of words

// String Repeat Operator
let Strrepeat = 'Ha! ';
console.log('Repeated String: ' + Strrepeat.repeat(3)); // Output: "Repeated String: Ha! Ha! Ha! " - Repeats the string "Ha! " three times  

// String Template Literals
let name = 'Upender Reddy Thudi';
let age = 30;
let templateLiteral = `My name is ${name} and I am ${age} years old.`;  
console.log(templateLiteral); // Output: "My name is Upender Reddy Thudi and I am 30 years old." - Using template literals to create a string with embedded expressions

// String Concatenation with Template Literals
let strA = 'Hello';
let strB = 'World';
let concatenatedString = `${strA} ${strB}!`;    
console.log(concatenatedString); // Output: "Hello World!" - Concatenating strings using template literals

