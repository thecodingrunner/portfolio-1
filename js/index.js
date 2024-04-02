const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open")
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


// toggle the theme on and off
const themeToggle = document.getElementById("themeToggle")
const body = document.querySelector("body")
const myServicesText = document.querySelector(".my-services")
const mainLogo = document.querySelector(".logo")

themeToggle.addEventListener("click", () => {
  body.classList.toggle("darkMode")
  myServicesText.style.color = "white"
  themeToggle.classList.toggle("logoFilter")
  mainLogo.classList.toggle("logoFilter")
})