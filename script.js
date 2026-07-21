document.getElementById("darkModeBtn").addEventListener("click", function () {
    document.getElementById("darkArea").classList.toggle("dark-mode");
});


$(function () {
    $(".hamburger").click(function () {
        $(".nav-menu").slideDown();
        $(this).hide();
        $(".cross").show();
    });

    $(".cross").click(function () {
        $(".nav-menu").slideUp();
        $(this).hide();
        $(".hamburger").show();
    });

    $('.popup-image').magnificPopup({
        type: 'image'
    });

    $(".slider").bxSlider({
        controls: false,
        auto: true,
        pause: 5000,
        autoHover: true,
    });

    $(".works .vert").click(function (e) {
        e.preventDefault();
        $(".works > ul > li").removeClass("active");
        $(this).parent().addClass("active");
    });


    $(".portfolio-filter .btn").click(function () {
        $(".portfolio-filter .btn").removeClass("active");
        $(this).addClass("active");

        let filter = $(this).data("filter");

        if (filter === "all") {
            $(".project-card").show(300);
        } else {
            $(".project-card").hide();
            $(".project-card." + filter).show(300);

        }
    });
});




gsap.registerPlugin(ScrollTrigger);

gsap.from(".zoom", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".zoom",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
        scrub: true
    }
});

gsap.from(".zoom-out", {
    scale: 1.3,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".zoom-out",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
        scrub: true
    }
});

