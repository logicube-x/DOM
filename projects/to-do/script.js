const btn=document.querySelector("#ad");
const inp=document.querySelector("input");
const cont=document.querySelector(".cont")


btn.addEventListener("click",()=>{
   
    const task=inp.value;

    if(task.trim()==="")return

    cont.innerHTML+=`<div class="li">
            <h3>${task}</h3>
                <div>
                    <button id="edit">Edit</button>
                    <button id="del">Delete</button>
                </div>
        </div>`

        inp.value=""
})