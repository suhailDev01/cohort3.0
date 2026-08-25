
const h1 = document.getElementById("id1")
const h2 = document.querySelector(".newClass")
const p = document.querySelector("p")
const items = document.getElementsByClassName("item")
const para = document.querySelector(".demo")
const changedColor = document.querySelectorAll(".demo") 

h1.textContent= "hello world"
//h2[0].textContent= "new message"
h2.innerHTML="hello i am <i>italic </i>"
p.innerText = "I am a developer"

for(let i = 0; i < items.length; i++){
    items[i].innerHTML="I am learning webdevelopment"
}

para.innerText = "changed"

changedColor.forEach((demo)=>{
    demo.style.color = "blue"
})