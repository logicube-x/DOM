const h3=document.querySelector("#id1")

const res=h3.getAttribute("id");
console.log(res); /**/

const res1=h3.getAttribute("class");
console.log(res1);

h3.setAttribute("myAtt","200")

h3.removeAttribute("myatt")

// line 14 to 21 is about the dataset thing in which you can give custom attributes these are rarely used
let temp=document.querySelector("#own");

const check=temp.getAttribute("data-myid");
console.log(check);

temp.dataset.myId="999";

console.log(temp.getAttribute("data-my-id"));

const footer=document.createElement("footer");
const span=document.createElement("span");
document.body.appendChild(footer)
document.body.appendChild(span)

span.innerHTML="<i>Hello i am added dynamic..<i/>"