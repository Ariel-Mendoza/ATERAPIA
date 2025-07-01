document.addEventListener('DOMContentLoaded', function () {
  // === METODOS ===
  const metodos = {
    evaluacion: {
      titulo: "Evaluación de terapia de lenguaje",
      parrafos: [
        "Proceso inicial que permite identificar dificultades en el habla, comprensión, articulación o desarrollo lingüístico del paciente.",
        "Se realizan entrevistas, pruebas estandarizadas y observaciones clínicas para diseñar un plan terapéutico personalizado."
      ],
      lista: [
        "Entrevista inicial con padres o cuidadores",
        "Aplicación de pruebas diagnósticas",
        "Análisis de resultados y elaboración de informe"
      ]
    },
    respiracion: {
      titulo: "Patrón de respiración adecuado",
      parrafos: [
        "La respiración nasal y diafragmática es esencial para una correcta producción del habla.",
        "Se entrena la coordinación entre la respiración y el habla para mejorar la fluidez y la voz."
      ],
      lista: [
        "Ejercicios de respiración controlada",
        "Práctica con soplos y globos",
        "Entrenamiento postural respiratorio"
      ]
    },
    ritmo: {
      titulo: "Entrenamiento del ritmo del habla",
      parrafos: [
        "Permite mejorar la fluidez en pacientes con disfluencias o tartamudez.",
        "Se usan recursos visuales, auditivos y kinestésicos para marcar pausas, énfasis y entonación."
      ],
      lista: [
        "Lectura con metrónomo",
        "Canciones rítmicas y poemas",
        "Juegos de sílabas y palmadas"
      ]
    },
    lexico: {
      titulo: "Desarrollo léxico-gramatical del discurso",
      parrafos: [
        "Estimula la construcción adecuada de oraciones y el uso de vocabulario variado.",
        "Fortalece tanto la expresión oral como escrita."
      ],
      lista: [
        "Juegos de categorías y sinónimos",
        "Uso de pictogramas y tarjetas de acción",
        "Formación de frases y narración de cuentos"
      ]
    },
    masaje: {
      titulo: "Masaje de Terapia de Lenguaje",
      parrafos: [
        "Estimula los músculos orofaciales para mejorar la articulación y la producción de sonidos.",
        "Incluye técnicas de masaje, vibración y estimulación sensorial."
      ],
      lista: [
        "Masaje en mejillas, labios y lengua",
        "Estimulación con cepillos o vibradores orales",
        "Ejercicios de mímica facial y soplo"
      ]
    }
  };

  const lista = document.querySelectorAll('.marcas-lista li');
  const info = document.getElementById('marcas-info');

  if (lista.length && info) {
    lista.forEach(item => {
      item.addEventListener('click', () => {
        document.querySelector('.marcas-lista li.activo')?.classList.remove('activo');
        item.classList.add('activo');

        const marca = metodos[item.dataset.marca];
        if (marca) {
          info.innerHTML = `
            <h1>${marca.titulo}</h1>
            <p>${marca.parrafos[0]}</p>
            <p>${marca.parrafos[1]}</p>
            <ul class="marcas-detalle-lista">
              ${marca.lista.map(li => `<li>${li}</li>`).join('')}
            </ul>
          `;
        }
      });
    });
  }
});