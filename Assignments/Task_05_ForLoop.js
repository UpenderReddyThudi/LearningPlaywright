//1. Print "Hello" 5 times

for (i=1; i<=5; i++){
    console.log("Hello");
}

//2. Print numbers from 1 to 10

for (j=1; j<=10; j++){
    console.log("Number - ", j);
}

//3. Print even numbers from 1 to 20

for (k=1; k<=20; k++){
    if (k%2 == 0){
    console.log(k, " - Even Number");
    }
}

//4. Print the sum of first 10 natural numbers
let sum = 0;
for (l=1; l<=10; l++){
    sum = sum + l;
}
console.log("Sum of first 10 natural numbers - ", sum);

  //5. Print the multiplication table of 5

  let number = 5;
  for (m=1; m<=10; m++){
    console.log(number, "*", m, "=" ,number * m);
  }