// Animate letters with a stagger effect when in view
const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("VISIBLE:", entry.target);
            const letters = entry.target.querySelectorAll('.letter');
            letters.forEach((letter, index) => {
                // Delay each letter by 0.05s * its position
                setTimeout(() => {
                    letter.classList.add('active');
                }, index * 50); 
            });
            titleObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });


// Select all titles
const titles = document.querySelectorAll('#reveal-title');
console.log(titles)
titles.forEach(title => {
    const text = title.innerText;
    title.innerText = '';
    console.log(text)
    text.split('').forEach((char) => {
        const letter = document.createElement('span');
        letter.classList.add('letter');
        letter.innerHTML = char === ' ' ? '&nbsp;' : char;
        title.appendChild(letter);
    });

    // Start observing this title
    titleObserver.observe(title);
});


// For animating the Cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {

        // if visible add the show class, followed by the delay
        
        if (entry.isIntersecting) {
            // Add a slight delay for each card based on its index
            // setTimeout(function, delay_in_milliseconds); is a keyword function
            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 300); 
        }
    });
}, { threshold: 0.15 });
//threshold determines, how much of element should be visible to display it

// For card reveal animation.... we inspect all the cards... 
// and call the object observer from IntersectionObserver and call the method observe
document.querySelectorAll('.sample-card').forEach((card) => {
    observer.observe(card);
});


// For animating Section Title
const section = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {

        // if visible add the show class, followed by the delay
        
        if (entry.isIntersecting) {
            // Add a slight delay for each card based on its index
            // setTimeout(function, delay_in_milliseconds); is a keyword function

            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 300); 
        }
    });
}, { threshold: 0.15 });
// document.querySelectorAll('.section-title').forEach((card) => {
//     observer.observe(card);
// });



const serviceCards = document.querySelectorAll('.service-card');

const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.5 });

serviceCards.forEach(card => serviceObserver.observe(card));




const serviceTexts = document.querySelectorAll('.service-text');

const serviceTextObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.5 });

serviceTexts.forEach(card => serviceTextObserver.observe(card));

