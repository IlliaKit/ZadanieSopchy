let slideIndex1 = 0;
  const slides1 = document.querySelectorAll('#slider1 .slide');
  const totalSlides1 = slides1.length;

  let slideIndex2 = 0;
  const slides2 = document.querySelectorAll('#slider2 .slide');
  const totalSlides2 = slides2.length;

  function showSlides1() {
    for (let i = 0; i < totalSlides1; i++) {
      if (i >= slideIndex1 && i < slideIndex1 + 3) {
        slides1[i].style.display = 'block';
      } else {
        slides1[i].style.display = 'none';
      }
    }
  }

  function showSlides2() {
    for (let i = 0; i < totalSlides2; i++) {
      if (i >= slideIndex2 && i < slideIndex2 + 3) {
        slides2[i].style.display = 'block';
      } else {
        slides2[i].style.display = 'none';
      }
    }
  }

  function nextSlide(slider) {
    if (slider === 1) {
      slideIndex1++;
      if (slideIndex1 >= totalSlides1 - 2) {
        slideIndex1 = 0;
      }
      showSlides1();
    } else if (slider === 2) {
      slideIndex2++;
      if (slideIndex2 >= totalSlides2 - 2) {
        slideIndex2 = 0;
      }
      showSlides2();
    }
  }

  function prevSlide(slider) {
    if (slider === 1) {
      slideIndex1--;
      if (slideIndex1 < 0) {
        slideIndex1 = totalSlides1 - 3;
      }
      showSlides1();
    } else if (slider === 2) {
      slideIndex2--;
      if (slideIndex2 < 0) {
        slideIndex2 = totalSlides2 - 3;
      }
      showSlides2();
    }
  }

  showSlides1();
  showSlides2();