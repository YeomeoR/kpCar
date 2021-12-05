var track = $('.carousel__track')[0];
var slides = Array.from(track.children);
// var nextButton = $('.carousel__button--right')[0];
// var prevButton = $('.carousel__button--left')[0];
var dotsNav = $('.carousel__nav')[0];
var dots = Array.from(dotsNav.children);

var slideWidth = slides[0].getBoundingClientRect().width;

var setSlidePosition = function (slide, index) {
  slide.style.left = slideWidth * index + 'px';
};
// loop to do above
slides.forEach(setSlidePosition);

var moveToSlide = function (track, currentSlide, targetSlide) {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

var updateDots = function (currentDot, targetDot) {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
};

dotsNav.addEventListener('click', function (e) {
  // which nav dot clicked
  var targetDot = e.target.closest('button');

  if (!targetDot) return;

  var currentSlide = track.querySelector('.current-slide');
  var currentDot = dotsNav.querySelector('.current-slide');
  var targetIndex = dots.findIndex(function (dot) {
    return dot === targetDot;
  });
  var targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  //   hideShowArrows(slides, prevButton, nextButton, targetIndex);
});

// setTimeout(function (e) {
//   for ($i = 0; $i <= slides.length; $i++) {
//     if (slides[$i] == slides[-1]) {
//       moveToSlide(slides[0]);
//     } else {
//       moveToSlide(slides[$i] + 1);
//     }
//   }
// }, 2000);

// var hideShowArrows = function (slides, prevButton, nextButton, targetIndex) {
//   if (targetIndex === 0) {
//     prevButton.classList.add('is-hidden');
//     nextButton.classList.remove('is-hidden');
//   } else if (targetIndex === slides.length - 1) {
//     prevButton.classList.remove('is-hidden');
//     nextButton.classList.add('is-hidden');
//   } else {
//     prevButton.classList.remove('is-hidden');
//     nextButton.classList.remove('is-hidden');
//   }
// };

// $('prevButton').on('click', function (e) {
//   var currentSlide = track.querySelector('.current-slide');
//   var prevSlide = currentSlide.previousElementSibling;
//   var currentDot = dotsNav.querySelector('.current-slide');
//   var prevDot = currentDot.previousElementSibling;
//   var prevIndex = slides.findIndex((slide) => slide === prevSlide);

//   moveToSlide(track, currentSlide, prevSlide);
//   updateDots(currentDot, prevDot);
//   hideShowArrows(slides, prevButton, nextButton, prevIndex);
// });

// //  click on right button, move slides to the right
// $('nextButton').on('click', function (e) {
//   var currentSlide = track.querySelector('.current-slide');
//   var nextSlide = currentSlide.nextElementSibling;
//   var currentDot = dotsNav.querySelector('.current-slide');
//   var nextDot = currentDot.nextElementSibling;
//   var nextIndex = slides.findIndex((slide) => slide === nextSlide);

//   moveToSlide(track, currentSlide, nextSlide);
//   updateDots(currentDot, nextDot);
//   hideShowArrows(slides, prevButton, nextButton, nextIndex);
// });

// click on nav dots to move to that slide
