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