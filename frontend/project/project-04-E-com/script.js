const createBtn = document.querySelector("#create")
const formDiv = document.querySelector(".form")
const closeBtn = document.querySelector("#close")
const form = document.querySelector("form")

 const productsArr = [];

createBtn.addEventListener("click",()=>{
    formDiv.style.display = "flex"
})

closeBtn.addEventListener("click",()=>{
    formDiv.style.display="none"
})

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let productName = event.target[0].value
    let discription = event.target[1].value
    let price = event.target[2].value
    let img = event.target[3].value
      
    if(productName.trim() ==="" ||
         discription.trim() ===""||
          price.trim() ===""||
           img ===""){
        alert("please fill all the fields")
        return;
    }

    let obj = {
        productName,
        discription,
        price,
        img,
    };
    productsArr.push(obj);
    console.log(productsArr);

   form.reset();
})