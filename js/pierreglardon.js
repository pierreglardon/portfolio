$( document ).ready(function() {
    // Parallax Home
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

    // Parallax portrait
    var controllerDiv = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "0.5", duration: "150%"}});
    new ScrollMagic.Scene({triggerElement: "#portrait"})
    .setTween("#portrait > div", {y: "100%", ease: Linear.easeNone})
    .addTo(controllerDiv);

    // responsive menu
    var mobileMenu  = $('nav.navigationMobile ul'),
    var mobileMenuLink  = $('nav.navigationMobile ul li a'),
        openMenu    = $('nav.navigationMobile .openMenu');
    openMenu.click(function() {
        mobileMenu.slideToggle();
    });
    mobileMenuLink.click(function() {
        mobileMenu.slideToggle();
    });
});
