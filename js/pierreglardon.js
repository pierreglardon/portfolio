$( document ).ready(function() {
    // Parallax Home
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

    // Parallax portrait & scrolling
    // build tween
    var tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});
    // init controller
    var controllerDiv = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "0.5", duration: "150%"}});

    // build scenes
    new ScrollMagic.Scene({triggerElement: "#portrait"})
    .setTween("#portrait > div", {y: "80%", ease: Linear.easeNone})
    .addTo(controllerDiv);

    // change behaviour of controller to animate scroll instead of jump
    controller.scrollTo(function (newpos) {
        TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
    });

    //  bind scroll to anchor links
    $(document).on("click", "a[href^='#']", function (e) {
        var id = $(this).attr("href");
        if ($(id).length > 0) {
            e.preventDefault();
            // trigger scroll
            controller.scrollTo(id);
            // if supported by the browser we can even update the URL.
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
