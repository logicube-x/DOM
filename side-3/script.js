const form=document.querySelector("form");
const inp1=document.querySelector("#inp1")
const inp2=document.querySelector("#inp2")
const cont=document.querySelector(".cont")


const users = [
  {
    name: "Arjun Sharma",
    email: "arjun.sharma@example.com",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    name: "Priya Patel",
    email: "priya.patel@example.com",
    image: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    name: "Rahul Verma",
    email: "rahul.verma@example.com",
    image: "https://randomuser.me/api/portraits/men/33.jpg"
  },
  {
    name: "Ananya Singh",
    email: "ananya.singh@example.com",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Kabir Mehta",
    email: "kabir.mehta@example.com",
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  }
];

users.forEach((elem)=>{
     cont.innerHTML+=` <div class="card">
                <div class="img-cont">
                    <img src="${elem.image}" alt="">
                </div>
                <div class="data">
                    <h3>${elem.name}</h3>
                    <h4>${elem.email}</h4>
                </div>
            </div>`
})


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=inp1.value;
    let email=inp2.value;
    let imgUrl=url.value;


    if(name.trim()===''&&email.trim()==='') return;


    cont.innerHTML+=` <div class="card">
                <div class="img-cont">
                    <img src="${imgUrl}" alt="">
                </div>
                <div class="data">
                    <h3>${name}</h3>
                    <h4>${email}</h4>
                </div>
            </div>`


inp1.value="";
inp2.value="";

})