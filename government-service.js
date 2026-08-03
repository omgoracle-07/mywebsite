// =====================================
// OMGoracle Government Services
// JavaScript V1
// =====================================

console.log("🏛 Government Services Loaded");

// =======================
// Search
// =======================

const searchBox = document.getElementById("searchBox");

if(searchBox){

searchBox.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const cards=document.querySelectorAll(".service-card");

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

// =======================
// Card Animation
// =======================

const cards=document.querySelectorAll(".service-card");

cards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

setTimeout(()=>{

card.style.transition=".6s ease";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*80);

});

// =======================
// Ripple Effect
// =======================

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX;

const y=e.offsetY;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(255,215,0,.15),
#0f1117 70%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#0f1117";

});

});

// =======================
// Coming Soon Alert
// =======================

const disabled=document.querySelectorAll(".disabled");

disabled.forEach(card=>{

card.addEventListener("click",(e)=>{

e.preventDefault();

alert("🚧 This service will be available in Version 2.");

});

});

// =======================
// Welcome Message
// =======================

setTimeout(()=>{

console.log("✅ Welcome to OMGoracle Government Services");

},1000);

// =======================
// Future Features
// =======================

// Login
// AI Assistant
// API Integration
// Status Tracking
// Online Application