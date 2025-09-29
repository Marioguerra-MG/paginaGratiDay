// Animação das seções de benefícios
const items = document.querySelectorAll('.benefit-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {threshold:0.2});

items.forEach(item => observer.observe(item));
