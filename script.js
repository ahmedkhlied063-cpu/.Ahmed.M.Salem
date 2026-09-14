document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    const navDot = document.querySelector('.nav-dot');
    
    // 1. منطق تحريك النقطة تحت عناصر الناف بار
    function updateNavDot(activeLink) {
        if (!navDot || window.innerWidth <= 768) return;
        if (activeLink) {
            const rect = activeLink.getBoundingClientRect();
            const navRect = navLinks.getBoundingClientRect();
            navDot.style.left = `${rect.left - navRect.left + (rect.width / 2) - 3}px`;
            navDot.style.opacity = '1';
        } else {
            navDot.style.opacity = '0';
        }
    }

    // تفعيل النقطة عند التحميل
    const activeLink = document.querySelector('.nav-links a.active');
    updateNavDot(activeLink);

    // تغيير النقطة المباشر أثناء الـ Scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
                updateNavDot(a);
            }
        });
    });

    // 2. إنشاء عناصر القائمة الجانبية للشاشات الصغيرة
    let menuToggle = document.querySelector('.menu-toggle');
    if (!menuToggle) {
        menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.ariaLabel = 'Toggle Menu';
        menuToggle.innerHTML = '<span></span><span></span><span></span>';
        navbar.appendChild(menuToggle);
    }

    let navOverlay = document.querySelector('.nav-overlay');
    if (!navOverlay) {
        navOverlay = document.createElement('div');
        navOverlay.className = 'nav-overlay';
        document.body.appendChild(navOverlay);
    }

    const toggleMenu = () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        navOverlay.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', toggleMenu);

    navItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // 3. كود Accordion لقسم الخدمات (Services)
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            accordionItems.forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 4. كود Cursor Glow لدعم الماوس واللمس على الهاتف
    const cursorGlow = document.querySelector('.cursor-glow');
    if (cursorGlow) {
        // حركة الماوس للاب توب
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.opacity = '1';
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        });

        // حركة اللمس للهاتف
        document.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                cursorGlow.style.opacity = '1';
                cursorGlow.style.left = `${e.touches[0].clientX}px`;
                cursorGlow.style.top = `${e.touches[0].clientY}px`;
            }
        });

        document.addEventListener('touchend', () => {
            cursorGlow.style.opacity = '0';
        });
    }
});
