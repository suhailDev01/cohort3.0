//hoisting
console.log(x)
var x = 10;
console.log(x)

hello();
function hello(){
    console.log("hello");
}

// console.log(age)
// let age = 20;    //tdz

//scope
let  str = "suhail";
function greet(){
    console.log(str);
}
greet();

//lexical scope => Inner function apne outer/parent function ke variables ko access kar sakta hai
let b = 34;
function outer(){
    console.log(b)
    let a = 32;
    function Inner(){
        
        console.log(a)
    }
    Inner()
    
}
outer()