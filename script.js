document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Precise Interactive Mouse Glow Tracker
    const cursorGlow = document.getElementById('cursorGlow');
    
    window.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });

    // 2. Glowing Dot Tracker in Navbar
    const navLinks = document.querySelectorAll('.nav-links a');
    const navDot = document.querySelector('.nav-dot');

    function updateDotPosition(element) {
        if (!element || !navDot) return;
        navDot.style.left = `${element.offsetLeft + (element.offsetWidth / 2) - 3}px`;
        navDot.style.opacity = '1';
    }

    // Initialize Dot Position on Load
    const activeLink = document.querySelector('.nav-links a.active');
    if (activeLink) {
        setTimeout(() => updateDotPosition(activeLink), 100);
    }

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => updateDotPosition(e.target));
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
            updateDotPosition(e.target);
        });
    });

    document.querySelector('.nav-links').addEventListener('mouseleave', () => {
        const currentActive = document.querySelector('.nav-links a.active');
        if (currentActive) updateDotPosition(currentActive);
    });

    // 3. Services Accordion Drawer Shift Interactive Toggle
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            accordionItems.forEach(i => {
                if (i !== item) i.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });

    // 4. Update Navbar Links & Glow Dot on Scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
                updateDotPosition(a);
            }
        });
    });
});

