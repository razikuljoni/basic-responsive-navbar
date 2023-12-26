const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light"),
    searchToggle = document.querySelector(".searchToggle"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    siderbarClose = document.querySelector(".siderbarClose");

// get user selected mode from local storage
let getMode = localStorage.getItem("mode");

// checking user selected mode and adding class
if (getMode && getMode === "dark-mode") {
    body.classList.add("dark");
}

// toggle dark and light mode
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
    // keep user selected mode even page refresh or file reopen
    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
    } else {
        localStorage.setItem("mode", "dark-mode");
    }
});

// js code to toggle search box
searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");
});

// toggle sidebar
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

// close sidebar click anywhere in body
body.addEventListener("click", e => {
    let clickedElm = e.target;
    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
        nav.classList.remove("active");
    }
});