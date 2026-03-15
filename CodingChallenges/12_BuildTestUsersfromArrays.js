/*Build Test Users from Arrays

Write a JavaScript function that receives two arrays: one with names and one with
roles. Return a new array of user objects in the format `{ username, email, role }`.
The username should be lowercase with spaces replaced by underscores, and the
email should use the domain `@playwrightbatch.com`.

*/

let names = ["Amit Kumar", "Neha Singh"];
let roles = ["admin", "viewer"];

function testusers(a,b){
    let users = [];
    
    for (i=0; i<a.length; i++){

    let username = a[i].toLowerCase().replace(" ", "_");
    let email = username + '@playwright.com';

    users.push({UserName: username, Email: email, Role: b[i]});

    }
       return users;
}

let result = testusers(names,roles);
console.log(result);