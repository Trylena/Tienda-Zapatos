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


  
