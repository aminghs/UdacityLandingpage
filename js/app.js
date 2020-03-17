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
    for (let i = 1; i < 5; i++) {      
    const li = document.createElement("a");
    li.appendChild(document.createTextNode("Menu" + i));
    li.setAttribute("class", "menu__link" );
    document.getElementById("navbar__list").appendChild(li);
    li.href = "#section"+i;
    }
}
    myFunction();


// Add class 'active' to section when near top of viewport
const callback = entries => {
    entries.forEach(entry => {
      const navListElement = document.querySelector(
        `.menu__link[data-link='${entry.target.id}']`,
      )
      const section = document.getElementById(entry.target.id)
  
      if (entry && entry.isIntersecting) {
        navListElement.classList.add('active')
        section.classList.add('active')
      } else {
        if (navListElement.classList.contains('active')) {
          navListElement.classList.remove('active')
        }
  
        if (section.classList.contains('active')) {
          section.classList.remove('active')
        }
      }
    })
  }

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
