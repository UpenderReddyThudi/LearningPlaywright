//1
export let baseurl = "https://app.vwo.com";
export function formatUpperCaseString(sname){
        return sname.toUpperCase();
}

let fname = "Reddy"; //This is not exported so cnnt import it into otehr classes

//2
export let URL = "Https://Google.com";
export function formatTestName(sname){
        return "TC_" + sname.toLowerCase();
}

//3
// Default Export -> Export One Main Thing

export default function log1(message) {
    console.log("[LOG] " + message);
}

export function log2(message) {
    console.log("[LOGS] " + message);
}