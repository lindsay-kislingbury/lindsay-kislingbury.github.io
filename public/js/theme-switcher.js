
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const themeToggle = document.getElementById('theme-toggle');
    console.log('Theme toggle element:', themeToggle);

    let themeIcon = null;
    if (themeToggle) {
        themeIcon = themeToggle.querySelector('.mdi-theme-light-dark');
    } else {
        console.error('Theme toggle button not found in the DOM');
    }

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    function setTheme(theme) {
        console.log('Setting theme to:', theme);
        document.body.classList.toggle('dark-theme', theme === 'dark');
        if (themeIcon) {
            themeIcon.style.transform = theme === 'dark' ? 'rotate(0deg)' : 'rotate(180deg)';
        } else {
            console.warn('Theme icon not found, unable to rotate icon');
        }
        localStorage.setItem('theme', theme);
    }

    // Check for saved theme preference or use the system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
    }

    // Theme toggle button
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            console.log('Theme toggle clicked');
            const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    } else {
        console.error('Unable to add click event listener to theme toggle button');
    }

    // Listen for changes in system theme preference
    prefersDarkScheme.addListener((e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
});