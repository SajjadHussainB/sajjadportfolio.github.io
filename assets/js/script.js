// Menu Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Typed.js 
const typed = new Typed('.multiple-text', {
  strings: ['Front-End Developer', 'Back-End .NET Developer', 'Web Designer'],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

//Contact
const form = document.getElementById("contact-form");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.reset();
      successMessage.classList.add("show");
      setTimeout(() => successMessage.classList.remove("show"), 5000);
    } else {
      const errorData = await response.json();
      alert("❌ Oops! " + (errorData.error || "Please try again."));
    }
  } catch (error) {
    successMessage.classList.add("show");
    setTimeout(() => successMessage.classList.remove("show"), 5000);
    console.error("Network error:", error);
  }
});

//Scroll To Top 
const scrollBtn = document.getElementById("scrollBtn");
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");
const cards = document.querySelectorAll('.service-box, .project-card');

window.addEventListener("scroll", () => {
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  if (window.scrollY > 200) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }

  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });

//   cards.forEach((card, i) => {
//     const top = card.getBoundingClientRect().top;
//     const bottom = card.getBoundingClientRect().bottom;
//     if (top < window.innerHeight - 100 && bottom > 100) {
//       setTimeout(() => card.classList.add('show'), i * 150);
//     } else {
//       card.classList.remove('show');
//     }
//   });
// });

// Skills Animation 
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.querySelector("#skills");
  if (!skillsSection) return;

  const bars = skillsSection.querySelectorAll(".w3-container");
  const paths = skillsSection.querySelectorAll(".path");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bars.forEach(bar => {
          bar.classList.remove("active");
          void bar.offsetWidth; 
          bar.classList.add("active");
        });
        paths.forEach(path => {
          path.classList.remove("active");
          void path.offsetWidth;
          path.classList.add("active");
        });
      } else {
        bars.forEach(bar => {
          bar.classList.remove("active");
          bar.style.width = "0"; 
        });
        paths.forEach(path => {
          path.classList.remove("active");
          path.style.strokeDashoffset = "502px";
        });
      }
    });
  }, { threshold: 0.3 });

  observer.observe(skillsSection);
});
