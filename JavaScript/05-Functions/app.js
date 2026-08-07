// function Declration
function greet(name){
    console.log("hello" +" "+ name)
}
greet("Aman")  //hello Aman
greet("Priya")  //hello Priya


// //function Expression
 const greet1 = function(name){
    console.log("hello" +" "+name)
 }
 greet1("Rahul")

//  //Anonymous function
 const sayHi = function(){
    console.log("Hii guys...");
 };
sayHi()
//  //Arrow function
 let add = (a, b) =>{
    sum = a + b;
    return sum;
 }
 let result = add(8, 4)
 console.log( result)


// default parameter 
function demo (name = "guest") {
   console.log(name)

}
demo("sheryians")


//rest parameter in function
function number(num, num1, num2, num3 , ...rest){
   console.log(num, num1, num2, num3 , ...rest)
}
number(7,8,99,32,5,9,83,89,3,4,8,98)


// spread operator
let a= {
   name:"rohan",
   age: 34
}
let b = {...a};
b.age = 23;
b.city = "saketpur"
a.name = "ramu"
console.log("a->", a)
console.log("b->",b)

//merge array 
let frontend = ["html", "css", "javascript"]
let backend = ["nodejs","expressJs", "mongoDB"]
let fullStack = [...frontend ,...backend]
console.log(fullStack)

//update
let values = [2,3,9,5,8,]
let updateValues = [...values, 6,9,5,3]
console.log(updateValues)

//Object copy
let user = {
   name: "ankit",
   age: 32
}
let userSecond = {...user}
user.name="minakshi"
console.log("user->", user)
console.log("userSecond->", userSecond)

//merg object
let basic = {
   name:"sanni",
   age: 23
}
let extra = {
   course:"bca",
   rollNo:52,
   branch:"computer application"
} 
let profile = {...basic, ...extra}
console.log(profile)

//create a userProfile function , which takes 2 arguments 1 optional with default value and return name, age, city (opt)
function userProfile(name, age, city ="kushinagar"){
   let obj={
      name:name,
      age: age,
      city:city
   }
    return obj
}
console.log(userProfile("Devendra", 28,))

//create a bill calculator function jisme user dishes ka price bhejega as argument, return a total price
function calculatorPrice(...rest){
   let sum = 0;
   for(let i = 0; i<rest.length; i++){
      sum = sum + rest[i]
   }
   return sum
}
console.log(calculatorPrice(190, 30, 160))

// check the password lenth and return the result
//rules => if password lenth is greater than 8 then return strong 
 // if ...... smaller than 8 then return weak
let checkLength = (password)=>{
       if( password.length > 8){
         return "strong"
       }
       else{
         return "weak"
       }
}
let finalLength =checkLength("Mohammad")
console.log(finalLength)
 //function as first class citizen
 // imp definition: In JavaScript, functions are first-class citizens because they can be assigned to variables, passed as arguements, returned from other functions, and stored in objects or arrays, just like any other value.
 
//  //pas a function as an argument (callback)
 function sayHi1(){
    console.log("hi")/
 }
 function execute(fn){
    fn();
 }
 execute(sayHi1);

//  //store a function inside an object
 let user = {
    name:"sharthak",
    age: 33,
    profession:function(){
       console.log("teaching")
    }
 }
 user.profession()

//  //call back function
 function greet3(name){
    console.log("hello"+" "+name);
 }
 function processUser(callback){
    let username = "suhail"
    callback(username)
 }
 processUser(greet);

//  // other example 
 function userProcess(name,callback){
    console.log("proceessing user"+" "+name)
    callback(name);
 }
 function welcome(name){
    console.log("welcome"+" "+name);
 }
 userProcess("Nazmin", welcome);


 //Create a function named greet that prints "Hello World".
 const greet = () =>{
    console.log("Hello World")
 }
 greet()

//  //Create a function add(a, b) that returns the sum.
 function add(a, b){
    sum = a + b;
    return sum;
 }
 let result = (add(8,5))
 console.log(result)

//  //Write a function to calculate the square of a number.
 function findSquare(n){
    let square = n*n;
    return square
 }
 console.log(findSquare(6))

//  //Create a function that checks whether a number is even or odd.
 let checkEvenOdd = (n) =>{
    if(n % 2 == 0){
        return "Even"
    }
    else{
        return "Odd"
    }
 }
 console.log(checkEvenOdd(9));

//  //Write a function that converts Celsius to Fahrenheit.
 function CelsiusTofarenheit(n){
    let Celsius = 0;
    farenheit =( (n*9/5)+32)
    return farenheit;
 }
 console.log(CelsiusTofarenheit(35))

//  //Create a function with default parameter "Guest".
 function greeting(name="Guest"){
    console.log("hello"+" "+name)
 }
 greeting()

