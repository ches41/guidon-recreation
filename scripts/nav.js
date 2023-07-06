/* function that modifies nav depending on scroll position */
/* triggers on body onload */

function toggleNav() {
    var passedElement = document.getElementById("js-header");
    
    if (passedElement) {
        if (window.scrollY >= (passedElement.offsetTop + passedElement.offsetHeight)) {
            document.getElementById("js-nav").style.background = "#1C4480";
            document.getElementById("js-nav__right").style.display = "block";
        }
        else {
            document.getElementById("js-nav").style.background = "none";
            document.getElementById("js-nav__right").style.display = "none";
        }
    }
}