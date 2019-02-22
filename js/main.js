
// for menu
var selectMenu = document.querySelector('.hidden-menu');
selectMenu.onclick=function(){
    var selectUl = document.querySelector('nav ul');
    selectMenu.classList.toggle('hidden-color-changed');
    selectUl.classList.toggle('shown-ul');

}

// menu ends here


// for smooth scroll


var heightTop;
var heightTopServices;
var heightTopHome;
var heightTopTeam;
var heightTopContact;

//Current height of about us from top
window.onload = function(){
     heightTopAbout = document.querySelector("#about-us").getBoundingClientRect().top;
     heightTopHome = document.querySelector(".home-page").getBoundingClientRect().top;
     heightTopServices = document.querySelector('.services').getBoundingClientRect().top;
     heightTopTeam = document.querySelector('.team').getBoundingClientRect().top;
     heightTopContact = document.querySelector('footer').getBoundingClientRect().top;
}
var about = document.querySelector('.about-us');
var services = document.querySelector('.our-services');
var home = document.querySelector('.home');
var team = document.querySelector('.our-team');
var footer = document.querySelector('.contact-us');




about.onclick = function(event){
    event.preventDefault();
    window.scrollBy({
        top:heightTopAbout,
        behavior: 'smooth'
    });
}

services.onclick = function(event){
    event.preventDefault();
    window.scrollBy({
        top:heightTopServices,
        behavior: 'smooth'
    });
}

home.onclick = function(event){
    event.preventDefault();
    window.scrollBy({
        top:heightTopHome,
        behavior: 'smooth'
    });
}

team.onclick = function(event){
    event.preventDefault();
    window.scrollBy({
        top:heightTopTeam,
        behavior: 'smooth'
    });
}

footer.onclick = function(event){
    event.preventDefault();
    window.scrollBy({
        top:heightTopTeam,
        behavior: 'smooth'
    });
}


// smooth scroll ends

// fixed navigation menu

window.onscroll = function(event){
    console.log(event);
    var scrollYPosition = event.path[1].scrollY;
    var widthXPosition = event.path[1].screen.width;
    console.log('width',widthXPosition);
    var selectNav = document.querySelector('nav');
    var selectLeft= document.querySelector('.left');
    console.log(scrollYPosition);
    if(scrollYPosition >=25){
        selectNav.style = 'background:#2A2F33 ; position:fixed; width:100% ; z-index:400000;'
    }else{
        selectNav.style = "backgound:transparent";
    }

    if(scrollYPosition >=25 && widthXPosition <=690){
        selectLeft.style='margin-right:30px';
    }else{
        selectLeft.style='margin-right:0px';
        
    }
}