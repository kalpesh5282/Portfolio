# 🚀 Personal Portfolio Website

## 🌟 Project Overview
Welcome to my **Personal Portfolio Website**! This project showcases my skills, projects, and experience in an elegant and user-friendly way. I have implemented **form validation** using JavaScript to ensure a smooth and error-free experience for visitors interacting with the contact form.

---

## 🎯 Features

- **📄 Responsive Design**: Fully responsive UI that works seamlessly on mobile, tablet, and desktop devices.
- **🛠️ Form Validation**: Interactive contact form with JavaScript validation for user inputs.
- **✨ Modern UI**: Clean and elegant design using **HTML5**, **CSS3**, and **JavaScript**.
- **📬 Smooth Contact Submission**: Ensures users enter valid details before submitting the form.
- **🔗 GitHub Integration**: Hosted and managed through GitHub Pages.

---

## 🧰 Technologies Used

| **Technology**       | **Purpose**                       |
|-----------------------|-----------------------------------|
| HTML5                | Structure of the website          |
| CSS3                 | Styling and layout                |
| JavaScript           | Form validation and interactivity |
| GitHub Pages         | Hosting the portfolio             |

---

## 📝 Form Validation Details
I used **JavaScript** to validate user inputs in the contact form:

- Ensures **name**, **email**, and **message** fields are not left empty.
- Validates the email format (e.g., `example@gmail.com`).
- Provides user-friendly **error messages** in case of invalid input.
- Prevents form submission if validation fails, improving UX.

```javascript
// Example form validation snippet
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
```

---

## 📸 Screenshots
### 💻 Desktop View
![image](https://github.com/user-attachments/assets/6ec83a65-0188-4f21-ba81-d43ea7122681)

![image](https://github.com/user-attachments/assets/490abbbe-c1df-4e60-9ec5-b5270eb19a3c)




---

## 🌐 Live Demo
View the live project here 👉 **[Portfolio Website](#)**

---

## 🔗 Links
- **GitHub Repository**: https://github.com/kalpesh5282/Portfolio
- **Live Demo**:https://kalpesh5282.github.io/Portfolio/

---

## 🧑‍💻 Author
**Kalpesh Patil**  
Aspiring Full Stack Developer | Passionate about building interactive web applications

- LinkedIn: [Connect with me](https://www.linkedin.com/in/kalpeshpatil52/)
- GitHub: [My GitHub](https://github.com/kalpesh5282)

---

## ⭐ Acknowledgments
Special thanks to:
- **Web3Forms** for API integration
- My learning journey with **HTML, CSS, and JavaScript**

If you like this project, don't forget to ⭐ the repository!

---

## 📩 Feedback
Feel free to share your feedback or suggestions. Let's connect and grow together!

---

### 🚀 Let's Code Something Amazing!
