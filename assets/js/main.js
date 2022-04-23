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

jQuery('.popular-slider').owlCarousel({
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
            items:3
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

// Accordion
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Select2
$(document).ready(function() {
  $('.business-location').select2();
});
$(document).ready(function() {
  $('.business-category').select2();
});


// faq accordion
$(document).ready(function(){
  $('.accordion-list > li > .answer').hide();
    
  $('.accordion-list > li').click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });
  
});