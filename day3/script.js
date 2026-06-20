const inp=document.querySelector("input");
const btn=document.querySelector("#ad");
const clist=document.querySelector(".clist");

btn.addEventListener('click',function(){
    const val=inp.value;

    if(val.trim()==="") return;
    
    clist.innerHTML += `<div class="li">
            <h3>${val}</h3>

            <div>
                <button class="edit">Edit</button>
                <button class="del">Delete</button>
            </div>
        </div>`;

        inp.value=""
})

clist.addEventListener("click", function (e) {
  if (e.target.classList.contains("del")) {
    e.target.closest(".li").remove();
  }
});