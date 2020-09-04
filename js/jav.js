/*global document, prompt, console, alert*/

/*nav*/
let nav = document.querySelector("nav");

window.onscroll = function () {
    "use strict";
    if(window.pageYOffset >= 50) {
        nav.style.backgroundColor = "rgba(2,2,2,0.8)";
    } else {
         nav.style.backgroundColor = "#222";
    }
};

/*tabs*/

let tabList = document.querySelectorAll(".tabs-btn li"),
    tabsCont = document.querySelectorAll(".tabs-cont div");

console.log(tabsCont);

for (let i = 0; i < tabList.length; i++ ) {
    tabList[i].addEventListener("click", function () {
        "use strict";
        for (let j = 0; j < tabsCont.length; j++ ) {
                tabList[j].classList.remove("active-tab");
                tabsCont[j].classList.remove("slected");
          
        };
     
        this.classList.add("active-tab");
        tabsCont[i].classList.add("slected");
    });
};

