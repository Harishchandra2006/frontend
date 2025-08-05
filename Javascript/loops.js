// for(let i = 0; i<=10; i++){
//     console.log(i);
// }

// loop through arrays
//let arr = ['Eat', 'Sleep', 'Code', 'Repeat']

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

//for...of loop (strictly for arrays)
// for(let myArr of arr){
//     console.log(myArr);
// }


//for...in loop(strictly for objects)
// let obj = {
//     phy : 80,
//     chem : 90,
//     maths : 100,
// }
// for(let key in obj){
//     console.log(key);
//     console.log(obj[key]);
// }

// let arr = [90, 80, 56, 30, 60, 100];

// for(let i = 0; i<arr.length; i++){
//     if(arr[i] < 33){
//         break;
//     }
//     console.log(arr[i]);
// }
// let arr = [90, 80, 56, 30, 60, 100];

//  for(let i = 0; i<arr.length; i++){
//      if(arr[i] < 33){
//          continue;
//      }
//      console.log(arr[i]);
//  }

// const c = 30;
// var a = 10;
// let b = 20;
// console.log(c);
// b = c;
// a = b + c;
// console.log(a);

//higher order function
// functions that operates on other function,either by taking as arguments 
// ,or by returning them

// function a(x){
//     console.log("Inside a")
//     x();
// }// Higher Order Function 
// function b(){
//     console.log("Inside b")

// } // call back function 
// a(b);
 //CALL BACK FUNCTION-->it is a function that is passed into another function and then invoked inside that function



 //LEXICAL SCOPE
 //rule in js that if we have a parent function and then we declare a var then our child can access it but reverse is not possible.
// function a(){
//     let x=20;
//     function b(){
//         let y=x+30;
//         console.log(y)
//     }
//     b();
// }
// a();


// function a(){
//     let x=y+20;
//     console.log(x)
//     function b(){
//         let y=30;
//         console.log(y)
//     }
//     b();
// }
// a();


// function a(){
//     let x=20;
//     function b(){
//         let y=x+30;
//         console.log(y);
//     }
//     function c(){
//         let z=x+40;
//         console.log(z);
//     }
//     b();
//     c();
// }
// a();