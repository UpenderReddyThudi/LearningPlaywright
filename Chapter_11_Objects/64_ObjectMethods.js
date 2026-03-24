const obj = {a:1, b:2, c:3};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

//Iterate the object

const user = {Name: 'Upender', Age: 30};

for (const key in user){
    console.log(key);
}

// Object.keys/values/entries
Object.keys(user).forEach(key => {
    console.log(key);
});

Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});


//Real Objects
const ENV = {
    BASE_URL: "https://staging.myapp.com",
    TIMEOUT: 5000,
    RETRIES: 2,
    BROWSER: "Chrome"
}
console.log(Object.keys(ENV));
console.log(Object.values(ENV));
console.log(Object.entries(ENV));

const EXPECTED_RESPONSE = {
    status: 200,
    body: {
        user: { role: "admin", active: true }
    }
}
console.log(Object.keys(EXPECTED_RESPONSE));