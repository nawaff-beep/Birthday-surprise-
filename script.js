const music=document.getElementById("music");

document.getElementById("playBtn").addEventListener("click",()=>{

music.play();

});

function createFlower(){

const flower=document.createElement("div");

flower.className="flower";

flower.innerHTML=["🌸","🌹","🌺","💐","🌷"][Math.floor(Math.random()*5)];

flower.style.left=Math.random()*100+"vw";

flower.style.animationDuration=5+Math.random()*5+"s";

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},10000);

}

setInterval(createFlower,300);

function confetti(){

const colors=["#ff4081","#ffffff","#ffeb3b","#00e5ff","#7c4dff"];

for(let i=0;i<200;i++){

const c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background=colors[Math.floor(Math.random()*colors.length)];

c.style.animationDuration=3+Math.random()*4+"s";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},7000);

}

}

window.onload=()=>{

confetti();

}
