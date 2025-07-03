// JS/script.js

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Optional: Animate button when clicked
  const motivateBtn = document.querySelector("button[type='submit']");
  if (motivateBtn) {
    motivateBtn.addEventListener("click", () => {
      motivateBtn.classList.add("btn-clicked");
      setTimeout(() => motivateBtn.classList.remove("btn-clicked"), 300);
    });
  }

  // AOS (Animate on Scroll)
  if (typeof AOS !== 'undefined') AOS.init();

  // Typed headline (already included inline)
});

const s = document.querySelector('.logo-text');
if (!s) { console.log('NO SPAN'); }
else {
  const cs = getComputedStyle(s);
  console.table({
    text: s.textContent,
    display: cs.display,
    fontSize: cs.fontSize,
    color: cs.color,
    opacity: cs.opacity,
    visibility: cs.visibility,
  });
}
