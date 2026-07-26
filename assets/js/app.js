// ================================
// GSEB Smart Learning Ultimate
// app.js (Part 1.3)
// ================================

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.transition = "0.6s";

            setTimeout(() => {
                loader.style.display = "none";
            }, 600);

        }, 800);
    }
});

// ---------------------------
// Dark Mode
// ---------------------------

const darkBtn = document.getElementById("darkBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    darkBtn.innerHTML = "☀️";
}

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        darkBtn.innerHTML = "☀️";

    } else {

        localStorage.setItem("theme", "light");

        darkBtn.innerHTML = "🌙";
    }

});

// ---------------------------
// Search
// ---------------------------

const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", () => {

    const value = searchBox.value.toLowerCase();

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {

        if (link.innerText.toLowerCase().includes(value)) {

            link.style.display = "inline-block";

        } else {

            link.style.display = "none";

        }

    });

});

// ---------------------------
// Navigation
// ---------------------------

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        alert("આ પેજ આગળના ભાગોમાં જોડવામાં આવશે.");

    });

});

// ---------------------------
// Class Buttons
// ---------------------------

document.querySelectorAll(".classes button").forEach(btn => {

    btn.addEventListener("click", () => {

        const std = btn.innerText;

        alert(std + " Module Coming Soon");

    });

});

// ---------------------------
// Hero Button
// ---------------------------

document.querySelector(".hero button")
.addEventListener("click", () => {

    window.scrollTo({

        top: 600,

        behavior: "smooth"

    });

});

// ---------------------------
//
// =========================
// Mobile Menu
// =========================

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click",()=>{

sidebar.classList.toggle("active");

});

// =========================
// Language Switch
// =========================

const language=document.getElementById("language");

language.addEventListener("change",()=>{

alert("Language: "+language.value);

});

// Sidebar બહાર ક્લિક કરો તો બંધ થઈ જાય

document.addEventListener("click",(e)=>{

if(
!sidebar.contains(e.target)
&&
e.target!==menuBtn
){

sidebar.classList.remove("active");

}

});
// Register Service Worker

if ("serviceWorker" in navigator) {

window.addEventListener("load",()=>{

navigator.serviceWorker.register("sw.js")
.then(()=>{

console.log("Service Worker Registered");

});

});

}
const splash=document.getElementById("splash");

window.addEventListener("load",()=>{

setTimeout(()=>{

splash.style.opacity="0";

setTimeout(()=>{

splash.style.display="none";

},600);

},1500);

});
