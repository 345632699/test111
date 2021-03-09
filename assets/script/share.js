function eventShare() {
    $("#top svg.icon.icon-share").click(function () {
        var t, e;
        closeAllLayer(), $("#container").prepend((t = urlEncode(window.location.href), e = "", e += '<div id="maxshare-box">', e += '\t<div class="share-box">', e += "\t\t<ul>", e += "\t\t\t<li>", e += '\t\t\t\t<a target="_blank" class="share-btn fb" href="http://www.facebook.com/sharer.php?u=' + t + '">', e += '\t\t\t\t\t<i class="fa fa-facebook-square"></i>', e += "\t\t\t\t\tfacebook", e += "\t\t\t\t</a>", e += "\t\t\t</li>", e += "\t\t\t<li>", e += '\t\t\t\t<a target="_blank" class="share-btn tw" href="https://twitter.com/intent/tweet?text=' + $("title").html() + " @ " + t + '">', e += '\t\t\t\t\t<i class="fa fa-twitter-square"></i>', e += "\t\t\t\t\tTweet", e += "\t\t\t\t</a>", e += "\t\t\t</li>", e += "\t\t</ul>", e += "\t</div>", e += '\t<div id="type-shade"></div>', e += "</div>")), $("body").css("overflow", "hidden"), $("#top>.share>.icon").hide(), $("#top>.share>.icon.icon-share-close").show(), $("#type-shade").hide().fadeIn(150), $(".share-box").css({top: "36px"}).animate({top: "16px"}, 150), $("#maxshare-box #type-shade").click(function () {
            $("#top svg.icon.icon-share-close").click()
        }), $("#maxshare-box a").click(function () {
            $("#top svg.icon.icon-share-close").click()
        })
    }), $("#top svg.icon.icon-share-close").click(function () {
        $("body").css("overflow", "initial"), $("#top>.share>.icon").hide(), $("#top>.share>.icon.icon-share").show(), $("#type-shade").fadeOut(150), $(".share-box").animate({
            top: "-30px",
            opacity: 0
        }, 150, function () {
            $("#maxshare-box").remove()
        })
    })
}
