
// console.log(window)
// console.log(React)
const h1 = document.createElement("h1");
h1.textContent = "hello , I am real dom"
document.body.append(h1)
console.log("real dom ->", h1)
const rh1 = React.createElement("h1")

console.log("virtual dom ->", rh1)