(()=>{"use strict";document.querySelectorAll(".header__topmenu-link").forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("link__show-more")?e.children[1].classList.toggle("active"):document.querySelectorAll(".header__downmenu").forEach((e=>{e.classList.remove("active")}))}))})),document.querySelector("#burger").addEventListener("click",(()=>{let e=document.querySelectorAll(".header__nav"),t=document.querySelectorAll(".header__login");e[0].classList.toggle("active"),t[0].classList.toggle("active")}))})();