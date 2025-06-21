// 1.Write a JavaScript program to check number positive and negetive?

// var a = parseInt(prompt("enter your number:-"));

//  if(a<0){
//      document.write(`<h1>${a} is negetive number</h1>`);
//  }
//  else if(a>0){
//      document.write(`<h1>${a} is positive number</h1>`);
//  }

//2.Write a JavaScript program to check number even and odd.

// var a = parseInt(prompt("enter your number:-"));

// if (a % 2 == 0) {
//   document.write(`<h1>${a} is even number</h1>`);
// } else {
//   document.write(`<h1>${a} is odd number</h1>`);
// }

//3.Write a JavaScript program to check year is leap year or not leap year.

// var year = parseInt(prompt("enter your year:-"));

// if (year % 4 == 0) {
//   document.write(`<h1>${year} is leap year</h1>`);
// } else {
//   document.write(`<h1>${year} is not leap year</h1>`);
// }

//4.Write a JavaScript program to find which number is greter in 4 numbers using ladder if else.

// var a = parseInt(prompt("enter a:-"));
// var b = parseInt(prompt("enter b:-"));
// var c = parseInt(prompt("enter c:-"));
// var d = parseInt(prompt("enter d:-"));
// var e = parseInt(prompt("enter e:-"));

// if (a > b && a > c && a > d && a > e) {
//   document.write(`<h1>${a}is max</h1>`);
// } else if (b > c && b > d && b > e) {
//   document.write(`<h1>${b}is max</h1>`);
// } else if (c > d && c > e) {
//   document.write(`<h1>${c}is max</h1>`);
// } else if (d > e) {
//   document.write(`<h1>${d}is max</h1>`);
// } else {
//   document.write(`<h1>${e}is max</h1>`);
// }

// 5.  Write a JavaScript program to decide that you eligible for voting?

// var age = parseInt(prompt("enter your age:-"));

// if (age >= 18) {
//   document.write(`<h1>you are eligible for voting</h1>`);
// } else {
//   document.write(`<h1>you are not eligible for voting</h1>`);
// }

//6.Write a JavaScript program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following


// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D 
// Percentage >= 50% : Grade E
// Percentage >= 40% : Grade F

// var physics = parseInt(prompt("enter physics marks:-"));
// var chemistry = parseInt(prompt("enter chemistry marks:-"));
// var biology = parseInt(prompt("enter biology marks:-"));
// var mathematics = parseInt(prompt("enter mathematics marks:-"));
// var computer = parseInt(prompt("enter computer marks:-"));

// var total = physics + chemistry + biology + mathematics + computer;

// var percentage = (total / 500) * 100;

// if (percentage >= 90) {
//   document.write(`<h1>your percentage is ${percentage} and grade is A</h1>`);
// } else if (percentage >= 80) {
//   document.write(`<h1>your percentage is ${percentage} and grade is B</h1>`);
// } else if (percentage >= 70) {
//   document.write(`<h1>your percentage is ${percentage} and grade is C</h1>`);
// } else if (percentage >= 60) {
//   document.write(`<h1>your percentage is ${percentage} and grade is D</h1>`);
// } else if (percentage >= 50) {
//   document.write(`<h1>your percentage is ${percentage} and grade is E</h1>`);
// } else if (percentage >= 40) {
//   document.write(`<h1>your percentage is ${percentage} and grade is F</h1>`);
// } else {
//   document.write(`<h1>your percentage is ${percentage} and grade is F</h1>`);
// }

//7. Write a JavaScript program to find month name from month number using switch case.
// Ex. User Input: 1
// Output: January

// var month = parseInt(prompt(`enter your month:-`));

// switch (month) {
//   case 1:
//     document.write(`<h1>january</h1>`);
//     break;
//   case 2:
//     document.write(`<h1>february</h1>`);
//     break;
//   case 3:
//     document.write(`<h1>march</h1>`);
//     break;
//   case 4:
//     document.write(`<h1>april</h1>`);
//     break;
//   case 5:
//     document.write(`<h1>may</h1>`);
//     break;
//   case 6:
//     document.write(`<h1>june</h1>`);
//     break;
//   case 7:
//     document.write(`<h1>july</h1>`);
//     break;
//   case 8:
//     document.write(`<h1>august</h1>`);
//     break;
//   case 9:
//     document.write(`<h1>september</h1>`);
//     break;
//   case 10:
//     document.write(`<h1>october</h1>`);
//     break;
//   case 11:
//     document.write(`<h1>november</h1>`);
//     break;
//   case 12:
//     document.write(`<h1>december</h1>`);
//     break;
//   default:
//     document.write(`<h1>invalid</h1>`);
//     break;
// }\

// 8. Write a JavaScript program to find week day from first letter of it using if else if.
// Ex. User Input: M
// Output: Monday

// var day = prompt("name");

// if (day == "m") {
//   document.write(`<h1>monday</h1>`);
// }
// else if (day == "t") {
//   document.write(`<h1>tuesday</h1>`);
// }
// else if (day == "w") {
//   document.write(`<h1>wednesday</h1>`);
// }
// else if (day == "t") {
//   document.write(`<h1>thursday</h1>`);
// }
// else if (day == "f") {
//   document.write(`<h1>friday</h1>`);
// }
// else if (day == "s") {
//   document.write(`<h1>saturday</h1>`);
// }
// else if (day == "s") {
//   document.write(`<h1>sunday</h1>`);
// }
// else {
//   document.write(`<h1>invalid</h1>`);
// }

// 10. Write a JavaScript program to create basic calculator using switch case.
// Ex. User input a,b and select choice + , - , * , / 
// a=10
// b=5
// select choice + , - , * , /
// +
// Ans = 15
// -
// Ans = 5;
// *
// Ans = 50
// /
// Ans = 2

// var a = parseInt(prompt("enter value for a:-"));
// var b = parseInt(prompt("enter value for b:-"));
// var c = prompt("enter your operator:-");

// switch (c) {
//   case "+":
//     document.write(`<h1>${a}+${b}=${a + b}</h1>`);
//     break;
//   case "-":
//     document.write(`<h1>${a}-${b}=${a - b}</h1>`);
//     break;
//   case "*":
//     document.write(`<h1>${a}*${b}=${a * b}</h1>`);
//     break;
//   case "/":
//     document.write(`<h1>${a}/${b}=${a / b}</h1>`);
//     break;
//   default:
//     document.write(`<h1>invalid</h1>`);
//     break;
// }

// 11. Write a JavaScript program to create basic calculator using ladder if else.

// var a = parseInt(prompt("enter value for a:-"));
// var b = parseInt(prompt("enter value for b:-"));
// var c = prompt("enter your operator:-");

// if (c == "+") {
//   document.write(`<h1>${a}+${b}=${a + b}</h1>`);
// }
// else if (c == "-") {
//   document.write(`<h1>${a}-${b}=${a - b}</h1>`);
// }
// else if (c == "*") {
//   document.write(`<h1>${a}*${b}=${a * b}</h1>`);
// }
// else if (c == "/") {
//   document.write(`<h1>${a}/${b}=${a / b}</h1>`);
// }
// else if (c == "%") {
//   document.write(`<h1>${a}/${b}=${a / b}</h1>`);
// }
// else {
//   document.write(`<h1>invalid</h1>`);
// }

//12.Write a JavaScript   program to input angles of a triangle and check whether triangle is valid or not.

var a = parseInt(prompt("enter value 1st angle:-"));
var b = parseInt(prompt("enter value 2nd angle:-"));
var c = parseInt(prompt("enter value 3rd angle:-"));

if (a + b + c == 180) {
  document.write(`<h1>triangle is valid</h1>`);
}
else {
  document.write(`<h1>triangle is not valid</h1>`);
}






