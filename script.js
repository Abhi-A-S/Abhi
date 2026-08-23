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
// NAVBAR SCROLL STATE
// ========================================

const navbar = document.querySelector(".navbar");

function updateNavbar() {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
}

window.addEventListener("scroll", updateNavbar, { passive: true });

updateNavbar();

// ========================================
// ACTIVE NAVIGATION
// ========================================

const sections = document.querySelectorAll("main section");
const navLinksForSections = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            navLinksForSections.forEach((link) => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `.nav-links a[href="#${entry.target.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        });
    },
    {
        root: null,
        threshold: 0.25
    }
);

sections.forEach((section) => {
    sectionObserver.observe(section);
});


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