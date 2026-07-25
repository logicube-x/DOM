const btn=document.querySelector("button");
const div=document.querySelector("div")
const main=document.querySelector("main")
const body=document.querySelector("body")

btn.addEventListener("click",(e)=>{
    
   console.log("clicked-btn");
})

body.addEventListener("click",(e)=>{

   console.log("clicked-body");
})

main.addEventListener("click",(e)=>{

   console.log("clicked-main");
})

div.addEventListener("click",(e)=>{

   console.log("clicked-div");
})