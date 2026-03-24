const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};

const obj3 = {...obj1};
console.log(obj3);

const obj4 = {...obj3, ...obj2}
console.log(obj4);

//This Keyword

const user = {
    Name: 'Upender',
    myname(lastname){
        this.Name += lastname;
        return this.Name;
    }
}

console.log(user.myname(' Reddy'));