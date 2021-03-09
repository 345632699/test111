function testDataList(e) {
    return "gameList" != e ? gameList[e] : gameList
}

$(function () {
    switch ($("#pageTitle,title").html(gameList.pageTitle), gameList.themeColor) {
        case"blue":
            $("body").addClass("theme-blue");
            break;
        case"red":
            $("body").addClass("theme-red");
            break;
        case"orange":
            $("body").addClass("theme-orange");
            break;
        case"wathet":
            $("body").addClass("theme-wathet")
    }

    function e(e, t) {
        if (!$.isEmptyObject(e)) {
            var a = e.template ? e.template : "vertical_bp_slide", l = e.name ? e.name : "Hot Game",
                i = e.gameList ? e.gameList : [];
            switch (a) {
                case"vertical_bp_slide":
                    UtilHtml.verticalBpSlide({eleId: "#body", title: l, moreHref: "type.html?all=7", data: i});
                    break;
                case"crosswise_4p_bulge_slide":
                    UtilHtml.crosswiese4pBulgeSlide({eleId: "#body", title: l, moreHref: "type.html?all=6", data: i});
                    break;
                case"crosswise_4p":
                    UtilHtml.crosswise4p({eleId: "#body", title: l, moreHref: "type.html?all=7", data: i});
                    break;
                case"vertical_6p_slide":
                    UtilHtml.vertical6pSlide({eleId: "#body", title: l, moreHref: "type.html?all=7", data: i});
                    break;
                case"vertical_6p":
                    UtilHtml.vertical6p({eleId: "#body", title: l, moreHref: "type.html?all=7", data: i});
                    break;
                case"square_6p":
                    UtilHtml.aquare6p({eleId: "#body", title: l, moreHref: "type.html?all=7", data: i});
                    break;
                case"rectangle_6p":
                    UtilHtml.rectangle6p({eleId: "#body", title: l, moreHref: "type.html?all=7", data: i})
            }
        }
    }

    e(gameList.popularGame, "Popular Game"), e(gameList.hotGame, "Hot Game"), function (e) {
        if ($.isEmptyObject(e)) return;
        var t = e.template ? e.template : "", a = e.name ? e.name : "", l = e.gameList ? e.gameList : [];
        switch (t) {
            case"vertical":
                UtilHtml.gameListSlide({eleId: "#body", title: a, moreHref: "type.html?all=7", data: l});
                break;
            case"crosswise_rectangle":
                $.each(l, function (e, t) {
                    UtilHtml.crosswiseRectangle({eleId: "#body", title: e, data: t})
                });
                break;
            case"crosswise_square":
                $.each(l, function (e, t) {
                    UtilHtml.crosswiseSquare({eleId: "#body", title: e, data: t})
                });
                break;
            default:
                $.each(l, function (e, t) {
                    UtilHtml.addLine3Drag({eleId: "#body", title: e, data: t})
                })
        }
    }(gameList.gameList), init(), "undefined" == typeof gameAds || $.isEmptyObject(gameAds) || renderGg(gameAds)
});
