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

  window.addEventListener("load", function(){
  if (!localStorage.getItem("cookiesAccepted")) {
    const consent = document.createElement("div");
    consent.innerHTML = `
      <div style="position: fixed; bottom: 0; left: 0; right: 0; background: #222; color: white; padding: 15px; text-align: center; z-index: 9999;">
        🍪 We use cookies to improve your experience. By using our site, you agree to our 
        <a href="/privacy.html" style="color: #00f;">Privacy Policy</a>. 
        <button id="acceptCookies" style="margin-left: 10px; padding: 5px 15px;">Accept</button>
      </div>
    `;
    document.body.appendChild(consent);
    document.getElementById("acceptCookies").onclick = function() {
      localStorage.setItem("cookiesAccepted", true);
      consent.remove();
    };
  }
});


}

fbq('init', '123456789012345');

document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  }
});

document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
