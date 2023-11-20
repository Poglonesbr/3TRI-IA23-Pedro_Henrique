// Função para mostrar um modal com base em seu ID
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add("opened");
    }
}

// Função para fechar um modal com base em seu ID
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("opened");
    }
}

// Configurar os eventos para os botões e modais
document.addEventListener("DOMContentLoaded", () => {
    const showButtons = document.querySelectorAll(".show");
    const closeButtons = document.querySelectorAll(".close");

    showButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            if (modalId) {
                showModal(modalId);
            }
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            if (modalId) {
                closeModal(modalId);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const showButtons = document.querySelectorAll(".show");
    const closeButtons = document.querySelectorAll(".close");
  
    showButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal");
        if (modalId) {
          showModal(modalId);
        }
      });
    });
  
    closeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal");
        if (modalId) {
          closeModal(modalId);
        }
      });
    });
  
    // Quando clica no body para fechar o modal se clicar fora dele
    document.body.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("modal")) {
        const modalId = evt.target.id;
        if (modalId) {
          closeModal(modalId);
        }
      }
    });
  });
  

  