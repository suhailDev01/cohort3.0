
const body= document.body
const main = document.querySelector("main")
const btn = document.querySelector("button")
const form = document.querySelector("form")
const inp = document.querySelector("#name")
const inp1 = document.querySelector("#email")
const users = document.querySelector(".users")

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


let usersData =[
  {
    "id": 1,
    "name": "Rahul Sharma",
    "email": "rahul.sharma@example.com",
    "imgUrl": "https://i.pravatar.cc/150?img=1",
    "dob": "2001-04-15"
  },
  {
    "id": 2,
    "name": "Priya Singh",
    "email": "priya.singh@example.com",
    "imgUrl": "https://i.pravatar.cc/150?img=2",
    "dob": "2002-08-22"
  },
  {
    "id": 3,
    "name": "Aman Verma",
    "email": "aman.verma@example.com",
    "imgUrl": "https://i.pravatar.cc/150?img=3",
    "dob": "2000-12-10"
  },
  {
    "id": 4,
    "name": "Neha Gupta",
    "email": "neha.gupta@example.com",
    "imgUrl": "https://i.pravatar.cc/150?img=4",
    "dob": "2003-02-18"
  }
  
]
usersData.forEach((elem)=>{
    users.innerHTML+=`
      <div class="user-card">
                <div class="img-box">
                    <img src="${elem.imgUrl}" alt="img">
                </div>
                <div class="text">
                    <h3>Name-${elem.name}</h3>
                    <p>email-${elem.email}</p>
                    <p>email-${elem.dob}</p>
                </div>
               </div>
    `
})
form.addEventListener("submit",(events)=>{
    events.preventDefault()
   let name = inp.value  
   let email = inp1.value
//    console.log(name, email)
  if(name.trim() ==="" && email.trim()=== "")return;
//    users.innerHTML += `
//      <div class="user-card">
//                 <div class="img-box">
//                     <img src="https://bairesdev.mo.cloudinary.net/blog/2022/08/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156-1.jpg?tx=w_1920,q_auto" alt="img">
//                 </div>
//                 <div class="text">
//                     <h3>Name-${name}</h3>
//                     <p>email-${email}</p>
//                 </div>
//                </div>
            
//                      `
   form.reset()
})