const menuBtn = document.getElementById("menu-button");
const sideNav = document.getElementById("sidenav");
const closeBtn = document.getElementById("close-sidenav-button");

menuBtn.addEventListener("click", () => {
  sideNav.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  sideNav.classList.add("hidden");
});
