// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const homeToggle = document.querySelector('.home-toggle');
const home = document.querySelector('.home');
const aboutToggle = document.querySelector('.about-toggle');
const about = document.querySelector('.about');
const projectsToggle = document.querySelector('.projects-toggle');
const projects = document.querySelector('.projects');


navToggle.addEventListener('click', function() { 
    links.classList.toggle('show-links');
})

//toggles for home, about and projects dropdown

homeToggle.addEventListener('click', function() {
    home.classList.toggle('show-home');
})

aboutToggle.addEventListener('click', function() {
    about.classList.toggle('show-about');
})

projectsToggle.addEventListener('click', function() {
    projects.classList.toggle('show-projects');
})

