//true 
if ('Hi') console.log('String "Hi" is truthy');
if (2) console.log('Number 2 is truthy');
if ([]) console.log('Empty array will be printed');
if ({}) console.log('Empty object will be printed');
if (function() {}) console.log('Function is truthy');
if (true) console.log('Boolean true is truthy');
if (new Date()) console.log('Date object is truthy');
if (Infinity) console.log('Infinity is truthy');
if (-Infinity) console.log('-Infinity is truthy');
if (1n) console.log('BigInt 1n is truthy');
if (Symbol('symbol')) console.log('Symbol is truthy');
if (Math) console.log('Math object is truthy');
if (JSON) console.log('JSON object is truthy'); 
if (RegExp) console.log('RegExp object is truthy');
if (Error) console.log('Error object is truthy');
if (Promise) console.log('Promise object is truthy');
if (Map) console.log('Map object is truthy');
if (Set) console.log('Set object is truthy');
if (WeakMap) console.log('WeakMap object is truthy');
if (WeakSet) console.log('WeakSet object is truthy');
if (Array) console.log('Array constructor is truthy');
if (Object) console.log('Object constructor is truthy');
if (String) console.log('String constructor is truthy');
if (Number) console.log('Number constructor is truthy');
if (Boolean) console.log('Boolean constructor is truthy');
if (Symbol) console.log('Symbol constructor is truthy');
if (BigInt) console.log('BigInt constructor is truthy');

//false
if ('') console.log('This will not be printed');
if (0) console.log('This will not be printed');
if (null) console.log('This will not be printed');
if (undefined) console.log('This will not be printed');
if (NaN) console.log('This will not be printed');   
if (false) console.log('This will not be printed');
if (-0) console.log('This will not be printed');
if (0n) console.log('This will not be printed');
if (void 0) console.log('This will not be printed');

let x = 5;
let y = 3;

if (x > y) console.log("x is big");
if (y < x) console.log("y is small");
