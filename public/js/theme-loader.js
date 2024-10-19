(function () {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark-theme', savedTheme === 'dark');

    // Hide the sidebar and main content initially
    const sidebar = document.querySelector('aside.sidebar');
    const mainContent = document.querySelector('main.main-content');
    if (sidebar) sidebar.style.visibility = 'hidden';
    if (mainContent) mainContent.style.visibility = 'hidden';

    window.addEventListener('DOMContentLoaded', (event) => {
        // Show the sidebar and main content once the DOM is fully loaded
        if (sidebar) sidebar.style.visibility = 'visible';
        if (mainContent) mainContent.style.visibility = 'visible';
    });
})();