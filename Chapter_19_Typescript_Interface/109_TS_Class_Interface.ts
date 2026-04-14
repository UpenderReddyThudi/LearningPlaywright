//Class Interface

interface Executable{
    Name: string;
    run(): void;
    getstatus(): string;
}

class Testcase implements Executable{
    Name: string;
    constructor(Name: string){
        this.Name = Name;
    }

    run(): void{
        console.log("RUN " + this.Name);
    } 

    getstatus(): string{
        return "Pass";
    }
}

let TC: Executable = new Testcase("Verify Login");

TC.run();
console.log("Call", TC.getstatus());