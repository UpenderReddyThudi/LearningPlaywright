// Objects
// Key and value

let student1 = {Name:"Mahesh", Age:20, RollNo:1};
let student2 = {Name:"Rajesh", Age:21, RoolNo:2};
let student3 = {Name:"Mukesh"};

console.log(student1.Name, student1.Age, student1.RollNo);
console.log(student1["Name"]);
console.log(student1);

let student4 = student3;
student4.Name = 'Rakesh';
console.log(student4.Name);
console.log(student3.Name)

// Two separate objects — different memory
let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d);

//Object Constants

const student5 = {
    Name: 'Komal',
    Age: 23,
    RollNo: 5
};
console.log(student5);
console.log(student5.Name);
console.log(student5['Age']);

//Dynamic Property Access
const key = 'email';
console.log(student5[key]);

//Adding/Modifying object
student5.email = 'komal@gmail.com';
student5.Age = 25;
console.log(student5);

//Object configuration

let config = {};
config.browser = "Chrome";
config.timeout = 2000;
console.log(config);
console.log(config.browser);
delete config.browser;
console.log(config);