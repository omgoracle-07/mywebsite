// =====================================
// OMGoracle Banking Menu JavaScript
// Version 1
// =====================================

console.log("🏦 Banking Menu Loaded");

// =======================
// Search Function
// =======================

const searchBox = document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".tool-card");

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// =======================
// Card Animation
// =======================

const cards = document.querySelectorAll(".tool-card");

cards.forEach((card, index) => {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    setTimeout(() => {

        card.style.transition = ".5s";

        card.style.opacity = "1";

        card.style.transform = "translateY(0)";

    }, index * 100);

});

// =======================
// Coming Soon Alert
// =======================

const disabledCards = document.querySelectorAll(".disabled");

disabledCards.forEach(card => {

    card.addEventListener("click", function (e) {

        e.preventDefault();

        alert("🚧 This Banking Tool is coming in Version 2.");

    });

});

// =======================
// Smooth Scroll
// =======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// =======================
// Welcome Message
// =======================

setTimeout(() => {

    console.log("✅ Welcome to OMGoracle Banking Services");

}, 1000);

// =======================
// Future Features
// =======================

// Dark Mode
// Notification
// User Login
// API Integration
// Banking Dashboard