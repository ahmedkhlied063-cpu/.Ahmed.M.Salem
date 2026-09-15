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
