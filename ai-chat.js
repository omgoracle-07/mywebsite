/* ==========================================
   OMGoracle AI Chat
   Part 8
========================================== */

// =========================
// ELEMENTS
// =========================

const chatWindow=document.getElementById("chatWindow");
const chatInput=document.getElementById("chatInput");
const sendBtn=document.getElementById("sendBtn");


// =========================
// SEND MESSAGE
// =========================

function sendMessage(){

const message=chatInput.value.trim();

if(message==="") return;

const userMessage=`
<div class="message">
<div class="avatar">🧑</div>
<div class="bubble">${message}</div>
</div>
`;

chatWindow.innerHTML+=userMessage;

chatInput.value="";

chatWindow.scrollTop=chatWindow.scrollHeight;

showTyping();

}


// =========================
// BUTTON CLICK
// =========================

sendBtn.addEventListener("click",sendMessage);


// =========================
// ENTER KEY
// =========================

chatInput.addEventListener("keydown",function(e){

if(e.key==="Enter" && !e.shiftKey){

e.preventDefault();

sendMessage();

}

});


// =========================
// AI TYPING
// =========================

function showTyping(){

const typing=`
<div class="message" id="typingMessage">
<div class="avatar">🤖</div>
<div class="bubble">
Typing...
</div>
</div>
`;

chatWindow.innerHTML+=typing;

chatWindow.scrollTop=chatWindow.scrollHeight;

setTimeout(aiReply,1200);

}
// =========================
// AI REPLY
// =========================

function aiReply(){

const typing=document.getElementById("typingMessage");

if(typing){

typing.remove();

}

const replies=[

"👋 Hello! I'm OMGoracle AI. How can I help you today?",

"📄 I can help you create a professional resume.",

"🖼️ Upload your photo and I'll help prepare a passport-size version.",

"🛂 Need PAN Card guidance? Ask your question.",

"📑 I can assist with PDF tools and document-related tasks.",

"🌍 I can also help translate text into multiple languages."

];

const randomReply=replies[Math.floor(Math.random()*replies.length)];

const aiMessage=`
<div class="message">
<div class="avatar">🤖</div>
<div class="bubble">${randomReply}</div>
</div>
`;

chatWindow.innerHTML+=aiMessage;

chatWindow.scrollTop=chatWindow.scrollHeight;

saveChat();

}


// =========================
// CHAT HISTORY
// =========================

function saveChat(){

localStorage.setItem(
"omgoracleChat",
chatWindow.innerHTML
);

}

window.addEventListener("load",()=>{

const oldChat=localStorage.getItem("omgoracleChat");

if(oldChat){

chatWindow.innerHTML=oldChat;

}

});


// =========================
// NEW CHAT BUTTON
// =========================

const newChat=document.querySelector(".new-chat");

if(newChat){

newChat.addEventListener("click",()=>{

if(confirm("Start a new chat?")){

chatWindow.innerHTML="";

localStorage.removeItem("omgoracleChat");

}

});

}
// =========================
// FILE UPLOAD
// =========================

const fileUpload=document.getElementById("fileUpload");
const imageUpload=document.getElementById("imageUpload");

const toolButtons=document.querySelectorAll(".tool-btn");

if(toolButtons.length>=2){

toolButtons[0].addEventListener("click",()=>{

fileUpload.click();

});

toolButtons[1].addEventListener("click",()=>{

imageUpload.click();

});

}


// =========================
// FILE PREVIEW
// =========================

if(fileUpload){

fileUpload.addEventListener("change",function(){

if(this.files.length>0){

const file=this.files[0];

chatWindow.innerHTML+=`
<div class="message">
<div class="avatar">🧑</div>
<div class="bubble">
📎 File Uploaded:<br>
<b>${file.name}</b><br>
(${(file.size/1024).toFixed(1)} KB)
</div>
</div>
`;

chatWindow.scrollTop=chatWindow.scrollHeight;

}

});

}


// =========================
// IMAGE PREVIEW
// =========================

if(imageUpload){

imageUpload.addEventListener("change",function(){

if(this.files.length>0){

const file=this.files[0];

const url=URL.createObjectURL(file);

chatWindow.innerHTML+=`
<div class="message">
<div class="avatar">🧑</div>
<div class="bubble">
🖼️ Image Uploaded<br><br>
<img src="${url}"
style="max-width:220px;border-radius:12px;">
</div>
</div>
`;

chatWindow.scrollTop=chatWindow.scrollHeight;

}

});

}


// =========================
// DARK MODE
// =========================

const moonIcon=document.querySelector(".fa-moon");

if(moonIcon){

moonIcon.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

});

}


// =========================
// MOBILE SIDEBAR
// =========================

const sidebar=document.querySelector(".sidebar");

const gearIcon=document.querySelector(".fa-cog");

if(gearIcon && sidebar){

gearIcon.addEventListener("click",()=>{

sidebar.classList.toggle("active");

});

}
// =========================
// SMART AI DEMO RESPONSES
// =========================

function getAIResponse(message){

const text=message.toLowerCase();

if(text.includes("resume")){

return "📄 Sure! I can help you build a professional resume. In the next version you'll be able to enter your details and download a PDF resume.";

}

if(text.includes("passport")){

return "🖼️ Upload your photo and I'll help convert it into a passport-size photo with different background options.";

}

if(text.includes("pan")){

return "🛂 I can guide you through PAN Card application, required documents, and online registration.";

}

if(text.includes("aadhaar") || text.includes("aadhar")){

return "🆔 I can explain Aadhaar services like update, correction, address change, and document requirements.";

}

if(text.includes("pdf")){

return "📑 I can help merge, split, compress, convert, and organize PDF files.";

}

if(text.includes("translate")){

return "🌍 I can translate text between multiple languages.";

}

if(text.includes("photo")){

return "📸 Upload your image and tell me what edit you want. Image editing will be available after AI integration.";

}

return "🤖 Thanks for your message! This is the demo version of OMGoracle AI. Real AI responses will be available after backend and AI API integration.";

}


// =========================
// BETTER AI REPLY
// =========================

function aiReply(){

const typing=document.getElementById("typingMessage");

if(typing){

typing.remove();

}

const userMessages=document.querySelectorAll(".message .bubble");

const lastMessage=userMessages[userMessages.length-1];

const reply=getAIResponse(lastMessage.innerText);

chatWindow.innerHTML+=`
<div class="message">
<div class="avatar">🤖</div>
<div class="bubble">${reply}</div>
</div>
`;

chatWindow.scrollTop=chatWindow.scrollHeight;

saveChat();

}


// =========================
// AUTO SAVE
// =========================

setInterval(()=>{

saveChat();

},5000);


// =========================
// STARTUP MESSAGE
// =========================

console.log("OMGoracle AI Chat Part 11 Loaded Successfully");
// =========================
// VOICE INPUT (Browser Support)
// =========================

const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

if(SpeechRecognition){

const recognition=new SpeechRecognition();

recognition.lang="en-US";

recognition.continuous=false;

recognition.interimResults=false;

const micButton=document.querySelector(".fa-microphone");

if(micButton){

micButton.addEventListener("click",()=>{

recognition.start();

});

}

recognition.onresult=function(event){

chatInput.value=event.results[0][0].transcript;

};

recognition.onerror=function(){

alert("Voice recognition is not available on this browser.");

};

}


// =========================
// CLEAR CHAT
// =========================

const clearButton=document.createElement("button");

clearButton.innerHTML="🗑️ Clear Chat";

clearButton.style.position="fixed";
clearButton.style.top="20px";
clearButton.style.right="20px";
clearButton.style.padding="10px 16px";
clearButton.style.border="none";
clearButton.style.borderRadius="10px";
clearButton.style.background="#dc3545";
clearButton.style.color="#fff";
clearButton.style.cursor="pointer";
clearButton.style.zIndex="999";

document.body.appendChild(clearButton);

clearButton.addEventListener("click",()=>{

if(confirm("Delete all chat history?")){

chatWindow.innerHTML="";

localStorage.removeItem("omgoracleChat");

}

});


// =========================
// AUTO RESIZE TEXTAREA
// =========================

chatInput.addEventListener("input",()=>{

chatInput.style.height="auto";

chatInput.style.height=chatInput.scrollHeight+"px";

});


// =========================
// PAGE LOADED
// =========================

window.addEventListener("load",()=>{

console.log("🚀 OMGoracle AI Chat Version 1 Ready");

});