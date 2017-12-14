
$(window).on("load", function(){
    let sliderDirection = $(".slider_directions");
    let sliderExtraordinary = $(".slider_extraordinary");
    let sliderInspirations = $(".slider_inspirations");
    let sliderRecommended = $(".slider_recommended");
    let sliderIdeasCategory = $(".slider_ideas_category");
    let sliderIdeas = $(".slider_ideas");
    let allSliders = $(".carousel");
    let myWindow = $(window);
    let burgerMenu = $('#nav-icon');


    burgerMenu.on("click", function(event) {

        burgerMenu.toggleClass('open');
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
        "freeScroll": true,
        "wrapAround": true,
        "freeScrollFriction": 0.03,
        "cellAlign": "center",
        "contain": true,
        "pageDots": false
    });
    $(sliderExtraordinary).flickity({
        "freeScrollFriction": 0.03,
        "cellAlign": "left",
        arrowShape: {
            x0: 10,
            x1: 60, y1: 50,
            x2: 70, y2: 50,
            x3: 20
        }
    });
    sliderInspirations.flickity({
        "freeScroll": true,
        "wrapAround": true,
        "freeScrollFriction": 0.03,
        "cellAlign": "left",
        "contain": true,
        "pageDots": false,
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
        arrowShape: {
            x0: 10,
            x1: 60, y1: 50,
            x2: 70, y2: 50,
            x3: 20
        }
    });
    sliderIdeasCategory.flickity({
         "freeScroll": true,
         "freeScrollFriction": 0.03,
         "cellAlign": "center",
         "contain": true,
         "pageDots": false
    })
    sliderIdeas.flickity({
         "freeScroll": true,
         "freeScrollFriction": 0.03,
         "cellAlign": "left",
         "contain": false,
         "pageDots": false
    });

});
