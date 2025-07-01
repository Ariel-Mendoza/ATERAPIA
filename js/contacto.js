document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const contactGrid = document.getElementById('contact-grid');
  const successMessage = document.getElementById('success-message');

  const fields = {
    nombre: { required: true },
    correo: { required: true, isEmail: true },
    mensaje: { required: true }
  };

  const showError = (fieldId, message) => {
    const field = document.getElementById(fieldId);
    const errorContainer = document.getElementById(`error-${fieldId}`);
    field.classList.add('input-error');
    errorContainer.textContent = message;
  };

  const clearError = (fieldId) => {
    const field = document.getElementById(fieldId);
    const errorContainer = document.getElementById(`error-${fieldId}`);
    field.classList.remove('input-error');
    errorContainer.textContent = '';
  };

  const validateField = (fieldId) => {
    const fieldConfig = fields[fieldId];
    const field = document.getElementById(fieldId);
    const value = field.value.trim();
    let isValid = true;

    clearError(fieldId);

    if (fieldConfig.required && value === '') {
      showError(fieldId, 'Este campo es obligatorio.');
      isValid = false;
    }

    if (isValid && fieldConfig.isEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        showError(fieldId, 'Por favor, introduce un correo válido.');
        isValid = false;
      }
    }
    return isValid;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isFormValid = true;
    for (const fieldId in fields) {
      if (!validateField(fieldId)) {
        isFormValid = false;
      }
    }

    if (isFormValid) {
      // Aquí enviarías el formulario a tu servicio
      console.log('Formulario válido, listo para enviar.');

      // Ocultar el grid de contacto y mostrar el mensaje de éxito
      contactGrid.style.display = 'none';
      successMessage.style.display = 'block';
    }
  });

  // Añadir validación en tiempo real mientras el usuario escribe
  for (const fieldId in fields) {
    document.getElementById(fieldId).addEventListener('input', () => validateField(fieldId));
  }
});