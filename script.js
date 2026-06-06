const body = document.body;
const glassNav = document.querySelector('.glass-nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = [...document.querySelectorAll('.nav-link')];
const themeToggle = document.querySelector('.theme-toggle');
const revealItems = document.querySelectorAll('[data-reveal]');
const sections = [...document.querySelectorAll('main section[id]')];
const ambientLayers = [...document.querySelectorAll('.ambient')];
const contactForm = document.querySelector('#contact-form');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    body.classList.add('reduce-motion');
}

localStorage.removeItem('theme');

const savedTheme = localStorage.getItem('site-theme');
if (savedTheme === 'light') {
    body.classList.add('theme-light');
}

const syncThemeToggle = () => {
    const isDark = !body.classList.contains('theme-light');
    themeToggle?.setAttribute('aria-pressed', String(isDark));
    themeToggle?.setAttribute('aria-label', isDark ? 'Switch to orange light theme' : 'Switch to dark navy theme');
};

syncThemeToggle();

themeToggle?.addEventListener('click', () => {
    body.classList.toggle('theme-light');
    const theme = body.classList.contains('theme-light') ? 'light' : 'dark';
    localStorage.setItem('site-theme', theme);
    syncThemeToggle();
});

navToggle?.addEventListener('click', () => {
    const isOpen = glassNav.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        glassNav.classList.remove('nav-open');
        navToggle?.setAttribute('aria-expanded', 'false');
    });
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.14,
    rootMargin: '0px 0px -40px 0px'
});

revealItems.forEach((item) => {
    if (prefersReducedMotion) {
        item.classList.add('is-visible');
        return;
    }

    revealObserver.observe(item);
});

const hashLinks = navLinks.filter((link) => {
    const href = link.getAttribute('href') || '';
    return href.startsWith('#');
});

if (sections.length && hashLinks.length) {
    const setActiveLink = () => {
        const scrollPosition = window.scrollY + 140;

        let currentSection = sections[0]?.id;
        sections.forEach((section) => {
            if (scrollPosition >= section.offsetTop) {
                currentSection = section.id;
            }
        });

        hashLinks.forEach((link) => {
            const isActive = link.getAttribute('href') === `#${currentSection}`;
            link.classList.toggle('active', isActive);
        });
    };

    setActiveLink();
    window.addEventListener('scroll', setActiveLink, { passive: true });
}

if (!prefersReducedMotion) {
    window.addEventListener('mousemove', (event) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const offsetX = (event.clientX - centerX) / centerX;
        const offsetY = (event.clientY - centerY) / centerY;

        ambientLayers.forEach((layer, index) => {
            const depth = (index + 1) * 10;
            layer.style.transform = `translate(${offsetX * depth}px, ${offsetY * depth}px)`;
        });
    });
}

contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const bodyText = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:grcdice@gmail.com?subject=${subject}&body=${bodyText}`;
});
