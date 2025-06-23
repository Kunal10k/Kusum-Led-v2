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
        const duration = 2; // in seconds

        gsap.fromTo(counter, {
            innerText: 0
        }, {
            innerText: target,
            duration: duration,
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
            start: "top 80%", // when counter enters 80% from top
            once: true, // trigger only once
            onEnter: () => animateCounter(counter)
        });
    });
});


// ===========================
// 3. Testimonials Carousel (Owl Carousel)
// ===========================
$(document).ready(function () {
    $('.testimonial-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        dots: false,
        margin: 20
    });
});


// ===========================
// 4. Background Video Play/Pause Toggle
// ===========================
const video = document.getElementById("bgVideo");
const toggleBtn = document.getElementById("videoToggle");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
    } else {
        video.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
    }
});

// ===========================
// 5. GSAP Scroll Animations
// ===========================
gsap.registerPlugin(ScrollTrigger);

// 5.1 Horizontal Scroll
const scrollLength = document.querySelector('.scroller').scrollWidth - window.innerWidth;

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

// 5.2 Sticky Vertical Motion
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

// 5.3 Service Items Fade-in
gsap.utils.toArray(".service-item").forEach((item, i) => {
    gsap.to(item, {
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
// 6. Back to Top Button
// ===========================
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===========================
// 7. Parallax Animation (Who We Are Section)
// ===========================
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




const zoomLeft = document.getElementById("zoom-box-left");
const zoomRight = document.getElementById("zoom-box-right");
const sectionLeft = document.getElementById("zoom-section-left");
const sectionRight = document.getElementById("zoom-section-right");

let targetScaleLeft = 0.05;
let targetScaleRight = 0.05;
let currentScaleLeft = 0.05;
let currentScaleRight = 0.05;

function smoothScale(current, target, factor = 0.07) {
    return current + (target - current) * factor;
}

function updateScrollZoom() {
    const winH = window.innerHeight;

    // LEFT ZOOM LOGIC
    const leftRect = sectionLeft.getBoundingClientRect();
    const progressLeft = Math.min(1, Math.max(0, (winH - leftRect.top) / winH));
    targetScaleLeft = Math.pow(progressLeft, 1.2);
    currentScaleLeft = smoothScale(currentScaleLeft, targetScaleLeft);
    zoomLeft.style.transform = `scale(${Math.max(0.05, currentScaleLeft)})`;

    // RIGHT ZOOM LOGIC (only when left is fully zoomed)
    if (currentScaleLeft >= 0.99) {
        const rightRect = sectionRight.getBoundingClientRect();
        const progressRight = Math.min(1, Math.max(0, (winH - rightRect.top) / winH));
        targetScaleRight = Math.pow(progressRight, 1.2);
    } else {
        targetScaleRight = 0.05;
    }

    currentScaleRight = smoothScale(currentScaleRight, targetScaleRight);
    zoomRight.style.transform = `scale(${Math.max(0.05, currentScaleRight)})`;

    requestAnimationFrame(updateScrollZoom);
}

requestAnimationFrame(updateScrollZoom);



//test animation 


// Split the text into lines, words, and characters
let typeSplit = new SplitType('[animate]', {
    types: 'lines, words, chars',
    tagName: 'span'
});

// Animate lines when the element scrolls into view
gsap.from('[animate] .line', {
    y: '100%',
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power1.out',
    scrollTrigger: {
        trigger: '[animate]',
        start: 'top 80%', // when top of [animate] hits 80% of the viewport height
        toggleActions: 'play none none none' // animation behavior
    }
});


gsap.registerPlugin(ScrollTrigger);

gsap.from('.zoom-img', {
    scale: 1.2, // start zoomed in
    opacity: 0, // optional fade-in
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.zoom-img',
        start: 'top 80%', // when top of image hits 80% of viewport
        toggleActions: 'play none none none'
    }
});




 // Animate .animate-text-1: from bottom
  new SplitType('.animate-text-1', { types: 'lines', tagName: 'span' });
  gsap.from('.animate-text-1 .line', {
    scrollTrigger: {
      trigger: '.animate-text-1',
      start: 'top 80%',
    },
    y: '100%',
    opacity: 0,
    duration: 0.6,
    ease: 'power4.out',
    stagger: 0.1,
  });

  // Animate .animate-text-2: from left
  new SplitType('.animate-text-2', { types: 'lines', tagName: 'span' });
  gsap.from('.animate-text-2 .line', {
    scrollTrigger: {
      trigger: '.animate-text-2',
      start: 'top 85%',
    },
    x: '-100%',
    opacity: 0,
    duration: 0.7,
    ease: 'power2.out',
    stagger: 0.1,
  });

  // Animate .animate-text-3: fade only
  new SplitType('.animate-text-3', { types: 'lines', tagName: 'span' });
  gsap.from('.animate-text-3 .line', {
    scrollTrigger: {
      trigger: '.animate-text-3',
      start: 'top 90%',
    },
    opacity: 0,
    duration: 1,
    ease: 'power1.out',
    stagger: 0.15,
  });



  // test animated 

  document.addEventListener("DOMContentLoaded", () => {
  let typeSplit = new SplitType('.text-animate', {
    types: 'lines, words, chars',
    tagName: 'span'
  });

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

// our product 


$(document).ready(function () {
    $(".product-grid").owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,              // Enable autoplay
        autoplayTimeout: 3000,       // 3 seconds between slides
        autoplayHoverPause: true,    // Pause on hover
        smartSpeed: 600,             // Smooth transition speed (ms)
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
});




