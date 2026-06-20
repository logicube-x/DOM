const inp=document.querySelector("input");
const btn=document.querySelector("#ad");
const todoC=document.querySelector(".todo-list");



btn.addEventListener('click',function(){
    const val=inp.value;

    if(val.trim()==="") return;

    todoC.innerHTML += `<div class="li">
    <h3>${val}</h3>

    <div>
        <button class="edit">Edit</button>
        <button class="del">Delete</button>
    </div>
</div>`;

inp.value="";

})

todoC.addEventListener("click", function (e) {
  if (e.target.classList.contains("del")) {
    e.target.closest(".li").remove();
  }
});


