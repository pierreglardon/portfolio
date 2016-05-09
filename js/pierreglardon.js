
$( document ).ready(function() {
    $("nav.navigation a").click(function(e){
        event.preventDefault();
        $("html, body").animate({
            scrollTop:$($.attr(this,"href")).offset().top
        },600);
    });
})
