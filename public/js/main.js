let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.slider .list');
let thumbnail = document.querySelector('.slider .thumbnail');
let thumbnailItems = thumbnail.querySelectorAll('.item');

thumbnail.appendChild(thumbnailItems[0]);

let slideInterval;

// Function to reset the interval timer
function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(function() {
        nextBtn.onclick();
    }, 10000); // 10000 milliseconds = 10 seconds
}

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next');
    resetInterval(); // Reset the interval timer whenever next button is clicked
}

// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev');
}

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item');
    let thumbnailItems = document.querySelectorAll('.thumbnail .item');
    
    if(direction === 'next') {
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add('prev');
    }

    slider.addEventListener('animationend', function() {
        if(direction === 'next') {
            slider.classList.remove('next');
        } else {
            slider.classList.remove('prev');
        }
    }, {once: true}); // Remove the event listener after it's triggered once
}

// Initial setup for automatic slideshow (10 seconds)
slideInterval = setInterval(function() {
    nextBtn.onclick();
}, 10000); // 10000 milliseconds = 10 seconds

/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

// NavBar
const navMenu = document.querySelector('.header-collapsed');
const menuIcon = document.querySelector('#menu-icon');
menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
