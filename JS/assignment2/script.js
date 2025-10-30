// a. Create two numbers a = 10 and b = 3.
// Perform and log: a + b, a - b, a * b, a / b, a % b.

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// b. Write: let x = 5; x = x + 3;
// Now rewrite the same using +=.
// Do the same for -=, *=, /=.

let x = 5;
x = x + 3;
console.log(x);

x += 3;
console.log(x);

x *= 3;
console.log(x);

x /= 3;
console.log(x);

// c. let count = 5;
// Use count++ and log value before and after.
// Repeat for count--

let count = 5;
count++;
console.log(count);

count--;
console.log(count);

// d. Compare two values: 5 == “5” and 5 === “5”.
// Observe difference.

console.log(5 == "5");
console.log(5 === "5");

// e. Check if 10 is greater than 5, less than 20, and equal to 10.
console.log(10 > 5 && 10 < 20 && 10 == 10);

// f. Try logical AND and OR:
// true && false
// true || false
// !(true)

console.log(true && false);
console.log(true || false);
console.log(!(true));

// g. Predict the result of:
// (5 > 3 && 10 > 8),
// (5 > 3 || 10 < 8)

console.log(5 > 3 && 10 > 8);
console.log(5 > 3 || 10 < 8);

// h. Bitwise (light intro):
// Evaluate 5 & 1 and 5 | 1.
// Write result and your observation (no deep explanation needed now).

console.log(5 & 1);
console.log(5 | 1);

// 3. Conditional Operators (if, else, else-if, ternary, switch)
// a. Take input using prompt for age.
// If age > 18 → log “Adult”.
// Else → log “Minor”.

let age = prompt("Enter your age");
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// b. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”

let marks = prompt("Enter your marks");
if (marks >= 90) {
  console.log("A grade");
} else if (marks >= 75) {
  console.log("B grade");
} else if (marks >= 50) {
  console.log("C grade");
} else {
  console.log("Fail");
}

// c. Create a variable city = “Bhopal”.
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”

let city = prompt("Enter your city");
if (city == "Bhopal") {
  console.log("MP");
} else if (city == "Delhi") {
  console.log("Capital");
} else {
  console.log("Unknown City");
}

// d. Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.

let score = prompt("Enter your score");
console.log(score > 35 ? "Pass" : "Fail");

// e. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }

let temperature = prompt("Enter your temperature");
console.log(temperature > 30 ? "Hot" : "Pleasant");

// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.

let day = prompt("Enter your day");
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
}

// g. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”

let age1 = prompt("Enter your age");
let country = prompt("Enter your country");
if (age1 > 18 && country == "India") {
  console.log("Eligible for Vote");
} else {
  console.log("Not Eligible");
}