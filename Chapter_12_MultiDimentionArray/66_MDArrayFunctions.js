// MD Array Functions

let scores = [
    [20,30,40],
    [50,10,30],
    [20,40,60]
]

let sum = scores.map(row => row.reduce((a,b)=>a+b, 0));
console.log(sum);

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

for (let i=0; i<suiteResults.length; i++){
    for (let j=0; j<suiteResults[i].length; j++){
        if(suiteResults[i][j].includes("PASS")){
            console.log(suiteResults[i][j]);
        }
    }
}