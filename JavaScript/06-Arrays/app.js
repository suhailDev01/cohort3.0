
// //Access value
let fruits = ["apple", "mango","banana"]
// console.log(fruits[0])

// //updatate value of array
fruits[1]= "orange";
console.log(fruits)

// //Q1. Ek students array banao jisme 5 student names ho.
let students = ["ankit", "shukrullah", "nilesh","anurag","jugesh"]
console.log(students)

// //Q2. Array ke first aur last element ko print karo.
console.log(students[0] ,students [students.length-1])

// //Q3. Ek array banao jisme string, number aur boolean ho. Har element ka typeof print karo.
let arr = ["mehtab", 23, true]
console.log(typeof arr[0],typeof arr[1], typeof arr[2])

// //create a array and print 3rd value of array
let numbers = [ 10,20,30,40,50]
console.log(numbers[2])

// //create a array and replace anyone value
let skills = ["html", "css", "javascript"]
skills[1]= "tailwind css"
console.log(skills) 

// //Length
let numbers1 = [32,43,82,20,32,23]
console.log(numbers1.length)

// //last element
console.log(numbers1[numbers1.length -1])
//check array is empty or not
let users = []
if(users === 0){
    console.log("array is empty")
}
else{
    console.log("array is not empty")
}

// //push()  end me add
let arr2 = [33,53,43]
arr2.push(98)
console.log(arr2)

// let empty = [];
empty.push(23,3,83,93,32)
console.log(empty)
let arr3 = [20,30]
let arr4 = arr3.push(40, 87, 50)
console.log(arr3)
console.log(arr4)

// //pop()  End se remove
let num3 = [ 32, 33,55]
let num4 = num3.pop()
console.log(num3)
console.log(num4)

// // //map() =>existing array ke har elment ko transform karke new array banana
 let num = [1, 2, 3, 4];
 let doubled = num.map((n)=>{
    return ( n * 2)
 })
 console.log(num)
 console.log(doubled)

//  //Har number ko 2 se multiply karke new array banao.
 let numbers = [2,4,6,8]
 let multi = numbers.map(num => {
    return ( num*2)
 })
 console.log(multi)
 console.log(numbers)

//  //Har number mein 5 add karo.
 let num1 = [ 5,10,15]
 let ans = num1.map(num =>{
    return num +5
 })
 console.log(ans)


//  //New array banao jisme saare names uppercase hon.
 let names = ["suhail", "rahul","aman"];
 let upperCs = names.map(up => {
       return up.toUpperCase()
 })
 console.log(upperCs)

//  //filter() => Condition satisfy karne wale elements ko select karke new array banana.

 let num2 = [20,10,25,30,40,53,29,87]
 let Cd = num2.filter(gt =>{
    return gt > 20;
 })
 console.log(Cd)

//  //Sirf even numbers ka new array banao.
 let nm = [10,15,20,25,30,32,24,45]
 let even = nm.filter(ev =>{
    return (ev % 2 ==0)
 })
 console.log(even)

//  //Sirf 18+ ages nikalo.
 let age = [ 12,43,53,23,23,19,14]
 let checkAge = age.filter(function(aged){
    return aged > 18
 })
 console.log(checkAge)

//  //find()  => Condition satisfy karne wala first element return karta hai.
 let number1 = [20,19,14,24]
 let ans1 = number1.find(num =>  num > 20
    );
 console.log(ans1)

//  //First "Aman" find karo.
 let name = [ "sharthak","aman","krishna","ritik","aman"]
 let findName = name.find(nm =>
     nm ==="aman")

     console.log(findName)

//      //some() => atleast one condition true then return true otherwise false

//      //Check karo kya koi number 35 se greater hai.
     let number2 = [23,43,42,13,32,14,15]
     let Greater35 = number2.some(nm => nm > 35)
      console.log(Greater35)

//       //Check karo kya "Admin" user exist karta hai using some().
      let user = ["vikash","prinsh","manisha","nazmin"]
      let checkAdmin = user.some(ad => ad ==="admin")
      console.log(checkAdmin)

//EVERY() => ALL CONDITION MUST BE TRUE THEN RETURN TRUE OTHERWISE FALSE RETURN
let num = [ 12,32,98,32];
let result = num.every(nm => nm > 49)
console.log(result)

//Check karo kya saare users 18+ hain.
let ages = [20, 25, 30, 17];
let checkAge = ages.every(function(value){
    return value >18
})
console.log(checkAge)

//reduce()  => array ke sare element ko process karke ek final result banana 
let numbers = [21,32,10,15,32]
let sum = 0;
let sum1 = numbers.reduce((acc , current)=>{
    return acc + current
},0)
console.log(sum1)
//visualization
// Initial acc = 0   like in other way we declare let sum = 0; like this acc work here

// 0 + 10 = 10
// 10 + 20 = 30
// 30 + 30 = 60

// reduce() se product nikalo:
let num1 = [ 2, 5, 8]
let ans = num1.reduce((acc, current)=>{
   return acc * current
},1)
console.log(ans)

//forEach() => Array ke har element par koi action perform karne ke liye use hota hai.
let eachValue = [20,10,20,30,40]
eachValue.forEach(num =>{
   console.log(num)
})

let name = ["sheryians", "Sharthak","ritik", "devendra", "harsh"]
name.forEach(greet =>{
   console.log('hello', greet)
})