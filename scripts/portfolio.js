import { aboutmeRemove } from './projects.js'
import { sidebarDisappear } from './about.js'
import { contactOff } from './contact.js'

const portfolioSide = document.querySelector('.js-portfolio-side');
const portfolioButton = document.querySelector('.js-portfolio-button');
portfolioButton.addEventListener('click', () => {
    aboutmeRemove();
    sidebarDisappear();
    portfolioAppear();
    contactOff();
})

function portfolioAppear() {
    const portfolioSide = document.querySelector('.js-portfolio-side');
    if (portfolioSide.classList.contains('portfolio-side')) {
        portfolioSide.classList.remove('portfolio-side');
        portfolioSide.classList.add('portfolio-side-visible');
    } else {
        portfolioSide.classList.remove('portfolio-side-visible');
        portfolioSide.classList.add('portfolio-side');
    }
}

export function portfolioDisappear() {
    const portfolioSide = document.querySelector('.js-portfolio-side');
    if (portfolioSide.classList.contains('portfolio-side-visible')) {
        portfolioSide.classList.remove('portfolio-side-visible');
        portfolioSide.classList.add('portfolio-side');
    }
}