
// console.log(window)
// console.log(React)

//real dom
const h1 = document.createElement("h1");
h1.textContent = "hello"
document.body.append(h1)
console.log("real dom ->", h1)
//virtual dom
const rh1 = React.createElement("h1",
    null,
    React.createElement("span",{}, "I am under h1"))

console.log("virtual dom ->", rh1)

let realdom = document.querySelector("#root")
let reactOfRoot = ReactDOM.createRoot(realdom)
reactOfRoot.render(rh1)
//console.log(ReactDOM);