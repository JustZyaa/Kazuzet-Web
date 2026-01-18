const header = document.getElementById('header');
const bars = document.querySelectorAll('.bar div');
const btnAbout = document.getElementById('btnAbout');


document.addEventListener("DOMContentLoaded", () => {
  const btnContact = document.getElementById("btnContact");
  const contactModal = document.getElementById("contactModal");
  const closeContact = document.querySelector(".contact-close");
  const contactBackdrop = document.querySelector(".contact-backdrop");

  if (!btnContact) {
    console.error("btnContact GA KETEMU");
    return;
  }

  btnContact.addEventListener("click", () => {
    contactModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  const closeModal = () => {
    contactModal.classList.remove("active");
    document.body.style.overflow = "";
  };

  closeContact.addEventListener("click", closeModal);
  contactBackdrop.addEventListener("click", closeModal);
});

// Navbar scroll effect + skill animation
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);

  bars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      bar.style.width = bar.dataset.skill;
    }
  });
});

// Button scroll
btnAbout.addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

const video = document.querySelector(".bg-wrapper video");
const overlay = document.querySelector(".bg-overlay");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = scrollY / maxScroll;

  // Biru makin terang
  overlay.style.opacity = 0.2 + progress * 0.5;

  // Video makin cerah dikit
  video.style.filter = `
    brightness(${0.35 + progress * 0.25})
    saturate(${0.8 + progress * 0.4})
  `;
});


