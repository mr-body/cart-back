const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
function setTheme() {
    if (prefersDarkScheme.matches) {
        document.body.classList.add('dark-mode');
        document.querySelector('nav').classList.add('dark-nav');
    } else {
        document.body.classList.remove('dark-mode');
        document.querySelector('nav').classList.remove('dark-nav');
    }
}
setTheme(); // Configura o tema na carga inicial da página
prefersDarkScheme.addListener(setTheme); // Atualiza o tema quando as preferências do sistema mudam
