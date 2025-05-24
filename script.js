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
