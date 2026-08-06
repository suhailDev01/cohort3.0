var num ;
console.log(num)

let num1 ;
console.log(num1)

//Assignment is mondatory
// const num2;
// console.log(num2)
// redeclare hoga in var
var name = "suhail";
var name = "alok"
console.log(name)
// Error using let for redeclaration
// let age = 23;
// let age = 24;
// 

//Reassign both let and var
let fruits = "mango"
fruits = "apple"
console.log(fruits)

var fruit = "banana"
fruit = "graps"
console.log(fruit)
 
//no redeclration no reassign in const
// const country = "usa"
// country = "england"
// console.log(country)

// const age = 43;
//    age = 23;
//    console.log(age)

//predict output
// let x = 10;
// let x = 20;
// console.log(x)

var y = 10;
var y = 20;
console.log(y)

//Naming rules in variable
// Valid

let firstName;
let age2;
let _price;
let $salary;
console.log(firstName)

// Invalid

// let 2age;
// console.log(2age)
// let first-name;
// let let;
let score = 50;
score = 20;
console.log(score)
let marks = 78;
marks+=8;
console.log(marks)

//swapping two values using temporary variable
let a = 10;
let b = 20;
let temp = 0;
temp = a;     // temp = 10
a = b;        // a = 20;
b = temp;     // b = 10
console.log(a ,b)


 /// scope 
 //Global scope
 let name1 = "suhail";
 function greet(){
    console.log(name1)
 }
 console.log(name1)
 console.log(name1)
 
greet()

//block scope
//{} ke andar banaya variable sirf usi block ke andar chalega.
{
    let age = 20;
    console.log(age)
}
// console.log(age)   // reference error


//function scope
// function ke andar bana ho to sirf function ke andar hi milega.
function demo(){
    let nameF = " sheryians"
    console.log(nameF)
}
// console.log(nameF)   //reference error
demo()


























// {
//     var a = 10;
//     let b = 20;
//     let ab = 30;
// }
// console.log(a)
