var pageName = returnPathName(window.location.pathname), all = GetQueryString("all"), catStr = "all", catKey = "",
    catAll = [], $styleTopGg = '<p class="GgStyleTop">ADVERTISEMENT</p>',
    channel_id = gameCfg.chid ? gameCfg.chid : "001", cfgid = gameCfg.cfgid, chid = channel_id,
    viewHeight = document.documentElement.clientHeight, ggListArr = [],
    visual_loading = !!gameCfg.visual_loading && gameCfg.visual_loading;
if (all) switch (all) {
    case"1":
        catStr = "Puzzle & Logic", catKey = "puzzle";
        break;
    case"2":
        catStr = "Action & Risk", catKey = "action";
        break;
    case"3":
        catStr = "Sports & Racing", catKey = "sports";
        break;
    case"4":
        catStr = "Beauty & Girl", catKey = "beauty";
        break;
    case"5":
        catStr = "Arcade", catKey = "arcade";
        break;
    case"6":
        catStr = "Adventure", catKey = "adventure"
}

function GetQueryString(a, e) {
    var t = new RegExp("(^|&)" + a + "=([^&]*)(&|$)");
    if (e) var i = e.match(t); else i = window.location.search.substr(1).match(t);
    return null != i ? decodeURI(i[2]) : null
}

var IframeOnClick = {
    resolution: 200, iframes: [], interval: null, Iframe: function () {
        this.element = arguments[0], this.cb = arguments[1], this.hasTracked = arguments[2]
    }, track: function (a, e, t) {
        if (this.iframes.push(new this.Iframe(a, e, t)), !this.interval) {
            var i = this;
            this.interval = setInterval(function () {
                i.checkClick()
            }, this.resolution)
        }
    }, checkClick: function () {
        if (document.activeElement) {
            var a = document.activeElement;
            for (var e in this.iframes) a === this.iframes[e].element ? 0 == this.iframes[e].hasTracked && (this.iframes[e].cb.apply(window, []), this.iframes[e].hasTracked = !0) : this.iframes[e].hasTracked = !1
        }
    }
};



function ggResp() {
    setTimeout(function () {
        for (var a, e, t, i, d, n, l = $("[id^='div-gpt-ad-']"), o = 0; o < l.length; o++) a = l.eq(o), i = void 0, e = a.width(), t = a.height(), i = a.parent(), d = i.data("flag"), n = i.data("_id"), (300 == e && 250 == t || 320 == e && 50 == t) && getSaLog({
            act: "resp",
            ad_flag: d,
            _id: n
        })
    }, 3e3)
}

function returnPathName(a) {
    var e = a.split("/");
    return e[e.length - 1]
}

function selectFrom(a, e) {
    var t = e - a + 1;
    return Math.floor(Math.random() * t + a)
}

var pageIndex = window.sessionStorage.getItem(chid + "_pageIndex") ? window.sessionStorage.getItem(chid + "_pageIndex") : 0;
pageIndex++;
var backOn = !1;
if (window.sessionStorage.setItem(chid + "_pageIndex", pageIndex), gameCfg && null != gameCfg.back_on && "true" == gameCfg.back_on && (backOn = !0) && null != gameCfg.clink && 0 < gameCfg.clink.length) {
    var urlIdx = selectFrom(0, gameCfg.clink.length - 1);
    window.history.pushState({}, document.title, ""), window.addEventListener("popstate", function () {
        if (pageIndex <= 1) {
            var a = gameCfg.clink[urlIdx];
            window.location.href = a
        } else pageIndex--;
        window.sessionStorage.setItem(chid + "_pageIndex", pageIndex)
    }, !1)
}
var popIsShow = !window.sessionStorage.getItem("popIsShow") || window.sessionStorage.getItem("popIsShow");


function generate(a) {
    for (var e = new Array; ;) {
        var t = selectFrom(0, a);
        if (-1 == e.indexOf(t) && e.push(t), 6 == e.length) break
    }
    return e
}

function deteleObject(a) {
    for (var e = [], t = {}, i = 0; i < a.length; i++) {
        var d = Object.keys(a[i]);
        d.sort(function (a, e) {
            return Number(a) - Number(e)
        });
        for (var n = "", l = 0; l < d.length; l++) n += JSON.stringify(d[l]), n += JSON.stringify(a[i][d[l]]);
        t.hasOwnProperty(n) || (e.push(a[i]), t[n] = !0)
    }
    return e = e
}

function renderGg(a) {
    var e = a[channel_id];
    if (e) {
        if ("info.html" == pageName && e.detailHead && "" != e.detailHead && $("head").append(e.detailHead), "info.html" != pageName && "play.html" != pageName && "type.html" != pageName && e.listHead && "" != e.listHead && $("head").append(e.listHead), "type.html" == pageName && e.listHead && "" != e.listHead && $("head").append(e.listHead), "play.html" == pageName && e.playHead && "" != e.playHead && $("head").append(e.playHead), e.gaCode && "" != e.gaCode && $("head").append(e.gaCode), "index.html" == pageName && e.list1 && "" != e.list1) {
            var t = e.list1_id && "" != e.list1_id ? e.list1_id : "";
            $("#body").children().eq(0).after('<div class="wrapper_list1"></div>'), (i = $(".wrapper_list1")).append($styleTopGg).width($("body").width() - 60), i.append(e.list1).attr({
                "data-flag": "list1",
                class: "wrapper_list1 mask",
                "data-_id": t
            }), getSaLog({act: "call", ad_flag: "list1", _id: t})
        }
        if ("index.html" == pageName && e.list2 && "" != e.list2) {
            t = e.list2_id && "" != e.list2_id ? e.list2_id : "";
            $("#body").children().eq(2).after('<div class="wrapper_list2"></div>');
            var i = $(".wrapper_list2"), d = e.list2, n = "list2";
            visual_loading ? ggListArr.push({
                content: d,
                _id: t,
                ad_flag: n,
                ele: i,
                flag: !0
            }) : (i.append($styleTopGg).width($("body").width() - 30), i.append(d).attr({
                "data-flag": n,
                class: "wrapper_list2 mask",
                "data-_id": t
            }), getSaLog({act: "call", ad_flag: n, _id: t}))
        }
        if ("info.html" == pageName && e.detail1 && "" != e.detail1) {
            t = e.detail1_id && "" != e.detail1_id ? e.detail1_id : "";
            (i = $(".detail1-box")).append($styleTopGg).width($("body").width() - 60), i.append(e.detail1).attr({
                "data-flag": "detail1",
                class: "wrapper_detail1 mask",
                "data-_id": t
            }), getSaLog({act: "call", ad_flag: "detail1", _id: t})
        }
        if ("info.html" == pageName && e.detail2 && "" != e.detail2) {
            t = e.detail2_id && "" != e.detail2_id ? e.detail2_id : "", i = $(".detail2-box"), d = e.detail2, n = "detail2";
            visual_loading ? ggListArr.push({
                content: d,
                _id: t,
                ad_flag: n,
                ele: i,
                flag: !0
            }) : (i.append($styleTopGg).width($("body").width() - 30), i.append(d).attr({
                "data-flag": n,
                class: "wrapper_detail2 mask",
                "data-_id": t
            }), getSaLog({act: "call", ad_flag: n, _id: t}))
        }
        if ("type.html" == pageName && e.type1 && "" != e.type1) {
            t = e.type1_id && "" != e.type1_id ? e.type1_id : "";
            $(".panel").before('<div class="wrapper_type1"></div>'), (i = $(".wrapper_type1")).append($styleTopGg).width($("body").width() - 30), i.append(e.type1).attr({
                "data-flag": "type1",
                class: "wrapper_type1 mask",
                "data-_id": t
            }), getSaLog({act: "call", ad_flag: "type1", _id: t})
        }
        if ("type.html" == pageName && e.type2 && "" != e.type2) {
            t = e.type2_id && "" != e.type2_id ? e.type2_id : "";
            $(".panel").after('<div class="wrapper_type2"></div>');
            i = $(".wrapper_type2"), d = e.type2, n = "type2";
            visual_loading ? ggListArr.push({
                content: d,
                _id: t,
                ad_flag: n,
                ele: i,
                flag: !0
            }) : (i.append($styleTopGg).width($("body").width() - 30), i.append(d).attr({
                "data-flag": n,
                class: "wrapper_type2 mask",
                "data-_id": t
            }), getSaLog({act: "call", ad_flag: n, _id: t}))
        }
        if ("play.html" == pageName && e.playBottom && "" != e.playBottom) {
            t = e.playBottom_id && "" != e.playBottom_id ? e.playBottom_id : "";
            $("#play-max").append('<div class="play_bottom"></div>'), (i = $(".play_bottom")).append(e.playBottom).attr({
                "data-flag": "playBottom",
                class: "play_bottom mask",
                "data-_id": t
            }), getSaLog({act: "call", ad_flag: "playBottom", _id: t})
        }
        if ("play.html" == pageName && void 0 !== e.patchGgSDK && e.patchGgSDK && "" != e.patchGgSDK ? loadPatchGgSDK(e.patchGgSDK, e.patchGgSDK_id) : ($("#adContainer").children().remove(), $("#play-max").show()), e.pop && !$.isEmptyObject(e.pop) && 1 == popIsShow) {
            var l = '<div class="pop-box mask" data-flag="pop" data-_id="' + (t = e.pop && "" != e.pop._id ? e.pop._id : "") + '"><div class="container"><div class="close"><svg t="1582701834824" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3045" width="60%" height="100%"><path d="M806.4 172.8L172.8 806.4c-12.8 12.8-12.8 32 0 44.8 12.8 12.8 32 12.8 44.8 0l633.6-633.6c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0z" fill="#ffffff" p-id="3046"></path><path d="M172.8 172.8c-12.8 12.8-12.8 32 0 44.8l633.6 633.6c12.8 12.8 32 12.8 44.8 0 12.8-12.8 12.8-32 0-44.8L217.6 172.8c-12.8-12.8-32-12.8-44.8 0z" fill="#ffffff" p-id="3047"></path></svg></div><div><a href="' + e.pop.index_url + '" target="_blank"><img src="' + e.pop.icon_url + '"/></a></div></div></div>';
            $("body").append(l), getSaLog({
                act: "call",
                ad_flag: "pop",
                _id: t
            }), window.sessionStorage.setItem("popIsShow", "false")
        }
        if (e.bonus && !$.isEmptyObject(e.bonus)) {
            var o = '<div class="bonus-box mask" data-flag="bonus" data-_id="' + (t = e.bonus && "" != e.bonus._id ? e.bonus._id : "") + '"><div class="container"><div><a href="' + e.bonus.index_url + '" target="_blank"><img src="' + e.bonus.icon_url + '"/></a></div></div></div>';
            $("body").append(o), getSaLog({act: "call", ad_flag: "bonus", _id: t})
        }
    } else "play.html" == pageName && ($("#adContainer").children().remove(), $("#play-max").show());
    ggClick(), visual_loading || ggResp()
}

function loadPatchGgSDK(e, a) {
    var t, i, d, n, l, o = a && "" != a ? a : "";

    function r(a) {
        var e = new google.ima.AdsRenderingSettings;
        e.restoreCustomPlaybackStateOnAdBreakComplete = !0, (t = a.getAdsManager(l, e)).addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, s), t.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, p), t.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, c), t.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, g), t.addEventListener(google.ima.AdEvent.Type.LOADED, g), t.addEventListener(google.ima.AdEvent.Type.STARTED, g), t.addEventListener(google.ima.AdEvent.Type.COMPLETE, g)
    }

    function g(a) {
        var e = a.getAd();
        switch (a.type) {
            case google.ima.AdEvent.Type.LOADED:
                e.isLinear();
                break;
            case google.ima.AdEvent.Type.STARTED:
                e.isLinear() && (n = setInterval(function () {
                    t.getRemainingTime()
                }, 300));
                break;
            case google.ima.AdEvent.Type.COMPLETE:
                e.isLinear() && clearInterval(n)
        }
    }

    function s(a) {
        console.log(a.getError()), $("#adContainer").children().remove(), $("#play-max").show(), getSaLog({
            act: "resp",
            ad_flag: "patchGgSDK",
            _id: o
        })
    }

    function p(a) {
        getSaLog({act: "call", ad_flag: "patchGgSDK", _id: o})
    }

    function c(a) {
        console.log("onContentResumeRequested"), $("#adContainer").children().remove(), $("#play-max").show()
    }

    l = document.getElementById("play-max"), function () {
        d = new google.ima.AdDisplayContainer(document.getElementById("adContainer"), l), $("#adContainer").attr({
            "data-flag": "patchGgSDK",
            class: "mask",
            "data-_id": o
        }), (i = new google.ima.AdsLoader(d)).addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, r, !1), i.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, s, !1);
        var a = new google.ima.AdsRequest;
        a.adTagUrl = e, a.linearAdSlotWidth = window.innerWidth, a.linearAdSlotHeight = window.innerHeight, a.nonLinearAdSlotWidth = window.innerWidth, a.nonLinearAdSlotHeight = window.innerHeight, i.requestAds(a)
    }(), setTimeout(function () {
        !function () {
            d.initialize();
            try {
                t.init(window.innerWidth, window.innerHeight, google.ima.ViewMode.NORMAL), t.start()
            } catch (a) {
            }
        }()
    }, 2e3)
}

function goBack() {
    var a = window.location.href.split("?")[0];
    "info.html" == pageName ? window.location.href = a.replace(/info.html/g, "index.html") : "play.html" == pageName && (window.location.href = window.location.href.replace(/play.html/g, "info.html"))
}

function scrollLoadGg(a) {
    for (var e = 0; e < a.length; e++) {
        var t = a[e];
        t.ele[0].getBoundingClientRect().top < viewHeight && t.flag && (t.ele.append($styleTopGg).width($("body").width() - 30), t.ele.append(t.content).data({
            "data-flag": t.ad_flag,
            class: "mask",
            "data-_id": t._id
        }), t.flag = !1, getSaLog({act: "call", ad_flag: t.ad_flag, _id: t._id}), ggResp(), ggClick())
    }
}

$("body").on("click", ".pop-box .close", function () {
    $(".pop-box").remove()
}), window.addEventListener("scroll", function () {
    scrollLoadGg(ggListArr)
});
