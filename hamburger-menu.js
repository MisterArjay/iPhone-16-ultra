const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const textarea = document.querySelector("#text-area");
const header = document.querySelector("#header");
const html = document.querySelector("html");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-go").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

