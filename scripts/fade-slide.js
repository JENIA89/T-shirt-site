(function () {
  let slides = document.querySelectorAll(".fade-slider__item");
  let activeClass = "fade-slider__item--visible";
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove(activeClass);
    index++;

    if (index + 1 > slides.length) {
      index = 0;
    }

    slides[index].classList.add(activeClass);
  }, 3000);
})();
