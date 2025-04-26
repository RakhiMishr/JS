 let x = mishraFunction(4, 3);

 function mishraFunction(a, b) {

   return a * b;
}
console.log(x);

function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  }
  console.log(sum(1, 2, 3, 4)); 

  // let a = 15;
// let b = 30;

// sum(a, b);

// function sum(a, b) {
//     console.log(a + b);
//   }

// sum(50, 50);

// function revserNumber(number) {
//     let r = "";
//     while (number > 0) {
//       r += number % 10;
//       number = Math.floor(number / 10);
//     }
//     return r;
//   }

// let n = 7874;

// let rev= revserNumber(n)
// console.log(rev ==n)

// let fn=revserNumber;

// console.log(fn(456))

// let fn = function (number) {
//   let r = "";
//   while (number > 0) {
//     r += number % 10;
//     number = Math.floor(number / 10);
//   }
//   return r;
// };

// function sum(b , ...a) {
//     console.log(a);
//     console.log(b);

// }

// function sum( ) {
//    console.log(arguments[0])
// }

// sum(45,4,65)
// sum(45,5)
// let sum = (a, b) => {
//   console.log(a + b);
// };

// sum(45,4,65)

// function squre(n){
//     return n*n;
// }
// let squre = (n) => {
//   return n * n;
// };
// let squre = n => n * n;  //Function

// console.log(squre(4));

// function first(){
//     console.log("first Function")

//     function second(){
//         console.log("Second")
//     }
//     second()
// }

//  let f= first;
// f();

// function first(){
//     console.log("first Function")

// }

// function  fn(a){
//     a();
// }
//Function as Arguments
// fn(first)

// //Return function

// function outer() {
//   console.log("Outer Function");
//   function inner() {
//     console.log("inner Function");
//   }

//   return inner; //return Statement
// }

// // let fn = outer();

// // fn()
// // fn()
// outer()();
// // console.log(fn)

// default parameters

/*function sum(a=0, b=10) {
    console.log(a );
    console.log(b)
  }
  
  sum(41,70);
  How do you define a function using the function declaration syntax in JavaScript?

How can you create a function using a function expression in JavaScript?

What is a function expression assigned to a variable, and how does it differ from a function declaration?

How do you create an anonymous function in JavaScript, and how can it be used?

What is an arrow function in JavaScript, and how do you define it?

How do you use a function as a parameter for another function?
How can you define a function with default parameters in JavaScript?

How do you return a function from another function in JavaScript?