document.addEventListener('DOMContentLoaded', function () {
  const cuerpoTabla = document.getElementById("articulos-body");
  if (cuerpoTabla) {
    const articulos = [
      { titulo: "Terapia Temprana", autor: "Dra. Gómez", problema: "Retraso del habla", enlace: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7825864/" },
      { titulo: "Estimulación del lenguaje con juegos", autor: "Lic. Ramírez", problema: "Trastorno fonológico", enlace: "https://www.frontiersin.org/articles/10.3389/fpsyg.2018.01234/full" },
      { titulo: "Comprensión auditiva en niños", autor: "Dr. Pérez", problema: "Discapacidad auditiva", enlace: "https://www.asha.org/public/hearing/Hearing-Loss-in-Children/" },
      { titulo: "Desarrollo del lenguaje en la primera infancia", autor: "Lic. Valeria Ortiz", problema: "Retraso del lenguaje", enlace: "https://www.cdc.gov/ncbddd/spanish/actearly/milestones/milestones-2yr.html" },
      { titulo: "Cómo mejorar la articulación en casa", autor: "Mtra. Laura Méndez", problema: "Dificultades articulatorias", enlace: "https://www.asha.org/public/speech/development/Articulation-and-Phonology/" },
      { titulo: "Importancia del juego simbólico en el lenguaje", autor: "Psic. Daniela Rivera", problema: "Trastorno del lenguaje expresivo", enlace: "https://www.frontiersin.org/articles/10.3389/fpsyg.2020.02148/full" },
      { titulo: "Terapia de lenguaje y tecnología: apps útiles", autor: "Dr. Miguel Castaño", problema: "Lenguaje mixto receptivo-expresivo", enlace: "https://speechandlanguagekids.com/apps-for-speech-therapy/" },
      { titulo: "Señales tempranas de trastornos del lenguaje", autor: "Dra. Irene Morales", problema: "Trastorno específico del lenguaje (TEL)", enlace: "https://kidshealth.org/es/parents/speech.html" },
      { titulo: "El rol de la familia en el desarrollo del lenguaje", autor: "Lic. Sofía Aguilar", problema: "Estimulación insuficiente", enlace: "https://www.zerotothree.org/resource/supporting-your-childs-communication-skills/" }
    ];
    articulos.forEach(articulo => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${articulo.titulo}</td>
        <td>${articulo.autor}</td>
        <td>${articulo.problema}</td>
        <td>
          <a href="${articulo.enlace}" class="btn-link" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 16px; height: 16px;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h7v7m0 0L10 21l-7-7 11-11z"/>
            </svg>
            Leer más
          </a>
        </td>
      `;
      cuerpoTabla.appendChild(fila);
    });
  }
});