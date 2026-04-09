// Grand Father -> Father -> Son
// BasePage -> AuthPape -> AdminPage

class basepage{
    constructor(name){
        this.name = name;
    }

    open(){
        console.log("[Open]" + this.name);
    }
}

class authpage extends basepage{
    login(user){
        console.log("[Login]" + user);
    }
}

class adminpage extends authpage{
    constructor(){
        super("Admin Panel");
    }

    manageusers(){
        console.log("[Admin] Manage Users");
    }
}

let admin = new adminpage();

admin.open();
admin.login("AdminUser");
admin.manageusers();
