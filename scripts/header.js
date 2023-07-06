/* function that changes header bg after an interval */
/* triggers on body load also */

var headerBG = document.getElementsByClassName("c-header__bg");
let i = 1;

function changeHeaderBG() {

    console.log("header change underway...")
    console.log(i);

    if (i == 0) {
        headerBG[i].style.opacity = 0;
        i++;
        headerBG[i].style.opacity = 1;
    }
    else if (i < headerBG.length) {
        headerBG[i-1].style.opacity = 0;
        headerBG[i].style.opacity = 1;
        i++;
    }
    else if (i == headerBG.length) {
        headerBG[i-1].style.opacity = 0;
        i = 0;
        headerBG[i].style.opacity = 1;
    }

}