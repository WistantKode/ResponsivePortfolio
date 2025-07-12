document.addEventListener('DOMContentLoaded', function() {
    /*=============== FILTERS TABS WORK ===============*/
    const linkWork = document.querySelectorAll('.work-item');

    function activeWork(){
        linkWork.forEach(l=> l.classList.remove('active-work'));
        this.classList.add('active-work');
    }

    linkWork.forEach(l=> l.addEventListener('click', activeWork));

    /*=============== MIXITUP FILTER PORTFOLIO ===============*/
    let mixerPortfolio = mixitup('.work-container', {
        selectors: {
            target: '.work-card'
        },
        animation: {
            duration: 300
        }
    });

    /*=============== TESTIMONIAL SWIPER ===============*/
    let testimonialSwiper = new Swiper(".testimonial-container", {
        loop: true,
        grabCursor: true,
        spaceBetween: 24,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 48,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    /*=============== SERVICES MODAL ===============*/
    const modalViews = document.querySelectorAll('.services-modal'),
          modalBtns = document.querySelectorAll('.services-button'),
          modalCloses = document.querySelectorAll('.services-modal-close');

    let modal = function(modalClick){
        modalViews[modalClick].classList.add('active-modal');
    }

    modalBtns.forEach((modalBtn, i) => {
        modalBtn.addEventListener('click', () => {
            modal(i);
        });
    });

    modalCloses.forEach((modalClose) => {
        modalClose.addEventListener('click', () => {
            modalViews.forEach((modalView) => {
                modalView.classList.remove('active-modal');
            });
        });
    });

    /*=============== CHANGE BACKGROUND HEADER ===============*/
    function scrollHeader(){
        const header = document.getElementById('header')
        // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
        if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)

    /*=============== SHOW SCROLL UP ===============*/
    function scrollUp(){
        const scrollUp = document.getElementById('scroll-up');
        // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)

    /*=============== DARK LIGHT THEME ===============*/
    const themeButton = document.getElementById('theme-button');
    const body = document.body;
    const lightThemeClass = 'light-theme';
    const sunIconClass = 'bx-sun';
    const moonIconClass = 'bx-moon';

    // Fonction pour appliquer les bonnes classes en fonction du thème ('light' ou 'dark')
    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add(lightThemeClass);
            themeButton.classList.remove(moonIconClass);
            themeButton.classList.add(sunIconClass);
        } else { // 'dark'
            body.classList.remove(lightThemeClass);
            themeButton.classList.remove(sunIconClass);
            themeButton.classList.add(moonIconClass);
        }
    };

    // Fonction pour obtenir le thème actuel à partir de la classe du body
    const getCurrentTheme = () => {
        return body.classList.contains(lightThemeClass) ? 'light' : 'dark';
    };

    // Au chargement de la page, on vérifie s'il y a un thème sauvegardé
    const savedTheme = localStorage.getItem('selected-theme');

    if (savedTheme) {
        applyTheme(savedTheme); // Si oui, on l'applique
    } else {
        applyTheme('light'); // Sinon, on met le thème clair par défaut
    }

    // On ajoute l'écouteur d'événement sur le bouton
    themeButton.addEventListener('click', () => {
        const newTheme = getCurrentTheme() === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem('selected-theme', newTheme);
    });

    /*=============== SCROLL REVEAL ANIMATION ===============*/
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
        // reset: true // Animations repeat everytime we scroll up/down
    });

    sr.reveal(`.home-handle, .home-data, .home-social, .home-scroll`, {origin: 'bottom'});
    sr.reveal(`.about-img, .about-data, .about-info, .skills-content`, {interval: 100});
    sr.reveal(`.services-card, .work-filters, .work-card, .testimonial-card`, {interval: 100});
    sr.reveal(`.contact-info, .contact-form, .footer-container, .footer-copy`, {interval: 100});
});