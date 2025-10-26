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
let input=document.querySelector("input");
let head=document.querySelector("#head");
let button=document.querySelector("#greetBtn");

// let addedText=[];
// function addText(event){
//     event.preventDefault();
//     let text;
//     text=input.value;
//     if(text){
//         addedText.push(text);
//         head.innerText=head.innerText + text;
//     }
// }
// button.addEventListener("click",addText);
// button.addEventListener("dblclick", function(event) {
//     event.preventDefault();
//     if (addedText.length>0) {
//         let lastText = addedText.pop();                    // remove last added text
//         head.innerText = head.innerText.slice(0, -lastText.length);
        
//     }
//     // button.removeEventListener("dblclick", function(){
//     //     head.innerText-=input.value;
//     // });

// });
button.addEventListener("click", function(event) {
    event.preventDefault();
    let text = input.value.trim();
    if(text) {
        head.innerText += text; // replace text instead of appending
        input.value = "";      // clear input
    }
});

// Double-click to clear the header
button.addEventListener("dblclick", function(event) {
    event.preventDefault();
    head.innerText = "HELLO"; // clear header
});
