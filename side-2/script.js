const form =document.querySelector("form");
const inp1=document.querySelector("#name")
const inp2=document.querySelector("#email")

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    // console.log(name.value);
    // console.log(email.value);

    // console.log(e.target[0].value);
    // console.log(e.target[1].value);

        let email=inp1.value;
        let name=inp2.value;

        console.log(name,email);

        form.reset();

    // Both the above ways are correct !..

})