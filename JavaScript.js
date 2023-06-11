const btnTop = document.getElementById('btn-top');

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 200) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
});

btnTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


//JS para menu
const dropdown = document.querySelector('.dropdown');

const dropdownMenu = dropdown.querySelector('.dropdown-menu');


dropdown.addEventListener('click', function() {
   
    dropdownMenu.classList.toggle('show');
});


document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});


//JS para carrousel
const carousel = document.querySelector('.carousel');
const imagesContainer = document.querySelector('.grande');
const images = document.querySelectorAll('.img');

const imageWidth = images[0].clientWidth;
let currentIndex = 1; // Comenzar en el primer slide clonado
let isTransitioning = false;

// Clonar los slides y agregarlos al final y al inicio
imagesContainer.appendChild(images[0].cloneNode(true));
imagesContainer.insertBefore(images[images.length - 1].cloneNode(true), images[0]);

function slideTo(index) {
  const offset = index * -imageWidth;
  imagesContainer.style.transition = 'transform 0.4s ease-in-out';
  imagesContainer.style.transform = `translateX(${offset}px)`;
  currentIndex = index;
}

function nextSlide() {
  if (!isTransitioning) {
    isTransitioning = true;
    slideTo(currentIndex + 1);
  }
}

function transitionEndHandler() {
  if (currentIndex === images.length - 1) {
    imagesContainer.style.transition = 'none';
    slideTo(1);
    setTimeout(() => {
      imagesContainer.style.transition = 'transform 0.4s ease-in-out';
    }, 0);
  } else if (currentIndex === 0) {
    imagesContainer.style.transition = 'none';
    slideTo(images.length - 2);
    setTimeout(() => {
      imagesContainer.style.transition = 'transform 0.4s ease-in-out';
    }, 0);
  }
  
  isTransitioning = false;
}

imagesContainer.addEventListener('transitionend', transitionEndHandler);

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);






  
