document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        console.log('Hamburger clicked'); // Debug log
        navLinks.classList.toggle('active');
    });
});


// var slideIndex = 1;

//function openLightbox() {
  //document.getElementById("lightbox").style.display = "block";
  //showSlide(slideIndex);
//}

//function closeLightbox() {
  //document.getElementById("lightbox").style.display = "none";
//}

//function changeSlide(n) {
 // showSlide(slideIndex += n);
//}

//function currentSlide(n) {
  //showSlide(slideIndex = n);
//}

//function showSlide(n) {
  //var i;
  //var slides = document.getElementsByClassName("slides");
  //if (n > slides.length) {slideIndex = 1}
  //if (n < 1) {slideIndex = slides.length}
  //for (i = 0; i < slides.length; i++) {
    //slides[i].style.display = "none";
  //}
  //slides[slideIndex-1].style.display = "block";
//}