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