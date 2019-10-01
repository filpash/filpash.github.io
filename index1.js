$(function () {
    let header = $("#nav")
    let main = $("#main")
    let introH = main.innerHeight()
    let scrollPos = $(window).scrollTop()

    $(window).on("scroll", function () {
        scrollPos = $(this).scrollTop()

        if(scrollPos > introH){
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }

    })

    //Smooth scroll

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault()

        let elementId = $(this).data('scroll')
        let elementOffset = $(elementId).offset().top

        console.log(elementOffset)

        $("html, body").animate({
            scrollTop: elementOffset - 50
        },700)
    })

        //NavToggle
        let nav = $("#nav")
        let navToggle = $("#navToggle")

        navToggle.on("click", function (event) {
            event.preventDefault()

            nav.toggleClass("show")
        })

})

