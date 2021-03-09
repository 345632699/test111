function eventPagebeanLayer() {
    $(".pagebean li>a.curr").click(function () {
        var e, t, i, o;
        closeAllLayer(), $("#container").prepend('<div id="maxpagebean-box">\t<div class="pagebean-box"></div>\t<div id="type-shade"></div></div>'), e = findParent(this, 3), t = urlDecode(find(e.attr("vurl"))), i = parseInt(find(e.attr("vpagenow"), 0)), o = parseInt(find(e.attr("vpagecount"), 0)), $(".pagebean-box").attr("vpageNow", i).html(function () {
            for (var e = /\{page\}/gi, a = "", n = 1; n <= o; n++) a += '<li class="' + (i == n ? "active" : "") + '"><a href="' + t.replace(e, n) + '">Page ' + n + "</a></li>";
            return "<ul>" + (a += "") + "</ul>"
        }()), function () {
            $("body").css("overflow", "hidden");
            var e = $(window).height() - $("#top").height() - 60 - 8;
            $("#type-shade").hide().fadeIn(150), $(".pagebean-box").css({
                height: e,
                top: 30
            }), $(".pagebean-box").css({top: "60px"}).animate({top: "30px"}, 150), $(".pagebean-box ul").scrollTop(47 * (parseInt(find($(".pagebean-box").attr("vpageNow"), 0)) - 1))
        }(), $("#maxpagebean-box #type-shade").click(function () {
            $("body").css("overflow", "initial"), $("#type-shade").fadeOut(150), $(".pagebean-box").animate({
                top: "-30px",
                opacity: 0
            }, 150, function () {
                $("#maxpagebean-box").remove()
            })
        })
    })
}
