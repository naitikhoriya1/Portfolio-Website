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
