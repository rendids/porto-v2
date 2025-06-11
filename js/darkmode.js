// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

// Check for saved user preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    html.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'dark') {
        darkModeToggle.classList.add('active');
    }
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    if (html.getAttribute('data-theme') === 'dark') {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        darkModeToggle.classList.remove('active');
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkModeToggle.classList.add('active');
    }
});