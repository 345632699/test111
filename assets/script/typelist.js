function eventTypelist() {
    function i() {
        $("body").css("overflow", "initial"), $("#top>.typelist .faicon").hide(), $("#top>.typelist .faicon.down").show(), $("#type-shade").fadeOut(150), $(".typelist-box").animate({
            top: "-30px",
            opacity: 0
        }, 150, function () {
            $("#maxtypelist-box").remove()
        })
    }

    $("#top>.typelist").click(function () {
        var e;
        0 != $(this).find("i:visible.faicon.down").length ? (closeAllLayer(), $("#container").prepend('<div id="maxtypelist-box">\t<div class="typelist-box"></div>\t<div id="type-shade"></div></div>'), e = find(UtilHtml.getTypelist, []), $("#maxtypelist-box .typelist-box").html(function () {
            var i = "";
            for (var t in e) i += '<li class="' + (find(e[t].active) ? "active" : "") + '"><a href="' + find(e[t].href) + '">' + find(e[t].name) + "</a></li>";
            return "<ul>" + i + "</ul>"
        }()), $("body").css("overflow", "hidden"), $("#top>.typelist .faicon").hide(), $("#top>.typelist .faicon.up").show(), $("#type-shade").hide().fadeIn(150), $(".typelist-box").css({top: "36px"}).animate({top: "12px"}, 150), $(".typelist-box").height($(window).height() - $("#top").height() - 34), $(".typelist-box ul").scrollTop(47 * find($(".typelist-box ul li.active").index(), 0)), $("#maxtypelist-box #type-shade").click(function () {
            i()
        })) : 0 != $(this).find("i:visible.faicon.up").length && i()
    })
}
