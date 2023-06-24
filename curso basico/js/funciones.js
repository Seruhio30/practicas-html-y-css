jQuery(document).ready(listo);

function listo()
{
   jQuery(".bombero").click(function(e){
    e.preventDefault();
    jQuery("header .container nav").toggleClass("open");

    jQuery(".bombero i").toggleClass("fa-times");

   });

   jQuery("header .container nav a").click(function(){
    jQuery("header .container nav").removeClass("open");
    jQuery(".bombero i").removeClass("fa-times");
    var dev = jQuery(this).attr("href");

    jQuery("html,body").animate({
        "scrolltop":jQuery(dev).offset().top -76
    })
   })
   
   
}