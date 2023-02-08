const bar = document.getElementById('bar'); //take the hamburger menu
const nav = document.getElementById('navbar'); //the navbar

/* check if the navbar menu is on display, if not display click the hamburger
 menu to display the navbar */

 //check if the navabar is vissible on the screen
 if (bar) {
    //add a click event listener
    bar.addEventListener('click', () => {
        //show the nav bar after the hamburger is clicked
        nav.classList.add('active');
    })
 }