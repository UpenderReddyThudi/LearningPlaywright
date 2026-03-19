//Closure

function outer() {
    let message = "Hello";
    console.log("Outer called!");

    function inner() {
        console.log(message);
    }
    return inner;    
}
    let fn_inner = outer();
    fn_inner();

//  inner() not allowed!

//Closure

function makecounter(start = 0){
    let count = start;
    return{
        increment(){count++;},
        decrement(){count--;},
        get(){return count}
    }
}
let counter = makecounter();

counter.increment();
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());


//Retry Max
function retrytracker(max){
    let attempts = 0;

    function retry(testname){
        attempts++;
        if (attempts <= max){
            return 'Attempt ' + attempts+ '/' + max + ' for login';
            }
        else{
            return 'Login exceeded max retries ' + (max);
        }
    }
    return retry;
}

let tryagain = retrytracker(3);
console.log (tryagain('Login'));
console.log (tryagain('Login'));
console.log (tryagain('Login'));
console.log (tryagain('Login'));

// Write a function makeRateLimiter(limit) that returns a function. 
// Each call to the returned function should track usage and return true if under limit
// , false when limit is exceeded.

function makeRateLimiter(limit){
    let call = 0;
    
    function check(){
        call++;
        return call<=limit;
    }
    return check;
}
let limiter = makeRateLimiter(3);
console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());