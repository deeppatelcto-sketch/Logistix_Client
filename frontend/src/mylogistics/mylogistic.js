let counter = 1;
setInterval(() => {
    document.getElementById(`slide${counter}`).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 5000);


// navbar togglemenu
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}

// slider
let slideIndex = 1;
setInterval(() => {
    slideIndex = slideIndex % 3 + 1;
    document.getElementById(`slide${slideIndex}`).checked = true;
}, 5000); // Change slide every 5 seconds


