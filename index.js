const btn = document.getElementById ("btn");
const links = document.getElementById ("menu-links");
const overlay = document.querySelector(".overlay");

btn.addEventListener("click", () => {
  links.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});
