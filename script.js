document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    header.classList.add('loaded');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('small');
        } else {
            header.classList.remove('small');
        }
    });

    AOS.init();
});
