/*----------------------------------------------------------------
    guests choise
-----------------------------------------------------------------*/
let guestBtn = document.querySelector('#guests__button');
guestBtn.addEventListener('click', () => {
    event.preventDefault();
    let choise = document.querySelector('.guest__choise');
    choise.classList.toggle('active');
})

//+- logic
function addGuest(tag) {
    let val = tag.innerHTML;
    let num = Number(val);
    if(num < 5) num++
    return num;
}

function delGuest(tag) {
    let val = tag.innerHTML;
    let num = Number(val);
    if(num > 0) num--
    return num;
}

//adults
let adultsMinus = document.querySelector('#adults-minus');    
adultsMinus.addEventListener('click', () => {
    let adults = document.querySelector('#adults');
    let res = delGuest(adults);
    adults.innerHTML = res;
});

let adultsPlus = document.querySelector('#adults-plus');
adultsPlus.addEventListener('click', () => {
    let adults = document.querySelector('#adults');
    let res = addGuest(adults);
    adults.innerHTML = res;
});


//Children
let childMinus = document.querySelector('#children_minus');
childMinus.addEventListener('click', () => {
    let children = document.querySelector('#children');
    let res = delGuest(children);
    children.innerHTML = res;
});

let childPlus = document.querySelector('#children_plus');
childPlus.addEventListener('click', () => {
    let children = document.querySelector('#children');
    let res = addGuest(children);
    children.innerHTML = res;
});

//Baby
let babyMinus = document.querySelector('#baby_minus');
babyMinus.addEventListener('click', () => {
    let baby = document.querySelector('#baby');
    let res = delGuest(baby);
    baby.innerHTML = res;
});

let babyPlus = document.querySelector('#baby_plus');
babyPlus.addEventListener('click', () => {
    let baby = document.querySelector('#baby');
    let res = addGuest(baby);
    baby.innerHTML = res;
});


//apply choise
function ending(a,c) {
    if (a+c == 1)  {
        text = a+c+' гость';
    } else if (a+c == 2 || a+c == 3 || a+c == 4) {
        text = a+c+' гостя';
    } else {
        text = a+c+' гостей';
    };
    return text;
}

let guestOK = document.querySelector('.guest__ok');
guestOK.addEventListener('click', () => {
    event.preventDefault();
    let adult = Number(document.querySelector('#adults').innerHTML);
    let child = Number(document.querySelector('#children').innerHTML);
    let baby = Number(document.querySelector('#baby').innerHTML);

    let total = document.querySelector('#guests');
        if (adult === 0 & (child !== 0 || baby !== 0)) {
            total.innerHTML = "Детей без взрослых не заселяем";
            total.classList.add('warning');
        }
        else {
            total.classList.remove('warning');
            content = ending(adult,child);
            total.innerHTML = content;
        }
        

    let gChoise = document.querySelector('.guest__choise');
    gChoise.classList.toggle('active');
});

//clear choise
let gclear = document.querySelector('.guest__clear');
gclear.addEventListener('click', () => {
    let pole = document.querySelector('#guests');
    pole.innerHTML = 'Сколько гостей';
    pole.classList.remove('warning');
    document.querySelector('#adults').innerHTML = '0';
    document.querySelector('#children').innerHTML = '0';
    document.querySelector('#baby').innerHTML = '0';

    let gChoise = document.querySelector('.guest__choise');
    gChoise.classList.toggle('active');
})

/*----------------------------------------------------------------
    date field
-----------------------------------------------------------------*/
let reg = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
let regData = /^(0[1-9]|[12][0-9]|3[01])/;
let regMounth = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])/;
let inputDate = document.querySelector('#user-date');

inputDate.addEventListener('input', ()=> {
    let str = document.querySelector('#user-date');
    if(str.value.length === 2) {
        if(regData.test(str.value)) {
            str.value += '.';
            str.classList.remove('warning');
        }
        else {
            str.classList.add('warning');
        }
    }

    if(str.value.length === 5) {
        if(regMounth.test(str.value)) {
            str.value += '.';
            str.classList.remove('warning');
        }
        else {
            str.classList.add('warning');
        }
    }

    console.log(reg.test(str.value));
});


/*----------------------------------------------------------------
like buttons
-----------------------------------------------------------------*/
let likeValues = document.querySelectorAll('.like__box');

for(let i=0; i<likeValues.length; i++) {
    likeValues[i].addEventListener('click', ()=> {
        if(likeValues[i].classList.contains('active')) {
           let val = likeValues[i].lastChild.textContent;
           let num = Number(val);
           num -= 1;
           likeValues[i].lastChild.textContent = String(num);
        }
        else {
            let val = likeValues[i].lastChild.textContent;
           let num = Number(val);
           num += 1;
           likeValues[i].lastChild.textContent = String(num);
        }
        likeValues[i].firstChild.classList.toggle('active');
        likeValues[i].classList.toggle('active');
    })
}