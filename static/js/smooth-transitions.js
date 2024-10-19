document.addEventListener('DOMContentLoaded', (event) => {
    const mainContent = document.querySelector('.main-content');
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