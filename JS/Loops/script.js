// Level 1 - For Beginner

// 1. Write a for loop that prints the numbers from 1 to 20.

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 2. Write a for loop that prints the numbers from 1 to 20 but only even numbers.

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. Write a for loop that prints the numbers from 20 to 1.

for (let i = 20; i >= 1; i--) {
    console.log(i);
}

// 4. Print whether the number is even or odd from 1 to 10.

for (let i = 1; i <= 10; i++) {
    (i % 2 === 0) ? console.log(`${i} is Even`) : console.log(`${i} is Odd`);
}

// 5. Ask user a number and print whether the number is positive or negative.

// let num = parseInt(prompt("Enter a number: "));

// if (num > 0) {
//     console.log("The number is positive");
// } else if (num < 0) {
//     console.log("The number is negative");
// } else {
//     console.log("The number is zero");
// }

let age = prompt("Enter your age: ");

if (age === null) {
    console.log("You cancelled it ")
} else {
    if (age.trim() === "") {
        console.error("bsdk dhang se likh");
    } else {
        age = Number(age.trim())
        if (isNaN(age)) {
            console.error("bhai please number dede...")
        } else {
            console.log("confirm ye number hai")
        }
    }
}
