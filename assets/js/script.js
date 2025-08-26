let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 
  };

  // Close menu on scroll

  window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active'); 
  };

   const typed = new Typed('.multiple-text', {
      strings: ['Front-End Developer', 'Back-End .NET Developer', 'Web Designer'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });
const form = document.getElementById("contact-form");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent normal form submission
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.reset(); 
      successMessage.classList.add("show"); // show success message

      // hide after 5 seconds
      setTimeout(() => {
        successMessage.classList.remove("show");
      }, 5000);
    } else {
      // try to read error message
      const errorData = await response.json();
      alert("❌ Oops! Something went wrong: " + (errorData.error || "Please try again."));
    }
  } catch (error) {
    // fallback: show success message even if network has minor errors
    successMessage.classList.add("show");
    setTimeout(() => {
      successMessage.classList.remove("show");
    }, 5000);

    console.error("Network error:", error);
  }
});


const scrollBtn = document.getElementById("scrollBtn");

  // Show button after scrolling down 200px
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  // Scroll to top smoothly
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
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
});
