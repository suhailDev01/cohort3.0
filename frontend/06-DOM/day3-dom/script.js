// attributes -> HTML element ke andar jo extra information hoti hai use attribute kehte hain.
//getAtribute -> it is used to fined how much id and class to exist in our html ...if the atribute is already then it is modified the value otherwise added new attribute
//setAttribute -> qualifieldName: string, value
const h1 = document.querySelector(".heading");
const h2 = document.querySelector("h2")
const btn = document.getElementById("mybtn");
const d = document.querySelector(".box2")

//setAttribute -> it is used to add dynamically property
h2.setAttribute("width","200")
const main = document.querySelector("main")

const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")
box2.style.backgroundColor = "yellow"
box3.style.backgroundColor = "blue"
main.insertBefore(box2,box1)

 let res = h1.getAttribute("class")
 console.log(res)

 h1.setAttribute("font-size","30px")

 let res1 = h1.hasAttribute("class");
 console.log(res1)
 