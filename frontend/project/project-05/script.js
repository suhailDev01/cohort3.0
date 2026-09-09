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
    
     let gap = 100
    let gameHeight = game.clientHeight;
       let maxHeight = gameHeight-gap-50
     let topPipeHeight = Math.random()*maxHeight + 50
     let botttomPipeHeight = maxHeight - topPipeHeight - gap
    pipeTop.style.height = topPipeHeight + 'px'
    pipeBottom.style.height = botttomPipeHeight + 'px'
    pipeTop.style.top = 0 
    pipeBottom.style.bottom = 0 
    game.append(pipeTop, pipeBottom)
}
createPipe()