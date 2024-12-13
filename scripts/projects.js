import { addRemove } from './about.js'
import { portfolioDisappear } from './portfolio.js'
import { contactOff } from './contact.js'

addRemove();

const buttonElement = document.querySelector('.js-project-button');
const sideBar = document.querySelector('.js-project-sidebar');
const projectList = document.querySelector('.js-project-list');
buttonElement.addEventListener('click', () => {
    appearSidebar();
    aboutmeRemove();
    projectAppear();
    portfolioDisappear();
    contactOff();
});

const projects = [
    {
        title: "Youtube Clone",
        description: "A clone of the Youtube platform.",
        link: "https://kunley123.github.io/html-css-course/youtube.html"
    },
    {
        title: "Amazon clone",
        description: "An e-commerce platform inspired by Amazon.",
        link: "https://kunley123.github.io/html-css-course/youtube.html"
    },
    {
        title: "Eight-plus clone",
        description: "A portfolio and productivity app clone.",
        link: "https://kunley123.github.io/Eightplus-project/8plux.html"
    }
]


function appearSidebar() {
    projectList.innerHTML = "";
    projects.forEach((project) => {
        const projectLink = document.createElement('a');
        projectLink.className = 'project';
        projectLink.href = `${project.link}`;
        projectLink.innerHTML = `
                    <div class="title-description">
                        <div class="title-name">
                            <b>${project.title}</b>
                        </div>
                        <div class="description-line">
                            ${project.description}
                        </div>
                    </div>`;
        projectList.appendChild(projectLink);
    });
}

export function projectAppear() {
    const sideBar = document.querySelector('.js-project-sidebar');
    if (sideBar.classList.contains('project-sidebar')) {
        sideBar.classList.remove('project-sidebar');
        sideBar.classList.add('project-sidebar-visible');
    } else {
        sideBar.classList.remove('project-sidebar-visible');
        sideBar.classList.add('project-sidebar');
    }
}

export function aboutmeRemove() {
    const aboutMe = document.querySelector('.js-about-me');
    if (!aboutMe.classList.contains('about-me-invisible')) {
        aboutMe.classList.remove('about-me');
        aboutMe.classList.add('about-me-invisble');
        aboutMe.innerHTML = '';
    }
};
