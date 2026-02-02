// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let outlineX = 0;
let outlineY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    // Smooth follow for dot
    cursorX += (mouseX - cursorX) * 0.5;
    cursorY += (mouseY - cursorY) * 0.5;
    
    // Slower follow for outline
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    
    cursorDot.style.transform = `translate(${cursorX - 3}px, ${cursorY - 3}px)`;
    cursorOutline.style.transform = `translate(${outlineX - 20}px, ${outlineY - 20}px)`;
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Hide cursor on mobile
if (window.matchMedia('(max-width: 968px)').matches) {
    cursorDot.style.display = 'none';
    cursorOutline.style.display = 'none';
    document.body.style.cursor = 'auto';
}

// Navigation Scroll Effect
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.transform = 'translateY(0)';
    } else if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        nav.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        nav.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Smooth Scroll for Navigation Links (only for anchor links on same page)
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Only prevent default and smooth scroll if it's an anchor link (starts with #)
        if (href && href.startsWith('#')) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Get target section
            const targetSection = document.querySelector(href);
            
            // Smooth scroll to section
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
        // Otherwise, let the link navigate normally to other pages
    });
});

// Update active nav link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
const animatedElements = document.querySelectorAll('[data-aos]');
animatedElements.forEach(el => observer.observe(el));

// Parallax Effect for Gradient Orbs
const orbs = document.querySelectorAll('.gradient-orb');

window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 30;
        const x = mouseX * speed;
        const y = mouseY * speed;
        
        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Work Items Hover Effect
const workItems = document.querySelectorAll('.work-item');

workItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Stagger Animation for Story Cards
const storyCards = document.querySelectorAll('.story-card');
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.2 });

storyCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    cardObserver.observe(card);
});

// Hero Image Parallax
const heroImage = document.querySelector('.hero-image-container');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.3;
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${parallax}px)`;
    }
});

// Text Reveal on Scroll
const revealText = () => {
    const reveals = document.querySelectorAll('.section-title, .contact-title');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

document.querySelectorAll('.section-title, .contact-title').forEach(title => {
    title.style.opacity = '0';
    title.style.transform = 'translateY(30px)';
    title.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
});

window.addEventListener('scroll', revealText);
revealText(); // Initial check

// Mobile Menu Toggle
const menuToggle = document.querySelector('.nav-menu-toggle');
const navLinksContainer = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Add active state to mobile menu
if (window.matchMedia('(max-width: 968px)').matches) {
    const style = document.createElement('style');
    style.textContent = `
        .nav-links {
            position: fixed;
            top: 80px;
            right: -100%;
            background: var(--secondary-bg);
            flex-direction: column;
            padding: 40px;
            border-radius: 4px;
            border: 1px solid var(--border-color);
            transition: right 0.3s ease;
            z-index: 999;
        }
        
        .nav-links.active {
            right: var(--container-padding);
            display: flex;
        }
        
        .nav-menu-toggle.active span:first-child {
            transform: rotate(45deg) translate(8px, 8px);
        }
        
        .nav-menu-toggle.active span:last-child {
            transform: rotate(-45deg) translate(7px, -7px);
        }
    `;
    document.head.appendChild(style);
}

// Performance: Reduce animations on low-end devices
if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    document.querySelectorAll('[data-aos]').forEach(el => {
        el.removeAttribute('data-aos');
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
}

// Preload images
const preloadImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src) {
            const preloadLink = document.createElement('link');
            preloadLink.rel = 'preload';
            preloadLink.as = 'image';
            preloadLink.href = src;
            document.head.appendChild(preloadLink);
        }
    });
};

window.addEventListener('load', preloadImages);

// Loading state
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add smooth reveal on page load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Add focus styles for keyboard navigation
const focusStyle = document.createElement('style');
focusStyle.textContent = `
    .keyboard-nav *:focus {
        outline: 2px solid var(--accent-color);
        outline-offset: 4px;
    }
`;
document.head.appendChild(focusStyle);

console.log('🚀 Grace Dice Portfolio - Initialized');
console.log('💚 Built with precision and intention');