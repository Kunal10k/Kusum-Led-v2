// ===========================
// 1. Hero Autoplay Slider
// ===========================
let slides = document.querySelectorAll('.hero-slide');
let index = 0;

function showNextSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
setInterval(showNextSlide, 5000);

// ===========================
// 2. Counter Animation on Load
// ===========================
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        gsap.fromTo(counter, { innerText: 0 }, {
            innerText: target,
            duration: 2,
            ease: 'power1.out',
            snap: { innerText: 1 },
            onUpdate: function () {
                counter.innerText = Math.ceil(counter.innerText);
            }
        });
    };
    counters.forEach(counter => {
        ScrollTrigger.create({
            trigger: counter,
            start: "top 80%",
            once: true,
            onEnter: () => animateCounter(counter)
        });
    });
});

// ===========================
// 3. Owl Carousels Init
// ===========================
$(document).ready(function () {
    // Testimonials Carousel
    $('.testimonial-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        margin: 20
    });

    // Product Grid Carousel
    $('.product-grid').owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 600,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
    });

    // Lamp Category Carousel
    $('.lamp-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        smartSpeed: 600,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: { items: 2 },
            576: { items: 3 },
            768: { items: 4 },
            992: { items: 5 }
        }
    });
});

// ===========================
// 4. Background Video Toggle
// ===========================
const video = document.getElementById("bgVideo");
const toggleBtn = document.getElementById("videoToggle");
if (video && toggleBtn) {
    const icon = toggleBtn.querySelector("i");
    toggleBtn.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            icon.classList.replace("fa-play", "fa-pause");
        } else {
            video.pause();
            icon.classList.replace("fa-pause", "fa-play");
        }
    });
}

// ===========================
// 5. GSAP Scroll Animations
// ===========================
gsap.registerPlugin(ScrollTrigger);

// Horizontal Scroll
const scrollLength = document.querySelector('.scroller')?.scrollWidth - window.innerWidth;
if (scrollLength > 0) {
    gsap.to('.scroller', {
        x: () => -scrollLength,
        ease: "none",
        scrollTrigger: {
            trigger: ".scroll-container",
            start: "top top",
            end: () => "+=" + scrollLength,
            scrub: true,
            pin: ".scroll-container",
            anticipatePin: 1
        }
    });

    gsap.to('.sticky-content', {
        y: -500,
        ease: "none",
        scrollTrigger: {
            trigger: ".scroll-container",
            start: "top top",
            end: () => "+=" + scrollLength,
            scrub: true
        }
    });
}

// Fade-in Items
gsap.utils.toArray(".service-item").forEach((item) => {
    gsap.fromTo(item, { y: 30, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
});

// ===========================
// 6. Back to Top
// ===========================
const backToTopBtn = document.getElementById("backToTopBtn");
window.addEventListener("scroll", () => {
    backToTopBtn?.classList.toggle("show", window.scrollY > 300);
});
backToTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===========================
// 7. Parallax Section
// ===========================
function animateParallax() {
    const section = document.querySelector('.who-we-are');
    const left = document.querySelector('.parallax-left img');
    const right = document.querySelector('.parallax-right img');
    if (!section || !left || !right) return;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.scrollY;
    const windowH = window.innerHeight;
    if (scrollY + windowH > sectionTop && scrollY < sectionTop + sectionHeight) {
        const relativeY = (scrollY + windowH - sectionTop) / (sectionHeight + windowH);
        const moveY = (relativeY - 0.5) * 250;
        left.style.transform = `translateY(${moveY}px) rotate(-8deg)`;
        right.style.transform = `translateY(${-moveY}px) rotate(8deg)`;
    }
}
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            animateParallax();
            ticking = false;
        });
        ticking = true;
    }
});

// ===========================
// 8. Zoom Section Scroll Scaling
// ===========================
const zoomLeft = document.getElementById("zoom-box-left");
const zoomRight = document.getElementById("zoom-box-right");
const sectionLeft = document.getElementById("zoom-section-left");
const sectionRight = document.getElementById("zoom-section-right");
let targetScaleLeft = 0.05, targetScaleRight = 0.05;
let currentScaleLeft = 0.05, currentScaleRight = 0.05;

function smoothScale(current, target, factor = 0.07) {
    return current + (target - current) * factor;
}

function updateScrollZoom() {
    const winH = window.innerHeight;
    if (sectionLeft && zoomLeft) {
        const leftRect = sectionLeft.getBoundingClientRect();
        const progressLeft = Math.min(1, Math.max(0, (winH - leftRect.top) / winH));
        targetScaleLeft = Math.pow(progressLeft, 1.2);
        currentScaleLeft = smoothScale(currentScaleLeft, targetScaleLeft);
        zoomLeft.style.transform = `scale(${Math.max(0.05, currentScaleLeft)})`;
    }

    if (sectionRight && zoomRight) {
        if (currentScaleLeft >= 0.99) {
            const rightRect = sectionRight.getBoundingClientRect();
            const progressRight = Math.min(1, Math.max(0, (winH - rightRect.top) / winH));
            targetScaleRight = Math.pow(progressRight, 1.2);
        } else {
            targetScaleRight = 0.05;
        }
        currentScaleRight = smoothScale(currentScaleRight, targetScaleRight);
        zoomRight.style.transform = `scale(${Math.max(0.05, currentScaleRight)})`;
    }

    requestAnimationFrame(updateScrollZoom);
}
requestAnimationFrame(updateScrollZoom);

// ===========================
// 9. GSAP Text Animations
// ===========================
let typeSplit = new SplitType('[animate]', { types: 'lines, words, chars', tagName: 'span' });

gsap.from('[animate] .line', {
    y: '100%',
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power1.out',
    scrollTrigger: {
        trigger: '[animate]',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});

// Zoom images
gsap.from('.zoom-img', {
    scale: 1.2,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.zoom-img',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});

// Line text animations
['.animate-text-1', '.animate-text-2', '.animate-text-3'].forEach((selector, idx) => {
    new SplitType(selector, { types: 'lines', tagName: 'span' });
    gsap.from(`${selector} .line`, {
        scrollTrigger: {
            trigger: selector,
            start: 'top 85%',
        },
        opacity: 0,
        duration: 0.6 + (idx * 0.2),
        ease: 'power2.out',
        y: idx === 0 ? '100%' : '0%',
        x: idx === 1 ? '-100%' : '0%',
        stagger: 0.1,
    });
});

// Word-based animation
document.addEventListener("DOMContentLoaded", () => {
    let typeSplit = new SplitType('.text-animate', { types: 'lines, words, chars', tagName: 'span' });
    gsap.from('.text-animate .word', {
        opacity: 0.3,
        duration: 0.5,
        ease: 'power3.inOut',
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.text-animate',
            start: 'top center',
            scrub: true
        }
    });
});



