// ==========================================
// OMGoracle AI Translator
// Version 1.0
// ==========================================

const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const fromLanguage = document.getElementById("fromLanguage");
const toLanguage = document.getElementById("toLanguage");

const translateBtn = document.getElementById("translateBtn");
const swapBtn = document.getElementById("swapBtn");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");

// Translate
translateBtn.addEventListener("click", () => {

    const text = inputText.value.trim();

    if(text === ""){
        alert("Please enter some text.");
        return;
    }

    const from = fromLanguage.value;
    const to = toLanguage.value;

    const url =
`https://translate.google.com/?sl=${from}&tl=${to}&text=${encodeURIComponent(text)}&op=translate`;

    window.open(url,"_blank");

    outputText.value =
"Translation opened in Google Translate.";

});

// Swap Language

swapBtn.addEventListener("click",()=>{

    const temp = fromLanguage.value;

    fromLanguage.value = toLanguage.value;

    toLanguage.value = temp;

});

// Copy

copyBtn.addEventListener("click",()=>{

    if(outputText.value==="") return;

    navigator.clipboard.writeText(outputText.value);

    alert("Copied Successfully.");

});

// Clear

clearBtn.addEventListener("click",()=>{

    inputText.value="";

    outputText.value="";

});

// Auto Resize

[inputText,outputText].forEach(box=>{

    box.addEventListener("input",()=>{

        box.style.height="auto";

        box.style.height=box.scrollHeight+"px";

    });

});

console.log("✅ Translator Ready");