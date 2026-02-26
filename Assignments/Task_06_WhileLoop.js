//1. Print "Playwright" 5 times
let i = 1;

while(i<=5){
    console.log("Playwright");
    i++;
}

//2. Print numbers from 1 to 10

let j = 1;

while(j<=10){
    console.log("Number - ", j);
    j++;
}

//3.  Print even numbers from 1 to 20

let k = 1;

while(k<=20){
    if (k % 2 == 0){
        console.log(k, " - Even Number");
    }
    k++;
}

//4. Calculate sum of first 10 natural numbers

let m = 1;
let sum = 0;

while(m<=10){
sum = sum + m;
    m++;
}
console.log("Sum of first 10 Natural Numbers - ", sum);

//5. Print the multiplication table of 7

let number = 7;
let l = 1;
while(l<=10){
    console.log(number, "*", l, "=", number*l);
    l++;
}