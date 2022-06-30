let btn = document.querySelector(".btn");
let colors = ["red", "green","blue","yellow","black","gray","yellow-green"]
btn.onclick = setInterval(function(){
    document.body.style.backgroundColor=
    colors[Math.floor(Math.random()*colors.length)]
}, 1)