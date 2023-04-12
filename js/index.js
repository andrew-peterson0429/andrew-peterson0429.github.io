const navToggle = document.querySelector('.nav-toggle');

const navLinks = document.querySelectorAll('.nav-link');

// adds class to nav toggle button when clicked
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// removes nav-open class so menu closes when clicking on links
navLinks.forEach(link => {
    link.addEventListener('click', ()=> {
        document.body.classList.remove('nav-open');
    })
});