// ==============================
// OMGoracle QR Design Studio
// Version 1
// ==============================

const qrBox = document.getElementById("qrCode");

const qrData = document.getElementById("qrData");

const generateBtn = document.getElementById("generateBtn");

const qrColor = document.getElementById("qrColor");

const bgColor = document.getElementById("bgColor");

const qrSize = document.getElementById("qrSize");

let qr = null;

// Default Colors

qrColor.value = "#000000";
bgColor.value = "#ffffff";

// Generate QR

generateBtn.addEventListener("click", generateQR);

function generateQR(){

const text = qrData.value.trim();

if(text===""){

alert("Please enter data.");

return;

}

qrBox.innerHTML="";

qr = new QRCode(qrBox,{

text:text,

width:Number(qrSize.value),

height:Number(qrSize.value),

colorDark:qrColor.value,

colorLight:bgColor.value,

correctLevel:QRCode.CorrectLevel.H

});

}

// Live Update

qrColor.addEventListener("input",generateQR);

bgColor.addEventListener("input",generateQR);

qrSize.addEventListener("input",generateQR);

// Print


document.getElementById("printQR").addEventListener("click", () => {

    const qr = document.getElementById("qrCode").innerHTML;

    if(qr.trim() === ""){

        alert("Generate QR First");

        return;

    }

    const printWindow = window.open("", "_blank");

    printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Print QR</title>
        <style>

            body{
                margin:0;
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
                background:white;
            }

            #printQR{
                padding:20px;
                background:white;
            }

        </style>
    </head>

    <body>

        <div id="printQR">
            ${qr}
        </div>

    </body>
    </html>
    `);

    printWindow.document.close();

    printWindow.focus();

    printWindow.print();

    printWindow.close();

});
// PNG Download

document.getElementById("downloadPNG").onclick=function(){

const img=qrBox.querySelector("img");

if(!img){

alert("Generate QR First");

return;

}

const link=document.createElement("a");

link.download="OMGoracle-QR.png";

link.href=img.src;

link.click();

};

// SVG Placeholder

document.getElementById("downloadSVG").onclick=function(){

alert("SVG Download Coming Soon.");

};
const logoUpload =
document.getElementById("logoUpload");

const logoImage =
document.getElementById("logoImage");

logoUpload.addEventListener("change",function(){

const file=this.files[0];

if(!file) return;

const reader=new FileReader();

reader.onload=function(e){

logoImage.src=e.target.result;

logoImage.style.display="block";

}

reader.readAsDataURL(file);

});