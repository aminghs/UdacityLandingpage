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
    li.appendChild(document.createTextNode("Home"));
    li.setAttribute("class", "menu__link" );
    document.getElementById("navbar__list").appendChild(li);
    li.href = "#section1"
    var li = document.createElement("a");
    li.appendChild(document.createTextNode("Home2"));
    li.setAttribute("class", "menu__link" );
    document.getElementById("navbar__list").appendChild(li);
    li.href = "#section2"
    var li = document.createElement("a");
    li.appendChild(document.createTextNode("Home3"));
    li.setAttribute("class", "menu__link" );
    document.getElementById("navbar__list").appendChild(li);
    li.href = "#section3"
    var li = document.createElement("a");
    li.appendChild(document.createTextNode("Home4"));
    li.setAttribute("class", "menu__link" );
    document.getElementById("navbar__list").appendChild(li);
    li.href = "#section4"
}
myFunction();


// Add class 'active' to section when near top of viewport
const section1 = document.querySelectorAll('section.your-active-class');
window.addEventListener("scroll" , function(){
    if (section1.getBoundingClientRect().top < window.innerHeight)
    section1.style.background = 'red';
})

// Scroll to anchor ID using scrollTO event

const scroll = new SmoothScroll('.navbar__menu a[href*="#"]', {
    speed: 500
    });


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 


// Scroll to section on link click

// Set sections as active
