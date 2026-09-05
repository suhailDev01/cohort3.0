const game = document.querySelector(".game")
const bird = document.querySelector(".bird-img")
 
let birdTop = 200;
let gravity = 2;
setInterval(()=>{
    birdTop += gravity;
    bird.style.top = birdTop + 'px'
},20)

document.addEventListener("keydown",(e)=>{
    if(e.code === 'space' || 'enter'){
      birdTop = birdTop - 50
    }
    
})
 
function createPipe(){
    const pipeTop = document.createElement("div")
    const pipeBottom= document.createElement("div")
    pipeTop.classList ="pipe"
    pipeBottom.classList ="pipe"
    let maxHeight = game.clientHeight;
     let gap = 150
     let topHeight = Math.random() * maxHeight + 50
     let botttomHeight = maxHeight - topHeight - gap
     console.log(topHeight)
     console.log(botttomHeight)
}
createPipe()