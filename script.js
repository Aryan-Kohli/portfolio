const navel = document.getElementById('navbar');
window.addEventListener('scroll',()=>{
    if(window.scrollY >=500)
    {
        navel.classList.add('navbar-scrolled');
    }
    else if(window.scrollY < 500)
    {
        navel.classList.remove('navbar-scrolled');
    }
})