document.addEventListener("DOMContentLoaded", () => {
  // Theme Switching Logic
  const htmlElement = document.documentElement;
  const themeSwitcher = document.getElementById("themeSwitcher");
  const themeIcon = document.getElementById("themeIcon");

  const sunPath =
    "M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z";
  const moonPath =
    "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z";

  themeSwitcher.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    htmlElement.setAttribute("data-bs-theme", newTheme);
    themeIcon
      .querySelector("path")
      .setAttribute("d", newTheme === "dark" ? sunPath : moonPath);
  });

  // Intersection Observer for animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up");
          if (entry.target.id === "skills" || entry.target.closest("#skills")) {
            animateSkillBars();
          }
        }
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(".animate-fade-in")
    .forEach((el) => observer.observe(el));

  function animateSkillBars() {
    const cards = document.querySelectorAll(".skill-card-container");
    cards.forEach((card) => {
      const bar = card.querySelector(".custom-progress-bar");
      const label = card.querySelector(".proficiency-value");
      const target = parseInt(label.getAttribute("data-target"));

      if (bar && (bar.style.width === "0%" || bar.style.width === "")) {
        bar.style.width = target + "%";
        let current = 0;
        const interval = setInterval(() => {
          if (current >= target) {
            clearInterval(interval);
          } else {
            current++;
            label.textContent = current + "%";
          }
        }, 20);
      }
    });
  }
});
function send() {
  let firstname = document.getElementById("fname").value;
  let lastname = document.getElementById("lname").value;
  let email = document.getElementById("temail").value;
  let phone = document.getElementById("tphone").value;

  let message = document.getElementById("tmessage").value;
  alert(
    `Name: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  );
}
