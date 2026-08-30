const body= document.body
const main = document.querySelector("main")
const btn = document.querySelector("button")

main.addEventListener("click", (events)=>{
   // console.log(events)
    console.log(events)
})

  //EVENT TRAVERSAL OR EVENT  PROPOGATION
//before captutre true or true lagne se ye event bubbling mtlb bottom to top me chalta h aftre true event capturing mtlb top to bottom
body.addEventListener("click", (events)=>{
   // console.log(events)
    console.log("body triggred")
},true)
main.addEventListener("click", (events)=>{
   // console.log(events)
    console.log("main triggred")
},true)
btn.addEventListener("click", (events)=>{
   // console.log(events)
    console.log("div triggred")
},true)
