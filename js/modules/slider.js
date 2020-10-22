function slider() {
    // slider

    /*  const slider = document.querySelector('.offer__slider');
      const sliderPrev = slider.querySelector('.offer__slider-prev');
      const sliderNext = slider.querySelector('.offer__slider-next');
      const currentId = slider.querySelector('#current');
      const totalId = slider.querySelector('#total');
      const slides = slider.querySelectorAll('.offer__slide');
      let numberOfSlide = 0;

      if (slides.length < 10) {
        totalId.innerHTML = `0${slides.length}`;
      } else {
        totalId.innerHTML = `${slides.length}`;
      }

      function hideSlides() {
        slides.forEach((slide, index) => {
          slide.classList.add('hide');
          slide.classList.remove('fade');
        });
      }

      function showSlide(i) {
        slides[i].classList.remove('hide');
        slides[i].classList.add('fade');
        currentId.innerHTML = `0${i+1}`;
      }

      hideSlides();
      showSlide(numberOfSlide);

      sliderPrev.addEventListener('click', () => {
        hideSlides();
        if(numberOfSlide <= 0) {
          numberOfSlide = slides.length - 1;
          showSlide(numberOfSlide);
        } else {
          numberOfSlide--;
          showSlide(numberOfSlide);
        }
      });

      sliderNext.addEventListener('click', () => {
        hideSlides();
        if(numberOfSlide >= slides.length - 1) {
          numberOfSlide = 0;
          showSlide(numberOfSlide);
        } else {
          numberOfSlide++;
          showSlide(numberOfSlide);
        }
      });*/

    const slides = document.querySelectorAll('.offer__slide');
    const slider = document.querySelector('.offer__slider');
    const sliderPrev = document.querySelector('.offer__slider-prev');
    const sliderNext = document.querySelector('.offer__slider-next');
    const current = document.querySelector('#current');
    const total = document.querySelector('#total');
    const slidesWrapper = document.querySelector('.offer__slider-wrapper');
    const slidesField = document.querySelector('.offer__slider-inner');
    const width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol');
    const dots = [];
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');

        if (i === 0) {
            dot.style.opacity = '1';
        }

        indicators.append(dot);
        dots.push(dot);
    }

    function changeOpacity() {
        dots.forEach(dot => {
            dot.style.opacity = '0.5';
            dots[slideIndex - 1].style.opacity = '1';
        });
    }

    function makeNumber (str) {
        return +str.replace(/\D/g, '');
    }

    sliderNext.addEventListener('click', () => {
        if (offset === makeNumber(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += makeNumber(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex += 1;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        changeOpacity();
    });

    sliderPrev.addEventListener('click', () => {
        if (offset === 0) {
            offset = makeNumber(width) * (slides.length - 1);
        } else {
            offset -= makeNumber(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex -= 1;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        changeOpacity();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', e => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = makeNumber(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

            changeOpacity();
        });
    });

    /*showSlide(slideIndex);

    if (slides.length < 10) {
      total.textContent = `0${slides.length}`;
    } else {
      total.textContent = slides.length;
    }

    function showSlide(i) {
      if(i > slides.length) {
        slideIndex = 1;
      }

      if(i < 1) {
        slideIndex = slides.length;
      }

      slides.forEach(slide => slide.style.display = 'none');
      slides[slideIndex - 1].style.display = 'block';

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }
    }

    function plusSlides(i) {
      showSlide(slideIndex += i);
    }

    sliderPrev.addEventListener('click', () => {
      plusSlides(-1)
    });

    sliderNext.addEventListener('click', () => {
      plusSlides(1)
    });*/
}

module.exports = slider;