<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>title</title>


    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">

    <!-- Flickity Carousel CSS -->
    <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">

    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

    <!-- Fancybox CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css">


    <!-- Swiper CSS CDN -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

    <!-- Owl Carousel CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom Theme CSS -->
    <link rel="stylesheet" href="assets/css/theme-style.css">
</head>

<body>

    <!-- Back to Top Button (Left) -->
    <button id="backToTopBtn" class="back-to-top shadow">
        <i class="bi bi-arrow-up"></i>
    </button>

    <!-- WhatsApp Button (Right) -->
    <a href="https://wa.me/917797389661" target="_blank" class="whatsapp-btn shadow">
        <i class="bi bi-whatsapp"></i>
    </a>

    <main>

        <!-- ======================== NAVBAR ======================== -->
        <nav class="navbar navbar-expand-lg sticky-header">
            <div class="container border-line ">

                <!-- Logo Area -->
                <a class="navbar-brand" href="index">
                    <img src="https://cdn.prod.website-files.com/67d65e4a7a8964eda8d774b0/67d67734759b60b1ff35eafc_Logo.svg"
                        alt="" class="img-fluid logo logo-black d-none">
                    <img src="https://cdn.prod.website-files.com/67d65e4a7a8964eda8d774b0/67d67734759b60b1ff35eafc_Logo.svg"
                        alt="" class="img-fluid logo logo-white">
                </a>

                <!-- Navbar Toggler (Mobile) -->
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Offcanvas Menu for Mobile View -->
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">

                        <!-- Navbar Links -->
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item"><a class="nav-link active" href="index">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="about">About</a></li>

                            <!-- Services Mega Dropdown -->
                            <!-- <li class="nav-item dropdown position-static">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    Services
                                </a>
                                <div class="dropdown-menu mega-menu bg-light border-top shadow w-100 p-4">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <h6 class="text-uppercase">Web Design</h6>
                                                <ul class="list-unstyled">
                                                    <li><a class="dropdown-item" href="#">Responsive Design</a></li>
                                                    <li><a class="dropdown-item" href="#">E-Commerce</a></li>
                                                    <li><a class="dropdown-item" href="#">Landing Pages</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-md-3">
                                                <h6 class="text-uppercase">Digital Marketing</h6>
                                                <ul class="list-unstyled">
                                                    <li><a class="dropdown-item" href="#">SEO</a></li>
                                                    <li><a class="dropdown-item" href="#">PPC Advertising</a></li>
                                                    <li><a class="dropdown-item" href="#">Social Media</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-md-3">
                                                <h6 class="text-uppercase">Branding</h6>
                                                <ul class="list-unstyled">
                                                    <li><a class="dropdown-item" href="#">Logo Design</a></li>
                                                    <li><a class="dropdown-item" href="#">Corporate Identity</a></li>
                                                    <li><a class="dropdown-item" href="#">Print Materials</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-md-3">
                                                <h6 class="text-uppercase">Other Services</h6>
                                                <ul class="list-unstyled">
                                                    <li><a class="dropdown-item" href="#">Consulting</a></li>
                                                    <li><a class="dropdown-item" href="#">Training</a></li>
                                                    <li><a class="dropdown-item" href="#">Support & Maintenance</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li> -->

                            <!-- <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    Service
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Demo1</a></li>
                                    <li><a class="dropdown-item" href="#">Demo1</a></li>
                                    <li><a class="dropdown-item" href="#">Demo1</a></li>
                                </ul>
                            </li> -->
                            <li class="nav-item"><a class="nav-link" href="service">Service</a></li>

                            <li class="nav-item"><a class="nav-link" href="blog">Blog</a></li>
                            <li class="nav-item"><a class="nav-link" href="product">Product</a></li>


                            <!-- Portfolio Dropdown -->
                            <!-- <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    Product
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Demo1</a></li>
                                    <li><a class="dropdown-item" href="#">Demo1</a></li>
                                    <li><a class="dropdown-item" href="#">Demo1</a></li>
                                </ul>
                            </li> -->



                            <li class="nav-item mt-2 mt-lg-0 ms-lg-2">
                                <a href="contact" class="btn header_btn px-3">
                                    Contact Us <i class="bi bi-arrow-right ms-2"></i>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>