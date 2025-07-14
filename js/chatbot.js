// js/chatbot.js (Versión con entrada de texto y palabras clave)

document.addEventListener('DOMContentLoaded', () => {
  // Elementos del DOM
  const chatFab = document.getElementById('chat-fab');
  const chatWindow = document.getElementById('chat-window');
  const closeBtn = document.getElementById('chat-close-btn');
  const chatBody = document.getElementById('chat-body');
  const chatOptions = document.getElementById('chat-options');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');

  // --- Lógica de la Conversación y Palabras Clave ---
  const conversation = {
    start: {
      text: "¡Hola! 👋 Soy el asistente virtual de ATERAPIA. ¿Cómo puedo ayudarte hoy? Puedes escribir o usar los botones.",
      options: [
        { text: "Reservar cita", next: "ask_reserva" },
        { text: "Ver servicios", next: "ask_servicios" },
        { text: "Horarios", next: "ask_horarios" }
      ],
      keywords: {
        "hola": "start",
        "inicio": "start"
      }
    },
    ask_reserva: {
      text: "¡Genial! Puedes reservar tu cita directamente en nuestra página de reservas. Te llevaré allí en un momento.",
      action: () => { window.location.href = '/reserva.html'; },
      keywords: {
        "cita": "ask_reserva",
        "reservar": "ask_reserva",
        "agendar": "ask_reserva",
        "fecha": "ask_reserva"
      }
    },
    ask_servicios: {
      text: "Claro, aquí puedes ver todas nuestras terapias y especialidades. Te redirijo a la página.",
      action: () => { window.location.href = '/servicios.html'; },
      keywords: {
        "servicios": "ask_servicios",
        "terapia": "ask_servicios",
        "ayuda": "ask_servicios"
      }
    },
    ask_horarios: {
      text: "Nuestros horarios son: Lunes a Viernes de 9:00 AM a 7:00 PM y Sábados de 9:00 AM a 1:00 PM.",
      options: [{ text: "Volver al inicio", next: "start" }],
      keywords: {
        "horario": "ask_horarios",
        "horas": "ask_horarios",
        "atienden": "ask_horarios",
        "abierto": "ask_horarios"
      }
    },
    fallback: {
      text: "Lo siento, no he entendido bien. ¿Puedes intentar con otras palabras? También puedes usar una de estas opciones:",
      options: [
        { text: "Reservar cita", next: "ask_reserva" },
        { text: "Ver servicios", next: "ask_servicios" },
        { text: "Horarios", next: "ask_horarios" }
      ]
    }
  };

  let currentNodeName = 'start'; // Para saber en qué punto de la conversación estamos

  // --- Funciones del Chat ---

  function addMessage(text, sender = 'bot') {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('message-content');
    contentDiv.textContent = text;
    messageDiv.appendChild(contentDiv);
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function showOptions(options) {
    chatOptions.innerHTML = '';
    if (!options) return;
    options.forEach(option => {
      const button = document.createElement('button');
      button.classList.add('option-button');
      button.textContent = option.text;
      button.addEventListener('click', () => handleOptionClick(option));
      chatOptions.appendChild(button);
    });
  }

  function handleOptionClick(option) {
    addMessage(option.text, 'user');
    setTimeout(() => {
      navigateToNode(option.next);
    }, 500);
  }

  function navigateToNode(nodeName) {
    currentNodeName = nodeName;
    const node = conversation[nodeName];
    if (!node) return;

    addMessage(node.text, 'bot');
    showOptions(node.options);
    if (node.action) {
      setTimeout(node.action, 1500);
    }
  }

  // --- Nueva Lógica para Procesar Texto ---
  function processUserInput(text) {
    const lowerCaseText = text.toLowerCase();
    addMessage(text, 'user');

    let foundNode = null;
    // Buscar una palabra clave en toda la conversación
    for (const nodeName in conversation) {
      const node = conversation[nodeName];
      if (node.keywords) {
        for (const keyword in node.keywords) {
          if (lowerCaseText.includes(keyword)) {
            foundNode = node.keywords[keyword];
            break;
          }
        }
      }
      if (foundNode) break;
    }
    
    setTimeout(() => {
      if (foundNode) {
        navigateToNode(foundNode);
      } else {
        navigateToNode('fallback');
      }
    }, 500);
  }

  // --- Event Listeners ---
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = chatInput.value.trim();
    if (userInput) {
      processUserInput(userInput);
      chatInput.value = '';
    }
  });

  function toggleChatWindow() {
    chatWindow.classList.toggle('open');
    chatFab.classList.toggle('hidden');
  }

  chatFab.addEventListener('click', () => {
    toggleChatWindow();
    if (chatBody.children.length === 0) {
      setTimeout(() => navigateToNode('start'), 500);
    }
  });

  closeBtn.addEventListener('click', toggleChatWindow);
});