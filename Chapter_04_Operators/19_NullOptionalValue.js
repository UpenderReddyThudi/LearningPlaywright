//Null Optional Value
let MyName = null;
console.log(MyName); // Output: null - The variable 'MyName' is explicitly set to null, indicating that it has no value.

let age;
console.log(age); // Output: undefined - The variable 'age' is declared but not assigned a value, so it is undefined.   

let MyShortName = MyName ?? "URT"; // The nullish coalescing operator (??) checks if 'MyName' is null or undefined. Since 'MyName' is null, it returns the right-hand side value "URT".
console.log(MyShortName); // Output: URT - The nullish coalescing operator (??) returns "URT" because 'MyName' is null, which is considered a nullish value.