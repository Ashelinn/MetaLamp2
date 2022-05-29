const logic = () => {

    /* menu */
    let menu = document.querySelectorAll('.header__topmenu-link');
    menu.forEach(elem => {
        elem.addEventListener( "click" , () => {
            if (elem.classList.contains('link__show-more')) {
                elem.children[1].classList.toggle("active");
            }
            else {
                let downmenu = document.querySelectorAll('.header__downmenu');
                downmenu.forEach(e => {
                    e.classList.remove('active');
                })
            }
            //console.log();
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

}

export default logic;