/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function myFunction() {
    var li = document.createElement("a");
    const array
    li.appendChild(document.createTextNode("Home"));
    li.setAttribute("class", "menu__link" );
    document.getElementById("navbar__list").appendChild(li);
    li.href = "#section1";
}
myFunction();


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

const section1 = document.querySelector(section1);

window.addEventListener("scroll" , function() {

    if(section1.getBoundingClientRect().top < window.innerHeight ) {
        section1.style.background = 'red';
    }
}

)


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 


// Scroll to section on link click

// Set sections as active
