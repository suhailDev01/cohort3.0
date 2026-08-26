// attributes -> HTML element ke andar jo extra information hoti hai use attribute kehte hain.
//getAtribute -> it is used to fined how much id and class to exist in our html ...if the atribute is already then it is modified the value otherwise added new attribute
//setAttribute -> qualifieldName: string, value
const h1 = document.querySelector("h1");
const body = document.body
let box = document.querySelector("#box");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let res = h1.getAttribute("class")
 console.log(res)
  //setAttribute -> it is used to add dynamically property
 h1.setAttribute("font-size","30px")

 let res1 = h1.hasAttribute("class");
 console.log(res1)
 
 
//appendChild() -> Parent ke last me ek node add karta hai. (one node )
let three = document.createElement("p")
three.innerText = "three"
box.appendChild(three)

//apend() -> Ye bhi end me add karta hai, lekin zyada flexible hai. (multiple things, string)
let ap = document.createElement("p")
box.append("hello")      //string
ap.innerText = "three"
box.append(ap,"hello coder")

// prepend() -> Parent ke sabse beginning me add karta hai.
let pre = document.createElement("p")
pre.innerText="zero"
box.prepend(pre)

//before() -> Ye selected element ke bahar, uske just pehle add karta hai.
let be = document.createElement("p")
be.innerHTML = "developer"
two.before(be)

//after() -> Selected element ke baad add karta hai.
let af = document.createElement("p")
af.textContent = "frontend"
one.after(af)