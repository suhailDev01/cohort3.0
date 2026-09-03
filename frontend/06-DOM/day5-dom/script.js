const five = document.querySelector("#five")
const main = document.querySelector("main")

// five.addEventListener("click", (event)=>{
//     console.log(event.target)
// })
main.addEventListener("click", (event)=>{
    console.log(event)
})




//loacal storage
localStorage.setItem('name', 'akarsh sharma')
localStorage.setItem("song","chand sifarish jo karta hamari")
let lsd = localStorage.getItem("name")
console.log(lsd)
console.log("priyansh")

let userData = [
    {
    name:"kl rahul",
    age:32,
    profession:"cricket",
    married:"yes",
},
{
    name:"virat kohil",
    age:36,
    profession:"cricket",
    married:"yes",
},
 {
    name:"rohit sharma",
    age:37,
    profession:"cricket",
    married:"yes",
}
]
localStorage.setItem("fam people->",JSON.stringify(userData))
//console.log(userData)