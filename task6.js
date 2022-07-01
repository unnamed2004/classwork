let div = document.createElement("div");
let a = 10;

div.innerHTML =`${a}`;
div.classList.add("block");
let btn = document.createElement("button");
btn.innerText = "remove";
btn.classList.add("btn");
document.body.appendChild(div)
document.body.appendChild(btn);
btn.onclick = () => {
    let div1 = document.createElement("div"); 
    div1.style.display = "flex";
    div1.style.alignItems = "start";
    div1.appendChild(div)
    div1.appendChild(btn)
    document.body.appendChild(div1)
    
};
