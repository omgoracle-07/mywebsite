// ==============================
// OMGoracle Passport Photo Tool
// Part 8 - Image Upload & Preview
// ==============================
const canvas = document.getElementById("photoCanvas");
const ctx = canvas.getContext("2d");

const imageUpload = document.getElementById("imageUpload");

let brightnessValue = 100;

let contrastValue = 100;

let img = new Image();

let zoom = 1;
let rotation = 0;
let brightness = 100;
let contrast = 100;

// Elements


const uploadBtn = document.getElementById("uploadBtn");

const previewImage = document.getElementById("previewImage");

const emptyText = document.getElementById("emptyText");



// Open File Picker

uploadBtn.addEventListener("click", () => {

    imageUpload.click();

});

// Upload Image

imageUpload.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        previewImage.src = e.target.result;

        previewImage.style.display = "block";

        emptyText.style.display = "none";

        rotation = 0;
        zoom = 1;
        brightness = 100;
        contrast = 100;

        updateImage();

    };

    reader.readAsDataURL(file);

});

// Update Image


function drawImage(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.save();

ctx.filter =
`brightness(${brightnessValue}%)
contrast(${contrastValue}%)`;

ctx.translate(canvas.width/2,canvas.height/2);

ctx.rotate(rotation*Math.PI/180);

ctx.scale(zoom,zoom);

ctx.drawImage(
img,
-img.width/2,
-img.height/2
);

ctx.restore();

}
function updateImage() {

    previewImage.style.transform = `
        translate(${posX}px, ${posY}px)
        scale(${zoom})
        rotate(${rotation}deg)
    `;

    previewImage.style.filter = `
        brightness(${brightness}%)
        contrast(${contrast}%)
    `;

}
// ==============================
// Part 9 - Rotate, Zoom & Sliders
// ==============================

// Buttons

const rotateBtn = document.getElementById("rotateBtn");
const zoomInBtn = document.getElementById("zoomInBtn");
const zoomOutBtn = document.getElementById("zoomOutBtn");

const brightnessSlider = document.getElementById("brightness");
const contrastSlider = document.getElementById("contrast");

// Rotate

rotateBtn.addEventListener("click", () => {

    rotation += 90;

    updateImage();

});

// Zoom In

zoomInBtn.addEventListener("click", () => {

    zoom += 0.1;

    if (zoom > 3) zoom = 3;

    updateImage();

});

// Zoom Out

zoomOutBtn.addEventListener("click", () => {

    zoom -= 0.1;

    if (zoom < 0.3) zoom = 0.3;

    updateImage();

});

// Brightness

brightnessSlider.addEventListener("input", function () {

    brightness = this.value;

    updateImage();

});

// Contrast

contrastSlider.addEventListener("input", function () {

    contrast = this.value;

    updateImage();

});
// ==============================
// Part 10 - Background & Reset
// ==============================

// Background Buttons

const bgButtons = document.querySelectorAll(".bg-btn");

const previewBox = document.querySelector(".preview-box");

bgButtons.forEach(button => {

    button.addEventListener("click", () => {

        const color = button.dataset.color;

        previewBox.style.background = color;

    });

});

// Reset Button

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {

    previewImage.src = "";

    previewImage.style.display = "none";

    emptyText.style.display = "block";

    previewBox.style.background = "#111";

    rotation = 0;
    zoom = 1;
    brightness = 100;
    contrast = 100;

    brightnessSlider.value = 100;
    contrastSlider.value = 100;

    updateImage();

});

// Passport Size Selection

const passportSize = document.getElementById("passportSize");

passportSize.addEventListener("change", function () {

    const size = this.value;

    switch (size) {

        case "35x45":
            previewImage.style.width = "220px";
            break;

        case "2x2":
            previewImage.style.width = "260px";
            break;

        case "visa":
            previewImage.style.width = "240px";
            break;

        default:
            previewImage.style.width = "100%";
    }

});
// ==============================
// Part 11 - JPG & PNG Download
// ==============================

const downloadJPG = document.getElementById("downloadJPG");
const downloadPNG = document.getElementById("downloadPNG");

// Create Canvas

function createCanvas() {

    const canvas = document.createElement("canvas");

    const ctx = canvas.getContext("2d");

    canvas.width = previewImage.naturalWidth || 600;
    canvas.height = previewImage.naturalHeight || 800;

    // Background

    ctx.fillStyle = getComputedStyle(previewBox).backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Filters

    ctx.filter =
        `brightness(${brightness}%) contrast(${contrast}%)`;

    // Draw Image

    ctx.save();

    ctx.translate(canvas.width / 2, canvas.height / 2);

    ctx.rotate(rotation * Math.PI / 180);

    const drawWidth = canvas.width * zoom;
    const drawHeight =
        (previewImage.naturalHeight / previewImage.naturalWidth) *
        drawWidth;

    ctx.drawImage(
        previewImage,
        -drawWidth / 2,
        -drawHeight / 2,
        drawWidth,
        drawHeight
    );

    ctx.restore();

    return canvas;

}

// Download JPG

downloadJPG.addEventListener("click", () => {

    if (!previewImage.src) {

        alert("Please upload an image first.");

        return;

    }

    const canvas = createCanvas();

    const link = document.createElement("a");

    link.download = "passport-photo.jpg";

    link.href = canvas.toDataURL("image/jpeg", 1);

    link.click();

});

// Download PNG

downloadPNG.addEventListener("click", () => {

    if (!previewImage.src) {

        alert("Please upload an image first.");

        return;

    }

    const canvas = createCanvas();

    const link = document.createElement("a");

    link.download = "passport-photo.png";

    link.href = canvas.toDataURL("image/png");

    link.click();

});
// ==============================
// Part 12 - PDF Download
// ==============================

const downloadPDF = document.getElementById("downloadPDF");

downloadPDF.addEventListener("click", () => {

    if (!previewImage.src) {

        alert("Please upload an image first.");

        return;

    }

    const canvas = createCanvas();

    const imgData = canvas.toDataURL("image/jpeg", 1.0);

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF({

        orientation: "portrait",

        unit: "mm",

        format: "a4"

    });

    const pageWidth = 210;

    const photoWidth = 35;

    const photoHeight = 45;

    const layout = parseInt(document.getElementById("printLayout").value);

    let x = 15;

    let y = 15;

    const gap = 8;

    for (let i = 0; i < layout; i++) {

        pdf.addImage(
            imgData,
            "JPEG",
            x,
            y,
            photoWidth,
            photoHeight
        );

        x += photoWidth + gap;

        if (x + photoWidth > pageWidth - 15) {

            x = 15;

            y += photoHeight + gap;

        }

    }

    pdf.save("passport-photo.pdf");

});
// ==============================
// Part 13 - Drag & Crop Controls
// ==============================

// Position Variables

let posX = 0;
let posY = 0;

let isDragging = false;

let startX = 0;
let startY = 0;

// Mouse Down

previewImage.addEventListener("mousedown", (e) => {

    if (!previewImage.src) return;

    isDragging = true;

    startX = e.clientX - posX;
    startY = e.clientY - posY;

    previewImage.style.cursor = "grabbing";

});

// Mouse Move

window.addEventListener("mousemove", (e) => {

    if (!isDragging) return;

    posX = e.clientX - startX;
    posY = e.clientY - startY;

    updateImage();

});

// Mouse Up

window.addEventListener("mouseup", () => {

    isDragging = false;

    previewImage.style.cursor = "grab";

});

// Update Function Override


// Part 14 - Final Finish
// ==============================

// Print Button

const printButton = document.createElement("button");

printButton.textContent = "🖨 Print Photo";

printButton.style.marginTop = "15px";

document.querySelector(".editor-card:last-child")
.appendChild(printButton);

// Print

printButton.addEventListener("click", () => {

    if (!previewImage.src) {

        alert("Please upload an image first.");

        return;

    }

    window.print();

});

// Keyboard Shortcuts

document.addEventListener("keydown", (e) => {

    if (e.ctrlKey && e.key === "s") {

        e.preventDefault();

        downloadJPG.click();

    }

    if (e.ctrlKey && e.key === "p") {

        e.preventDefault();

        printButton.click();

    }

});

// Success Message

console.log("✅ OMGoracle Passport Photo Tool Loaded Successfully");