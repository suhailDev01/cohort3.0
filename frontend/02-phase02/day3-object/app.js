let person = {
    name:'Suhail Khan',
    age:22,
    city:"Nautanwa",
    isStudent:true
}
console.log(person.name)  //Dot Notation
console.log(person["age"]) //Bracket Notation

//CRUD => Create upadate delete
person.cgpa=7.8;  //adding value
console.log(person)

delete person.age;
console.log(person)
  
// taking input from the users
var username = prompt('enter your name:')
var age = Number(prompt('enter your age:'))
var city = prompt('enter your city:')
 var obj = {username, age, city}
 console.log(obj)

let user = {
    name:'aman',
    age:53,
    isStudent:false,
    profession:'worker'
}

console.log(Object.values(user))
console.log(Object.entries(user))
console.log(Object.keys(user))
 //create an object and array inside object
var obj1 = {
    name:"virat kohli",
    age:37,
    isMarried:true,
    profession:"cricket",
    skill:['batting', 'dancing', 'singing','leadership','captaincy'],
    spouse:{
        name:'anuska sharma',
        age:34,
        profession:'actor',
        skills:['dancing','singing','cooking',]
    }
}
console.log(obj1.spouse.skills[2])

 //function inside object that is called method
let car = {
    name:"BMW",
    brand:"x5",
    showdetails:function(){
        console.log("car details:")
    }

}
console.log(car)

let user = {
    name:"rahul",
    greet:function(){
        console.log("Welcome:"+" "+ user.name)
    }
}
user.greet()

 //create an object
let laptop = {
    name:"dell",
    price:55000,
    showPrice:function(){
        console.log("price is"+" "+laptop.price)
    }
}
laptop.showPrice()

 //create calculator using object
let calculator = {
    add:function(a,b){

    return a + b
    },
    sub:function(a,b){

    return a - b
    },
    mul:function(a,b){

    return a * b
    },
    div:function(a,b){

    return a / b
    },
    sqrt:function(a){

    return a*a
    },
    cube:function(a,b){

    return a**a
    }
    
}
console.log(calculator.add(5,4))
console.log(calculator.sub(5,4))
console.log(calculator.mul(5,4))
console.log(calculator.div(5,4))
console.log(calculator.sqrt(3))
console.log(calculator.cube(3))

//shalow copy and deep  basic understanding of object
let obj1 = {
    name:"Sheryans",
    city:"bhopal",
    profeesion:{
        teaching:"offline"
    }
};
let obj2 = structuredClone(obj1)
obj1.name ="rahul"
obj2.profeesion.teaching="online"
console.log(obj1)
console.log(obj2)


// javascript begginer practise  question (phase 2 object)

// create an objects with name age course and all value prints
let student ={
    name: "aman",
    age: 23,
    course:"B.Pharma"
}
console.log(Object.values(student))
let car = {
    name:"bmw",
    model:"x5",
    year:2023
}
console.log(car.name)  //notation
console.log(car.model)
console.log(car["name"])   //bracket
console.log(car["model"])

 //Change the age of a user from 20 to 25.
const user = {
    name:"aubhav",
    age:22
}
user.age=23;
console.log(user)
 // add the value of isadmin = if yes then true otherwise false
user.isAdmin=true
console.log(user)

//delete password from given object
const account = {
    username:"atif",
    password:1349
}
delete account.password
console.log( account)

//Write a function that returns how many properties an object has.
let counter = {
    countername:"Mohan",
    age:43,
    profession:'counting',
    isMarried:true,
      countProperties:function(){
        return Object.keys(this).length;
             
    }
}
console.log(counter.countProperties())

// for in loop 
// find the properties using for in loop in object
let person ={
    name:"alok",
    age:24,
    course:"bca",
    college:"bdc"
}
count = 0;
for(let keys in person){
    count ++

}
console.log(count)

//print the value of properties
let user = {
    name:"ashok",
    isMarried:true,
    profession:"farmer",
    age:33
}
for(let keys in user){
    console.log(user[keys])
}

//Print all keys and values from  object.
let car = {
    name:"marcedies",
    brand:"pro five",
    model:2023,
    color:"red",
    isRunning: false
}
for(let keys in car){
    console.log(keys,car[keys])
}

//check prime or not
function isPrime(n) {
    // Write your logic here
    if(n<=1){
    
    }
    for(let i = 2; i < n; i++){
        if(n % i == 0){
            console.log("Not Prime")
        }
    }
        console.log("Prime")
  }
  console.log(isPrime(12))

//object destructuring  => object ke andar ki properties ko easily variables me nikalna.
let user = {
    name:"ritik",
    age:23,
    college:"bdc",
    branch:"computer application"
}
let {name, age, college, branch} = user;
console.log(user)

//deep copy
let product = {
    name:"kisan",
    age:44,
    course:"bca",   
     country:"india",
    address:{
        city:"nautanwa"
    }
}
let product2 = {...product};    //this is a shallow copy but shallow copy does not work nested object 
//isiliye ab ham address ke liye deep copy ki need padegi
// let str = JSON.stringify(product)
// let product2 = JSON.parse(str)
product2.age=53;
product2.address.city="mohnapur"
console.log(product)
console.log(product2)

let obj ={
    name:"kartik",
    city:"telangana",
    country:"india",
    frontend:["html","css","javascript"]
}
let obj2 = {...obj}
obj2.name="rohit"
obj2.frontend.push("react")
console.log(obj)
console.log(obj2)

// freeze() = no update no delete or no add
let person = {
    name:"raveena",
    age:46,
    profession:"actor"
}
// Object.freeze(person)

// seal() => it's work only updation
Object.seal(person)
person.name="madhuri"
delete person.profession
console.log(person)
