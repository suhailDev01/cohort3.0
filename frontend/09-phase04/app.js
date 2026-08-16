 // 'use strict'
console.log(this)

//1.2 — Regular Functions mein this
function demo(){
    console.log(this);
}
demo();

// 1.2 — Regular Functions mein this
const user = {
    name:"sheryians",
    specialization:"onlinne teaching",
    greet(){
        console.log("hello," + this.name)
    }
}
user.greet();

//1.4 — Arrow Functions mein this (Lexical this) ⭐
 const student = {
    name:"Akarsh",
    age:32,
    course:"b.tech",
    studentDetail:() =>{
        console.log(this.name)   // Arrow function ka apna this hota hi nahi. Wo apne aas-paas (enclosing scope) se this udhaar le leta hai. Isko bolte hain lexical this.
    }
}
student.studentDetail();
  // call()
const student1 ={
    firstName:"ritik ",
    lastName:"kumar",
    getIntro:function(){
        console.log(this.firstName +" "+this.lastName)
    }
}
const student2 ={
    firstName:"nilesh",
    lastName:"singh",
    
}
student1.getIntro.call(student2)

const std ={
    firstName:'nikhil',
    lastName:'kumar',
    java:78,
    dmbs:43,
    webdevelopment:58,
}
const std1 ={
    firstName:'parwez',
    lastName:'alam',
    java:78,
    dmbs:65,
    webdevelopment:76,
}
const std2 ={
    firstName:'nazmin',
    lastName:'khan',
    java:68,
    dmbs:53,
    webdevelopment:78,
}
var getResult = function(){

console.log(`${this.firstName} ${this.lastName}, you got ${(this.java + this.dmbs +this.webdevelopment)/3}% marks`)
}
getResult.call(std2)

const person = {
    name:"munim",
    age:34,
    greet(){
        console.log(`${this.name} ${this.age}`)
    }
}
const person2 ={
    name:"yuraj",
    age:32,
}
person.greet.call(person2)

//apply
const myDetail = {
    name:"suhail"
};
function showDetail(age, course){
    console.log(this.name)
    console.log(age)
    console.log(course)
}
showDetail.apply(myDetail,[21,"bca"])

 //bind
const car ={
    name:"suzuki"
};
function carDetail(){
    console.log("hello," + this.name);
}
const showDetails = carDetail.bind(car);
showDetails();

// JavaScript Advanced Concepts - Coding Problems 

// Problem 2: Object Method Context
const user = {
    name:"Anubhav",
    Greet(){
        console.log("Hello "+ this.name)
    }
}
user.Greet()

//Problem 3: Arrow Function vs Regular Function
const user1 ={
    name:"Rahul",
    showName:function(){
        console.log("hello "+this.name)   //regular function
    }
}
user1.showName()

const user2 ={
    name:"Karthik",
    greetShow: () => {
        console.log("hello "+this.name)   //arrow  function
    }
}
user2.greetShow()

// ## Problem 4: Nested Callback Problem
const person = {
    name:"Ankit",
    hobbies:["Coding", "Gaming", "Reading"],
   }
 person.hobbies.forEach((hobby) =>{
        console.log(person.name +" "+ "likes"+" " + hobby)
    })

// Problem 6: Borrow a Method using call()
const student1 ={
    name:"Niyaz",
    getIntro:function(){
         console.log(`Hi, I am ${this.name}`)
    }
}
const student2 ={
    name:"Farheen"
}
student1.getIntro.call(student1)
student1.getIntro.call(student2)

//Problem 7: apply() with Array Arguments
const geust = {
    name:"Priyanka",
    getDemo:function(city, country){
        console.log(`I am ${this.name} from ${city}, ${country}`)
    
    }
}
geust.getDemo.apply(geust,["Indore","India"])

// Problem 9: Custom Calculator
const calculator = {
    value:100,
     add: function (num){
        console.log(this.value + num)
    }
}
calculator.add.call(calculator, 70)