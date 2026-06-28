const bulb = document.querySelector(".bulb");
const btn = document.querySelector("button");



btn.addEventListener("click",function(){
    if(bulb.classList.toggle("lightUp")){
        btn.innerHTML="OFF"
    }
    else{
        btn.innerHTML="ON";
    }
})