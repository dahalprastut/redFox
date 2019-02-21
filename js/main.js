
// for menu
var selectMenu = document.querySelector('.hidden-menu');
selectMenu.onclick=function(){
    var selectUl = document.querySelector('nav ul');
    selectMenu.classList.toggle('hidden-color-changed');
    selectUl.classList.toggle('shown-ul');

}

// menu ends here


// for slider

$(document).ready(function(){
    $('.banner-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    })
    }); 


