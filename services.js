// ==========================================
// OMGoracle Services Page JS
// Version 1.0
// ==========================================

// ---------- Search ----------

const searchInput = document.getElementById("searchInput");
const serviceCards = document.querySelectorAll(".service-card");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        serviceCards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });
}

// ---------- Category Filter ----------

const buttons = document.querySelectorAll(".category-buttons button");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        buttons.forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");

        const filter = this.dataset.filter;

        serviceCards.forEach(card => {

            if (
                filter === "all" ||
                card.dataset.category === filter
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});

// ---------- Card Hover ----------

serviceCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ---------- Smooth Scroll ----------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ---------- Loading Animation ----------

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// ---------- Console ----------

console.log("✅ OMGoracle Services Loaded Successfully");
// =============================
// Responsive Navbar
// =============================



// =============================
// Responsive Navbar
// =============================


// =======================
// Mobile Navbar
// =======================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");



    menuToggle.addEventListener("click",  () => {

        navbar.classList.toggle("active");

   
});
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if(menuToggle && navbar){

menuToggle.onclick=function(){

navbar.classList.toggle("active");

}

}