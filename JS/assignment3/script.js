// Level 1 – Pure Beginner Practice

// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

let age = parseInt(prompt("Enter your age"));
(age >= 18) ? console.log("Eligible") : console.log("Not eligible");

// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

for (let i = 1; i <= 10; i++) {
    console.log(`5 × ${i} = ${5 * i}`);
}

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

let count = 0;
for (let i = 1; i <= 15; i++) {
    if (i > 8) count++;
}
console.log(count);

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

let password = '12345a';
let userInput = prompt('Enter password');
if (password === userInput) {
    console.log('Access granted');
} else {
    console.log('Access denied');
}

// Level 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

let password2 = '12345a';
let attempts = 3;
while (attempts) {
    let userPass = prompt('Enter password');
    if (userPass === '12345a') {
        console.log('Access granted');
        break;
    } else {
        console.log('Access denied');
        if (attempts === 1) {
            console.log('Account locked');
            break;
        }
        attempts--;
    }
}

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

let yesCount = 0;
while (true) {
    let userInput = prompt('Enter word');
    if (userInput === 'stop') break;
    if (userInput === 'yes') yesCount++;
}
console.log(yesCount);


// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

for (let i = 1; i <= 50; i++) {
    if (i % 7 === 0) console.log(i);
}

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

let sum = 0;
for (let i = 1; i <= 30; i++) {
    if (i % 2 !== 0) sum += i;
}
console.log(sum);

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

while(true){
    let input = parseInt(prompt("Enter a number"));
    if(input % 2 === 0){
        console.log("Even");
        break;
    }
}

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

let start = parseInt(prompt("Enter start"));
let end = parseInt(prompt("Enter end"));
for (let i = start; i <= end; i++) {
    console.log(i);
}

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

let printCount = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        if (printCount === 3) break;
        console.log(i);
        printCount++;
    }
}

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

let posCont = 0;

for (let i = 0; i < 5; i++) {
    let input = parseInt(prompt("Enter a number"));
    if (input > 0) posCont++;
}
console.log(posCont);

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

let balance = 1000;
let withdrawals = 3;
while (withdrawals) {
    let withdrawal = parseInt(prompt("Enter withdrawal amount"));
    if (withdrawal <= balance) {
        balance -= withdrawal;
        console.log(`Rs.${withdrawal} deducted`);
        withdrawals--;
    } else {
        console.log("Insufficient balance");
    }
}
console.log(`Final balance: ${balance}`);