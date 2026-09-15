/* ==========================================================================
   1. RESET & FONTS & COLORS
   ========================================================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
    scroll-behavior: smooth;
}

:root {
    --hue: 140;                        /* الدرجة اللونية الخضراء */
    --bg-dark: #030804;               /* أسود عميق مائل للأخضر */
    --card-green-dark: #071c0e;       /* تدرج الورقة 2 */
    --card-green-light: #0d381b;      /* تدرج الورقة 1 */
    --accent-green: #00ff88;          /* أخضر نيون ناصع */
    --accent-green-hover: #00cc6a;
    --accent-glow: rgba(0, 255, 136, 0.4);
    --text-white: #ffffff;
    --text-muted: #94a3b8;
    --nav-bg: rgba(3, 8, 4, 0.85);
    --border-glow: rgba(0, 255, 136, 0.3);
}

body {
    background-color: var(--bg-dark);
    color: var(--text-white);
    overflow-x: hidden;
    direction: ltr;
}

/* ==========================================================================
   2. SMOOTH CURSOR GLOW
   ========================================================================== */
.cursor-glow {
    position: fixed;
    top: 0;
    left: 0;
    width: 380px;
    height: 380px;
    background: radial-gradient(circle, rgba(0, 255, 136, 0.18) 0%, rgba(0, 255, 136, 0.05) 45%, rgba(0, 0, 0, 0) 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    will-change: transform;
    transform: translate(-50%, -50%);
}

/* ==========================================================================
   3. NAVIGATION BAR
   ========================================================================== */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.3rem 8%;
    background: var(--nav-bg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    z-index: 1000;
    border-bottom: 1px solid rgba(0, 255, 136, 0.12);
}

.logo {
    font-family: 'Syne', sans-serif;
    font-size: 1.6rem;
    font-weight: 800;
    letter-spacing: -0.5px;
}

.white-text { color: var(--text-white); }
.green-text { 
    color: var(--accent-green); 
    text-shadow: 0 0 15px var(--accent-glow);
}

.nav-links {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 2.8rem;
}

.nav-link {
    color: #e2e8f0;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 600;
    position: relative;
    padding-bottom: 6px;
    transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
    color: var(--accent-green);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%) scale(0);
    width: 6px;
    height: 6px;
    background-color: var(--accent-green);
    border-radius: 50%;
    transition: transform 0.3s ease;
    box-shadow: 0 0 10px var(--accent-green);
}

.nav-link:hover::after,
.nav-link.active::after {
    transform: translateX(-50%) scale(1);
}

.btn-contact-nav {
    color: #030804;
    background-color: var(--accent-green);
    text-decoration: none;
    padding: 0.65rem 1.7rem;
    border-radius: 30px;
    font-weight: 700;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    box-shadow: 0 0 18px rgba(0, 255, 136, 0.35);
    display: inline-block;
}

.btn-contact-nav:hover {
    background-color: var(--accent-green-hover);
    box-shadow: 0 0 28px rgba(0, 255, 136, 0.6);
    transform: translateY(-2px);
}

.mobile-only-btn { display: none; }
.desktop-only-btn { display: block; }

.menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 28px;
    height: 20px;
    cursor: pointer;
    z-index: 1001;
}

.menu-toggle span {
    height: 3px;
    width: 100%;
    background-color: var(--text-white);
    border-radius: 3px;
    transition: all 0.3s ease;
}

.menu-toggle.active span:nth-child(1) {
    transform: translateY(8.5px) rotate(45deg);
    background-color: var(--accent-green);
}
.menu-toggle.active span:nth-child(2) { opacity: 0; }
.menu-toggle.active span:nth-child(3) {
    transform: translateY(-8.5px) rotate(-45deg);
    background-color: var(--accent-green);
}

/* ==========================================================================
   4. HERO & PLAYING CARDS (تطبيق التنسيق والدوران المطلوب)
   ========================================================================== */
.hero-section {
    min-height: 100vh;
    padding: 140px 8% 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.cards-wrapper {
    position: relative;
    width: 210px;
    height: 250px;
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* التنسيق المشترك للكروت */
.card {
    position: absolute;
    width: 210px;
    height: 250px;
    border-radius: 1.5rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
    opacity: 0;
    animation: fadeInUpCards 0.9s forwards cubic-bezier(0.16, 1, 0.3, 1);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}

/* الكارت الخلفي 2 (الأخير) */
.card-back-2 {
    z-index: 1;
    background-color: hsl(var(--hue), 25%, 32%);
    border: 1px solid rgba(0, 255, 136, 0.2);
    rotate: -10deg;
    left: -1.5rem;
    bottom: 0.5rem;
    animation-delay: 0s;
}

/* الكارت الخلفي 1 (الأوسط) */
.card-back-1 {
    z-index: 2;
    background-color: var(--text-white);
    border: 1px solid rgba(0, 255, 136, 0.4);
    rotate: 5deg;
    animation-delay: 0.25s;
}

/* الكارت الرئيسي للصورة (الأمامي) */
.card-main {
    z-index: 3;
    background: linear-gradient(180deg, 
        hsl(var(--hue), 75%, 85%) 0%, 
        hsl(var(--hue), 75%, 60%) 100%);
    border: 2px solid var(--accent-green);
    box-shadow: 0 0 30px rgba(0, 255, 136, 0.3);
    rotate: 10deg;
    left: 1.5rem;
    bottom: 1.5rem;
    animation-delay: 0.5s;
    overflow: hidden;
}

.card-main img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* أنيميشن الظهور التدريجي */
@keyframes fadeInUpCards {
    to {
        opacity: 1;
    }
}

/* تأثير التفاعل عند تحريك الماوس (Hover) */
.cards-wrapper:hover .card-back-2 {
    transform: rotate(-16deg) translate(-20px, 5px);
}
.cards-wrapper:hover .card-back-1 {
    transform: rotate(0deg) scale(1.02);
}
.cards-wrapper:hover .card-main {
    transform: rotate(15deg) translate(15px, -10px);
    box-shadow: 0 0 40px rgba(0, 255, 136, 0.5);
}

/* ==========================================================================
   5. HOME CONTENT & TYPOGRAPHY IMPROVEMENTS
   ========================================================================== */
.home-bottom-content {
    width: 100%;
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 60px;
}

.about-brief {
    flex: 1.1;
    text-align: left;
}

.about-brief h2 {
    font-family: 'Syne', sans-serif;
    font-size: 2.3rem;
    font-weight: 800;
    color: var(--accent-green);
    margin-bottom: 14px;
    letter-spacing: -0.02em;
    text-shadow: 0 0 20px var(--accent-glow);
}

.about-brief p {
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.7;
    font-size: 1.12rem;
    font-weight: 400;
    letter-spacing: -0.01em;
}

.highlight-text {
    color: var(--accent-green);
    font-weight: 700;
    text-shadow: 0 0 12px rgba(0, 255, 136, 0.3);
}

.cta-brief {
    flex: 0.9;
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.cta-brief p {
    color: #ffffff;
    font-size: 1.18rem;
    font-weight: 500;
    margin-bottom: 24px;
    line-height: 1.6;
    letter-spacing: -0.01em;
}

.btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background-color: var(--accent-green);
    color: #030804;
    padding: 0.9rem 2.2rem;
    border-radius: 40px;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.02rem;
    letter-spacing: -0.01em;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 0 25px rgba(0, 255, 136, 0.4);
}

.btn-primary svg {
    transition: transform 0.3s ease;
}

.btn-primary:hover {
    background-color: var(--accent-green-hover);
    transform: translateY(-3px);
    box-shadow: 0 0 35px rgba(0, 255, 136, 0.7);
}

.btn-primary:hover svg {
    transform: translateX(4px);
}

/* ==========================================================================
   6. RESPONSIVE DESIGN
   ========================================================================== */
@media (max-width: 992px) {
    .home-bottom-content {
        gap: 40px;
    }
}

@media (max-width: 768px) {
    .menu-toggle { display: flex; }
    .desktop-only-btn { display: none; }
    .mobile-only-btn { display: block; margin-top: 15px; }

    .nav-container {
        position: fixed;
        top: -100vh;
        left: 0;
        width: 100%;
        height: 100vh;
        background: var(--nav-bg);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: top 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        z-index: 1000;
    }

    .nav-container.active { top: 0; }

    .nav-links {
        flex-direction: column;
        gap: 2.2rem;
        text-align: center;
    }

    .nav-link { font-size: 1.35rem; }

    .home-bottom-content {
        flex-direction: column;
        text-align: center;
        gap: 40px;
    }

    .about-brief, .cta-brief {
        text-align: center;
        align-items: center;
    }
}

@media (max-width: 480px) {
    .cards-wrapper,
    .card {
        width: 180px;
        height: 220px;
    }
    
    .about-brief h2 { font-size: 1.8rem; }
    .about-brief p, .cta-brief p { font-size: 1rem; }
}

/* ==========================================================================
   7. WORKS SECTION
   ========================================================================== */
.works-section {
    padding: 100px 8% 90px;
    background-color: #010402;
    border-top: 1px solid rgba(0, 255, 136, 0.08);
    display: flex;
    justify-content: center;
    align-items: center;
}

.works-container {
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
}

.section-title-wrapper {
    text-align: center;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section-title {
    font-family: 'Syne', sans-serif;
    font-size: 2.4rem;
    font-weight: 800;
    color: var(--accent-green);
    margin-bottom: 14px;
    letter-spacing: -0.02em;
    text-shadow: 0 0 20px var(--accent-glow);
}

.section-subtitle {
    color: rgba(255, 255, 255, 0.82);
    font-size: 1.12rem;
    font-weight: 400;
    line-height: 1.7;
    letter-spacing: -0.01em;
    max-width: 600px;
}

.projects-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    width: 100%;
}

.project-card {
    width: 100%;
    max-width: 340px;
    background: rgba(7, 28, 14, 0.35);
    border: 1px solid rgba(0, 255, 136, 0.15);
    border-radius: 18px;
    overflow: hidden;
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    backdrop-filter: blur(12px);
    display: flex;
    flex-direction: column;
    text-align: left;
}

.project-card:hover {
    transform: translateY(-6px);
    border-color: var(--accent-green);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 255, 136, 0.2);
}

.project-img-wrapper {
    position: relative;
    width: 100%;
    height: 180px;
    overflow: hidden;
}

.project-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.project-card:hover .project-img-wrapper img {
    transform: scale(1.06);
}

.img-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(3, 8, 4, 0) 30%, rgba(3, 8, 4, 0.85) 100%);
}

.project-info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.project-tag {
    color: var(--accent-green);
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 6px;
}

.project-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-white);
    margin-bottom: 8px;
}

.project-desc {
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.92rem;
    line-height: 1.55;
    margin-bottom: 20px;
    flex-grow: 1;
}

.btn-review {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: var(--accent-green);
    color: #030804;
    padding: 0.65rem 1.5rem;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.88rem;
    width: fit-content;
    transition: all 0.3s ease;
    box-shadow: 0 0 15px rgba(0, 255, 136, 0.3);
}

.btn-review svg {
    transition: transform 0.3s ease;
}

.btn-review:hover {
    background-color: var(--accent-green-hover);
    transform: translateY(-2px);
    box-shadow: 0 0 25px rgba(0, 255, 136, 0.5);
}

.btn-review:hover svg {
    transform: translateX(3px);
}
