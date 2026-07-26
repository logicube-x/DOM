const inp1=document.querySelector("#inp1")
const inp2=document.querySelector("#inp2")
const form =document.querySelector("form")
const cont=document.querySelector(".cont")
const url=document.querySelector("#url")


const users = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    dob: "1998-03-15"
  },
  {
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    dob: "2000-07-22"
  },
  {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    dob: "1997-11-08"
  },
  {
    name: "Sophia Davis",
    email: "sophia.davis@example.com",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    dob: "2001-01-30"
  },
  {
    name: "Daniel Smith",
    email: "daniel.smith@example.com",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    dob: "1999-09-12"
  }
];

users.forEach((e)=>{
    cont.innerHTML+=`  <div class="card">
        <div class="img-box">
            <img src="${e.image}" alt="">
        </div>
        <div id="text">
                <h3>${e.name}</h3>
                <h4>${e.email}</h4>
        </div>
    </div>`
})

form.addEventListener("submit",(e)=>{
   e.preventDefault();
   let name=inp1.value;
   let email=inp2.value;
   let imageurl=url.value;
   if(name.trim()===''&&email.trim()==='') return;

  cont.innerHTML+=`  <div class="card">
        <div class="img-box">
            <img src="${imageurl}" alt="">
        </div>
        <div id="text">
                <h3>${name}</h3>
                <h4>${email}</h4>
        </div>
    </div>`

  inp1.value="";
  inp2.value="";


})