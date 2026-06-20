const bulb=document.querySelector(".bulb");
const btn=document.querySelector("button");

let flag=true;


    btn.addEventListener("click", function () {
        if(flag){
      bulb.style.backgroundColor = "yellow";
      btn.innerHTML="OFF";
      flag=false;
        }
        else{
            bulb.style.backgroundColor="transparent";
            btn.innerHTML="ON";
            flag=true;
        }

    });
