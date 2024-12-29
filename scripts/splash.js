window.addEventListener('load', () => {
    const splashScreen = document.querySelector('.js-splash-screen');
    setTimeout(() => {
        splashScreen.style.opacity = 0;
        splashScreen.style.transition = 'opacity 0.5';
        setTimeout(() => {
            splashScreen.style.display = 'none', 500
        })
    }, 2000);
})

const homeButton = document.querySelector('.js-home-button')
homeButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behaviour: 'smooth' });
    console.log('good to go')
})
