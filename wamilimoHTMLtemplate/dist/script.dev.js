"use strict";

function toggleMenu() {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("show");
  var menuToggle = document.querySelector('.menu-toggle');
  menuToggle.innerHTML = navbar.classList.contains("show") ? "&times;" : "&#9776;";
}
//# sourceMappingURL=script.dev.js.map
