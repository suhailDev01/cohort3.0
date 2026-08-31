const main = document.querySelector("main")
const btn = document.querySelector("button")
const timer = document.querySelector("#timer")
const box = document.createElement("div")
box.classList.add("box")

let time = 0;
let interwal;
const randomColor =()=>{
    let r =Math.floor( Math.random() * 256);
    let g =Math.floor( Math.random() * 256);
    let b =Math.floor( Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
const randomBox=()=>{
    box.style.backgroundColor = randomColor();
    main.append(box)
      
           let rx = Math.random() *100;
           let ry = Math.random() * 100;
           box.style.top = `${rx}%`;
           box.style.right = `${ry}%`;
}

btn.addEventListener("click", ()=>{
     randomBox()
      clearInterval(interwal);
     
      })
    interwal = setInterval(() => {
         randomBox()
            time += 1;
        timer.textContent = time; 
        }, 1000);

        setTimeout (()=>{
          
     clearInterval(interwal)
      },10000)

  