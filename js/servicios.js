document.addEventListener('DOMContentLoaded', () => {

  // --- Base de Datos de Información de Servicios ---
  const servicesData = {
    lenguajeInfantil: {
      icon: '<i class="fa-solid fa-child-reaching"></i>',
      title: "Terapia de Lenguaje Infantil",
      description: "Nos especializamos en la evaluación y tratamiento de dificultades del habla y lenguaje en niños. Nuestro enfoque se basa en el juego para crear un ambiente motivador que facilite el aprendizaje.",
      benefitsTitle: "Áreas de Intervención:",
      benefits: [
        "Trastornos de la articulación (dificultad para pronunciar sonidos).",
        "Retraso en el desarrollo del lenguaje (tarda en empezar a hablar).",
        "Trastorno Específico del Lenguaje (TEL).",
        "Apoyo en la comunicación para niños dentro del espectro autista."
      ]
    },
    lenguajeAdultos: {
      icon: '<i class="fa-solid fa-user-tie"></i>',
      title: "Terapia de Lenguaje para Adultos",
      description: "Ofrecemos rehabilitación para adultos que han sufrido una alteración en su capacidad de comunicación debido a condiciones neurológicas, accidentes o patologías vocales.",
      benefitsTitle: "Enfoques Principales:",
      benefits: [
        "Rehabilitación del habla después de un ACV (Afasia).",
        "Terapia para la tartamudez y otros trastornos de la fluidez.",
        "Terapia de la voz para profesionales (docentes, cantantes).",
        "Recuperación de la deglución (disfagia)."
      ]
    },
    terapiaOcupacional: {
      icon: '<i class="fa-solid fa-puzzle-piece"></i>',
      title: "Terapia Ocupacional",
      description: "La Terapia Ocupacional ayuda a personas de todas las edades a participar en las actividades que desean y necesitan hacer. Se enfoca en mejorar las habilidades motoras, cognitivas y sensoriales para una vida independiente.",
      benefitsTitle: "Beneficios Clave:",
      benefits: [
        "Desarrollo de la motricidad fina (escritura, abotonarse).",
        "Mejora de la integración sensorial y procesamiento de estímulos.",
        "Entrenamiento en actividades de la vida diaria (vestirse, comer).",
        "Adaptación del entorno para facilitar la independencia."
      ]
    },
    terapiaFisica: {
      icon: '<i class="fa-solid fa-person-running"></i>',
      title: "Terapia Física y Rehabilitación",
      description: "Nuestro objetivo es restaurar el movimiento y la función en personas afectadas por lesiones, enfermedades o discapacidades. Utilizamos técnicas como la electroterapia, hidroterapia y ejercicio terapéutico.",
      benefitsTitle: "Especialidades:",
      benefits: [
        "Rehabilitación post-quirúrgica y de lesiones deportivas.",
        "Manejo del dolor crónico y agudo.",
        "Mejora del equilibrio y prevención de caídas en adultos mayores.",
        "Desarrollo motor en niños con condiciones neurológicas."
      ]
    },
    estimulacionTemprana: {
      icon: '<i class="fa-solid fa-shapes"></i>',
      title: "Estimulación Temprana",
      description: "Dirigido a bebés y niños de 0 a 6 años, este programa busca potenciar al máximo su desarrollo cognitivo, social, emocional y motor a través de actividades lúdicas y guiadas en un entorno seguro.",
      benefitsTitle: "Áreas Potenciadas:",
      benefits: [
        "Desarrollo de la coordinación motora gruesa y fina.",
        "Estimulación del lenguaje y la comunicación temprana.",
        "Fomento de habilidades sociales y de interacción.",
        "Apoyo en el desarrollo sensorial y cognitivo."
      ]
    },
    evaluacion: {
      icon: '<i class="fa-solid fa-clipboard-check"></i>',
      title: "Evaluación y Diagnóstico Integral",
      description: "El primer paso para un tratamiento exitoso es una evaluación completa. Nuestro equipo multidisciplinario realiza un análisis detallado para identificar las fortalezas y desafíos del paciente.",
      benefitsTitle: "El Proceso Incluye:",
      benefits: [
        "Entrevista inicial con el paciente y su familia.",
        "Aplicación de pruebas estandarizadas y reconocidas.",
        "Observación clínica en un ambiente controlado.",
        "Entrega de un informe detallado con un plan de tratamiento recomendado."
      ]
    }
  };

  // --- Lógica del Modal ---
  const modalOverlay = document.getElementById('service-modal-overlay');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const serviceLinks = document.querySelectorAll('.card-link');

  const modalIcon = document.getElementById('modal-icon');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalBenefitsTitle = document.getElementById('modal-benefits-title');
  const modalBenefitsList = document.getElementById('modal-benefits-list');

  function openModal(serviceKey) {
    const data = servicesData[serviceKey];
    if (!data) return;

    // Poblar el modal con la información
    modalIcon.innerHTML = data.icon;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalBenefitsTitle.textContent = data.benefitsTitle;

    // Limpiar la lista de beneficios anterior
    modalBenefitsList.innerHTML = '';
    // Poblar la nueva lista
    data.benefits.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      modalBenefitsList.appendChild(li);
    });

    // Mostrar el modal
    modalOverlay.classList.add('active');
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
  }

  // Añadir listeners a todos los botones "Saber Más"
  serviceLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceKey = link.dataset.service;
      openModal(serviceKey);
    });
  });

  // Listeners para cerrar el modal
  modalCloseBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
});