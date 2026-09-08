
let root = document.querySelector("#root")
let h1 = React.createElement("h1",{},"i am virtual dom");
ReactDOM.createRoot(root).render(h1)
console.log(h1)
console.log(root)