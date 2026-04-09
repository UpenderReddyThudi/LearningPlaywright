class Father {
    constructor(name){
        this.name = name;
    }

    CommonProperty(){
        console.log("This is common Property");
    }

}

class Son1 extends Father {

    Son1Property(){
        console.log("This is SON1 Property");
    }

}
class Son2 extends Father {

    Son2Property(){
        console.log("This is Son2 Property");
    }

}

let property1 = new Son2();

property1.CommonProperty();
property1.Son2Property();

let property2 = new Son1();
property2.CommonProperty();
property2.Son1Property();