window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 1000,
    origin: 'top',
    viewFactor: 0.2,
    distance: '50px'
})

sr.reveal('h1',  {
    duration: 2000,
    delay: 1000,
    origin: 'bottom',
    viewFactor: 0.2
})
sr.reveal('p',  {
    duration: 2000,
    delay: 2000,
    origin: 'bottom',
    viewFactor: 0.1
})


sr.reveal('.dashboard', {
    duration: 2000,
    delay: 2000,
    origin: 'bottom',
    viewFactor: 0.1
})

