// Apply animations to all elements with the "card" class
document.querySelectorAll(".card").forEach((card) => {
  gsap.to(card, {
    scale: 0.7,
    opacity: 0,
    scrollTrigger: {
      trigger: card,
      start: "top 15%",
      end: "bottom 15%",
      // markers: true, // Uncomment this to see markers for debugging
      scrub: true,
    },
  });
});

// Define the section elements
const section = {
  element: document.querySelector(".scroll"),
  subtitle: document.querySelector(".scroll-text-subtitle > *"),
  titleChars: document.querySelectorAll(".scroll-text-title-word span"),
  gallary: document.querySelector(".scroll-gallary"),
  gallaryImages: document.querySelectorAll(".scroll-gallary img"),
};

// Initialize animations and Lenis
const init = () => {
  // Set initial styles for the subtitle
  gsap.set(section.subtitle, { autoAlpha: 0 });

  // Set initial styles for the title characters
  gsap.set(section.titleChars, {
    scale: 0,
    yPercent: -60,
    z: -40,
    rotateY: 180,
    transformOrigin: "50% 50%",
  });

  // Initialize Lenis for smooth scrolling
  initLenis();
  animateScroll();
};

// Initialize Lenis for smooth scrolling
const initLenis = () => {
  const lenis = new Lenis({
    lerp: 0.05, // Adjust the smoothing factor
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0); // Disable lag smoothing for better performance
};

const animateScroll = () => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section.element,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      pin: false,
    },
  });
  timeline
    .to(section.gallary, { yPercent: -100 })
    .to(
      section.gallaryImages,
      {
        yPercent: -150,
        stagger: 0.05,
      },
      0
    )
    .to(
      section.titleChars,
      {
        scale: 1,
        yPercent: 0,
        z: 0,
        rotateY: 0,
        stagger: {
          each: 0.1,
          grid: "auto",
          from: "center",
        },
      },
      0
    )
    .to(section.subtitle, { autoAlpha: 1 }, 0.25);
};

// Wait for DOM content to load before initializing
window.addEventListener("DOMContentLoaded", () => {
  init();
});
