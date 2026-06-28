const inp=document.querySelector("input");
const add=document.querySelector("#ad");
con=document.querySelector(".con");



add.addEventListener("click",function(){

    const task=inp.value;
if(task.trim()==="") return;

    con.innerHTML += `<div class="li">
                <h3>${task}</h3>
                <div>
                    <button id="edit">Edit</button>
                    <button id="del">Delete</button>
                </div>
            </div>`;



            inp.value="";
})