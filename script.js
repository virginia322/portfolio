const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const header = document.querySelector("header");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) section.classList.add("visible");
  });
}

function setActiveLink() {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) current = section.getAttribute("id");
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
}

function handleHeaderScroll() {
  if(window.scrollY > 50){
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Smooth scroll for nav links
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({ top: targetSection.offsetTop - 70, behavior: 'smooth' });
  });
});

window.addEventListener("scroll", () => {
  revealOnScroll();
  setActiveLink();
  handleHeaderScroll();
});

revealOnScroll();