const navbarEl = document.querySelector('.navbar');
const finnav = document.querySelector(".top-bottom")
const rechEL = document.querySelector('.recherche')
const irechEl = document.querySelector('.irech')

window.addEventListener('scroll', () => {
    if(window.scrollY>finnav.offsetTop - navbarEl.offsetHeight) {
        navbarEl.classList.add('active');
    } else{
        navbarEl.classList.remove('active');
    }
})

irechEl.addEventListener('click', () => {
    rechEL.classList.toggle('active');
    irechEl.classList.toggle('active');
})