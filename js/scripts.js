window.addEventListener('DOMContentLoaded', event => {
    function updateNavbar() {
        const navbar = document.getElementById('navbar');
        if (!navbar) {
            return;
        }
        if (window.scrollY === 0) {
            navbar.classList.remove('navbar-shrink');
        } else {
            navbar.classList.add('navbar-shrink');
        }
    }

    updateNavbar();

    // Update the navbar when page is scrolled
    document.addEventListener('scroll', updateNavbar);

    const navbar = document.getElementById('navbar');
    if (navbar) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#navbar',
            offset: 74,
        });
    };

    const navbarToggler = document.querySelector('.navbar-toggler');
    const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');
    responsiveNavItems.forEach(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', function () {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});
