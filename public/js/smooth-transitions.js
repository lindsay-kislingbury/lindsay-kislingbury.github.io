(function () {
    // Function to set the theme
    function setTheme(theme) {
        document.documentElement.classList.toggle('dark-theme', theme === 'dark');
        localStorage.setItem('theme', theme);
    }

    // Retrieve the saved theme or use the system preference
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const savedTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
    setTheme(savedTheme);

    // Hide the sidebar and main content initially
    const sidebar = document.querySelector('aside.sidebar');
    const mainContent = document.querySelector('main.main-content');
    if (sidebar) sidebar.style.visibility = 'hidden';
    if (mainContent) mainContent.style.visibility = 'hidden';

    document.addEventListener('DOMContentLoaded', (event) => {
        // Show the sidebar and main content once the DOM is fully loaded
        if (sidebar) sidebar.style.visibility = 'visible';
        if (mainContent) mainContent.style.visibility = 'visible';

        // Theme toggle button
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light';
                setTheme(currentTheme === 'dark' ? 'light' : 'dark');
            });
        }

        // Smooth page transitions
        const navLinks = document.querySelectorAll('nav ul li a');
        function loadPage(url) {
            mainContent.classList.add('transitioning');

            fetch(url)
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const newContent = doc.querySelector('.main-content').innerHTML;

                    setTimeout(() => {
                        mainContent.innerHTML = newContent;
                        mainContent.classList.remove('transitioning');
                        updateActiveLink();
                        history.pushState(null, '', url);
                    }, 300);
                })
                .catch(err => {
                    console.warn('Something went wrong.', err);
                    window.location.href = url;
                });
        }

        function updateActiveLink() {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === window.location.pathname) {
                    link.classList.add('active');
                }
            });
        }

        document.body.addEventListener('click', function (e) {
            if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('/')) {
                e.preventDefault();
                e.target.style.color = getComputedStyle(document.documentElement).getPropertyValue('--active-color').trim();
                setTimeout(() => {
                    e.target.style.color = '';
                }, 200);
                loadPage(e.target.getAttribute('href'));
            }
        });

        // Handle browser back/forward
        window.addEventListener('popstate', function (e) {
            loadPage(window.location.pathname);
        });

        // Initial page load
        updateActiveLink();
    });

    // Listen for changes in system theme preference
    prefersDarkScheme.addListener((e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
})();