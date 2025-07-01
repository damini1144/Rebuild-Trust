/* script.js - Enhanced Animations & Interactions */

document.addEventListener('DOMContentLoaded', () => {
  // Typed.js Animated Headline
  if (window.Typed) {
    new Typed('#typed-headline', {
      strings: ['Rebuild Trust, Heal Your Love'],
      typeSpeed: 70,
      backSpeed: 30,
      backDelay: 3000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });
  } else {
    document.getElementById('typed-headline').textContent = 'Rebuild Trust, Heal Your Love';
  }

  // Initialize AOS animations (Animate On Scroll)
  if (window.AOS) {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
      offset: 100,
    });
  }

  // Scroll To Top Button with Lottie Animation
  const scrollBtn = document.createElement('button');
  scrollBtn.id = 'scrollToTop';
  scrollBtn.innerHTML = `
    <lottie-player 
      src="https://assets5.lottiefiles.com/packages/lf20_tutvdkg0.json" 
      background="transparent" 
      speed="1" 
      loop autoplay 
      style="width:50px;height:50px">
    </lottie-player>`;
  scrollBtn.style.cssText = 'position:fixed;bottom:30px;right:20px;background:transparent;border:none;cursor:pointer;display:none;z-index:1200;';
  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  // Floating Telegram Chat Button with Lottie Animation
  const chatBtn = document.createElement('a');
  chatBtn.href = 'https://t.me/yourTrustTalkGroup';  // Replace with your Telegram group link
  chatBtn.target = '_blank';
  chatBtn.id = 'floatingChat';
  chatBtn.title = 'Join Our Trust Talk Telegram Group';
  chatBtn.innerHTML = `
    <lottie-player
      src="https://assets4.lottiefiles.com/packages/lf20_dvlnu6om.json"
      background="transparent"
      speed="1"
      loop autoplay
      style="width:60px;height:60px;cursor:pointer;">
    </lottie-player>`;
  document.body.appendChild(chatBtn);

  // Sticky Navbar Background Color Change On Scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Auto-hide Hero Header on Scroll Down, Show on Scroll Up (desktop only)
  const hero = document.getElementById('hero');
  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop && currentScroll > hero.offsetHeight / 2) {
      hero.style.transform = 'translateY(-100%)';
    } else {
      hero.style.transform = 'translateY(0)';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  // Smooth scrolling for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Form Submit Handler - Alert + Reset if no real backend
  const form = document.querySelector('form');
  if(form) {
    form.addEventListener('submit', (e) => {
      if (!form.action || form.action === '#') {
        e.preventDefault();
        alert('✅ Thank you! Your guide is on the way.');
        form.reset();
      }
    });
  }

  // Inject Lottie Script dynamically (if not loaded)
  if (!window.customElements || !window.customElements.get('lottie-player')) {
    const lottieScript = document.createElement('script');
    lottieScript.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
    document.body.appendChild(lottieScript);
  }
});
