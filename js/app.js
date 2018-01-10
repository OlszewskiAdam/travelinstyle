
    let sliderHotelDescription = $(".slider_hotel_description");
    let sliderDirection = $(".slider_directions");
    let sliderExtraordinary = $(".slider_extraordinary");
    let sliderInspirations = $(".slider_inspirations");
    let sliderRecommended = $(".slider_recommended");
    let sliderIdeasCategory = $(".slider_ideas_category");
    let sliderIdeas = $(".slider_ideas");
    let allSliders = $(".carousel");
    let myWindow = $(window);
    let burgerMenu = $('#nav-icon');
    let horizontalElem = $(".horizontal");
    let socialBox = $(".social_media");
    let menuBox = $(".menu_box");
    let headerLogo =$(".header_logo");


    burgerMenu.on("click", function(event) {

        burgerMenu.toggleClass('open');
        // burgerMenu.toggleClass('open_mobile');
        menuBox.toggleClass('menu_box_open');
        headerLogo.toggleClass('header_logo_open');
        socialBox.toggleClass('social_media_open');
        $("body").toggleClass('stop_scroll');
    })

    let footerItems = $(".footer_menu_item");


    footerItems.on('click', function(event){
        let windowWidth = $(window).width();
        if(windowWidth < 900){
            let list = $(this).find("ul");
            let icon = $(this).find("h3").find("i");
            if(list.css("display") == "block"){
                list.slideUp(400);
                icon.removeClass("inverted");
            }
            else{
                list.slideDown(400);
                icon.addClass("inverted");
            }
        }
    });


    myWindow.on("resize", function(event){
        let windowWidth = myWindow.width();
        let lists = footerItems.find("ul");
        if(windowWidth >= 900){
            lists.css("display", "block");
        }

    });

    $(sliderDirection).flickity({
        "freeScroll": false,
        "wrapAround": true,
        "freeScrollFriction": 0.03,
        "cellAlign": "center",
        "contain": true,
        "lazyLoad": 5,
        "pageDots": false
    });
    $(sliderExtraordinary).flickity({
        "freeScrollFriction": 0.03,
        "cellAlign": "left",
        "lazyLoad": 2,
        arrowShape: {
            x0: 10,
            x1: 60, y1: 50,
            x2: 70, y2: 50,
            x3: 20
        }
    });
    sliderInspirations.flickity({
        "freeScroll": false,
        // "wrapAround": true,
        "freeScrollFriction": 0.03,
        "cellAlign": "left",
        "contain": true,
        "pageDots": false,
        "lazyLoad": 4,
        arrowShape: {
            x0: 10,
            x1: 60, y1: 50,
            x2: 70, y2: 50,
            x3: 20
        }
    });
    sliderRecommended.flickity({
        "freeScrollFriction": 0.03,
        "cellAlign": "left",
        // "wrapAround": "true",
        "lazyLoad": 2,
        arrowShape: {
            x0: 10,
            x1: 60, y1: 50,
            x2: 70, y2: 50,
            x3: 20
        }
    });
    sliderIdeasCategory.flickity({
         "freeScroll": false,
         "freeScrollFriction": 0.03,
         "cellAlign": "center",
         "contain": true,
         "lazyLoad": 5,
         "pageDots": false
    });
    // sliderHotelDescription.flickity({
    //      "freeScroll": false,
    //      "freeScrollFriction": 0.03,
    //      "cellAlign": "center",
    //      "contain": true,
    //      "lazyLoad": 5,
    //      "pageDots": false
    // });
    sliderIdeas.flickity({
         "freeScroll": false,
         "freeScrollFriction": 0.03,
         "cellAlign": "left",
         "contain": false,
         "lazyLoad": 5,
         "pageDots": false
    });

    var mapStyles= [
        {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "lightness": 33
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2e5d4"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#c5dac6"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#c5c6c6"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e4d7c6"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#fbfaf7"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#acbcc9"
                }
            ]
        }
    ]
