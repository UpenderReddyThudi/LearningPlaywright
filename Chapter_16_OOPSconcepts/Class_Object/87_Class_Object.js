class Person {
    // Attribute
    name;
    email;
    salary


    // Behaviour
    sleep() { }
    eat() { }

}

// CAB -> Class contains attribute, behaviour

class car{
    //Attribute
    //constructor
    constructor(assigned_name){
        this.name = assigned_name;
    }

    drive(){
        console.log("Drive The Car: " + this.name);
    }
    printcolor(){
        console.log("color of the car: " + this.name);
    }
}
const maruthi = new car("Celerio");
maruthi.drive();

const color = new car("Red");
color.printcolor();