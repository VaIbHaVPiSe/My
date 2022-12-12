

document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('light-mode');
    let body = document.querySelector('body');

    if (window.matchMedia) {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            body.className = "dark-mode";
        } else {
            body.className = "light-mode";
        }
    } else {
        body.className = "dark-mode";
    }

    el.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.className = 'light-mode';
        } else {
            body.className = 'dark-mode';
        }
    });
});