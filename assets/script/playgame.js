function eventPlaygame() {
    var e = $("#play-max");
    e.append('<flag id="play-tls">\t<i class="fa fa-eye"></i></flag>'), $("#play-tls").css("top", $(window).height() / 1.5), e.height($(window).height()), function () {
        function t() {
            $("#play-tls").on("touchend", function () {
                t() && ($(this).hide(), e.append('<div id="play-max-box">\t<flagtls id="play-tls-box">\t\t<ul>\t\t\t<li><a href="javascript:;" onclick="window.history.back(-1);"><i class="fa fa-share fa-flip-horizontal back"></i></a></li>\t\t\t<li><a href="index.html"><i class="fa fa-home"></i></a></li>\t\t</ul>\t</flagtls>\t<div id="type-shade" style=""></div></div>'), $("#play-tls-box").css("top", $(window).height() / 2 - $("#play-tls-box").height() / 2), $("#type-shade").hide().fadeIn(150), $("#play-tls-box").css("left", "-350px").animate({left: "-176px"}, 300), $("#type-shade").click(function () {
                    $("#play-tls-box").animate({left: "-376px"}, 300, function () {
                        $("#play-max-box").remove(), $("#play-tls").show()
                    })
                }))
            });
            var a = {x: 5, y: 5, sx: 0, sy: 0, ex: 0, ey: 0};

            function t() {
                var t = a.ex - a.sx, e = a.ey - a.sy;
                return Math.abs(t) <= a.x && Math.abs(e) <= a.y
            }

            window.addEventListener("touchstart", function () {
                var t = t || window.event;
                a.sx = t.targetTouches[0].pageX, a.sy = t.targetTouches[0].pageY, a.ex = a.sx, a.ey = a.sy
            }), window.addEventListener("touchmove", function (t) {
                var t = t || window.event;
                t.preventDefault(), a.ex = t.targetTouches[0].pageX, a.ey = t.targetTouches[0].pageY
            }), window.addEventListener("touchend", function (t) {
                var t = t || window.event;
                a.ex, a.sx, a.ey, a.sy, window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
            })
        }

        $("#play-tls").draggable({containment: "#play-max", scroll: !1, axis: "y"}), t()
    }()
}
