// Hamburger
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});


// Form Validation
let name=document.getElementById("name");
let email=document.getElementById("email");
let subject=document.getElementById("subject");
let msg=document.getElementById("msg");


let temp=1;
function formvalidation(){

  if(name.value==""){
    name.placeholder="Enter Your name ";
    name.classList.add("placeholder-red");
   name.style.border="1px solid red";
   temp=0;
  }
  else if(name.value.length<=2){
    name.value="";
    name.placeholder="Enter Valid name ";
    name.classList.add("placeholder-red");
    name.style.border="1px solid red";
    temp=0;
  }
  else{
    name.classList.add("placeholder-green");
    name.style.border="2px solid green";
    name.style.color="green";
    temp=1;
  }
  if(email.value==""){
    email.placeholder="Enter your email..";
    email.classList.add("placeholder-red");
    email.style.border="2px solid red";
    temp=0;
  }
  else{
    email.classList.add("placeholder-green");
    email.style.border="2px solid green";
    email.style.color="green";
    temp=0;
  }
  if(subject.value==""){
    subject.placeholder="Enter subject";
    subject.classList.add("placeholder-red");
    subject.style.border="2px solid red";
    temp=0;
  }
  else if(subject.value.length<=3){
    subject.value="";
    subject.placeholder="Enter Valid Subject";
    subject.classList.add("placeholder-red");
    subject.style.border="1px solid red";
    temp=0;

  }
  else{
    subject.classList.add("placeholder-green");
    subject.style.border="2px solid green";
    subject.style.color="green";
    temp=1;
   

  }
  if(msg.value==""){
    msg.placeholder="Enter subject";
    msg.classList.add("placeholder-red");
    msg.style.border="2px solid red";
    temp=0;
  }
  else if(msg.value.length<8){
    msg.value="";
    msg.placeholder="Enter Valid Message";
    msg.classList.add("placeholder-red");
    msg.style.border="1px solid red";
    temp=0;
  }
  else{
    msg.classList.add("placeholder-green");
    msg.style.border="2px solid green";
    msg.style.color="green";
    temp=1;

  }


  if(temp){
    return true;
  }
  else{
    return false;
  }

}