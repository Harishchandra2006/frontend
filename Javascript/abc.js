//JAVASCRIPT IS A SYNCHRONOUS & SINGLE THREAD LANGUAGE THAT MEANS ONE CODE AT A TIME  

//console.log("Hello World")

//There R 2 types of datatypes in javascript
//1.Primitive - Number , strings , boolean , bigint , null , undefined
//2.Non-Primitive - Array , Objects , Functions , Symbols

//Primitive datatypes r stored in stack memory
//Non-Primitive datatypes r stored in heap memeory

//let a = 10;
//let b = 20;
//console.log(a + b)

//var k = 20;
//var v = 30;
//console.log(k * v)

//const x = 40;
//const y = 10;
//console.log(x - y)

// VAR - Reassignment Possible , Redeclaration Possible
// LET - Reassignment Possible , No Redeclaration
// CONST - No Reassignment , No Redeclaration   

//JAB BHI KOI VLAUE JAATI HAI STACK POINT MEIN TOH WOH UNDEFINED HOTI HAIN

//Precedence of operators = 1.Parenthesis - []
//                          2.Exponentiation  Operators - **
//                          3.Multiplication & division R in the same precedence
//                          4.Addition & Subtraction R in the same precedence

//If two operations r in the same precedence then value is calculated from left to right

//Numbers r super flexible in javascript as in javascript there is no different data type for float & Negative numbers.

//STRING 
// let firstName= "Harishchandra";
// let lastName= "Mishra";
// let fullName= firstName + " " + lastName;
// console.log(fullName);

//Boolean
//== - when we have to check if only the value of two variables are equal.

//let score1 = 10;
//let marks = "10";
//console.log(score1 == marks)

//=== - When we have to check if the value as well as the datatype of the two variables r equal.

// let score1 = 10;
// let marks = "10";
// console.log(score1 === marks)

//lOGICAL Operators
//1.&&

//let score = 90;
//let attendance = 65;

//if(score>90 && attendance > 75){
  //  console.log('A+');
//}
//else{
  //  console.log("A");
//}

//2. || operator

//let score = 90;
//let attendance = 73;

//if(score > 90 || attendance > 73){
//    console.log('A+');
//}
//else{
  //  console.log("A");
//}

//3. ! Operator

// let score = 21;
// let isPassed = score > 33;

// if(!isPassed){
//     console.log("Fail");
// }

// //Functions
// function function_Name(){
//     //Code to run
// }

// const harish = () => {
//     //code to run
//     // we prioritize this synatax is the field of development
// }

// const groupB = function(){
//     //code to run
// }

//Undefined
//let z;
//console.log(z)

//null
//let post = null;
//console.log

//let a = 10;
//let b = 20;
//console.log(a + b);

//let c = 40;
//let d = 30;
//console.log(c*d);

//let e = 50;
//let f = 60;
//console.log(e/f);

//function sum(){
//  let a = 10;
//  let b = 20;
//  let c = a + b;
//  console.log(c)
// }
//sum();

// function sum(b){
// let a = 10;
// let sum = a + b;
// return sum 
// }
// let mummy = sum(20);
// console.log(mummy);

// function sum(b){
//   let a = 10
//   let sum = a + b;
//   console.log(sum);
// }
// sum(20);
// sum(200);
// sum(120);
// sum(239);
// sum(2646);

// const sum = (a , b) => {
//   let c = a + b;
//   return c;
// }
// let ans = sum(20 , 30);
// console.log(ans);

//objects
//It start with curly brackets and inside that we have key value pairs !!

// function compareValues(a, b) {
//   if (a == b) {
//     return "Dono values barabar hain";
//   } else {
//     return "Dono values alag hain";
//   }
// }

// methods=these are nothing but object properties that are function.
// let marks = {
//     pa : 90,
//     fnd : 100,
//     nalr : 0,
//     totalMarks : function(detainFee){
//         return 90 + 100 + 0 - detainFee;
//     }
// }
// console.log(marks.totalMarks(50))

// this = the value of this is the object itself on which the method is called.
// let marks = {
//     pa : 90,
//     fnd : 100,
//     nalr : 0,
//     totalMarks : function(detainFee){
//         console.log(this)
//         return 90 + 100 + 0 - detainFee;
//     }
// }
// console.log(marks.totalMarks(50))

// you can access properties of the object using dot notation on this keyword
// let marks = {
//     pa : 90,
//     fnd : 100,
//     nalr : 0,
//     totalMarks : function(detainFee){
//         console.log(this)
//         return this.pa + this.fnd + this.nalr - detainFee;
//     }
// }
// console.log(marks.totalMarks(50))

// string methods

// let firstName = "Harishchandra";
// console.log(firstName.length);
// let firstName = "Harishchandra";
// console.log(firstName.toUpperCase());
// let name = "     Harishchandra mishra       ";
// console.log(name.trim());
// let firstName = "Harishchandra";
// console.log(firstName.includes('pak'));

// number Methods
// Math.PI

// console.log(Math.ceil(3.4)) //4
// console.log(Math.floor(3.4)) //3

// let todo = ['buy groceries', 'complete assignement', 'smoke marlboro']
// console.log(todo.length);

// let todo = ['buy groceries', 'complete assignement', 'smoke marlboro']
// todo.push('Sleep')
// console.log(todo);

// let todo = ['buy groceries', 'complete assignement', 'smoke marlboro']
// let removeditem = todo.pop();
// console.log(todo);
// console.log(removedItem)

// let todo = ['buy groceries', 'complete assignement', 'smoke marlboro']
// todo.unshift('eat')
// console.log(todo);

// let todo = ['buy groceries', 'complete assignement', 'smoke marlboro']
// let removeditem = todo.shift();
// console.log(todo);
// console.log(removedItem)

// let todo = ['buy groceries', 'complete assignement', 'smoke marlboro']
// console.log(todo.includes('smoke marlboro'))

