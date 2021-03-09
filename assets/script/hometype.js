function eventHometype() {
    function t() {
        var t = $(window).height() - $("#top").height();
        $("#type-box>.body>.left>ul").height(t), $("#type-box>.body>.right").height(t)
    }

    $("#top svg.icon.icon-type").click(function () {
        var l;
        closeAllLayer(), $("#container").prepend('<div id="maxtype-box">\t<div id="type-box">\t\t<div class="body">\t\t\t<div class="left"></div>\t\t\t<div class="right"></div>\t\t\t<clear></clear>\t\t</div>\t</div>\t<div id="type-shade"></div></div>'), $("body").css("overflow", "hidden"), $("#top>.type>.icon").hide(), $("#top>.type>.icon.icon-left").css({
            left: "50px",
            opacity: .5
        }).show().animate({
            left: 0,
            opacity: 1
        }, 150), $("#maxtype-box").css({left: -$(window).height() / 2}).animate({left: 0}, 150), l = find(UtilHtml.getHometype, []), $("#type-box .body>.left").html(function () {
            var t = "";
            for (var i in l) {
                var a = find(l[i].isTarget);
                t += '<li vtoken="' + l[i].token + '"><a href="' + (a ? l[i].href : "javascript:;") + '">' + l[i].name + "</a></li>"
            }
            return "<ul>" + t + "</ul>"
        }()), $("#type-box .body>.left>ul>li").click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            var t = $(this).attr("vtoken");
            $("#type-box .body>.right").html(function (t) {
                var i = find(t.data, []), a = "", l = "";
                for (var d in i) {
                    var c = "<span>" + (parseInt(d) + 1) + "</span>";
                    0 == parseInt(d) && (c = '<svg t="1587718686939" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1430" width="200" height="200"><path d="M318.2 411.2l193.6 193.6 361-361c7.7-7.7 11.9-18.2 11.6-29.1l-3.5-138c-0.6-21.6-18.2-38.8-39.8-38.8l-133.4 0.2c-10.5 0-20.6 4.2-28.1 11.7L318.2 411.2z" fill="#D32F2F" p-id="1431"></path><path d="M705.8 411.3L512.2 604.9l-361-361c-7.7-7.7-11.9-18.2-11.6-29.1l3.5-138c0.6-21.6 18.2-38.8 39.8-38.8l133.4 0.2c10.5 0 20.6 4.2 28.1 11.7l361.4 361.4z" fill="#F44336" p-id="1432"></path><path d="M512.3 656.9m-329.2 0a329.2 329.2 0 1 0 658.4 0 329.2 329.2 0 1 0-658.4 0Z" fill="#FFCA28" p-id="1433"></path><path d="M641.3 542.5l95.1 127.3c0.2-4.3 0.4-8.6 0.4-12.9 0-124-100.5-224.5-224.5-224.5S287.8 532.9 287.8 656.9c0 106 73.5 194.8 172.2 218.4l-94.6-126.5 275.9-206.3z" fill="#FFA000" p-id="1434"></path><path d="M736.4 669.8c-6.7 118-104.5 211.5-224.1 211.5-18 0-35.5-2.1-52.2-6.1L542 984.8c125.7-11.2 231.1-93.1 276.1-205.7l-81.7-109.3z" fill="#FFB300" p-id="1435"></path><path d="M736.4 669.8l-95.1-127.3-275.8 206.2 94.6 126.5c16.8 4 34.2 6.1 52.2 6.1 119.7 0.1 217.4-93.5 224.1-211.5z" fill="#FF8F00" p-id="1436"></path><path d="M512.3 656.9m-172.1 0a172.1 172.1 0 1 0 344.2 0 172.1 172.1 0 1 0-344.2 0Z" fill="#FFCA28" p-id="1437"></path></svg>'), 1 == parseInt(d) && (c = '<svg t="1587719526164" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1431" data-spm-anchor-id="a313x.7781069.0.i5" width="200" height="200"><path d="M318.2 411.2l193.6 193.6 361-361c7.7-7.7 11.9-18.2 11.6-29.1l-3.5-138c-0.6-21.6-18.2-38.8-39.8-38.8l-133.4 0.2c-10.5 0-20.6 4.2-28.1 11.7L318.2 411.2z" fill="#D32F2F" p-id="1432"></path><path d="M705.8 411.3L512.2 604.9l-361-361c-7.7-7.7-11.9-18.2-11.6-29.1l3.5-138c0.6-21.6 18.2-38.8 39.8-38.8l133.4 0.2c10.5 0 20.6 4.2 28.1 11.7l361.4 361.4z" fill="#F44336" p-id="1433"></path><path d="M512.3 656.9m-329.2 0a329.2 329.2 0 1 0 658.4 0 329.2 329.2 0 1 0-658.4 0Z" fill="#dbdbdb" p-id="1434" data-spm-anchor-id="a313x.7781069.0.i0" class=""></path><path d="M641.3 542.5l95.1 127.3c0.2-4.3 0.4-8.6 0.4-12.9 0-124-100.5-224.5-224.5-224.5S287.8 532.9 287.8 656.9c0 106 73.5 194.8 172.2 218.4l-94.6-126.5 275.9-206.3z" fill="#cdcdcd" p-id="1435" data-spm-anchor-id="a313x.7781069.0.i2" class=""></path><path d="M736.4 669.8c-6.7 118-104.5 211.5-224.1 211.5-18 0-35.5-2.1-52.2-6.1L542 984.8c125.7-11.2 231.1-93.1 276.1-205.7l-81.7-109.3z" fill="#cdcdcd" p-id="1436" data-spm-anchor-id="a313x.7781069.0.i4" class=""></path><path d="M736.4 669.8l-95.1-127.3-275.8 206.2 94.6 126.5c16.8 4 34.2 6.1 52.2 6.1 119.7 0.1 217.4-93.5 224.1-211.5z" fill="#bfbfbf" p-id="1437" data-spm-anchor-id="a313x.7781069.0.i3" class=""></path><path d="M512.3 656.9m-172.1 0a172.1 172.1 0 1 0 344.2 0 172.1 172.1 0 1 0-344.2 0Z" fill="#dbdbdb" p-id="1438" data-spm-anchor-id="a313x.7781069.0.i1" class=""></path></svg>'), 2 == parseInt(d) && (c = '<svg t="1587719735044" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2375" width="200" height="200"><path d="M318.2 411.2l193.6 193.6 361-361c7.7-7.7 11.9-18.2 11.6-29.1l-3.5-138c-0.6-21.6-18.2-38.8-39.8-38.8l-133.4 0.2c-10.5 0-20.6 4.2-28.1 11.7L318.2 411.2z" fill="#D32F2F" p-id="2376"></path><path d="M705.8 411.3L512.2 604.9l-361-361c-7.7-7.7-11.9-18.2-11.6-29.1l3.5-138c0.6-21.6 18.2-38.8 39.8-38.8l133.4 0.2c10.5 0 20.6 4.2 28.1 11.7l361.4 361.4z" fill="#F44336" p-id="2377"></path><path d="M512.3 656.9m-329.2 0a329.2 329.2 0 1 0 658.4 0 329.2 329.2 0 1 0-658.4 0Z" fill="#c8c009" p-id="2378" data-spm-anchor-id="a313x.7781069.0.i11" class=""></path><path d="M641.3 542.5l95.1 127.3c0.2-4.3 0.4-8.6 0.4-12.9 0-124-100.5-224.5-224.5-224.5S287.8 532.9 287.8 656.9c0 106 73.5 194.8 172.2 218.4l-94.6-126.5 275.9-206.3z" fill="#9d9706" p-id="2379" data-spm-anchor-id="a313x.7781069.0.i21" class=""></path><path d="M736.4 669.8c-6.7 118-104.5 211.5-224.1 211.5-18 0-35.5-2.1-52.2-6.1L542 984.8c125.7-11.2 231.1-93.1 276.1-205.7l-81.7-109.3z" fill="#b5ae11" p-id="2380" data-spm-anchor-id="a313x.7781069.0.i16" class=""></path><path d="M736.4 669.8l-95.1-127.3-275.8 206.2 94.6 126.5c16.8 4 34.2 6.1 52.2 6.1 119.7 0.1 217.4-93.5 224.1-211.5z" fill="#8b860b" p-id="2381" data-spm-anchor-id="a313x.7781069.0.i20" class=""></path><path d="M512.3 656.9m-172.1 0a172.1 172.1 0 1 0 344.2 0 172.1 172.1 0 1 0-344.2 0Z" fill="#c8c009" p-id="2382" data-spm-anchor-id="a313x.7781069.0.i14" class=""></path></svg>'), l += "<li>", l += '\t<a href="' + find(i[d].href) + '" class="sonbody">', l += '\t\t<div class="sindex">' + c + "</div>", l += '\t\t<img src="' + find(i[d].logo) + '"/>', l += '\t\t<div class="content">', l += '\t\t\t<div class="title">' + find(i[d].title) + "</div>", l += '\t\t\t<div class="desc">' + find(i[d].desc) + "</div>", l += '\t\t\t<div class="grade">' + find(i[d].hot) + "</div>", l += '\t\t\t<div class="play"><span class="mylabel">play</span></div>', l += '\t\t\t<div class="line"></div>', l += "\t\t</div>", l += "\t\t<clear></clear>", l += "\t</a>", l += "</li>"
                }
                return a += '<div class="showall">', a += '\t<a href="' + find(t.href) + '" class="showall-span"><i class="fa fa-gamepad"></i> 查看全部</a>', a += "</div>", a += '<div class="showdatas">', a += '\t<ul class="list-son mini">' + l + "</ul>", a += "</div>"
            }(function (t) {
                var i = find(UtilHtml.getHometype, []);
                for (var a in i) if (i[a].token == t) return i[a];
                return {}
            }(t))), $("#type-box .body>.right").scrollTop(0)
        }), setTimeout(function () {
            $("#type-box .body>.left>ul>li:eq(1)").click()
        }, 250), t()
    }), $("#top svg.icon.icon-left").click(function () {
        $("body").css("overflow", "initial"), $("#top>.type>.icon").hide(), $("#top>.type>.icon-type").fadeIn(200), $("#maxtype-box").css({left: 0}).animate({left: -$(window).height() / 2}, 150, function () {
            $(this).remove()
        })
    }), $(window).resize(function () {
        t()
    })
}
