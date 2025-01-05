import { sidebarDisappear } from './about.js'
import { aboutmeRemove } from './projects.js'
import { portfolioDisappear } from './portfolio.js'
import { contactOff } from './contact.js'

const mainBody = document.querySelector('.js-main-body')
mainBody.addEventListener('click', () => {
    sidebarDisappear();
    aboutmeRemove();
    portfolioDisappear();
    contactOff();
})

window.addEventListener('scroll', () => {
    sidebarDisappear();
    aboutmeRemove();
    portfolioDisappear();
    contactOff();
})

const homeButton = document.querySelector('.js-home-button')
homeButton.addEventListener('click', () => {
    sidebarDisappear();
    aboutmeRemove();
    portfolioDisappear();
    contactOff();

    window.scrollTo({ top: 0, behaviour: 'smooth' });
})