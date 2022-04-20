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