//Interface Method

interface Calculator{
    Add(a:number, b:number): number;
    Subtract(a:number, b:number): number;
    Multiply(a:number, b:number): number;
}

const calc: Calculator = {
    Add: (a, b) => a + b,
    Subtract: (a, b) => a - b,
    Multiply: (a, b) => a * b,
}

console.log(calc.Add(5,2));
console.log(calc.Subtract(5,2));
console.log(calc.Multiply(5,2));
