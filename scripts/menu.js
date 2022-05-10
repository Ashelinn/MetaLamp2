let contextMenu = document.querySelectorAll('.link_show-more');

let contextMenu_length = contextMenu.length;

contextMenu.forEach(elem => {
    elem.addEventListener( "click" , () => {
        elem.children[1].classList.toggle("active");
        
    });    
});


/*Burger*/
let burger = document.querySelector('#burger');

burger.addEventListener( "click" , () => {
        //elem.children[1].classList.toggle("active");
        console.log('click');
    });    
