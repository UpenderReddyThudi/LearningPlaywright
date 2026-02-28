/*
Login Brute-Force Detection
Write a JavaScript program that simulates a login system with brute-force detection.
 The system should lock the account after 3 consecutive failed attempts.
Use a do...while loop to process login attempts from an array.Demonstrate 
var (global counter), let (loop variables), and const (credentials and threshold).
Validate using strict equality (===) and logical operators (&&).

*/

var count = 0;
const MAX_ATTEMPTS = 3;
const VALID_EMAIL = "admin@testingacademy.com";
const VALID_PASSWORD = "Test@1234";

const attempts = ["wrong", "wrong", "wrong", "Test@1234"];

var failedAttempts = 0;
let isAccountLocked = false;
do {
    let currentPassword = attempts[count];
    let attemptNumber = count + 1;

    if (isAccountLocked === true) {
        console.log(`Attempt ${attemptNumber}: 🔒 ACCOUNT LOCKED - Rejected`);
    } else if (VALID_EMAIL === "admin@testingacademy.com" && currentPassword === VALID_PASSWORD) {
        console.log(`Attempt ${attemptNumber}: ✅ SUCCESS - Login Successful`);
        failedAttempts = 0; // Reset failed attempts on successful login
    } else {
        failedAttempts++;
        console.log(`Attempt ${attemptNumber}: ❌ FAILED - Strike ${failedAttempts}/3`);

        if (failedAttempts === MAX_ATTEMPTS) {
            isAccountLocked = true;
            console.log(`🚨 ACCOUNT LOCKED`);
        }
    }
    count++;
} while (count < attempts.length);

