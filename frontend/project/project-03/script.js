const main = document.querySelector("main")
const box = document.querySelector(".box")
const btn = document.querySelector("button")
const timer = document.querySelector("#timer")
let time = 0;
let interwal;
btn.addEventListener("click", ()=>{
      clearInterval(interwal);
    interwal = setInterval(() => {
        time += 1;
        timer.textContent = time;
           let rx = Math.random() *100;
           let ry = Math.random() * 100;
           box.style.top = `${rx}%`;
           box.style.right = `${ry}%`;
        }, 1000);

        setTimeout (()=>{
     clearInterval(interwal)
      },10000)

  })