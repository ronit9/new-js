//1. Write a javascript Program to two variable addition, subtraction, multiplication, division .(compulsory user input)

// var a= parseInt(prompt("enter valur of A:="));
// var b= parseInt(prompt("enter valur of B:="));

// document.write(`<h1>a:-${a}</h1>`);
// document.write(`<h1>b:-${b}</h1>`);

// document.write(`<h1>addition:- ${a+b}</h1>`);
// document.write(`<h1>subtraction:- ${a-b}</h1>`);
// document.write(`<h1>multiplication:- ${a*b}</h1>`);
// document.write(`<h1>division:- ${a/b}</h1>`)

//2. Write a javascript Program to perform a swapping of two variables.(compulsory user input)

// a= a+b;
// b= a-b;
// a= a-b;

// document.write(`<h1>a:-${a}</h1>`);
// document.write(`<h1>b:-${b}</h1>`);

//3. Write a javascript program to convert temperature from degree Celsius to Fahrenheit.(compulsory user input)
// var c =
// formula : c * 9/5 + 32

// var c=parseInt(prompt("enter value of c:-"));
// var  ans= c * 9/5 + 32;

// document.write(`<h1>${ans}</h1>`);

// 4. Write a javascript Program to find gross salary.(compulsory user input)
// Ex. Base Salary: 100 RS, HRA=10%, DA=5%, TA=8%.

// var salary=parseInt(prompt("enter your salary:-"));
// var hra = parseInt(prompt("enter yopur HRA:-"));
// var da=parseInt(prompt("enter your DA:-"));
// var ta=parseInt(prompt("enter your TA:-"));

//     var HRA=(salary/100)*hra;
//     var DA=(salary/100)*da;
//     var TA=(salary/100)*ta;

//     var gross = salary+HRA+DA+TA;

//     document.write(`<h1>gross salary is ${gross}</h1>`);

//5. Write a javascript Program to find circle area.(compulsory user input)(formula  3.14 * r * r)

// var r=parseInt(prompt("enter value for 'r':- "));

//  var ans = 3.14 * r *r;

//   document.write(`<h1>area is ${ans}</h1>`);

//6. Write a javascript Program to find triangle area.(compulsory user input)(formula  0.5 * b * h)

// var b = parseInt(prompt("enter value for base:-"));
// var h = parseInt(prompt("enter value for height:-"));

// var ans = 0.5 * b * h;

// document.write(`<h1>area is ${ans}</h1>`);

//7. Write a javascript Program to find  rate of interest.(compulsory user input)(p * r  * n / 100)

var p = parseInt(prompt("enter value fort p:-"));
var r = parseInt(prompt("enter value fort r:-"));
var n = parseInt(prompt("enter value fort n:-"));

var ans = (p * r * n) / 100;

document.write(`<h1>rate of interest is ${ans}</h1>`);
