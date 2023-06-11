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





  
