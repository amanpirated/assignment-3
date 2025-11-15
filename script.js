let box1=document.querySelector("#box1")
let box2=document.querySelector("#box2")
let box3=document.querySelector("#box3")
let box4=document.querySelector("#box4")
let head=document.querySelector(".text")
let grt=document.querySelector(".greet")

box1.addEventListener("click",function(){
    box1.style.backgroundColor="red";
})
box2.addEventListener("click",function(){
    box2.style.backgroundColor="blue";
})
box3.addEventListener("click",function(){
    box3.style.backgroundColor="green";
})
box4.addEventListener("click",function(){
    box4.style.backgroundColor="yellow";
})
let input=document.querySelector("input")


grt.addEventListener("click",function(event){
    event.preventDefault()
    let text=input.value.trim()
    let prefix = head.innerText.split(",")[0] + ",";
        head.innerText = prefix + " " + text;
        input.value = "";
})