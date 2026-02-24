// js/animations.js

function initHeroAnimations() {
    // We use a timeline so the animations happen in a specific order
    const tl = gsap.timeline({ 
        defaults: { 
            ease: "power4.out", 
            duration: 1.8 
        } 
    });

    // We animate TO the visible state (opacity 1, position 0)
    tl.to(".left-pic", { 
        opacity: 1, 
        x: 0 
    })
    .to(".right-pic", { 
        opacity: 1, 
        x: 0 
    }, "-=1.4") // This "-=1.4" makes it start almost at the same time as the left
    .to(".hero-text", { 
        opacity: 1, 
        y: 0 
    }, "-=1.2");
}

// js/main.js

document.addEventListener("DOMContentLoaded", () => {
    // Calling the function from animations.js
    initHeroAnimations();
});