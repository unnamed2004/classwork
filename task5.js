let num = document.querySelector(".num")
let btn = document.querySelector(".btn")
let span = document.querySelector(".span")

btn.onclick =()=> {   
    span.innerHTML=fact() 
}
function fact(){
    result = 1;
     for (let i=1;i<=num.value;i++){
     result = result * i;
     console.log(result)
    }
    return result;
}
let colors = ["red", "green","blue","yellow","gray","yellow-green"]
 setInterval(function(){
    document.body.style.backgroundColor=
    colors[Math.floor(Math.random()*colors.length)]
}, 2000)