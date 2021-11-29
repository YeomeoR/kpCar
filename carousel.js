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
};
// loop to do above
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

var updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide')
}

var hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
     if (targetIndex === 0) {
       prevButton.classList.add('is-hidden');
       nextButton.classList.remove('is-hidden');
     } else if (targetIndex === slides.length - 1) {
       prevButton.classList.remove('is-hidden');
       nextButton.classList.add('is-hidden');
     } else {
       prevButton.classList.remove('is-hidden');
       nextButton.classLst.remove('is-hidden');
     }
}


prevButton.addEventListener('click', (e) => {
  var currentSlide = track.querySelector('.current-slide');
    var prevSlide = currentSlide.previousElementSibling;
    var currentDot = dotsNav.querySelector('.current-slide');
    var prevDot = currentDot.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
        updateDots(currentDot, prevDot);

});

//  click on right button, move slides to the right
nextButton.addEventListener('click', e => {
  var currentSlide = track.querySelector('.current-slide');
    var nextSlide = currentSlide.nextElementSibling;
    var currentDot = dotsNav.querySelector('.current-slide');
    var nextDot = currentDot.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
});

// click on nav dots to move to that slide
dotsNav.addEventListener('click', e => {
    // which nav dot clicked
    var targetDot = e.target.closest('button');

    if (!targetDot) return;

    var currentSlide = track.querySelector('current-slide');
    var currentDot = dotsNav.querySelector('.current-slide');
    var targetIndex = dots.findIndex(dot => dot === targetDot);
    var targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
    
})
