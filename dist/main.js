// Importation des bibliothèques tierces
// Importing third-party libraries
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import mixitup from 'mixitup';
import ScrollReveal from 'scrollreveal';
/*
  ==================== MODAL/POP-UP POUR LES SERVICES ====================
  ==================== SERVICES MODAL/POP-UP ====================
*/
const modalViews = document.querySelectorAll('.services-modal');
const modalBtns = document.querySelectorAll('.services-button');
const modalCloses = document.querySelectorAll('.services-modal-close');
// Ouvre le modal correspondant au bouton cliqué
// Opens the modal corresponding to the clicked button
const openModal = (modalIndex) => {
    if (modalViews[modalIndex]) {
        modalViews[modalIndex].classList.add('active-modal');
    }
};
modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        openModal(i);
    });
});
// Ferme tous les modals
// Closes all modals
const closeModal = () => {
    modalViews.forEach((modalView) => {
        modalView.classList.remove('active-modal');
    });
};
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', closeModal);
});
/*
  ==================== FILTRE POUR LE PORTFOLIO (MIXITUP) ====================
  ==================== PORTFOLIO FILTER (MIXITUP) ====================
*/
const workContainer = document.querySelector('.work-container');
if (workContainer) {
    const mixerWork = mixitup(workContainer, {
        selectors: {
            target: '.work-card'
        },
        animation: {
            duration: 300
        }
    });
    // Gestion du lien actif dans les filtres
    // Active link management in filters
    const workFilters = document.querySelectorAll('.work-item');
    function activeWork() {
        workFilters.forEach(filter => filter.classList.remove('active-work'));
        this.classList.add('active-work');
    }
    workFilters.forEach(filter => filter.addEventListener('click', activeWork));
}
/*
  ==================== CARROUSEL POUR LES TÉMOIGNAGES (SWIPER) ====================
  ==================== TESTIMONIAL CAROUSEL (SWIPER) ====================
*/
const testimonialSwiperContainer = document.querySelector('.testimonial-container');
if (testimonialSwiperContainer) {
    new Swiper(testimonialSwiperContainer, {
        modules: [Pagination],
        spaceBetween: 24,
        loop: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
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
        },
    });
}
/*
  ==================== MISE EN ÉVIDENCE DE LA SECTION AU DÉFILEMENT (SCROLLSPY) ====================
  ==================== SCROLLSPY - HIGHLIGHT SECTION ON SCROLL ====================
*/
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            }
            else {
                navLink.classList.remove('active-link');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);
/*
  ==================== THÈME SOMBRE/CLAIR ====================
  ==================== DARK/LIGHT THEME ====================
*/
const themeButton = document.getElementById('theme-button');
const lightThemeClass = 'light-theme';
const iconTheme = 'bx-sun'; // L'icône pour le thème clair
// Vérifie si un thème a été précédemment sélectionné par l'utilisateur
// Checks if a theme was previously selected by the user
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
// Obtient le thème actuel
// Gets the current theme
const getCurrentTheme = () => document.body.classList.contains(lightThemeClass) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton?.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';
// Applique le thème sauvegardé au chargement de la page
// Applies the saved theme on page load
if (selectedTheme && themeButton) {
    document.body.classListselectedTheme === 'dark' ? 'remove' : 'add';
    themeButton.classListselectedIcon === 'bx-moon' ? 'remove' : 'add';
}
// Active/désactive le thème manuellement avec le bouton
// Activates/deactivates the theme manually with the button
themeButton?.addEventListener('click', () => {
    // Ajoute ou supprime la classe du thème clair
    // Adds or removes the light theme class
    document.body.classList.toggle(lightThemeClass);
    themeButton.classList.toggle(iconTheme);
    // Sauvegarde le thème et l'icône actuels dans le localStorage
    // Saves the current theme and icon to localStorage
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
/*
  ==================== OMBRE SUR L'EN-TÊTE AU DÉFILEMENT ====================
  ==================== HEADER SHADOW ON SCROLL ====================
*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (header) {
        // Lorsque le défilement est supérieur à 50vh, ajoute la classe scroll-header
        // When the scroll is greater than 50 viewport height, add the scroll-header class
        if (this.scrollY >= 50) {
            header.classList.add('scroll-header');
        }
        else {
            header.classList.remove('scroll-header');
        }
    }
}
window.addEventListener('scroll', scrollHeader);
/*
  ==================== ANIMATIONS AU DÉFILEMENT (SCROLLREVEAL) ====================
  ==================== SCROLL REVEAL ANIMATION ====================
*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Décommentez pour réinitialiser les animations à chaque défilement
});
// Révéler les éléments de la section 'Home'
// Reveal 'Home' section elements
sr.reveal(`.home-data`);
sr.reveal(`.home-handle`, { delay: 700 });
sr.reveal(`.home-social, .home-scroll`, { delay: 900, origin: 'bottom' });
// Révéler les éléments des autres sections avec un intervalle
// Reveal other section elements with an interval
sr.reveal(`.about-img, .skills-content, .contact-container`, { origin: 'left' });
sr.reveal(`.about-data, .skills-container, .contact-content`, { origin: 'right' });
sr.reveal(`.services-card, .work-card`, { interval: 100 });
/*
  ==================== S'ASSURER QUE LE SCRIPT S'EXÉCUTE APRÈS LE CHARGEMENT DU DOM ====================
  ==================== ENSURE SCRIPT RUNS AFTER DOM IS LOADED ====================
*/
document.addEventListener('DOMContentLoaded', () => {
    // Le code ici s'exécutera une fois que le DOM sera entièrement chargé.
    // La plupart de nos initialisations sont déjà faites ci-dessus et ne dépendent
    // que de la présence des éléments, ce qui est géré par les `if (element)`.
    // Cette structure est robuste.
    // Code that will run once the DOM is fully loaded.
    // Most of our initializations are already done above and only depend on
    // the presence of elements, which is handled by the `if (element)` checks.
    // This structure is robust.
    console.log("Portfolio de Wistant Kode initialisé avec TypeScript !");
    console.log("Wistant Kode's portfolio initialized with TypeScript!");
});
//# sourceMappingURL=main.js.map