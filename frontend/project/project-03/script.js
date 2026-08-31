const main = document.querySelector("main")
const btn = document.querySelector("button")
const timer = document.querySelector("#timer")
const box = document.createElement("div")
const gameOver = document.querySelector(".overlay")
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
    let mainH = main.clientHeight - box.offsetHeight;
    let mainW = main.clientWidth - box.offsetWidth
      
           let rx = Math.random() *mainH;
           let ry = Math.random() * mainW;
           box.style.top = `${rx}px`;
           box.style.right = `${ry}px`;
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
     gameOver.style.display = "flex"
      },10000)

