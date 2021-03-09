function find(n, e) {
    return null != n && null != n && "" != $.trim(n) ? n : null != e ? e : ""
}

function closeAllLayer() {
    $("#top svg:visible.icon.icon-share-close").click(), $("#top svg:visible.icon.icon-left").click(), $("#maxpagebean-box #type-shade").click(), $("#maxtypelist-box #type-shade").click()
}

function findParent(n, e) {
    for (var o = $(n), c = 0; c < e; c++) o = o.parent();
    return o
}

function urlEncode(n) {
    try {
        return encodeURIComponent(n)
    } catch (n) {
        return console.error(n), ""
    }
}

function urlDecode(n) {
    try {
        return decodeURIComponent(n)
    } catch (n) {
        return console.error(n), ""
    }
}
