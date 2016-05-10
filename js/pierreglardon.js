$( document ).ready(function() {
    // Parallax Home
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

    // Parallax portrait
    var controllerDiv = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "0.5", duration: "150%"}});
    new ScrollMagic.Scene({triggerElement: "#portrait"})
    .setTween("#portrait > div", {y: "100%", ease: Linear.easeNone})
    .addTo(controllerDiv);

    // Scrolling
    var controllerScroll = new ScrollMagic.Controller();
    var tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});
    var scene = new ScrollMagic.Scene({triggerElement: "a#top", duration: 100, triggerHook: "onLeave"})
                    .setTween(tween)
                    .addTo(controllerScroll);
    controllerScroll.scrollTo(function (newpos) {
        TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
    });
    $(document).on("click", "a[href^='#']", function (e) {
        var id = $(this).attr("href");
        if ($(id).length > 0) {
            e.preventDefault();
            controllerScroll.scrollTo(id);
            if (window.history && window.history.pushState) {
                history.pushState("", document.title, id);
            }
        }
    });
    var controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "0.2", duration: "100%"}});
    new ScrollMagic.Scene({triggerElement: "#home"})
                    .setClassToggle(".navlink.l1", "active")
                    .addTo(controller2);
    new ScrollMagic.Scene({triggerElement: "#aboutme"})
                    .setClassToggle(".navlink.l2", "active")
                    .addTo(controller2);
    new ScrollMagic.Scene({triggerElement: "#portfolio"})
                    .setClassToggle(".navlink.l3", "active")
                    .addTo(controller2);
});
