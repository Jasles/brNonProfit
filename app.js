const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navLinks li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active'); 
    });
navLinks.forEach((link, index) => {
   console.log(index);
});

}
navSlide();