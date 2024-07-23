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
var typed = new Typed(".auto-type",{
    strings : ["Programmer", "Web Developer", "App Developer"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
});     
    