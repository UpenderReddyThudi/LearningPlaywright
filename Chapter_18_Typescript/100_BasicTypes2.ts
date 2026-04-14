//1 - Unknown
let unknown: unknown = 12;

if(typeof unknown === "string"){
    console.log(unknown + " - Upender Reddy T");
}
else{
    console.log(unknown + " - is not a string");
}

//2 - Function Annotations
function greet(Name: string): string{
        return 'Hello - ' + Name;
    }
    console.log(greet("Upender Reddy T"));

//3 - Arrow Functions Annotations
const multiply = (a: number, b: number): number => a * b;
console.log('a * b = ' + multiply(2,5));

// Object annotations
let user: { name: string; age: number } = {
    name: "Mahesh",
    age: 30
};

console.log(user.name + " Age is - " + user.age);

// void
function sayHello(msg: string): void {
    console.log(msg);
}

// Function annotations
function welcome(name: string): string {
    return `Hello, ${name}!`;
}

// never - function never returns (throws or infinite loop)
function throwError(message: string): never {
    throw new Error(message);
}