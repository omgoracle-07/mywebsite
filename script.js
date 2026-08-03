/* ==========================================
   OMGoracle AI Cyber Cafe
   script.js
   Part 14
========================================== */

// Website Loaded

window.addEventListener("load",function(){

console.log("OMGoracle AI Cyber Cafe Loaded Successfully");

});

// ========================
// Smooth Scroll
// ========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){
const href = this.getAttribute("href");

        if (href === "#") return; // Ignore empty links
e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ========================
// Navbar Shadow
// ========================

window.addEventListener("scroll",function(){

const header=document.querySelector("header");

if(window.scrollY>60){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";

}else{

header.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

}

});

// ========================
// Hero Button Animation
// ========================

const buttons=document.querySelectorAll(".primary,.secondary");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// ========================
// Service Card Animation
// ========================

const cards=document.querySelectorAll(".service-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

// ========================
// Counter Start
// ========================

const counters=document.querySelectorAll(".stat-card h2");

let started=false;

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats");

if(!stats) return;

const position=stats.offsetTop-500;

if(window.scrollY>position && !started){

started=true;

console.log("Counter Started");

}

});
// ========================
// Scroll Reveal Animation
// ========================

const revealElements=document.querySelectorAll(
".service-card,.tool-card,.gov-card,.payment-card,.contact-card,.testimonial-card"
);

function revealOnScroll(){

const trigger=window.innerHeight-100;

revealElements.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.style.opacity="1";

item.style.transform="translateY(0)";

}

});

}

revealElements.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(50px)";

item.style.transition="all .8s ease";

});

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();


// ========================
// Floating Robot Animation
// ========================

const robot=document.querySelector(".hero-right img");

if(robot){

let angle=0;

setInterval(()=>{

angle+=0.05;

robot.style.transform=
`translateY(${Math.sin(angle)*10}px)`;

},40);

}


// ========================
// Back To Top Button
// ========================

const topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.id="topButton";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.right="20px";
topButton.style.bottom="20px";
topButton.style.width="50px";
topButton.style.height="50px";
topButton.style.border="none";
topButton.style.borderRadius="50%";
topButton.style.background="#1976d2";
topButton.style.color="#fff";
topButton.style.fontSize="20px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.boxShadow="0 10px 20px rgba(0,0,0,.2)";
topButton.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
// ========================
// Dark Mode Toggle
// ========================

const darkBtn=document.createElement("button");

darkBtn.innerHTML="🌙";
darkBtn.id="darkMode";

document.body.appendChild(darkBtn);

darkBtn.style.position="fixed";
darkBtn.style.left="20px";
darkBtn.style.bottom="20px";
darkBtn.style.width="50px";
darkBtn.style.height="50px";
darkBtn.style.border="none";
darkBtn.style.borderRadius="50%";
darkBtn.style.background="#222";
darkBtn.style.color="#fff";
darkBtn.style.cursor="pointer";
darkBtn.style.fontSize="20px";
darkBtn.style.zIndex="999";

let dark=false;

darkBtn.addEventListener("click",()=>{

dark=!dark;

if(dark){

document.body.style.background="#0f172a";
document.body.style.color="#ffffff";
darkBtn.innerHTML="☀️";

}else{

document.body.style.background="#ffffff";
document.body.style.color="#222222";
darkBtn.innerHTML="🌙";

}

});


// ========================
// Mobile Menu Toggle
// ========================

const menuButton=document.querySelector(".menu-toggle");
const navigation=document.querySelector("nav ul");

if(menuButton && navigation){

menuButton.addEventListener("click",()=>{

navigation.classList.toggle("active");

});

}


// ========================
// AI Chat Popup
// ========================

const chatButton=document.querySelector(".chat-button");
const chatPopup=document.querySelector(".chat-popup");

if(chatButton && chatPopup){

chatButton.addEventListener("click",()=>{

chatPopup.classList.toggle("show");

});

}


// ========================
// Page Loading Animation
// ========================

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity .8s ease";
document.body.style.opacity="1";

},100);

});


// ========================
// Console Message
// ========================

console.log("OMGoracle AI Cyber Cafe Script Loaded Successfully 🚀");
// ========================
// Search Filter
// ========================

const searchInput=document.querySelector("#searchInput");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

document.querySelectorAll(".service-card").forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

}


// ========================
// Passport Photo Preview
// ========================

const passportUpload=document.querySelector("#passportUpload");
const passportPreview=document.querySelector("#passportPreview");

if(passportUpload && passportPreview){

passportUpload.addEventListener("change",function(){

const file=this.files[0];

if(file){

passportPreview.src=URL.createObjectURL(file);
passportPreview.style.display="block";

}

});

}


// ========================
// Resume Builder Demo
// ========================

const resumeForm=document.querySelector("#resumeForm");

if(resumeForm){

resumeForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Resume preview generated successfully!");

});

}


// ========================
// AI Chat Demo
// ========================

const chatForm=document.querySelector("#chatForm");
const chatInput=document.querySelector("#chatInput");
const chatMessages=document.querySelector("#chatMessages");

if(chatForm && chatInput && chatMessages){

chatForm.addEventListener("submit",function(e){

e.preventDefault();

const message=chatInput.value.trim();

if(message==="") return;

chatMessages.innerHTML+=`
<div class="message user">${message}</div>
`;

setTimeout(()=>{

chatMessages.innerHTML+=`
<div class="message ai">
Hello! I'm OMGoracle AI Assistant. This is Version 1 demo. Full AI integration will be added in the next version.
</div>
`;

chatMessages.scrollTop=chatMessages.scrollHeight;

},700);

chatInput.value="";

});

}


// ========================
// Website Initialization
// ========================

window.addEventListener("DOMContentLoaded",()=>{

console.log("🚀 OMGoracle AI Cyber Cafe Version 1 Ready");

});
// ===============================
// Responsive Navbar
// ===============================
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}