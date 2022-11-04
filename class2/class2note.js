let a="foo";
//function 寫法
function add(x,y){
    return x+y;
}
const anotheradd=(x,y)=>{
    return x+y;
}
//
array=[1,2,3,4,5,-1,-2];
const inverse=(x,index,array)=>{
    console.log(`${x}\t${index}\t${array}`)
}
array.forEach((x)=>{
    y=document.getElementById("red").innerHTML
    document.getElementById("red").innerHTML=x+y
})
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myfunction);
function myFunction(value, index, array) {
    txt += value + "<br>";
}
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
y=array.map((x)=>{
    return x>0?false:true;//若大於零return false 不然true
})
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});//看是不是大於零 用來比大小
//1 5 10 25 40 100
array.sort(function(a, b){return a**2 - b**2});//比絕對值大小
//-1,1,-2,2,3,4,5