document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        console.log('Hamburger clicked'); // Debug log
        navLinks.classList.toggle('active');
    });
});
