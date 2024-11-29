const aboutButton = document.querySelector('.js-about-button');
aboutButton.addEventListener('click', () => {
    const aboutMe = document.querySelector('.js-about-me');
    myAbout();
    if (aboutMe.classList.contains('about-me-invisible')) {
        aboutMe.classList.remove('about-me-invisible')
        aboutMe.classList.add('about-me')
    } else {
        aboutMe.classList.remove('about-me');
        aboutMe.classList.add('about-me-invisible');
    }
})

function myAbout() {
    const aboutMe = document.querySelector('.js-about-me');
    aboutMe.innerHTML = `<p>
        Hi, I'm Adebanjo Adekunle, a web developer with some year of experience
        building modern, user-friendly web applications. I specialize in creating
        full-stack solutions that blend sleek frontends with efficient backends.
    </p>
    <p>
        My expertise includes frontend development with React, backend solutions
        using Node.js, and database management with MongoDB.
        I've worked on projects like a YouTube clone, an Amazon clone,
        and an Eight-plus clone, showcasing my ability to implement
        dynamic features, responsive designs, and efficient API integrations
    </p>
    <p>
        "I'm passionate about creating intuitive digital experiences and
        continually improving my craft. I'm eager to take on challenges
        that push the boundaries of modern web development.
    </p>
    <p>
        If you're looking for a dedicated web developer or would like to
        collaborate on exciting projects, feel free to reach out!
    </p>`
};