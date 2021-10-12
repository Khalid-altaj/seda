
// -------------------------------------- Sart Query Code -----------------------------------------------
$(document).ready(function() 

{


// -------------------------------------- Start Smoth Scroll -------------------------------------

$('.navbar-nav .nav-item .nav-link').click(function(){

    $('html, body').animate({
            
       scrollTop: $('#' + $(this).data('value')).offset().top           


}, 1000);

        
});



});
// -------------------------------------- End Smoth Scroll --------------------------------------------


