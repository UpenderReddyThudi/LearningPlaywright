const user = {
    firstname: "Upender",
    lastname: "Reddy",

    get fullname(){
        return this.firstname + this.lastname;
    },

    set fullname(value){
        [this.firstname, this.lastname] = value.split("_");
    }
}
console.log(user.fullname);
user.fullname = "Upender_Thudi";
console.log(user.fullname);