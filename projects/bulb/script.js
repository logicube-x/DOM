const bulb=document.querySelector(".bulb");
const btn=document.querySelector("button");

let flag=true;

btn.addEventListener("click",()=>{


    
    // if(flag){
    //     bulb.style.backgroundColor="yellow";
    //     btn.textContent="OFF"
    //     flag=false;
    // }
   
    // else{
    //     bulb.style.backgroundColor="transparent";
    //     btn.textContent="ON";
    //     flag=true
    // }

    if(bulb.classList.toggle("glow")){
        btn.textContent="OFF";
    }
    else{
        btn.textContent="ON"
    }

    
})