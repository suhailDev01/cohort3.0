const bulb = document.querySelector(".bulb")
const btn = document.querySelector("button")

// method first

let  flag = true
btn.addEventListener("click", ()=>{
   if(flag){
      bulb.style.backgroundColor = 'yellow'
      btn.innerHTML="off"
      console.log("i am on mode")
      flag = false
   }
   else{
     bulb.style.backgroundColor = 'transparent'
     btn.innerHTML="on"
     console.log("i am off mode")
     flag = true
   }
})
// method second
btn.addEventListener("click",function(){
   if( bulb.classList.toggle("lightup")) {
    btn.textContent = "off"
   }
   else{
    btn.textContent = "on"
   }
    
})