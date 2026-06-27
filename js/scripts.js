var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');
var themeToggle = document.querySelector('#theme-toggle');

function applyTheme(theme) {
    body.classList.toggle('theme-dark', theme === 'dark');
    body.setAttribute('data-theme', theme);

    if (themeToggle) {
        var icon = themeToggle.querySelector('.theme-toggle__icon');
        themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
        if (icon) {
            icon.textContent = theme === 'dark' ? '☀' : '◐';
        }
    }
}

var savedTheme = localStorage.getItem('ast-theme') || 'light';
applyTheme(savedTheme);

if (menuTrigger) {
    menuTrigger.onclick = function() {
        menuContainer.classList.toggle('open');
        menuTrigger.classList.toggle('is-active');
        body.classList.toggle('lock-scroll');
    }
}

if (themeToggle) {
    themeToggle.onclick = function() {
        var nextTheme = body.classList.contains('theme-dark') ? 'light' : 'dark';
        localStorage.setItem('ast-theme', nextTheme);
        applyTheme(nextTheme);
    }
}
