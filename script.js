"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navigationLinks = document.querySelectorAll(".nav-links a");

function toggleMenu() {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}

function closeMenu() {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
}

menuToggle.addEventListener("click", toggleMenu);

navigationLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

// ========================================
// DOM REFERENCES
// ========================================


// ========================================
// NAVIGATION
// ========================================


// ========================================
// INTERACTIONS
// ========================================


// ========================================
// SCROLL BEHAVIOUR
// ========================================


// ========================================
// ANIMATIONS
// ========================================


// ========================================
// ACCESSIBILITY
// ========================================