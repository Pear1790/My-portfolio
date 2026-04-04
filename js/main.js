document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    let isMenuOpen = false;

    menuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('active');
        if (isMenuOpen) {
            menuBtn.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            isMenuOpen = false;
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Navbar Scroll Effect
    const nav = document.querySelector('.enterprise-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Typing Effect for Hero Subtitle
    const roles = [
        "Embedded Systems Engineer",
        "Software Engineer",
        "IoT Developer",
        "Full-Stack Developer",
        "R&D Engineer"
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    const typingElement = document.querySelector('.typing-text');

    function typeEffect() {
        if (!typingElement) return;
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    setTimeout(typeEffect, 1000);

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up');
    animatedElements.forEach(el => observer.observe(el));

    // Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    const triggers = document.querySelectorAll('.lightbox-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            lightbox.classList.add('active');
            lightboxCaption.textContent = trigger.getAttribute('data-caption');
            
            // If the element is an image tag (real image), use its src
            if (trigger.tagName.toLowerCase() === 'img') {
                lightboxImg.src = trigger.src;
            } else {
                // Generate a dummy dummy data URL to mimic an image since it's a placeholder
                const width = trigger.classList.contains('profile-placeholder') ? 600 : 800;
                const height = trigger.classList.contains('profile-placeholder') ? 600 : 450;
                
                lightboxImg.src = `data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22${width}%22%20height%3D%22${height}%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20${width}%20${height}%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1%20text%20%7B%20fill%3A%2394a3b8%3Bfont-weight%3Abold%3Bfont-family%3AInter%2C%20monospace%3Bfont-size%3A24pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22${width}%22%20height%3D%22${height}%22%20fill%3D%22%23cbd5e1%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%3EImage Placeholder%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E`;
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.classList.remove('active');
        }
    });

    // Expandable Cards Logic
    const toggleBtns = document.querySelectorAll('.toggle-expand');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.expandable-card');
            card.classList.toggle('is-expanded');
            
            // Re-trigger Lightbox triggers in case they weren't fully bound or to just update UI text
            if (card.classList.contains('is-expanded')) {
                btn.innerHTML = btn.innerHTML.replace('View', 'Hide');
            } else {
                btn.innerHTML = btn.innerHTML.replace('Hide', 'View');
            }
        });
    });
});
