const inp = document.querySelector("input")
const bt = document.querySelector("#add")
const todoBox = document.querySelector(".todo-list")
const editBtn = document.querySelector(".edit")
const delBtn = document.querySelector(".del")

bt.addEventListener("click",()=>{
    const value = inp.value
    if(value.trim() ==="")return;
    todoBox.innerHTML += `   <div class="list">
                    <h3>${value}</h3>
                    <div>
                        <button class="btn edit">edit</button>
                        <button class="btn del">delete</button>
                    </div>
                </div>`
    inp.value = "";
})

