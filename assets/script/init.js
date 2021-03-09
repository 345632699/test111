function init() {
    !function () {
        try {
            !function () {
                new Swiper(".drag-sim-line", {
                    slidesPerView: "auto",
                    spaceBetween: 15
                }), new Swiper(".drag-line3", {
                    slidesPerView: 1.03,
                    slidesPerColumn: 3,
                    spaceBetween: 15,
                    slidesPerColumnFill: "row"
                }), new Swiper(".drag-4p-slide3", {
                    autoplay: !0,
                    loop: !0,
                    spaceBetween: 30,
                    pagination: {el: ".swiper-pagination-4p-slide3", clickable: !0}
                }), new Swiper(".drag-bp-slide", {
                    slidesPerView: 2.5,
                    spaceBetween: 20
                }), new Swiper(".drag-6p-slide", {slidesPerView: 3.2, spaceBetween: 20});
                var e = new Swiper(".game-classify", {
                    spaceBetween: 10,
                    slidesPerView: "auto",
                    watchSlidesVisibility: !0
                });
                new Swiper(".game-list-container", {spaceBetween: 10, autoHeight: !0, thumbs: {swiper: e}})
            }()
        } catch (e) {
            console.info("custom catch, eventDrag()")
        }
        try {
            setTimeout(function () {
                $("#top svg.home").css("opacity", 1)
            }, 50)
        } catch (e) {
            console.info("custom catch, eventTopHomeIconShow()")
        }
        try {
            eventHometype()
        } catch (e) {
            console.info("custom catch, eventHometype()")
        }
        try {
            eventShare()
        } catch (e) {
            console.info("custom catch, eventShare();")
        }
        try {
            $(".pagebean").each(function () {
                var e = parseInt(find($(this).attr("vpagenow"), 1)), t = parseInt(find($(this).attr("vpagecount"), 1));
                e <= 1 ? $(this).find("a.home, a.prev").addClass("disabled").attr("href", "javascript:;") : e == t && $(this).find("a.last, a.next").addClass("disabled").attr("href", "javascript:;")
            }), eventPagebeanLayer()
        } catch (e) {
            console.info("custom catch, eventPagebean(),eventPagebeanLayer()")
        }
        try {
            eventTypelist()
        } catch (e) {
            console.info("custom catch, eventTypelist()")
        }
        try {
            eventPlaygame()
        } catch (e) {
            console.info("custom catch, eventPlaygame()")
        }
    }()
}
