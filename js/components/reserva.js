document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reserva-form');
  const reservaGrid = document.getElementById('reserva-grid');
  const successMessage = document.getElementById('success-message');

  const fields = {
    nombre: { required: true },
    correo: { required: true, isEmail: true },
    telefono: { required: true },
    fecha_cita: { required: true }
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
      console.log('Formulario de reserva válido, listo para enviar.');
      reservaGrid.style.display = 'none';
      successMessage.style.display = 'block';
    }
  });

  for (const fieldId in fields) {
    document.getElementById(fieldId).addEventListener('input', () => validateField(fieldId));
  }
});