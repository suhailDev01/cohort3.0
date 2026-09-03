const createBtn = document.querySelector("#create")
const formDiv = document.querySelector(".form")
const closeBtn = document.querySelector("#close")
const form = document.querySelector("form")
const productsDiv = document.querySelector(".products")

const productsArr = JSON.parse(localStorage.getItem("products")) || [];
 let updateIndex = null;
let ui =()=>{
    productsDiv.innerHTML=""
    productsArr.forEach((elem,index)=>{
        productsDiv.innerHTML+= ` <div class="product-card">
                <div class="img">
                    <img src="${elem.img}" alt="img">
                </div>
                <div class="text">
                <h3>${elem.productName}</h3>
                <p>${elem.discription}</p>
                <p>${elem.price}</p>
                </div>
                <div class="btns">
                    <button onclick="updateProduct('${elem.productName}')" id="update">update</button>
                    <button onclick="deleteProduct(${index})" id="del">delete</button>
                </div>
             </div> `
    })
}
ui();
createBtn.addEventListener("click",()=>{
    formDiv.style.display = "flex"
})

closeBtn.addEventListener("click",()=>{
    formDiv.style.display="none"
})

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log("events->", event)
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

    if(updateIndex !== null){
        productsArr[updateIndex]=obj
        updateIndex = null;
        localStorage.setItem("products",JSON.stringify(productsArr));
    }
    else{
           productsArr.push(obj);
           localStorage.setItem("products",JSON.stringify(productsArr));
    }

    //productsArr.push(obj);
    console.log(productsArr);
   ui();
   form.reset();
    formDiv.style.display="none"
})
const updateProduct=(name)=>{
     formDiv.style.display = "flex"
     let product = productsArr.find((elem)=> elem.productName===name)
     updateIndex = productsArr.findIndex((elem)=> elem.productName===name)
      form[0].value= product.productName
      form[1].value= product.discription
      form[2].value= product.price
      form[3].value= product.img

}
const deleteProduct = (index) =>{
    productsArr.splice(index,1)
    localStorage.setItem("products", JSON.stringify(productsArr))
    ui();
}