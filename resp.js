burger= document.querySelector('.burger')
navbar= document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')

burger.addEventListener('click', ()=>{
    navList.classList.toggle('visibility')
    rightnav.classList.toggle('visibility')
    navbar.classList.toggle('h-nav')

})