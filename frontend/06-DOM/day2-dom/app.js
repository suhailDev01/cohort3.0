const body = document.body
const main = document.querySelector("main")
const h1 = document.querySelector("h1")
console.log(main.childNodes)
console.log(main.children)

console.log(body.children)
console.log(body.childNodes)

//changing
console.log(h1)
h1.textContent = "hello world"
h1.innerText = "changes <i> i am italic tag </i>"
h1.innerHTML = "changes <i> i am italic tag </i>"

//agar mujhe pura html ko hi select karna ho tab 
// first line me maine body select kiya h 
console.log(body.innerHTML)
console.log(body.innerText)
console.log(body.textContent)
 
//changes in css 
h1.style.backgroundColor = "red"
body.style.backgroundColor = "skyblue"
body.style.fontSize = "40px"
body.style.fontFamily = "sans-serif"

 //classList method in DOM
 //add() class add karta hai
 h1.classList.add("heading")
 console.log(h1)

 //remove() class remove karta hai
 h1.classList.remove("heading")
 console.log(h1)

 //toggle()
 // agar class hai -> remove
 // agar class nhi -> add
 h1.classList.toggle("dom")

 //contains() -> check karta hai ki class hai ki nhi
 const isClass = h1.classList.contains("dom")
 console.log(isClass)