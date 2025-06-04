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

// Navigation handling
document.addEventListener("DOMContentLoaded", function () {
  // Handle navigation links
  const navLinks = document.querySelectorAll(".navbar-right a, .menu-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Remove any active states
      navLinks.forEach((l) => l.classList.remove("active"));
      // Add active state to clicked link
      this.classList.add("active");
    });
  });

  // Menu toggle functionality
  const menuToggle = document.getElementById("menu-toggle");
  const menuOverlay = document.getElementById("menu-overlay");
  const menuClose = document.getElementById("menu-close");

  if (menuToggle && menuOverlay && menuClose) {
    menuToggle.addEventListener("click", function () {
      menuOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });

    menuClose.addEventListener("click", function () {
      menuOverlay.classList.remove("active");
      document.body.style.overflow = "";
    });

    // Close menu when clicking a link
    const menuLinks = document.querySelectorAll(".menu-link");
    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        menuOverlay.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }
});

// Cursor animation
(() => {
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
      "style",
      `top: ${e.pageY - 25}px; left: ${e.pageX - 25}px;`
    );
  });

  document.addEventListener("click", () => {
    cursor.classList.add("cursor--expand");
    setTimeout(() => {
      cursor.classList.remove("cursor--expand");
    }, 500);
  });
})();

// Floating images animation
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

// Particle cursor implementation
(async () => {
  const { particlesCursor } = await import(
    "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js"
  );

  const pc = particlesCursor({
    el: document.getElementById("particle-cursor"),
    gpgpuSize: 512,
    colors: [0x00ff00, 0x0000ff],
    color: 0xff0000,
    coordScale: 0.5,
    noiseIntensity: 0.001,
    noiseTimeCoef: 0.0001,
    pointSize: 5,
    pointDecay: 0.0025,
    sleepRadiusX: 250,
    sleepRadiusY: 250,
    sleepTimeCoefX: 0.001,
    sleepTimeCoefY: 0.002,
  });

  document.body.addEventListener("click", () => {
    pc.uniforms.uColor.value.set(Math.random() * 0xffffff);
    pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2;
    pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001;
    pc.uniforms.uPointSize.value = 1 + Math.random() * 10;
  });
})();

// Parallax effect for page4 images
gsap.utils
  .toArray(
    ".page4-right-up-img1 img, .page4-right-up-img2 img, .page4-right-down-img1 img"
  )
  .forEach((img) => {
    gsap.to(img, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

// Parallax effect for page5 images
gsap.utils
  .toArray(".page5-left-img img, .page5-right-img img")
  .forEach((img) => {
    gsap.to(img, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

// Cursor parallax effect for page5 images
const page5Images = document.querySelectorAll(
  ".page5-left-img img, .page5-right-img img"
);

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  page5Images.forEach((img) => {
    const speed = img.getAttribute("data-speed") || 0.1;
    const x = (mouseX - 0.5) * speed * 100;
    const y = (mouseY - 0.5) * speed * 100;

    img.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// Reset position when mouse leaves window
document.addEventListener("mouseleave", () => {
  page5Images.forEach((img) => {
    img.style.transform = "translate(0px, 0px)";
  });
});

// About page animations
document.addEventListener("DOMContentLoaded", () => {
  // Initialize ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Animate sections on scroll
  const sections = document.querySelectorAll(
    ".about-section, .experience-section"
  );
  sections.forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      y: -50,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });
  });

  // Animate skill categories
  const skillCategories = document.querySelectorAll(".skill-category");
  skillCategories.forEach((category, index) => {
    gsap.from(category, {
      scrollTrigger: {
        trigger: category,
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.2,
      ease: "power2.out",
    });
  });

  // Animate contribution items
  const contributionItems = document.querySelectorAll(".contribution-item");
  contributionItems.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.2,
      ease: "power2.out",
    });
  });

  // Animate project items
  const projectItems = document.querySelectorAll(".project-item");
  projectItems.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.2,
      ease: "power2.out",
    });
  });

  // Animate experience items
  const experienceItems = document.querySelectorAll(".experience-item");
  experienceItems.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.2,
      ease: "power2.out",
    });
  });

  // Animate goal items
  const goalItems = document.querySelectorAll(".goal-item");
  goalItems.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.2,
      ease: "power2.out",
    });
  });

  // Parallax effect for journey image
  const journeyImage = document.querySelector(".journey-image img");
  if (journeyImage) {
    gsap.to(journeyImage, {
      scrollTrigger: {
        trigger: journeyImage,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: 100,
      ease: "none",
    });
  }
});
