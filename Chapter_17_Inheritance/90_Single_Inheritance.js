
// LoginPage never defined open() or close() — it got them from BasePage. 
// That's inheritance.

class basepage{
    constructor(pagename){
        this.pagename = pagename;
    }

    open(){
        console.log("Page Opened");
    }

    close(){
        console.log("Page Closed");
    }
}

class loginpage extends basepage{

}

let page = new loginpage();
page.open();
page.close();

//*******************************

class animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(this.name + " is eating");
    }

    sleep(){
        console.log(this.name + " is sleeping");
    }

}

class dog extends animal{
    constructor(name, breed){
        super(name); //It is used for the parent constructor. 
        this.breed = breed;
    }
    bark(){
        console.log(this.name + " is barking");
    }

}

let dog1 = new dog("Tommy", "Jermon shephord");
dog1.eat();
dog1.sleep();
dog1.bark();

console.log(dog1.breed);
