let box1=document.querySelector("#box1");
let box2=document.querySelector("#box2");
let box3=document.querySelector("#box3");
let box4=document.querySelector("#box4");

box1.addEventListener("click", function() {
    box1.style.backgroundColor = "red";
});

box2.addEventListener("click", function() {
    box2.style.backgroundColor = "blue";
});

box3.addEventListener("click", function() {
    box3.style.backgroundColor = "green";
});

box4.addEventListener("click", function() {
    box4.style.backgroundColor = "yellow";
});
let name=document.querySelector("input");
let head=document.querySelector("#head");
let button=document.querySelector("#greetBtn");
greetBtn.addEventListener("click",function(){
    event.preventDefault();
    head.innerText=head.innerText + name.value;
});
head.classList.remove("greet");
void head.offsetwidth;
head.classList.add("greet");