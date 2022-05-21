const logic = () => {

    let contextMenu = document.querySelectorAll('.link__show-more');

    console.log('menu ',contextMenu);

    contextMenu.forEach(elem => {
        elem.addEventListener( "click" , () => {
            elem.children[1].classList.toggle("active");
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