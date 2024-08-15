
// for each
// const studentNames = ["Jack", "Rose", "Rocky", "Kemi", "Karnin"];

// studentNames.forEach(function (value){

//     document.write(`<div class="card"> ${value} </div>`);

// });


// for in loop

// for(let value in studentNames){
//     document.write(`<div class="card"> ${studentNames[value]} </div>`);
// }

// for(let i =1; i <= 10; i += 2){

//     if (i == 5) break;

//     document.write(i + "<br>");

// }

// const letters = new Set(["a","b","c", "a"]);

// console.log(letters);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50
//   };

//   let {firstName, lastName, age = 150, roll = 100} = person;

//   document.write(age);

//   if(s){
//     let a = 8;

//   }

//   a = 5

"use strict"


// let a = 10;

// document.write(a);

// function sayHi(){
//     document.write("Hello Buddy!");
// }

// function add(n1, n2){

//     document.write(n1+n2);

// }

let add = (n1, n2) => document.write(n1+n2);

let sayHi = () => document.write('Hello Buddy!');

sayHi();
add(20, 10);
