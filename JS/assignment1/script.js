/*
Js assignment 27-oct-2025
Introduction to JavaScript
1. Open any website → right-click → Inspect → Console → type: document.title
2. Try: alert("Hello from Sheryians!")
3. Write one line in your own words: “If HTML is skeleton, CSS is clothes — what
is JS?”
4. Write one example of where you’ve seen JS being used (like popup,
animation, etc.)
*/

//2
alert("Hello from Sheryians!");
//
//4 Js is the brain
//5 Popup messages, interactive forms, animations, dynamic content updates


/*
Goal: Observe what JS does on a webpage.
Linking JavaScript Files
1. Create an HTML file and link JS file like this:
2. In app.js, write: console.log("Connected!")
3. Move the script tag to the section and see what happens.
4. Try using defer:
<script defer src="script1.js"></script>
<script defer src="script2.js"></script>
*/
//2
console.log("Connected!");



/*
Goal: Understand how to connect JS with HTML.
Running JS in Browser Console
1. Open console and type: 2 + 2
2. Type: alert("Hi")
3. Try: prompt("Your name?")
4. Type: let city = "Bhopal"; city
*/
//1
//2 + 2;
//2
alert("Hi");
//3
// prompt("Your name?");
//4
let city = "Bhopal";
city;


/*
Variables and Keywords (var, let, const)
1. Declare your name using all three: var a = “Harsh”; let b = “Sheryians”; const c
= “School”
2. Try reassigning them: a = “Updated”; b = “Updated”; c = “Updated”
3. Create a variable inside curly braces using let and log it outside.
4. Predict output before running.
5. Write 3 examples where const is useful (like PI, baseURL, etc.)
*/
//1
var a = "Dikshit";
let b = "Sheryians";
const c = "School";
//2
a = "Updated";
b = "Updated";
// c = "Updated"; 
//3
{
    let d = "Inside Block";
}
//4
// console.log(d); 
//5
//Fixed number, date and time, configuration settings


/*
Logging and Interaction (console, alert, prompt)
1. Log name, age, and city using console.log, console.info, console.warn.
2. Use prompt to take user’s name → alert a welcome message.
3. Log typeof of user’s input.
4. Try: let age = prompt("Enter age:"); console.log(age + 5); observe what happens.
*/

//1
console.log("Dikshit");
console.info(25);
console.warn("Bhopal");
//2
let userName = prompt("Enter your full name:");
//3
console.log(typeof userName);
//4
let age = prompt("Enter age:"); 
console.log(age + 5);


/*
Working with Strings
1. let msg = “I love Sheryians”;
2. Try msg.slice(2, 6) and predict the result.
3. Try msg.split(" ") and count words.
4. Try msg.replace("love", "study at").
5. Template string example: let name = “Harsh”; console.log(`Hey ${name}, welcome to JS!`)
6. Check if msg.includes("love")
*/
//1
let msg = "I love Sheryians";
//2
console.log(msg.slice(2, 6));
//3
console.log(msg.split(" ").length);
//4
console.log(msg.replace("love", "study at"));
//5
let name = "Dikshit";
console.log(`Hey ${name}, welcome to JS!`);
//6
console.log(msg.includes("love"));


/*
Statements and Semicolons
1. Remove semicolon and check if code still runs.
2. Combine two statements in one line and see if it breaks.
3. Write 3 console.log statements without semicolons and predict output.
*/
//1
console.log("No semicolon here")
//2
// console.log("First statement") console.log("Second statement")
//3
console.log("First log")
console.log("Second log")
console.log("Third log")    


/*
Comments
1. Write your name as a single-line comment.
2. Write a 3-line comment explaining what your code does.
3. Hide one console.log using comment and check output.
*/
//1
// Dikshit Nath
//2
let num1 = 50; // here we are declaring a variable num1 and assigning it the value 50
let num2 = num1 + num1; // here we are declaring another variable num2 and assigning it the value of num1 plus num1
let num3 = num1 - num2; // here we are declaring a third variable num3 and assigning it the value of num1 minus num2
//3
// console.log("This log is hidden by comment");


/*
Expressions vs Statements
1. Type 5 + 10 (expression).
2. Type let x = 10; (statement).
3. Which one gives a value immediately?
4. Try: let y = (5 + 10) * 2; console.log(y)
5. Write one line explaining the difference between both.
Data Types
*/
//1
//5+10
//2
let x = 10;
//3
//The expression gives a value immediately  
//4 
let y = (5 + 10) * 2;
console.log(y);
//5
//An expression produces a value, a statement performs an action.


/*
1. let age = 25; let name = “Harsh”; let isStudent = true; let skills = [“JS”, “HTML”]; 
let user = { city: “Bhopal” }; let x = null; let y; let z = Symbol(“id”)
2. Log typeof each variable.
3. Change one value and recheck typeof.
4. Try adding a number and string together.
*/
//1
let age2 = 22;
let name1 = "Dikshit";
let isStudent = true;
let skills = ["JS", "HTML"];
let user = { city: "Bhopal" };
let x1 = null;
let y1;
let z = Symbol("id");
//2
console.log(typeof age2);
console.log(typeof name1);      
console.log(typeof isStudent);
console.log(typeof skills);
console.log(typeof user);
console.log(typeof x1);
console.log(typeof y1);
console.log(typeof z);
//3
age2 = "Twenty Two";
console.log(typeof age2);
//4
console.log(5 + "10");


/*
Special Values
1. Log 1 / 0, 0 / 0, Number("abc"), undefined + 1
2. Write what appears (Infinity, NaN, etc.)
3. Write one line explaining when to use null vs undefined.
Primitive vs Reference
*/
//1
console.log(1 / 0);
console.log(0 / 0);
console.log(Number("abc"));
console.log(undefined + 1);
//2
//Infinity, NaN, NaN, NaN
//3
//Use null to indicate intentional absence of value, undefined indicates variable declared but not assigned.


/*
1. let x = 5; let y = x; y = 10; console.log(x, y)
2. let obj1 = { name: “Harsh” }; let obj2 = obj1; obj2.name = “Sheryians”; console.log(obj1.name)
3. Observe which one changes together.
4. Draw memory boxes on paper to visualize difference.
*/
//1
let x3 = 5;
let y3 = x3;
y3 = 10;
console.log(x3, y3);
//2
let obj1 = { name: "Dikshit" };
let obj2 = obj1;
obj2.name = "Sheryians";
console.log(obj1.name);
