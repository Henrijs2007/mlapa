document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000, // animācijas ilgums milisekundēs
        once: true // animācijas izpilda tikai vienreiz
    });

    // Header animācija pie lapas ielādes
    const header = document.getElementById('main-header');
    window.addEventListener('load', function() {
        header.classList.add('loaded');
    });

    // Header samazināšanās efekts, kad lapa tiek scrollēta
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('small');
        } else {
            header.classList.remove('small');
        }
    });
});
