document.addEventListener('DOMContentLoaded', () => {
  // Interaktywny quiz
  const options = document.querySelectorAll('.quiz-options button');
  const result = document.getElementById('quiz-result');

  options.forEach(option => {
    option.addEventListener('click', () => {
      result.textContent = 'Prawidłowa odpowiedź! Dziękujemy za udział.';
      options.forEach(btn => btn.disabled = true);
    });
  });

  // Przycisk "Góra" - powrót na początek strony
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
