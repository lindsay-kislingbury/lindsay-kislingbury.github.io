(function () {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark-theme', savedTheme === 'dark');
    document.body.style.visibility = 'hidden';
    window.addEventListener('DOMContentLoaded', (event) => {
        document.body.style.visibility = 'visible';
    });
})();