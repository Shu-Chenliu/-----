red_ele=document.getElementById("red")
console.log(red_ele);
console.log(red_ele.style.backgroundcolor);
red_ele.style.backgroundcolor=blue;
red_ele1=document.getElementById("blue");
console.log(red_ele1.innerHTML);
red_ele1.innerHTML=hahaha;
//blue 裡面的div消失
const newelement=document.createElement("div");
newelement.innerHTML="i am child";
red_ele1.appendChild(newelement);
//blue 裡面多一個div 寫 i am child
button=document.getElementById("button");
const clickbuttonfunc=()=>{
    document.getElementById("red").innerHTML=click;
}
button.addEventListener("click",clickbuttonfunc);