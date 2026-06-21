const form=document.querySelector("form");
const name=document.querySelector("#name");
const email=document.querySelector("#email");
const cont=document.querySelector(".cont")

const userData = [
  {
    id: 1,
    fullName: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    dob: "1998-04-12",
  },
  {
    id: 2,
    fullName: "Priya Patel",
    email: "priya.patel@example.com",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    dob: "2000-09-18",
  },
  {
    id: 3,
    fullName: "Rohan Verma",
    email: "rohan.verma@example.com",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    dob: "1997-11-25",
  },
  {
    id: 4,
    fullName: "Ananya Singh",
    email: "ananya.singh@example.com",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    dob: "1999-02-14",
  },
  {
    id: 5,
    fullName: "Kabir Mehta",
    email: "kabir.mehta@example.com",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    dob: "2001-06-30",
  }
 
];

userData.forEach((elem)=>{
    cont.innerHTML += `<div class="card">
        <img src="${elem.image}" alt="">

        <div class="details">
            <h3>${elem.fullName}</h3>
            <p>${elem.email}</p>
        </div>
    </div>`;
})



form.addEventListener("submit",function(e){
    e.preventDefault();
    
    let naam=name.value;
    let mail=email.value;

    // if(naam.trim()===''&& mail.trim()==='') return 
    /*The above line can be used , but inplace of that we will use "required" in the HTML*/

    form.reset(); /*Line 14 and 15 do the same task of reseting the value after submitting form */
    // name.value="";
    // email.value="";
    cont.innerHTML += ` <div class="card">
        <img src="https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D" alt="">

        <div class="details">
            <h3>${naam}</h3>
            <p>${mail}</p>
        </div>
    </div>`;
    
})