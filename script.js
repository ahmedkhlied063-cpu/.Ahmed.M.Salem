// 1. حركة الهالة الخضراء الانسيابية والسلسة جداً (Smooth Glow Animation)
const glow = document.getElementById('cursor-glow');
let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateGlow() {
    // تقنية الـ Linear Interpolation (lerp) لحركة ناعمة بدون تقطيع
    glowX += (mouseX - glowX) * 0.1;
    glowY += (mouseY - glowY) * 0.1;

    glow.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;

    requestAnimationFrame(animateGlow);
}

animateGlow();

// 2. تفعيل menu الموبايل (Hamburger Menu)
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navContainer = document.getElementById('nav-container');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navContainer.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navContainer.classList.remove('active');
    });
});

// Services Carousel Logic (Perfectly Centered + Drag/Swipe)
const wrapper = document.getElementById('carousel-wrapper');
const track = document.getElementById('services-track');
const dots = document.querySelectorAll('.dot');

if (track && wrapper) {
    // تكرار الكروت لضمان الاستمرارية
    const cards = Array.from(track.children);
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    track.classList.add('animating');

    // أزرار النقاط مع محاذاة المنتصف
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            dots.forEach(d => d.classList.remove('active', 'locked'));
            dot.classList.add('active', 'locked');
            
            track.classList.remove('animating');
            track.classList.add('paused');
            
            const isMobile = window.innerWidth <= 768;
            const step = isMobile ? 320 : 350;

            currentTranslate = -index * step;
            prevTranslate = currentTranslate;
            
            track.style.transition = 'transform 0.5s ease-in-out';
            track.style.transform = `translateX(${currentTranslate}px)`;
        });
    });

    // أحداث السحب بالماوس أو الإصبع (Touch/Drag)
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;

    const startDrag = (e) => {
        isDragging = true;
        startX = getPositionX(e);
        track.classList.remove('animating');
        track.classList.add('paused');
        track.style.transition = 'none';
        
        const style = window.getComputedStyle(track);
        const matrix = new WebKitCSSMatrix(style.transform);
        prevTranslate = matrix.m41;
        
        animationID = requestAnimationFrame(animationLoop);
    };

    const drag = (e) => {
        if (!isDragging) return;
        const currentX = getPositionX(e);
        const diff = currentX - startX;
        currentTranslate = prevTranslate + diff;
    };

    const endDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        cancelAnimationFrame(animationID);
        prevTranslate = currentTranslate;

        const isMobile = window.innerWidth <= 768;
        const step = isMobile ? 320 : 350;
        let activeIndex = Math.round(Math.abs(currentTranslate) / step) % dots.length;
        
        dots.forEach(d => d.classList.remove('active'));
        if (dots[activeIndex]) {
            dots[activeIndex].classList.add('active');
        }
    };

    const getPositionX = (e) => {
        return e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    };

    const animationLoop = () => {
        if (isDragging) {
            track.style.transform = `translateX(${currentTranslate}px)`;
            requestAnimationFrame(animationLoop);
        }
    };

    wrapper.addEventListener('mousedown', startDrag);
    wrapper.addEventListener('mousemove', drag);
    wrapper.addEventListener('mouseup', endDrag);
    wrapper.addEventListener('mouseleave', endDrag);

    wrapper.addEventListener('touchstart', startDrag, { passive: true });
    wrapper.addEventListener('touchmove', drag, { passive: true });
    wrapper.addEventListener('touchend', endDrag);
}

// Accordion Toggle Logic
// Accordion Toggle Logic
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const currentItem = header.parentElement;
        const isActive = currentItem.classList.contains('active');

        // إغلاق كل الأقسام الأخرى تلقائياً عند فتح قسم جديد
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });

        // فتح القسم المحدد فقط إذا لم يكن مفتوحاً
        if (!isActive) {
            currentItem.classList.add('active');
        }
    });
});

// Contact Form Handling
// Contact Form Submission Handling
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.contact-submit-btn');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = '<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
        submitBtn.style.pointerEvents = 'none';

        setTimeout(() => {
            submitBtn.innerHTML = '<span>Message Sent!</span> <i class="fa-solid fa-check"></i>';
            submitBtn.style.background = 'linear-gradient(135deg, #00ff88 0%, #00b359 100%)';
            
            contactForm.reset();

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.style.pointerEvents = 'all';
            }, 3000);
        }, 1200);
    });
}

// Copy to Clipboard Functionality
function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        const copyBadge = element.querySelector('.copy-badge');
        const originalHTML = copyBadge.innerHTML;

        element.classList.add('copied');
        copyBadge.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';

        setTimeout(() => {
            element.classList.remove('copied');
            copyBadge.innerHTML = originalHTML;
        }, 2000);
    });
}


// 1. تهيئة المكتبة بالـ Public Key
emailjs.init("YtGe_DwukEd34lsvt"); // استبدل هذا بـ Public Key من قسم Account

// 2. إرسال النموذج عند الضغط على Send Message
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // استبدل SERVICE_ID بالـ Service ID الخاص بك (مثل service_c1tbnmf)
    emailjs.sendForm('service_c1tbnmf', 'template_b6n09wn', this)
        .then(function() {
            alert('تم إرسال الرسالة بنجاح!');
        }, function(error) {
            alert('حدث خطأ أثناء الإرسال: ' + JSON.stringify(error));
        });
});

// Footer Functionality
document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Copyright Year
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Scroll to Top Action
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
