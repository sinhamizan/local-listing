jQuery('.category-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// function open_menu(val) {
//     if( val == "category" ) {
//         jQuery("ul.inner-nav.category").toggle();
//     }
//     else if( val == "category" ) {
//         jQuery("ul.inner-nav.category").toggle();
//     }
//     else if( val == "category" ) {
//         jQuery("ul.inner-nav.category").toggle();
//     }
//     else if( val == "category" ) {
//         jQuery("ul.inner-nav.category").toggle();
//     }
    
// }


jQuery(document).ready(function(){
    jQuery('.accordion-list > li > .answer').hide();
      
    jQuery('.accordion-list > li').click(function() {
      if (jQuery(this).hasClass("active")) {
        jQuery(this).removeClass("active").find(".answer").slideUp();
      } else {
        jQuery(".accordion-list > li.active .answer").slideUp();
        jQuery(".accordion-list > li.active").removeClass("active");
        jQuery(this).addClass("active").find(".answer").slideDown();
      }
      return false;
    });
    
  });