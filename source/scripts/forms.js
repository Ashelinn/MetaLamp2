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
function addGuest(tag,n) {
    let val = tag.innerHTML;
    let num = Number(val);
    if(num < n) num++
    return num;
}

function delGuest(tag,n) {
    let val = tag.innerHTML;
    let num = Number(val);
    if(num > n) num--
    return num;
}

//adults
let adultsMinus = document.querySelector('#adults-minus');    
adultsMinus.addEventListener('click', () => {
    let adults = document.querySelector('#adults');
    let res = delGuest(adults,1);
    adults.innerHTML = res;
});

let adultsPlus = document.querySelector('#adults-plus');
adultsPlus.addEventListener('click', () => {
    let adults = document.querySelector('#adults');
    let res = addGuest(adults,6);
    adults.innerHTML = res;
});


//Children
let childMinus = document.querySelector('#children_minus');
childMinus.addEventListener('click', () => {
    let children = document.querySelector('#children');
    let res = delGuest(children,0);
    children.innerHTML = res;
});

let childPlus = document.querySelector('#children_plus');
childPlus.addEventListener('click', () => {
    let children = document.querySelector('#children');
    let res = addGuest(children,8);
    children.innerHTML = res;
});

//Baby
let babyMinus = document.querySelector('#baby_minus');
babyMinus.addEventListener('click', () => {
    let baby = document.querySelector('#baby');
    let res = delGuest(baby,0);
    baby.innerHTML = res;
});

let babyPlus = document.querySelector('#baby_plus');
babyPlus.addEventListener('click', () => {
    let baby = document.querySelector('#baby');
    let res = addGuest(baby,3);
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
        /*if (adult === 0 & (child !== 0 || baby !== 0)) {
            total.innerHTML = "Детей без взрослых не заселяем";
            total.classList.add('warning');
        }
        else {
            total.classList.remove('warning');
            content = ending(adult,child);
            total.innerHTML = content;
        }
        */
        content = ending(adult,child);
        total.innerHTML = content;

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

/*----------------------------------------------------------------
    Choise room amenities 
-----------------------------------------------------------------*/
let roomBtn = document.querySelector('#amenities__button');
roomBtn.addEventListener('click', () => {
    event.preventDefault();
    let choise = document.querySelector('.romm__choise');
    choise.classList.toggle('active');
})

//bedrooms
let bedroomsMinus = document.querySelector('#bedrooms-minus');    
bedroomsMinus.addEventListener('click', () => {
    let bedrooms = document.querySelector('#bedrooms');
    let res = delGuest(bedrooms,1);
    bedrooms.innerHTML = res;
});

let bedroomsPlus = document.querySelector('#bedrooms-plus');
bedroomsPlus.addEventListener('click', () => {
    let bedrooms = document.querySelector('#bedrooms');
    let res = addGuest(bedrooms,2);
    bedrooms.innerHTML = res;
});


//beds
let bedsMinus = document.querySelector('#beds_minus');
bedsMinus.addEventListener('click', () => {
    let beds = document.querySelector('#beds');
    let res = delGuest(beds,1);
    beds.innerHTML = res;
});

let bedsPlus = document.querySelector('#beds_plus');
bedsPlus.addEventListener('click', () => {
    let beds = document.querySelector('#beds');
    let res = addGuest(beds,4);
    beds.innerHTML = res;
});

//bathrooms
let bathroomsMinus = document.querySelector('#bathrooms_minus');
bathroomsMinus.addEventListener('click', () => {
    let bathrooms = document.querySelector('#bathrooms');
    let res = delGuest(bathrooms,0);
    bathrooms.innerHTML = res;
});

let bathroomsPlus = document.querySelector('#bathrooms_plus');
bathroomsPlus.addEventListener('click', () => {
    let bathrooms = document.querySelector('#bathrooms');
    let res = addGuest(bathrooms,2);
    bathrooms.innerHTML = res;
});


//function
function endingRoom(a,c) {
    text = a;
    if (a == 1)  {
        text += ' спальня, ';
    } else {
        text += ' спальни, ';
    }

    if (c == 1)  {
        text += c+' кровать ...';
    } else {
        text += c+' кровати ...';
    }

    return text;
}

let roomOK = document.querySelector('.room__ok');
roomOK.addEventListener('click', () => {
    event.preventDefault();
    let bedrooms = Number(document.querySelector('#bedrooms').innerHTML);
    let beds = Number(document.querySelector('#beds').innerHTML);
    let bathrooms = Number(document.querySelector('#bathrooms').innerHTML);

        let total = document.querySelector('#amenities');
        content = endingRoom(bedrooms,beds);
        total.innerHTML = content;
    
    let rChoise = document.querySelector('.romm__choise');
    rChoise.classList.toggle('active');
});

let rclear = document.querySelector('.room__clear');
rclear.addEventListener('click', () => {
    let pole = document.querySelector('#amenities');
    pole.innerHTML = '2 спальни, 2 кровати...';
    document.querySelector('#bedrooms').innerHTML = '2';
    document.querySelector('#beds').innerHTML = '2';
    document.querySelector('#bathrooms').innerHTML = '0';

    let rChoise = document.querySelector('.romm__choise');
    rChoise.classList.toggle('active');
})


/*----------------------------------------------------------------
    Choise room checkbox
-----------------------------------------------------------------*/
let btnRoom = document.querySelector('#arrow-switch');
btnRoom.addEventListener('click', ()=> {
    document.querySelector('#arrow-switch').classList.toggle('active');
    document.querySelector('#checkbox__room').classList.toggle('active');
})