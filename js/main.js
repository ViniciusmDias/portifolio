/* this event is change to css propierty -> scroll-behavior. */

$(document).scroll(function() {
    
    $("nav").addClass('navbarMove').fadeIn();
    if($(this).scrollTop() == 0) {
        $("nav").removeClass('navbarMove');
    }
});

$( document ).resize(function() {
    $( "#log" ).append( "<div>Handler for .resize() called.</div>" );
  });