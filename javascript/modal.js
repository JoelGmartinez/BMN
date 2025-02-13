// Activar Modal

// Función para mostrar el modal
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "flex";
}

// Función para ocultar el modal
function closeModal(modal) {
  modal.style.display = "none";
}

// Añadir event listeners a los enlaces
document.querySelectorAll(".modal-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const modalId = link.getAttribute("data-modal");
    showModal(modalId);
  });
});

// Añadir event listeners a los botones de cierre
document.querySelectorAll(".close-button").forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

// Cerrar el modal si se hace clic fuera del contenido del modal
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    closeModal(e.target);
  }
});

