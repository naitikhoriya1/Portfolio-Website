// Apply animations to all elements with the "card" class
document.querySelectorAll(".card").forEach((card) => {
  gsap.to(card, {
    scale: 0.7,
    opacity: 0.3,
    scrollTrigger: {
      trigger: card,
      start: "top 15%",
      end: "bottom bottom",
      // markers: true, // Uncomment this to see markers for debugging
      scrub: true,
    },
  });
});

// Parallax effect for project cards
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card");

  const handleParallax = () => {
    const scrolled = window.pageYOffset;

    projectCards.forEach((card) => {
      const speed = card.getAttribute("data-speed");
      const yPos = -(scrolled * speed);
      card.style.setProperty("--scroll", yPos + "px");
    });
  };

  window.addEventListener("scroll", handleParallax);
  window.addEventListener("resize", handleParallax);

  // Initial call to set positions
  handleParallax();
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Fullscreen menu open/close logic
const menuToggle = document.getElementById("menu-toggle");
const menuOverlay = document.getElementById("menu-overlay");
const menuClose = document.getElementById("menu-close");
const menuLinks = document.querySelectorAll(".menu-link");

if (menuToggle && menuOverlay && menuClose) {
  menuToggle.addEventListener("click", () => {
    menuOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });
  menuClose.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
    document.body.style.overflow = "";
  });
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuOverlay.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
}

// animation on menu
const imgs = document.querySelectorAll("#imgs img");
const total = imgs.length;
const rotateStep = 360 / total;

imgs.forEach((img, i) => {
  const rotate = i * rotateStep;
  img.style.transform = `translate3d(-50%, -50%, 0) rotate3d(0, 1, 0, ${rotate}deg)`;
});

const container = document.getElementById("imgs");
let docWidth = document.body.clientWidth;
let targetRotate = 0;
let currentRotate = 0;

window.addEventListener("resize", () => {
  docWidth = document.body.clientWidth;
});

document.addEventListener("mousemove", (e) => {
  targetRotate = (e.pageX * 360) / docWidth;
});

function animate() {
  currentRotate += (targetRotate - currentRotate) * 0.1;
  container.style.transform = `rotate3d(0, 1, 0, ${-currentRotate}deg)`;
  requestAnimationFrame(animate);
}

animate();
