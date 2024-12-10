import { sidebarDisappear } from './about.js'
import { aboutmeRemove } from './projects.js'
import { portfolioDisappear } from './portfolio.js'

const contactDisplay = document.querySelector('.js-contact-display');
const contactButton = document.querySelector('.js-contact-button');
contactButton.addEventListener('click', () => {
    if (contactDisplay.classList.contains('contact-display')) {
        contactDisplay.classList.remove('contact-display');
        contactDisplay.classList.add('contact-display-visible');
    } else {
        contactDisplay.classList.remove('contact-display-visible');
        contactDisplay.classList.add('contact-display');
    }

    sidebarDisappear();
    aboutmeRemove();
    portfolioDisappear();
});

export function contactOff() {
    const contactDisplay = document.querySelector('.js-contact-display');
    if (!contactDisplay.classList.contains('contact-display')) {
        contactDisplay.classList.remove('contact-display-visible');
        contactDisplay.classList.add('contact-display');
    }
}