document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  if (!header) {
    return; // No hacer nada si no hay header en la página
  }

  const scrollThreshold = 50; // Píxeles a desplazar para que el header cambie

  window.addEventListener('scroll', () => {
    // Si el desplazamiento vertical es mayor que nuestro umbral
    if (window.scrollY > scrollThreshold) {
      // Añade la clase 'scrolled' al header
      header.classList.add('scrolled');
    } else {
      // Quita la clase 'scrolled' si volvemos arriba
      header.classList.remove('scrolled');
    }
  });
});