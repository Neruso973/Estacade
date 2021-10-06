//jscript à propos carousel//

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-button-felix.arrow-right");
const previousButton = document.querySelector(
  ".carousel-button-felix.arrow-left"
);
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

console.log(slideWidth);

// arrange slides next to one another
const setSlidePostion = (slide, index) => {
  slide.style.left = slideWidth * index + "%";
};
slides.forEach(setSlidePostion);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};
const hideShowArrows = (slides, previousButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    previousButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    previousButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    previousButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
};

// left click
previousButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, previousButton, nextButton, prevIndex);
});
//right click
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, previousButton, nextButton, nextIndex);
});

//nav indicators click
dotsNav.addEventListener("click", (e) => {
  //what indicator was clicked on
  const targetDot = e.target.closest("button");
  console.log(targetDot);
  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  console.log(targetIndex);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, previousButton, nextButton, targetIndex);
});

if(carouselSlide !== currentSlide){
    carouselSlide.classList.add('is-hidden');
}
