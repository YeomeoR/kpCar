var track = document.querySelector('.carousel__track');
var slides = Array.from(track.children);
var nextButton = document.querySelector('.carousel__button--right');
var prevButton = document.querySelector('.carousel__button--left');
var dotsNav = document.querySelector('.carousel__nav');
var dots = Array.from(dotsNav.children);

// var slideSize = slides[0].getBoundingClientRect();
// console.log(slideSize);
// var slideWidth = slideSize.width;
// console.log(slideWidth);
var slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slide next to each other
// slides[0].style = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px'; // this num needs to be always the same size as the image
// slides[2].style.left = slideWidth * 2 + 'px';

var setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

// loop to do above 
slides.forEach(setSlidePosition);

//  click on right button, move slides to the right
nextButton.addEventListener('click', e => {
    var currentSlide = track.querySelector('.current-slide');
    var nextSlide = currentSlide.nextElementSibling;
    var amountToMove = nextSlide.style.left;
    // move to the next slide
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');

})