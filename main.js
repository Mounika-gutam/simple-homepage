// Add JS here
const moonIcon = document.querySelector('.moon-icon');
const sunIcon = document.querySelector('.sun-icon');
const title = document.querySelector('.title');
const titleHeading = document.querySelector('.title-heading');
const logo = document.querySelector('.logo-img');

let container = document.getElementById("container");
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
  }
  
  moonIcon.addEventListener('click', () => {
    moonIcon.style.display = 'none';
    sunIcon.style.color = 'white';
    sunIcon.style.display = 'inline-block';
    container.classList.toggle('theme1'); 
    title.style.color = "white"
    titleHeading.style.color = "white"
    logo.style.color = "white"
  });
  sunIcon.addEventListener('click', () => {
    sunIcon.style.display = 'none';

    moonIcon.style.display = 'inline-block';
    container.classList.toggle('theme2');
    title.style.color = "#223344"
    titleHeading.style.color = "#223344"
  });