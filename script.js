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

// cursor
(() => {
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
      "style",
      `top:  ${e.pageY - 25}px; left: ${e.pageX - 25}px;`
    );
  });

  document.addEventListener("click", () => {
    console.log("%c Click...!!!", "font-size: 20px; color:mediumspringgreen;");

    cursor.classList.add("cursor--expand");
    console.log(cursor.classList);

    setTimeout(() => {
      cursor.classList.remove("cursor--expand");
    }, 500);
  });
})();

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
