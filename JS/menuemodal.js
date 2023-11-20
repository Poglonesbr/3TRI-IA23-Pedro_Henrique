
const btToggleMenu = document.querySelector(".menu-hamburger");
btToggleMenu.addEventListener("click", () => {
    document.body.classList.toggle("open-nav");
});

const dialog = document.querySelector("dialog");
const btDialog = document.querySelector(".bt-dialog");
const btModal = document.querySelector(".bt-modal");
btDialog.addEventListener('click', () => dialog.show());
btModal.addEventListener('click', () => dialog.showModal());
document.querySelectorAll("dialog button").forEach(
    bt => bt.addEventListener("click", () => dialog.close())
);

const darkModeBtn = document.getElementById('dark-mode-btn');
const lightModeBtn = document.getElementById('light-mode-btn');
darkModeBtn.addEventListener('click', function (event) {

    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark'); // Guarda o tema selecionado no localStorage
});
lightModeBtn.addEventListener('click', function (event) {
    
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light'); // Guarda o tema selecionado no localStorage
});

// Se tiver um tema no localStorage vai aplicar ele quando carregar a página
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}


document.addEventListener('click', function (event) {
    if (event.target === dialog) {
        dialog.close();
    }
});
