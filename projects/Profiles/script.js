const name=document.querySelector("#name");
const email=document.querySelector("#email");
const form=document.querySelector("form");
const contain=document.querySelector(".contain");
const url=document.querySelector("#url");

const users = [
  {
    id: 1,
    fullName: "Aarav Sharma",
    aemail: "aarav.sharma@example.com",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    dob: "1998-04-12",
  },
  {
    id: 2,
    fullName: "Priya Patel",
    aemail: "priya.patel@example.com",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    dob: "2000-09-18",
  },
  {
    id: 3,
    fullName: "Rohan Verma",
    aemail: "rohan.verma@example.com",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    dob: "1997-11-25",
  },
  {
    id: 4,
    fullName: "Ananya Singh",
    aemail: "ananya.singh@example.com",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    dob: "1999-02-14",
  },
  {
    id: 5,
    fullName: "Kabir Mehta",
    aemail: "kabir.mehta@example.com",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    dob: "2001-06-30",
  },
];

const ui=function(){
   contain.innerHTML=''
      users.forEach(function (elem) {
        contain.innerHTML += `<div class="card">
       <img src="${elem.image}" alt="">

       <div class="detail">
        <h3>${elem.fullName}</h3>
        <p>${elem.aemail}</p>
        <p>${elem.dob}</p>
       </div>
    </div>`;
      });
}
ui();


form.addEventListener("submit",function(e){
    e.preventDefault();
   
    let na=name.value;
    let em=email.value;
    let imgUrl=url.value
    

    if(na.trim()===''&&em.trim()==='') return;

      

    // contain.innerHTML += `<div class="card">
    //    <img src="${imgUrl}" alt="">

    //    <div class="detail">
    //     <h3>${na}</h3>
    //     <p>${em}</p>
    //    </div>
    // </div>`;

    users.push({
        fullName:na,
        aemail:em,
        image:imgUrl,

    })

    ui();

   form.reset();

    

})