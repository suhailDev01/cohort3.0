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