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

