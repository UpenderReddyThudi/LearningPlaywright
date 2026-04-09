import {basepage} from "./Basepage.js";

export class Loginpage extends basepage{
    constructor(){
        super("Login Page");
    }

    login(user){
        console.log(user + " Logged In");
    }

}