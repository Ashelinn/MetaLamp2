/* menu */
let menu = document.querySelectorAll('.header__topmenu-link');
menu.forEach(elem => {
    elem.addEventListener( "click" , () => {
        if (elem.classList.contains('header__showmore')) {
            elem.children[1].classList.toggle("active");
            let activeLink = document.querySelectorAll('.header__showmore .active');
                activeLink.forEach(el => {
                    if (el.getAttribute('about') !== elem.children[1].getAttribute('about')) {
                        el.classList.remove('active');
                    } 
                })
        }
        else {
            let downmenu = document.querySelectorAll('.header__downmenu');
            downmenu.forEach(e => {
                e.classList.remove('active');
            })
        }
    });    
});

/*Burger*/
let burger = document.querySelector('#burger');

burger.addEventListener( "click" , () => {
        let menu = document.querySelectorAll('.header__nav');
        let register = document.querySelectorAll('.header__login');
        menu[0].classList.toggle("active");
        register[0].classList.toggle("active");
    });    
