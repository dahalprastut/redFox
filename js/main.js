
// for menu
var selectMenu = document.querySelector('.hidden-menu');
selectMenu.onclick=function(){
    var selectUl = document.querySelector('nav ul');
    selectMenu.classList.toggle('hidden-color-changed');
    selectUl.classList.toggle('shown-ul');

}

// menu ends here


// for smooth scroll


var heightTopAbout;
var heightTopServices;
var heightTopHome;
var heightTopTeam;
var heightTopContact;

//Current height of about us from top
     heightTopAbout = document.querySelector("#about-us").getBoundingClientRect().top;
     heightTopHome = document.querySelector(".home-page").getBoundingClientRect().top;
     heightTopServices = document.querySelector('.services').getBoundingClientRect().top;
     heightTopTeam = document.querySelector('.team').getBoundingClientRect().top;
     heightTopContact = document.querySelector('footer').getBoundingClientRect().top;
     console.log(heightTopAbout);
    
    // for hovering
    document.querySelector('.home').classList.add('active');
   
var about = document.querySelector('.about-us');
var services = document.querySelector('.our-services');
var home = document.querySelector('.home');
var team = document.querySelector('.our-team');
var footer = document.querySelector('.contact-us');







about.onclick = function(event){
    event.preventDefault();
    window.scrollTo({
        top:heightTopAbout,
        behavior: 'smooth'
    });
}

services.onclick = function(event){
    event.preventDefault();
    window.scrollTo({
        top:heightTopServices,
        behavior: 'smooth'
    });
}

home.onclick = function(event){
    event.preventDefault();
    window.scrollTo({
        top:heightTopHome,
        behavior: 'smooth'
    });
}

team.onclick = function(event){
    event.preventDefault();
    window.scrollTo({
        top:heightTopTeam,
        behavior: 'smooth'
    });
}

footer.onclick = function(event){
    event.preventDefault();
    window.scrollTo({
        top:heightTopContact,
        behavior: 'smooth'
    });
}


// smooth scroll ends

// fixed navigation menu`

window.onscroll = function(event){
    var scrollYPosition = event.path[1].scrollY;
    var widthXPosition = event.path[1].screen.width;
    var selectNav = document.querySelector('nav');
    var selectLeft= document.querySelector('.left');
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

    // for hover on scroll on navigation bar


    if(event.path[1].scrollY >= 1600){
        for(i = 0 ; i<=3 ; i++)
        document.querySelectorAll('.upper-image')[i].style='display:block';
    }

        
    if(event.path[1].scrollY >=600){
        for(var j=0; j <=4 ; j++){

            document.querySelectorAll('li a')[j].classList.remove('active');
            document.querySelector('.about-us').classList.add('active');
        }
    }
    if(event.path[1].scrollY < 300){
        for(var j = 0; j <=4 ; j++){
            
            document.querySelectorAll('li a')[j].classList.remove('active');
            document.querySelector('.home').classList.add('active');
        }
    }
    if(event.path[1].scrollY >=1600 ){
        for(var j = 0; j <=4 ; j++){
            
            document.querySelectorAll('li a')[j].classList.remove('active');
            document.querySelector('.our-services').classList.add('active');
        }
    }
    if(event.path[1].scrollY >=2700 && widthXPosition > 690){
        for(var j = 0; j <=4 ; j++){
            
            document.querySelectorAll('li a')[j].classList.remove('active');
            document.querySelector('.our-team').classList.add('active');
        }
     
    }

    if(event.path[1].scrollY >=4100 && widthXPosition > 690){
        for(var j = 0; j <=4 ; j++){
            
            document.querySelectorAll('li a')[j].classList.remove('active');
            document.querySelector('.contact-us').classList.add('active');
        }
    }



    console.log(event.path[1].scrollY);
    if(event.path[1].scrollY >= 3800 && widthXPosition <= 690){
        for(var j = 0; j <=4 ; j++){
            
            document.querySelectorAll('li a')[j].classList.remove('active');
            document.querySelector('.our-team').classList.add('active');
        }
    }

    if(event.path[1].scrollY >= 5500 && widthXPosition <= 690){
        for(var j = 0; j <=4 ; j++){
            
            document.querySelectorAll('li a')[j].classList.remove('active');
            document.querySelector('.contact-us').classList.add('active');
        }
    }
}


// change the animation on scroll

