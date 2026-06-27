const shell = document.querySelector(".site-shell");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const counterValues = document.querySelectorAll("[data-count]");

if (menuToggle && shell) {
  menuToggle.addEventListener("click", () => {
    const isOpen = shell.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    shell?.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const element = entry.target;
      const target = Number(element.getAttribute("data-count"));
      const duration = 1100;
      const startTime = performance.now();

      const tick = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * target);
        element.textContent = `${value}+`;

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          element.textContent = `${target}+`;
        }
      };

      requestAnimationFrame(tick);
      observer.unobserve(element);
    });
  },
  { threshold: 0.45 }
);

counterValues.forEach((item) => counterObserver.observe(item));
