const btn = document.getElementById("btn");
const links = document.getElementById("menu-links");

btn.addEventListener("click", () => {
  links.classList.toggle("hidden");
});
