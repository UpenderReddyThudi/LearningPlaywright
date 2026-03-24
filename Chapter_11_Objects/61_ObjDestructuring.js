const user = { name1: "John", age: 30, city: "NYC" };

// Basic destructuring
const { name1, age } = user;
console.log(name1);
console.log(age);

//Rename Variable
const {name1: username, age: userage} = user;
console.log(username);
console.log(userage);

//Default values
const{Country = 'USA'} = user;
console.log(Country);
console.log(user);

const data = { user: { name: "John", address: { city: "NYC" } } };
const { user: { address: { city } } } = data;
console.log(data);
