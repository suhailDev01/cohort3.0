console.log('synchronous')

 //Synchronous => order me work karta h
console.log("Start")
let a = 42;
let b = 23;
let c = a + b;
function add(){
    console.log(c)
}
add();

console.log("End")

// asycnrounous => delay
setTimeout(function(){
    console.log(1)
},5000)
setTimeout(function (){
    console.log(2)
},1000) 

setTimeout(() => {
      console.log(3)
},3000);

var api = fetch('https://jsonplaceholder.typicode.com/todos/1')
console.log(api)

 // promise bnaya
let p1 = new Promise((resolve, reject)=>{
    let val = false
    if(val){
        console.log("true")
    }
    else{
        console.log("false")
    }
})

function orderFood(){
    let myOrdor = new Promise(function (resolve, reject){
        console.log("your order is comming");
        let orderStatus = true
        setTimeout(function(){
            if(orderStatus){
                console.log("DElivery wale bhaiya aa gye hai")
                resolve()
            }
            else{
                console.log("Delivery faild")
                reject()
             }
 },3000)
   })
   myOrdor.then(function(){
        console.log("now payment")
    }).catch(function(){
        console.log("complain karo")
    })
    }
orderFood()

// 1. Timer Functions

// JavaScript mein timer functions ka use kisi code ko turant execute na karke kuch time baad execute karne ke liye hota hai.
// set timeout => Kisi function ko given time ke baad ek baar chalata hai.
setTimeout(()=>{
    console.log("it's set timeout")   // yaha 1 sec ke bad print hoga
},1000)

 //setInterwal => Kisi function ko given interval ke baad repeatedly chalata hai.
// setInterval(function(){
//     console.log("set Interwal") // yaha har 2 second ke bad cod chalata rhega mtlb repeatedly
// },2000)

// isi repetition ko stop karne ke liye ham clear interwal user karte hai
let id = setInterval(function(){
    console.log("stop! set interwal")
},2000)
clearInterval(id);

//Q2. setInterval() use karke har 1 second mein counter print karo:
// 1 → 2 → 3 → 4 → 5
// 5 ke baad interval stop hona chahiye.
let count = 1
let counter = setInterval(function(){
       console.log("counting")
      if(count ===5){
        clearInterval(counter)
      }
        count++;
},1000)


// Q1.Ek Promise banao jisme:

// orderStatus = true → "Order Successful"
// orderStatus = false → "Order Failed"

// .then() aur .catch() se handle karo.
let p2 = new Promise(function(resolve, reject){
    let orderStatus = false
    if(orderStatus){ 
  console.log("Order successfull")
    resolve()
}
else{
    console.log("Order failed")
    reject()
}
  
})
p2.then(function(){
    console.log("now payment")
}).catch(function(){
    console.log("sorry for that we could not reach out due to out of access your address")
}).finally(()=>{
    console.log("process completed")
})