const body=document.body;
const main=document.querySelector("main");

console.log(body.childNodes); /*Node List */
console.log(body.children); /*HTML Collection */

// console.log(main.childNodes); /*Node List */ text h1 text
// console.log(main.children); /*HTML Collection */ h1

const h1=document.querySelector("h1");
const h2=document.querySelector("h2");
const h3=document.querySelector("h3");

h1.textContent="i am changed via textContent"
h2.innerText=" i am changed by innerText"

h3.innerHTML="<i>i am innerHTML<i>" /*implemets the tags*/

console.log(h1);

console.log(body.innerHTML);
console.log(body.innerText);
console.log(body.textContent);