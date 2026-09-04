const game = document.querySelector(".game")
const bird = document.querySelector(".bird-img")
 
let birdTop = 200;
let gravity = 2;
setInterval(()=>{
    birdTop += gravity;
    bird.style.top = birdTop + 'px'
},20)