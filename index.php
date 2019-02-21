<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="owl/owl.carousel.min.css">
    <link rel="stylesheet" href="owl/owl.theme.default.min.css">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>  

    <!-- home page start -->
    <div class="home-page">
        <nav>
            <div class="center clearfix">
                <a href="#" class="left">
                    <img src="images/logo.png" alt="logo">
                </a>
                <ul class="clearfix">
                    <li><a class="active" href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Our Client</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <div class="hidden-menu">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </nav>

        <div class="outer-header">
            <header>
                <h2>EXPERIENCE THE <br>FUTURE</h2>
                <a href="#" class="btn">Read More</a>
            </header>
        </div>

    </div>

    <!-- home page ends -->


    <!-- main starts -->
    <main>
        <div class="center">
            <h2>ABOUT <span>US</span></h2>
            <div class="cover clearfix">
                <div class="left">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla rerum, totam dolore doloremque provident ad quia voluptatibus est aperiam ex suscipit fuga ipsa tenetur vel culpa optio quibusdam eum ducimus, ea vero harum eveniet quasi a? Repellat labore ducimus nostrum quod eligendi quos sed nihil voluptates debitis? Molestias nisi nemo accusamus. Ipsam ipsum voluptatibus eligendi! Magnam maiores minima, enim veritatis voluptate voluptas placeat et deserunt temporibus distinctio, consectetur earum perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni perspiciatis laudantium vero, consequuntur accusamus dolorem nulla. Obcaecati suscipit dolore perspiciatis atque facilis, illo quibusdam unde assumenda reprehenderit, saepe minus deserunt iure veniam sapiente iusto placeat? Porro sapiente illum eligendi soluta saepe eaque veritatis, fugit nemo quas qui. Repellat, sunt minima!</p>
                    <a href="#" class="btn">Read More</a>
                </div>
                <div class="right">
                    <div class="banner">
                        <div class="owl-carousel banner-carousel">
                            <div class="top-a">
                                <img src="images/background.jpg" alt="banner">
                            </div>
                            <div class="top-a">
                                
                                <img src="images/background.jpg" alt="banner">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </main>

    <!-- main ends -->

    <!-- section starts -->


    <section>
        <div class="inner-text">
            DO THE RIGHT THING
        </div>
    </section>

    <!-- section ends -->


    <!-- services start -->

    <div class="services">
        <div class="center">
            <h2>
                OUR <span>SERVICES</span>
            </h2>
            <div class="container clearfix">
                <div>
                    <div class="upper-image">
                        <a href="#"><i class="fas fa-laptop"></i></a> 
                    </div>
                    <div class="down-text">
                        <h3>
                            WEBSITE & MOBILE APPLICATION
                        </h3>
                        <p>
                            We provide Web Services in customer choice frameworks like PHP, Laravel, WordPress, Node, Angular, Vue, etc.  We provide Application Development solutions with complete communication and transparency with the client
                        </p>
                    </div>
                    <a href="#" class="btn">Read More</a>
                </div>
                <div>
                    <div class="upper-image">
                        <a href="#"><i class="fas fa-pencil-alt"></i></a> 
                    </div>
                    <div class="down-text">
                        <h3>
                            GRAPHICS & VISUAL DESIGN
                        </h3>
                        <p>
                            We provide design understanding client business and research along with generating the idea. We provide random visual art offline. We design every materials as need of client like: banners, cards, letterhead, proposal, etc. we create a sample design with software 
                        </p>
                    </div>
                    <a href="#" class="btn">Read More</a>
                </div>
                <div>
                    <div class="upper-image">
                        <a href="#"><i class="fas fa-cogs"></i></a> 
                    </div>
                    <div class="down-text">
                        <h3>
                            DEGITAL MEDIA MARKETING & BRAND MANAGEMENT
                        </h3>
                        <p>
                            We provide Digital Media Marketing that helps your business boom to the next level. we have outstanding online marketing plan to stand out different in the crowd. We create brand identity systems, digital platforms and campaigns that engage today's consumers
                        </p>
                    </div>
                    <a href="#" class="btn">Read More</a>
                </div>
                <div>
                    <div class="upper-image">
                        <a href="#"><i class="fas fa-camera-retro"></i></a> 
                    </div>
                    <div class="down-text">
                        <h3>
                            EVENT MANAGEMENT & PHOTOGRAPHY AND VIDEOGRAPHY
                        </h3>
                        <p>
                            We provide full service event management firm based in pairing together our passion for business and events. We bring a fresh, unique approach to the event management industry. We provide professional Photographer and Videographer in any of your events.
                        </p>
                    </div>
                    <a href="#" class="btn">Read More</a>
                </div>
            </div>
        </div>
    </div>

    <!-- services ends -->


    <!-- team-parallax starts -->

    <div class="team-parallax">
        <div class="inner-text">
            RED FOX IS ALWAYS WITH YOU 
        </div>
    </div>

    <!-- team-parallax ends -->


    <!-- team starts -->

    <div class="team">
        <div class="center">
            <h2>
                OUR <span>TEAM</span>
            </h2>
        </div>
    </div>



    <!-- script starts -->
    <script src='js/main.js'></script>
    <script src="owl/jquery.min.js"></script>
    <script src="owl/owl.carousel.min.js"></script>
    <script>
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
    </script>

    
</body>
</html>