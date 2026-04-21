abstract class basetest{
    protected testname:string;
    constructor (testname: string){
        this.testname = testname;
    }

    abstract setup():void;
    abstract execute(): void;
    abstract teardown():void;

}

class uitest extends basetest{
        setup(): void {
        console.log("  Setup: launch browser");
    }
    execute(): void {
        console.log("  Execute: click buttons, fill forms");
    }
    teardown(): void {
        console.log("  Teardown: close browser");
    }
}


let test = new uitest("QA");
test.setup();
test.execute();
test.teardown();


//part 2

let element: unknown = {
    tagName: "Button",
    textContent: "Submit",
    id: "submit-btn",
    disabled: false
}

interface elementI { tagName: string, textContent: string, id: string, disabled: boolean };


let button = element as elementI


console.log("Tag:", button.tagName);
console.log("Text:", button.textContent);
console.log("ID:", button.id);
console.log("Disabled:", button.disabled);

