function calculate(a,b,operation){
    console.log(a, b);
    return operation(a,b);    
}

let sum = calculate(5,10,function(x,y){
    console.log(x, y);
return x + y;
});

console.log(sum);

