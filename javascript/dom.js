//DOM: Document Object Model
//let e=document.querySelectorAll("h1");

// console.log(e);
// console.log(e[0].tagName);
// console.log(e[0].textContent);
//e[0].textContent="MySirG";

/*
let h=document.getElementsByTagName("h1");
console.log(h[0],h[1]);
console.log(h[0].textContent);
console.log(h[0].innerHTML);
console.log(h[0].innerText);

*/

/*
let h=document.getElementById("heading2");
h.style.color="purple";
h.style.textDecoration="underline";
*/

/*
let p=document.createElement("p");
p.textContent="This is dynamically created paragraph";
p.id="para1";
p.style.color="blue";
document.body.appendChild(p);

let h=document.getElementById("heading2");
h.remove();
*/
document.getElementById("b1").addEventListener('click',function(){
    let h=document.getElementById("heading2");
    h.style.color="red";
});
document.getElementById("b2").addEventListener('click',function(){
    let h=document.getElementById("heading2");
    h.style.color="blue";
});
document.getElementById("b3").addEventListener('click',function(){
    let h=document.getElementById("heading2");
    h.style.color="green";
});

