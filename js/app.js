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
