document.addEventListener('DOMContentLoaded', function () {
  // === LÓGICA PARA MIEMBROS DEL EQUIPO ===
  document.querySelectorAll('.miembro').forEach(miembro => {
    miembro.addEventListener('click', () => {
      const nombre = miembro.querySelector('h4')?.innerText;
      const descripcion = miembro.querySelector('p')?.innerText;
      if (nombre && descripcion) {
        alert(`Más información sobre ${nombre}:\n\n${descripcion}`);
      }
    });
  });

  // === LÓGICA PARA CARRUSEL DE TESTIMONIOS ===
  const testimonios = [
    `"La terapia nos ha cambiado la vida. Nuestro hijo ahora se comunica con más claridad y seguridad, y la escuela también ha notado su progreso." – Familia Ramírez`,
    `"El equipo es increíble. Su apoyo fue fundamental para que nuestro hijo superara sus dificultades del habla con confianza y alegría." – Mamá de Lucas`,
    `"Gracias a las terapias, nuestra hija ha mejorado notablemente su pronunciación y comprensión. Estamos profundamente agradecidos." – Padres de Camila`
  ];
  const block = document.getElementById('testimonio');
  if (block) {
    let actual = 0;
    const mostrarTestimonio = () => {
      block.style.opacity = 0;
      setTimeout(() => {
        block.textContent = testimonios[actual];
        block.style.opacity = 1;
        actual = (actual + 1) % testimonios.length;
      }, 300);
    };
    // Inicia el carrusel
    mostrarTestimonio(); 
    setInterval(mostrarTestimonio, 5000); // Cambia cada 5 segundos
  }
});