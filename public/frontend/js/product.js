function unique(e) {
    return e.filter(function (e, t, a) {
        return t === a.indexOf(e)
    })
}

function detectMedia(e, t, a) {
    void 0 === e && (e = 768), void 0 === t && (t = "max"), void 0 === a && (a = "screen");
    var i = window.matchMedia("only " + a + " and (" + t + "-width: " + e + "px)");
    return "undefined" !== i && i && i.matches, i.matches
}

function getAnchor() {
    return window.location.hash.slice(1)
}

function setAnchor(e) {
    "function" == typeof window.history.replaceState ? window.history.replaceState(void 0, void 0, "#" + e) : window.location.hash = e
}

function getClassByPrefix(e, t) {
    return e.length > 0 ? $.grep((e.attr("class") || "").split(" "), function (e, a) {
        return 0 === e.indexOf(t)
    }).join() : ""
}

function getQueryParam(e) {
    var t = window.location.search;
    return !!(t = t.match(new RegExp(e + "=([^&=]+)"))) && t[1]
}

function getCookie(e) {
    var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return t ? decodeURIComponent(t[1]) : void 0
}

function setLocalStorageValue(e, t) {
    "localStorage" in window && null !== window.localStorage && (t && t.length ? localStorage.setItem(e, t) : localStorage.removeItem(e))
}

function getLocalStorageValue(e) {
    return "localStorage" in window && null !== window.localStorage && localStorage.getItem(e) ? localStorage.getItem(e) : ""
}

function setSessionStorageValue(e, t) {
    "sessionStorage" in window && null !== window.sessionStorage && (t && t.length ? sessionStorage.setItem(e, t) : sessionStorage.removeItem(e))
}

function getSessionStorageValue(e) {
    return "sessionStorage" in window && null !== window.sessionStorage && sessionStorage.getItem(e) ? sessionStorage.getItem(e) : ""
}

function GeneratedUserCookie(e, t) {
    var a = {
            generateFunction: function () {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" == e ? t : 3 & t | 8).toString(16)
                })
            },
            expires: 3650
        },
        i = $.extend({}, a, t || {});
    void 0 === Cookies.get(e) && Cookies.set(e, i.generateFunction(), {
        expires: i.expires,
        secure: !0,
        samesite: "Strict"
    }), this.get = function () {
        return Cookies.get(e)
    }
}

function getUrlParameterByName(e, t) {
    t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
    var a = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
        i = a.exec(t);
    return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
}

function getTypeByAnchor(e) {
    var t, a = window.typeIcaVariants,
        i = !1;
    return $.each(a, function (a, o) {
        $.each(o, function (o, n) {
            $.each(n, function (o, n) {
                $.each(n, function (o, n) {
                    $.each(n, function (o, n) {
                        "code" in n ? (t = n.code, e === t && (i = a)) : "frames" in n && $.each(n.frames, function (o, n) {
                            t = n.code, e === t && (i = a)
                        })
                    })
                })
            })
        })
    }), i
}

function updateUrlParameter(e, t, a) {
    var i = e.indexOf("#"),
        o = -1 === i ? "" : e.substr(i);
    e = -1 === i ? e : e.substr(0, i);
    var n = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
        r = -1 !== e.indexOf("?") ? "&" : "?";
    return (e = e.match(n) ? e.replace(n, "$1" + t + "=" + a + "$2") : e + r + t + "=" + a) + o
}

function formatBytes(e, t) {
    if (0 == e) return "0 Bytes";
    var a = t || 2,
        i = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        o = Math.floor(Math.log(e) / Math.log(1024));
    return parseFloat((e / Math.pow(1024, o)).toFixed(a)) + " " + i[o]
}

function getFavoriteType(e, t, a) {
    var i = "canvas";
    switch (parseInt(e)) {
        case 1:
            switch (parseInt(t)) {
                case 1:
                    i = 1 !== parseInt(a) ? "split_canvas" : "canvas";
                    break;
                case 2:
                    i = "framed_canvas";
                    break;
                default:
                    i = "canvas"
            }
            break;
        case 2:
            i = "framed_prints";
            break;
        default:
            i = "canvas"
    }
    return i
}

function getMainImage() {
    var e = $("#large-image .product-big-pic");
    return e ? e.attr("src").split("?")[0] : ""
}

function isJsonString(e) {
    try {
        void 0 !== e && JSON.parse(e)
    } catch (e) {
        return !1
    }
    return !0
}

function formatCategoryCountNumber(e) {
    return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

function decorateImage(e, t, a) {
    $(e).css({
        "transform-origin": "center",
        "-webkit-transform": "rotate(" + t + "deg)",
        "-moz-transform": "rotate(" + t + "deg)",
        "-ms-transform": "rotate(" + t + "deg)",
        "-o-transform": "rotate(" + t + "deg)",
        transform: "rotate(" + t + "deg) scale(" + a + ")",
        "object-fit": "cover"
    }), $(e).attr("data-angle", t), $(e).attr("data-scale", a)
}

function getImageScaleByAngel(e) {
    var t = 1;
    if (0 !== e) {
        t = e / 90 % 2 ? .67 : 1
    }
    return t
}

function clearObjectEmpties(e) {
    for (var t in e) e[t] && "object" == typeof e[t] && (clearObjectEmpties(e[t]), 0 === Object.keys(e[t]).length && delete e[t])
}

function setPagePositionBelowSearch() {
    setTimeout(function () {
        $("#page").css({
            position: "relative"
        }), shiftContainersOnError()
    }, 0)
}

function asyncPositioningWithAnimationCheck() {
    setTimeout(function () {
        setPagePositionBelowSearch()
    }, 0), setTimeout(function () {
        setPagePositionBelowSearch()
    }, 250)
}

function makeSiteWideBannerRequest(e) {
    var t = {
        output: "json",
        ajax: !0,
        summary: !0
    };
    !1 === e && (t.rand = Math.floor(1e6 * Math.random())), $.getJSON("/sitewidebanner", t, function (e) {
        e.success && e.banners && $.each(e.banners, function (e, t) {
            var a = $(".tier-banner-" + e);
            a.length && (a.html(t), a.parent().hasClass("container") ? a.parent().addClass("active") : a.addClass("active"))
        })
    })
}

function shouldMakeSiteWideBannerRequest() {
    return $(".ica-coupon:not(.static)").length && !$("body").hasClass("module-icacanvas-sli")
}

function scheduleCallback(e) {
    scheduledObservers.push(e), isScheduled || (isScheduled = !0, setImmediate(dispatchCallbacks))
}

function wrapIfNeeded(e) {
    return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(e) || e
}

function dispatchCallbacks() {
    isScheduled = !1;
    var e = scheduledObservers;
    scheduledObservers = [], e.sort(function (e, t) {
        return e.uid_ - t.uid_
    });
    var t = !1;
    e.forEach(function (e) {
        var a = e.takeRecords();
        removeTransientObserversFor(e), a.length && (e.callback_(a, e), t = !0)
    }), t && dispatchCallbacks()
}

function removeTransientObserversFor(e) {
    e.nodes_.forEach(function (t) {
        var a = registrationsTable.get(t);
        a && a.forEach(function (t) {
            t.observer === e && t.removeTransientObservers()
        })
    })
}

function forEachAncestorAndObserverEnqueueRecord(e, t) {
    for (var a = e; a; a = a.parentNode) {
        var i = registrationsTable.get(a);
        if (i)
            for (var o = 0; o < i.length; o++) {
                var n = i[o],
                    r = n.options;
                if (a === e || r.subtree) {
                    var s = t(r);
                    s && n.enqueue(s)
                }
            }
    }
}

function JsMutationObserver(e) {
    this.callback_ = e, this.nodes_ = [], this.records_ = [], this.uid_ = ++uidCounter
}

function MutationRecord(e, t) {
    this.type = e, this.target = t, this.addedNodes = [], this.removedNodes = [], this.previousSibling = null, this.nextSibling = null, this.attributeName = null, this.attributeNamespace = null, this.oldValue = null
}

function copyMutationRecord(e) {
    var t = new MutationRecord(e.type, e.target);
    return t.addedNodes = e.addedNodes.slice(), t.removedNodes = e.removedNodes.slice(), t.previousSibling = e.previousSibling, t.nextSibling = e.nextSibling, t.attributeName = e.attributeName, t.attributeNamespace = e.attributeNamespace, t.oldValue = e.oldValue, t
}

function getRecord(e, t) {
    return currentRecord = new MutationRecord(e, t)
}

function getRecordWithOldValue(e) {
    return recordWithOldValue || (recordWithOldValue = copyMutationRecord(currentRecord), recordWithOldValue.oldValue = e, recordWithOldValue)
}

function clearRecords() {
    currentRecord = recordWithOldValue = void 0
}

function recordRepresentsCurrentMutation(e) {
    return e === recordWithOldValue || e === currentRecord
}

function selectRecord(e, t) {
    return e === t ? e : recordWithOldValue && recordRepresentsCurrentMutation(e) ? recordWithOldValue : null
}

function Registration(e, t, a) {
    this.observer = e, this.target = t, this.options = a, this.transientObservedNodes = []
}

function sendToMailChimp(e, t, a, i, o) {
    Cookies.get("USERID") && (a.USERID = Cookies.get("USERID")), void 0 === o && (o = !0);
    var n = dynamicLoadService.getServiceRequestMarker();
    $.ajax({
        url: "/?fc=module&module=icacanvas&controller=usercookie&action=getUserCookie&ajax=true" + (n ? "&_=" + n : ""),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: a
    }).done(function (e) {
        if (void 0 === e.uid) return i({
            result: "error",
            msg: e.error && e.error.length > 0 ? e.error : "Invalid user cookie value"
        });
        if (a.USERID = e.uid, Cookies.get("USERID") != a.USERID) {
            var r = new Date;
            r.setFullYear(r.getFullYear() + 10), Cookies.set("USERID", a.USERID, {
                expires: r,
                secure: !0,
                samesite: "Strict"
            })
        }
        $.ajax({
            url: "/?fc=module&module=icacanvas&controller=syncservices&action=createContact&ajax=true&type=" + encodeURIComponent(t) + (n ? "&_=" + n : ""),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: i,
            data: a,
            cache: o
        })
    })
}

function setSubscribed() {
    window.localStorage && (localStorage.setItem("ica-subscribe-status", "subscribed"), localStorage.removeItem("ica-subscribe-dismissed"), localStorage.removeItem("ica-subscribe-timeout"))
}

function shiftContainersOnError() {
    var e = $("#subscribe-modal .mobile-view:visible"),
        t = !(!$('iframe.HB-Bar[id*="-container"]:hidden').length && !$(helloBarIFrameHidden).length),
        a = 1 * (e.outerHeight() || 0);
    setMenuPosition(!t && a > 0 ? a - 9 : a)
}

function setMenuPosition(e) {
    var t = 1 * ($("#filter-and-sort:visible").outerHeight() || 0),
        a = $("body.show-search").length && $(window).width() <= 470,
        i = $(".show-search #header-search"),
        o = a ? i.outerHeight() || 0 : 0,
        n = $("#header-container").outerHeight() || 0;
    $("#header-container, .modal, .modal-ups").css({
        top: e + "px"
    }), $("#nav-header").css({
        top: e + 50 + "px"
    }), $("#filter-and-sort").css({
        top: n + e + "px"
    }), $("aside, #product-type, #category-sort, #trend-sort, #period-sort, #menu-cover").css({
        top: e + 50 + t + (o ? o + 10 : o) + "px"
    }), $("#page").css({
        top: (o ? o + 10 : o) + "px"
    }), header_previous_height !== n && (header_previous_height = n, null === setMenuPositionTimer && (setMenuPositionTimer = setTimeout(function () {
        setMenuPosition(e), setMenuPositionTimer = null
    }, 0)))
}

function delayedSetPosition() {
    setTimeout(shiftContainersOnError, 0), setTimeout(shiftContainersOnError, 250)
}

function logError(e) {
    var t = e.replace(/<([^ >]+)[^>]*>.*?<\/\1>|<[^\/]+\/>/gi, "");
    trackingGA.setGAEvent__default(), trackingGA.setGAEvent__subscribeErrors(t), "undefined" != typeof dataLayer && dataLayer.push({
        subscribeError: t
    })
}

function emailInputProcessValidation() {
    $('.mobile-view input[type="email"]').on("change", delayedSetPosition).on("input", delayedSetPosition).on("orientationchange", delayedSetPosition).on("invalid", function (e) {
        e.preventDefault();
        var t = $(this).hasClass("required") ? "required" : "error";
        logError($("#subscribe-modal .mobile-view ." + t + "-message").text())
    }).change(delayedSetPosition), $(window).on("resize", delayedSetPosition), $("#filter-and-sort").click(delayedSetPosition), $('#subscribe-modal .full-view input[type="email"]').on("invalid", function (e) {
        e.preventDefault();
        var t = $(this).hasClass("required") ? "required" : "error";
        logError($("#subscribe-modal .full-view ." + t + "-message").text())
    })
}

function shouldDisplaySubscriptionPopUp(e) {
    return !isNoCountrySet(e) && !isCMSLeapDayPage() && !isCMSJoinNewsletterPage()
}

function isNoCountrySet(e) {
    return void 0 === e.country
}

function isCMSLeapDayPage() {
    return $("body").hasClass("cms-leapday")
}

function isCMSJoinNewsletterPage() {
    return $("body").hasClass("cms-join-newsletter")
}

function displaySubscriptionPopUp(e) {
    $("#subscribe-modal").each(function () {
        var t = void 0 !== $(this).data("allowed-locations") ? $(this).data("allowed-locations").toUpperCase() : "",
            a = !1;
        if ("" !== t && (a = -1 !== t.indexOf(e)), window.localStorage && a) {
            var i, o = $(this),
                n = screen.width > 1025,
                r = n ? parseInt(o.data("delay")) : parseInt(o.data("mobile-delay")),
                s = parseInt(o.data("suspend")),
                c = null,
                l = $("body"),
                d = n ? parseInt(o.data("desktop-page-num")) : parseInt(o.data("mobile-page-num")),
                u = localStorage.getItem("ica-subscription-popup-cnt-visited-page"),
                f = null === u ? 1 : u,
                p = function () {
                    if (!0 !== document.hidden && "/quick-order" !== location.pathname) {
                        var e = localStorage.getItem("ica-subscribe-status");
                        if ("dismissed" === e) {
                            var t = parseInt(localStorage.getItem("ica-subscribe-dismissed") || 0, 10);
                            (new Date).getTime() - t > 24 * s * 60 * 60 * 1e3 ? (localStorage.removeItem("ica-subscribe-status"), localStorage.removeItem("ica-subscribe-timeout"), localStorage.removeItem("ica-subscribe-dismissed")) : window.clearInterval(i)
                        } else "subscribed" === e ? window.clearInterval(i) : (null === c && (c = parseInt(localStorage.getItem("ica-subscribe-timeout") || r, 10)), c--, 0 === c ? (localStorage.setItem("ica-subscribe-status", "dismissed"), localStorage.setItem("ica-subscribe-dismissed", (new Date).getTime()), localStorage.removeItem("ica-subscribe-timeout"), l.prepend(o), o.showModal(), shiftContainersOnError(), o.find("div.modal-box").on("click", ".close", function () {
                            o.hide(), shiftContainersOnError()
                        }), emailInputProcessValidation()) : localStorage.setItem("ica-subscribe-timeout", c))
                    }
                };
            r = r || parseInt(o.data("delay")), (1 === d || f === String(d)) && r > 0 && s > 0 && (i = window.setInterval(p, 1e3)), ++f, localStorage.setItem("ica-subscription-popup-cnt-visited-page", f)
        }
    })
}

function setNavBarOffset() {
    var e = $(helloBarIFrameSelector),
        t = $('iframe.HB-Bar[id*="-container"]:hidden'),
        a = t.length ? 0 : e.outerHeight() || 0;
    a = 0, setMenuPosition(a && a - 9), helloBarHeight !== a && (setTimeout(setNavBarOffset, 0), setTimeout(setNavBarOffset, 700), helloBarHeight = a), startChecking()
}

function checkNavOffset() {
    setNavBarOffset()
}

function startChecking() {
    check_timerId || (check_intervalCount = 0, check_timerId = setInterval(function () {
        checkNavOffset(), 10 == ++check_intervalCount && (window.clearInterval(check_timerId), check_timerId = null)
    }, 500))
}

function onHelloBarScriptLoaded() {
    function e() {
        var e = $(helloBarIFrameSelector),
            i = $("#hello-bar-style-sheet"),
            o = $("#hellobar-internal-script-loader");
        ++counterForListener, e.length && (t(), clearInterval(a), setTimeout(setNavBarOffset, 100), startChecking(), $(helloBarIFrameSelector + ", #pull-down").on("animationend", setNavBarOffset).on("ready", setNavBarOffset).contents().find("head").append($('<style type="text/css">#hellobar-bar .hb-input-wrapper .hb-input-block{width: calc(80% - 5em);display: inline-block;}#hellobar-bar .hb-cta{display: inline-block;}#hellobar-bar .hb-cta .hb-text-holder {position: relative;transform: translateY(11%);}@media screen and (max-width:480px) {.hb-text-wrapper p.notedited{font-size: 4.5vw;}}</style><script>  var base = document.querySelector("#hellobar-bar"), selector = ".icon-close";   base && base.addEventListener("click", function() { if (parent && parent.postMessage) { parent.postMessage({type: "hb.clicked"},"' + window.location.href + '"); }}, true);   <\/script>')), e.contents().find("head").append(i), e.contents().find("body").append(o), o.attr("src", o.attr("data-src")), $(window).on("keyup", function (t) {
            27 === t.keyCode && e.contents().find(".icon-close").click()
        }), e.contents().find("a.hb-cta").on("click", function () {
            sendToMailChimp("9591371e50", "HelloBar", {
                EMAIL: $.trim(e.contents().find('input[type="email"]').val())
            }, function (e) {
                "success" === e.result && setSubscribed()
            })
        })), counterForListener > 1e4 && clearInterval(a)
    }

    function t() {
        "undefined" != typeof dataLayer && dataLayer.push({
            event: "hello_bar",
            HB_Page: getCurrentPageType()
        })
    }

    var a = setInterval(e, 1);
    $(window).on("click", setNavBarOffset).on("resize", setNavBarOffset).on("orientationchange", setNavBarOffset).on("touchmove", function (e) {
        $(helloBarIFrameSelector).contents().find("input").blur()
    }).on("message", function (e) {
        "hb.clicked" == e.originalEvent.data.type && setTimeout(setNavBarOffset, 700)
    })
}

function loaderHelloBar() {
    function e() {
        var e = $("#hellobar-script-loader");
        e.attr("src", e.attr("data-src"))
    }

    ["https://icanvas.com/", "https://www.icanvas.com/", "https://staging.icanvas.com/"].forEach(function (t, a) {
        window.location.href === t && (e(), 2 === a && localStorage.removeItem("hbs_514566"))
    }), "undefined" != typeof pageListType && e(), void 0 !== pageKey && "product" === pageKey && e()
}

function getCurrentPageType() {
    switch (!0) {
        case void 0 !== pageKey && "product" === pageKey:
            return "product page";
        case void 0 !== pageKey && "homepage" === pageKey:
            return "home page";
        case "undefined" != typeof pageListType && "1" == pageListType:
            return "list page";
        default:
            return "other page"
    }
}

function masonry(e) {
    var t, a, i, o, n, r, s, c, l = $(window),
        d = e.children("li"),
        u = d.length,
        f = 1,
        p = 99999,
        h = !1,
        m = 1,
        v = $("#product-list").data("def-offset"),
        g = null;
    v = v || 0, Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
        for (var a = t || 0, i = this.length; a < i; a++)
            if (this[a] === e) return a;
        return -1
    }), redraw = function (h) {
        var m;
        if (i = e.innerWidth() || 0, checkLoadImg(), i !== p || null !== g) {
            if (p = i, t = Math.floor((p + 150) / 300), t < 2 && (t = 2), "line" === e.attr("data-view") && $(window).width() <= 770 && (t = 1), t !== f && (e.toggleClass("on", t > 1).addClass("c" + t).removeClass("c" + f), f = t, a = f - 1, o = 100 / f, n = new Array(f)), 1 === f) return e.css({
                height: "auto"
            }), void (h ? scrollToElement(h) : l.scroll());
            for (null !== g && clearTimeout(g), g = null, c = .955 * ((d.width() || 0) - 50), r = f; r--;) n[r] = 0;
            for (r = 0; r < u; r++) m = d.eq(r), s = n.indexOf(Array.min(n)), m.css({
                top: n[s] + "px",
                left: s * o + "%"
            }).toggleClass("left", 0 === s).toggleClass("right", s === a), n[s] += v + Math.max(Math.round(m.attr("data-ratio") * c * 105.5 / 96.5) + m.find(".canvas span").outerHeight(!0) || 0 + m.find(".artist").outerHeight(!0) || 0, m.outerHeight(!0));
            e.height(Array.max(n) + "px"), h ? scrollToElement(h) : l.scroll()
        }
    }, rebuild = function () {
        if (h && 0 === $(".combo-art-product-list").length) {
            var t = $("#filter-bar ul li.selected").attr("data-type") ? $("#filter-bar ul li.selected").attr("data-type") : 1;
            -1 !== h.indexOf("&product") ? h = h.replace(/(&product=)[^&]+/gi, "$1" + t) : h += "&product=" + t
        }
        d = e.children("li"), u = d.length, p = 99999, redraw(), u >= 50 && !1 !== h && (l.on("scroll", loadmore), loadmore()), !(null === window.mozInnerScreenX) && afterRebuildCheckList()
    }, getItemIds = function () {
        var e = "";
        return $(".list-product").each(function () {
            e += $(this).attr("data-id-product") + "-"
        }), e
    }, checkLoadImg = function () {
        e.find("li picture img:not(.manually-layouted)").one("load", function () {
            null !== g && clearTimeout(g), g = setTimeout(redraw, 0), $(this).addClass("manually-layouted")
        }).each(function () {
            this.complete && $(this).trigger("load")
        }), null === g && (g = setTimeout(redraw, 0))
    }, loadmore = function () {
        if (d.eq(-24).offset().top - l.scrollTop() < 0) {
            l.off("scroll", loadmore), e.addClass("loading");
            var t = $("#category-sort li.button.selected:not(.disabled)").attr("data-order"),
                a = "&items=";
            if ("random" == t || e.hasClass("masonry-deal")) {
                if ("random" == t && (a += getItemIds()), (m = u / 50 + 1) > 10) return $(".masonry").addClass("hidden-loading"), !1
            } else m = 1, $(".masonry").removeClass("hidden-loading");
            $.get(h + "&start=" + d.length + a, function (t) {
                e.removeClass("loading"), "" !== $.trim(t) && ($("aside.bottom").removeClass("bottom"), -1 !== t.indexOf('data-error="elastic"') ? e.after(t) : (e.append(t), rebuild(), checkLoadImg(), "undefined" != typeof publishAjaxProductList ? publishAjaxProductList() : $(".combo-art-product-list").length > 0 && $.publish("combo-art/product/listloaded"), afterRebuildCheckList()))
            })
        }
    }, getAbsoluteHeight = function (e) {
        e = "string" == typeof e ? document.querySelector(e) : e;
        var t = window.getComputedStyle(e),
            a = parseFloat(t.marginTop) + parseFloat(t.marginBottom);
        return Math.ceil(e.offsetHeight + a)
    }, afterRebuildCheckList = function () {
        [250, 500, 750, 1e3, 1250, 1500, 1750, 2e3].forEach(function (e) {
            setTimeout(redraw, e)
        })
    }, scrollToElement = function (e) {
        l.scrollTop($(e).offset().top - $(window).height() / 2)
    }, this.setUrl = function (t, a) {
        if (l.off("scroll", loadmore), h = t, d = e.children("li"), u = d.length, 0 === $(".combo-art-product-list").length) {
            var i = 1;
            $("#filter-bar ul li.selected").attr("data-type") && (i = $("#filter-bar ul li.selected").attr("data-type")), -1 !== h.indexOf("&product") ? h = h.replace(/(&product=)[^&]+/gi, "$1" + i) : h += "&product=" + i
        }
        void 0 !== a && !0 === a ? rebuild() : u >= 50 && (l.on("scroll", loadmore), loadmore())
    }, this.redraw = function (e) {
        redraw(e)
    }, l.on("throttledresize", function () {
        redraw()
    }), redraw(), e.addClass("initialized"), checkLoadImg(), afterRebuildCheckList()
}

function updateSortOptionsData(e) {
    $("#period-sort").attr("data-sort-by", e)
}

function getListSortOptionValue() {
    return $('[id*="-sort"] li.selected').not(".disabled").attr("data-order") || "popular"
}

function updateUrlTrendingSortOptions() {
    var e = getListSortOptionValue();
    updateSortOptionsData(e);
    var t = $('#period-sort li[data-order="' + e + '"].selected').data() || {},
        a = t.period || "",
        i = t.order || "";
    return (i ? "&trend=" + i : "") + (a ? "&period=" + a : "")
}

function changeCounts(e, t) {
    if (!changeCountsForResponsive(t)) {
        var a = NumberFormatter.categoryCountNumber(t);
        "framed_prints" == e ? $("#category-count").html(a + (1 != t ? " framed prints" : " framed print")) : $("#category-count").html(a + (1 != t ? " canvas prints" : " canvas print"))
    }
}

function changeCountsForResponsive(e) {
    var t = !1,
        a = NumberFormatter.categoryCountNumber(e);
    return void 0 !== window.matchMedia && (t = !window.matchMedia("(min-width: 771px)").matches), !!t && ($("#category-count").html(a + (1 != e ? " prints" : " print")), !0)
}

function icaHorizontalProductList(e) {
    $(e).each(function () {
        var e = $(this),
            t = e.find(".horizontal-list"),
            a = t.find("ul").width(),
            i = !0 === detectMedia(480) && 85;
        if (t.is(":not(:empty)")) {
            publishHorizontalProductList(getProductsIDsForPublish(getVisibleProductsInHorizontalProductList(t, t.scrollLeft(), t.width())), getCallbackNameForPublishHorizontalProductList(getNameOfHorizontalProductList(t)))
        }
        e.find(".slides-arrow").off().click(function (e) {
            e.preventDefault(), t.stop();
            var o = t.scrollLeft(),
                n = t.width(),
                r = getVisibleProductsInHorizontalProductList(t, o, n);
            o = $(this).hasClass("slides-arrow-prev") ? Math.max(0, o - n) : Math.min(a - n, o + n), !1 !== i && o % n === i && (o -= i), t.animate({
                scrollLeft: o + "px"
            }, 540 / n * Math.abs(o - t.scrollLeft())), publishHorizontalProductList(getProductsIDsForPublish(getNewVisibleProductsElInHorizontalProductList(r, getVisibleProductsInHorizontalProductList(t, o, n))), getCallbackNameForPublishHorizontalProductList(getNameOfHorizontalProductList(t)))
        })
    })
}

function icaHorizontalProductListInitialScroll(e) {
    $(e).each(function () {
        var e = $(this),
            t = e.find(".horizontal-list:not(.horizontal-list-wout-init-scroll)"),
            a = (t.find("ul").width(), !0 === detectMedia(480) && 85);
        0 !== $(this).find(".slides-arrow").length && !1 !== a && t.animate({
            scrollLeft: a + "px"
        }, 100)
    })
}

function trackProductSequence(e, t) {
    if (window.localStorage) {
        var a = localStorage.getItem("ica-product-sequence") || "";
        a = a ? JSON.parse(a) : [], a = a.filter(function (t) {
            return t.id !== e
        }), a.push({
            id: e,
            code: t
        }), a.length >= 5 && ($.ajax({
            type: "POST",
            url: "/modules/icacanvas/stream/product.php",
            async: !0,
            dataType: "json",
            data: {
                ajax: !0,
                sequence: a,
                session: Math.random().toString(36).substring(2)
            }
        }), a = []), localStorage.setItem("ica-product-sequence", JSON.stringify(a))
    }
}

function toggleFavorite(e, t) {
    var a = $(e),
        i = Math.floor(1e6 * Math.random());
    $.getJSON("/favorites", {
        action: "toggle",
        id_product: a.attr("data-id-product"),
        code: t,
        rand: i
    }, function (e) {
        e.success && (a.hasClass("add-to-favorites") && (a = $('.add-to-favorites[data-id-product="' + a.attr("data-id-product") + '"]').filter('[data-type="' + a.attr("data-type") + '"]')), a.toggleClass("active", e.active), a.hasClass("add-to-favorites") && a.closest("li").toggleClass("removed-from-favorites", !e.active), e.active ? ($("#header-favorites, #header-favorites-icon, #footer-favorites, .fav_count").addClass("active"), "undefined" != typeof favorites_types && (favorites_types = favorites_types.filter(function (t) {
            return t !== e.favorite_type
        }), favorites_types.indexOf(e.favorite_type) > -1 || favorites_types.push(e.favorite_type), a.data("in-favorites", favorites_types.join(",")))) : "undefined" != typeof favorites_types && (favorites_types = favorites_types.filter(function (t) {
            return t !== e.favorite_type
        }), a.data("in-favorites", favorites_types.join(","))), setLocalStorageValue("sli_cart_data", i))
    })
}

function pageAll__ProductClick__publish(e, t) {
    $.publish("product/click", pageAll__ProductClick__prepare(e, t))
}

function pageAll__ProductClick__prepare(e, t) {
    return {
        actionField: e,
        products: t
    }
}

function initProductsEventListener() {
    $("body").on("click", ".list-product[data-reference-product] a.canvas", function (e) {
        var t = $(this).parents(".list-product").eq(0);
        pageAll__ProductClick__publish({
            list: t.attr("data-list-product")
        }, [
            {
                id: t.attr("data-reference-product"),
                name: t.attr("data-name-product"),
                category: t.attr("data-category-product"),
                list: t.attr("data-list-product"),
                position: t.attr("data-position-product")
            }])
    }), $("body").on("click", ".cart_item[data-reference-product] a[data-link-product]", function (e) {
        var t = $(this).parents(".cart_item").eq(0);
        pageAll__ProductClick__publish({
            list: t.attr("data-list-product")
        }, [
            {
                id: t.attr("data-reference-product"),
                name: t.attr("data-name-product"),
                category: t.attr("data-category-product"),
                list: t.attr("data-list-product"),
                position: t.attr("data-position-product")
            }])
    })
}

function pageSlider__Index__publish(e) {
    $.publish("slider/toggle/", pageSlider__Index__prepare(e))
}

function pageSlider__Recently__publish(e) {
    $.publish("slider/toggle/", pageSlider__Recently__prepare(e))
}

function pageSlider__Index__prepare(e) {
    return e = "undefined" != typeof gtmProductsHome && gtmProductsHome ? pageSlider__List__filter(e, gtmProductsHome) : [], {
        products: e
    }
}

function pageSlider__Recently__prepare(e) {
    return e = "undefined" != typeof gtmProductsCompact && gtmProductsCompact ? pageSlider__List__filter(e, gtmProductsCompact) : [], {
        products: e
    }
}

function pageSlider__List__filter(e, t) {
    return jQuery.grep(t, function (t, a) {
        return -1 !== $.inArray(t.id, e)
    })
}

function getVisibleProductsInHorizontalProductList(e, t, a) {
    var i = e.find(".list-product").length,
        o = e.find(".list-product").parent("li").outerWidth() || 0;
    if (!o) return [];
    var n = getFirstVisibleElInHorizontalProductList(t, o);
    return getVisibleProductsElInHorizontalProductList(e, n, getLastVisibleElInHorizontalProductList(i, n, a, o))
}

function getFirstVisibleElInHorizontalProductList(e, t) {
    return Math.max(0, Math.floor(e / t))
}

function getLastVisibleElInHorizontalProductList(e, t, a, i) {
    return Math.min(Math.ceil(a / i) + t, e) - 1
}

function getVisibleProductsElInHorizontalProductList(e, t, a) {
    return e.find(".list-product").slice(t, a + 1)
}

function getNewVisibleProductsElInHorizontalProductList(e, t) {
    return $(t).not($(e))
}

function getProductsIDsForPublish(e) {
    var t = [];
    return e.length && e.each(function (e) {
        t.push($(this).attr("data-reference-product"))
    }), t
}

function getNameOfHorizontalProductList(e) {
    return e.parents(".horizontal-list-outer:first").attr("id")
}

function getCallbackNameForPublishHorizontalProductList(e) {
    switch (e) {
        case "home-product-container":
            return "pageSlider__Index__publish";
        case "recent-product-container":
            return "pageSlider__Recently__publish";
        default:
            return
    }
}

function publishHorizontalProductList(list, callback) {
    list.length && void 0 !== callback && eval("if (typeof " + callback + ' === "function") { ' + callback + "(list);}")
}

function createNewAdestraImage(e) {
    if (void 0 !== e) {
        var t = document.createElement("img");
        t.src = e, t.id = "adestra_tracking_image", document.getElementsByTagName("body")[0].appendChild(t)
    }
}

function processAdestraTracking(e) {
    if (void 0 !== e) {
        if ($("#adestra_tracking_image").length) return void $("#adestra_tracking_image").attr("src", e);
        createNewAdestraImage(e)
    }
}

function pageProduct__Load__publish(e) {
    $.publish("product/listloaded", pageProduct__Load__prepare(e))
}

function pageProduct__ProductView__publish(e, t) {
    $.publish("product/view", pageProduct__ProductView__prepare(e, t))
}

function pageProduct__CartAdd__publish(e, t) {
    $.publish("cart/add", pageProduct__CartAdd__prepare(e, t))
}

function pageProduct__Adestra__CartAdd__publish(e) {
    $.publish("adestra_cart/add", e)
}

function pageProduct__Load__prepare(e) {
    return {
        products: e
    }
}

function pageProduct__ProductView__prepare(e, t) {
    return {
        actionField: e,
        products: t
    }
}

function pageProduct__CartAdd__prepare(e, t) {
    return {
        actionField: e,
        products: t
    }
}

function displayKlarnaPaymentContainer() {
    var e = $("#klarnapayments_pay_over_time_module");
    e.length && (e.click(), e.hide())
}

function orderValidate(e, t, a) {
    a = a || "checkCart", $.ajax({
        type: "POST",
        headers: {
            "cache-control": "no-cache"
        },
        url: "/quick-order?rand=" + (new Date).getTime() + "&ajax=true&method=" + a + "&token=" + static_token,
        async: !0,
        cache: !1,
        dataType: "json",
        data: {},
        context: e,
        success: t
    })
}

function viewCartValidateCallback(e) {
    document.location.href = this.attr("href")
}

function toggleFramingOptions(e, t) {
    if (e && void 0 !== t) {
        var a = $("#product-frames");
        0 !== a.length && a.find(".container").hide().filter("#product-frames-" + e + "-" + t).show()
    }
}

function toggleRecentlyViewed(e) {
    e && $("#footer-recent").attr("data-ica-type", e)
}

function toggleFramesView(e) {
    $(e).each(function () {
        var t = $(this),
            a = t.find(".options-frame2-list"),
            i = a.find("li:visible").length;
        i <= 2 ? t.hasClass("active") && t.removeClass("active").find("ul").width("auto").end().find(".slides-arrow").off().hide() : (t.addClass("active").find("ul").width(124 * i).end().find(".slides-arrow").show(), toggleFramesList(e))
    })
}

function toggleFramesList(e) {
    $(e).each(function () {
        var e = $(this),
            t = e.find(".options-frame2-list"),
            a = t.find("li.selected"),
            i = a.length ? a.position().left - 35 : 0,
            o = t.find("ul").width(),
            n = !0 !== detectMedia(480) ? 10 : 0;
        e.find(".slides-arrow").off().click(function (e, a) {
            e.preventDefault(), t.stop();
            var i = t.scrollLeft(),
                r = t.width();
            i = $(this).hasClass("slides-arrow-prev") ? Math.max(0, i - r) : Math.min(o - r - n, i + r), a = void 0 === a ? 248 / r * Math.abs(i - t.scrollLeft()) : a, t.animate({
                scrollLeft: i + "px"
            }, a)
        }), i > 0 && t.width() < i ? e.find(".slides-arrow.slides-arrow-next").trigger("click", [0]) : i < 0 && t.width() > i && e.find(".slides-arrow.slides-arrow-prev").trigger("click", [0])
    })
}

jQuery.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1)
}),
    function (e) {
        e.fn.hoverIntent = function (t, a, i) {
            var o = {
                interval: 100,
                sensitivity: 6,
                timeout: 0
            };
            o = "object" == typeof t ? e.extend(o, t) : e.isFunction(a) ? e.extend(o, {
                over: t,
                out: a,
                selector: i
            }) : e.extend(o, {
                over: t,
                out: t,
                selector: a
            });
            var n, r, s, c, l = function (e) {
                    n = e.pageX, r = e.pageY
                },
                d = function (t, a) {
                    if (a.hoverIntent_t = clearTimeout(a.hoverIntent_t), Math.sqrt((s - n) * (s - n) + (c - r) * (c - r)) < o.sensitivity) return e(a).off("mousemove.hoverIntent", l), a.hoverIntent_s = !0, o.over.apply(a, [t]);
                    s = n, c = r, a.hoverIntent_t = setTimeout(function () {
                        d(t, a)
                    }, o.interval)
                },
                u = function (e, t) {
                    return t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = !1, o.out.apply(t, [e])
                },
                f = function (t) {
                    var a = e.extend({}, t),
                        i = this;
                    i.hoverIntent_t && (i.hoverIntent_t = clearTimeout(i.hoverIntent_t)), "mouseenter" === t.type ? (s = a.pageX, c = a.pageY, e(i).on("mousemove.hoverIntent", l), i.hoverIntent_s || (i.hoverIntent_t = setTimeout(function () {
                        d(a, i)
                    }, o.interval))) : (e(i).off("mousemove.hoverIntent", l), i.hoverIntent_s && (i.hoverIntent_t = setTimeout(function () {
                        u(a, i)
                    }, o.timeout)))
                };
            return this.on({
                "mouseenter.hoverIntent": f,
                "mouseleave.hoverIntent": f
            }, o.selector)
        }
    }(jQuery),
    function (e) {
        var t, a, i, o = e.event,
            n = {
                _: 0
            },
            r = 0;
        t = o.special.throttledresize = {
            setup: function () {
                e(this).on("resize", t.handler)
            },
            teardown: function () {
                e(this).off("resize", t.handler)
            },
            handler: function (s, c) {
                var l = this,
                    d = arguments;
                a = !0, i || (setInterval(function () {
                    r++, (r > t.threshold && a || c) && (s.type = "throttledresize", o.dispatch.apply(l, d), a = !1, r = 0), r > 9 && (e(n).stop(), i = !1, r = 0)
                }, 30), i = !0)
            },
            threshold: 0
        }
    }(jQuery),
    function () {
        function e() {
            return (new Date).getTime()
        }

        var t = jQuery,
            a = "jQuery.pause",
            i = 1,
            o = t.fn.animate,
            n = {};
        t.fn.animate = function (r, s, c, l) {
            var d = t.speed(s, c, l);
            return d.complete = d.old, this.each(function () {
                this[a] || (this[a] = i++);
                var s = t.extend({}, d);
                o.apply(t(this), [r, t.extend({}, s)]), n[this[a]] = {
                    run: !0,
                    prop: r,
                    opt: s,
                    start: e(),
                    done: 0
                }
            })
        }, t.fn.pause = function () {
            return this.each(function () {
                this[a] || (this[a] = i++);
                var o = n[this[a]];
                o && o.run && (o.done += e() - o.start, o.done > o.opt.duration ? delete n[this[a]] : (t(this).stop(), o.run = !1))
            })
        }, t.fn.resume = function () {
            return this.each(function () {
                this[a] || (this[a] = i++);
                var r = n[this[a]];
                r && !r.run && (r.opt.duration -= r.done, r.done = 0, r.run = !0, r.start = e(), o.apply(t(this), [r.prop, t.extend({}, r.opt)]))
            })
        }
    }(),
    function (e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof module && module.exports ? module.exports = t() : e.H5F = t()
    }(this, function () {
        var e, t, a, i, o, n, r, s, c, l, d, u, f, p, h, m, v, g, y, b, w, $, x, C, _, k = document,
            P = k.createElement("input"),
            S = /^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            I = /[a-z][\-\.+a-z]*:\/\//i,
            T = /^(input|select|textarea)$/i;
        return n = function (e, t) {
            var a = !e.nodeType || !1,
                i = {
                    validClass: "valid",
                    invalidClass: "error",
                    requiredClass: "required",
                    placeholderClass: "placeholder",
                    onSubmit: Function.prototype,
                    onInvalid: Function.prototype
                };
            if ("object" == typeof t)
                for (var n in i) void 0 === t[n] && (t[n] = i[n]);
            if (o = t || i, a)
                for (var s = 0, c = e.length; c > s; s++) r(e[s]);
            else r(e)
        }, r = function (a) {
            var i = a.elements,
                n = i.length,
                r = !!a.attributes.novalidate;
            if (g(a, "invalid", c, !0), g(a, "blur", c, !0), g(a, "input", c, !0), g(a, "keyup", c, !0), g(a, "focus", c, !0), g(a, "change", c, !0), g(a, "click", l, !0), g(a, "submit", function (i) {
                return e = !0, t || r || a.checkValidity() ? void o.onSubmit.call(a, i) : void b(i)
            }, !1), !f())
                for (a.checkValidity = function () {
                    return d(a)
                }; n--;) !!i[n].attributes.required, "fieldset" !== i[n].nodeName.toLowerCase() && s(i[n])
        }, s = function (e) {
            var t = e,
                a = v(t),
                o = {
                    type: t.getAttribute("type"),
                    pattern: t.getAttribute("pattern"),
                    placeholder: t.getAttribute("placeholder")
                },
                n = /^(email|url)$/i,
                r = /^(input|keyup)$/i,
                s = n.test(o.type) ? o.type : !!o.pattern && o.pattern,
                c = p(t, s),
                l = m(t, "step"),
                f = m(t, "min"),
                g = m(t, "max"),
                y = !("" === t.validationMessage || void 0 === t.validationMessage);
            t.checkValidity = function () {
                return d.call(this, t)
            }, t.setCustomValidity = function (e) {
                u.call(t, e)
            }, t.validity = {
                valueMissing: a,
                patternMismatch: c,
                rangeUnderflow: f,
                rangeOverflow: g,
                stepMismatch: l,
                customError: y,
                valid: !(a || c || l || f || g || y)
            }, o.placeholder && !r.test(i) && h(t)
        }, c = function (e) {
            var t = w(e) || e,
                a = /^(input|keyup|focusin|focus|change)$/i,
                n = /^(submit|image|button|reset)$/i,
                r = /^(checkbox|radio)$/i,
                l = !0;
            !T.test(t.nodeName) || n.test(t.type) || n.test(t.nodeName) || (i = e.type, f() || s(t), t.validity.valid && ("" !== t.value || r.test(t.type)) || t.value !== t.getAttribute("placeholder") && t.validity.valid ? (x(t, [o.invalidClass, o.requiredClass]), $(t, o.validClass)) : a.test(i) ? t.validity.valueMissing && x(t, [o.requiredClass, o.invalidClass, o.validClass]) : t.validity.valueMissing ? (x(t, [o.invalidClass, o.validClass]), $(t, o.requiredClass)) : t.validity.valid || (x(t, [o.validClass, o.requiredClass]), $(t, o.invalidClass)), "input" === i && l && (y(t.form, "keyup", c, !0), l = !1))
        }, d = function (t) {
            var a, i, n, r, s, l = !1;
            if ("form" === t.nodeName.toLowerCase()) {
                a = t.elements;
                for (var d = 0, u = a.length; u > d; d++) i = a[d], n = !!i.attributes.disabled, r = !!i.attributes.required, s = !!i.attributes.pattern, "fieldset" !== i.nodeName.toLowerCase() && !n && (r || s && r) && (c(i), i.validity.valid || l || (e && i.focus(), l = !0, o.onInvalid.call(t, i)));
                return !l
            }
            return c(t), t.validity.valid
        }, u = function (e) {
            this.validationMessage = e
        }, l = function (e) {
            var a = w(e);
            a.attributes.formnovalidate && "submit" === a.type && (t = !0)
        }, f = function () {
            return C(P, "validity") && C(P, "checkValidity")
        }, p = function (e, t) {
            if ("email" === t) return !S.test(e.value);
            if ("url" === t) return !I.test(e.value);
            if (t) {
                var i = e.getAttribute("placeholder"),
                    o = e.value;
                return a = RegExp("^(?:" + t + ")$"), o !== i && ("" !== o && !a.test(e.value))
            }
            return !1
        }, h = function (e) {
            var t = {
                    placeholder: e.getAttribute("placeholder")
                },
                a = /^(focus|focusin|submit)$/i,
                n = /^(input|textarea)$/i,
                r = /^password$/i;
            !!("placeholder" in P) || !n.test(e.nodeName) || r.test(e.type) || ("" !== e.value || a.test(i) ? e.value === t.placeholder && a.test(i) && (e.value = "", x(e, o.placeholderClass)) : (e.value = t.placeholder, g(e.form, "submit", function () {
                i = "submit", h(e)
            }, !0), $(e, o.placeholderClass)))
        }, m = function (e, t) {
            var a = parseInt(e.getAttribute("min"), 10) || 0,
                i = parseInt(e.getAttribute("max"), 10) || !1,
                o = parseInt(e.getAttribute("step"), 10) || 1,
                n = parseInt(e.value, 10),
                r = (n - a) % o;
            return v(e) || isNaN(n) ? "number" === e.getAttribute("type") : "step" === t ? !!e.getAttribute("step") && 0 !== r : "min" === t ? !!e.getAttribute("min") && a > n : "max" === t ? !!e.getAttribute("max") && n > i : void 0
        },
            function (e) {
                return !!e.attributes.required && v(e)
            }, v = function (e) {
            var t = e.getAttribute("placeholder"),
                a = /^(checkbox|radio)$/i;
            return !(!e.attributes.required || "" !== e.value && e.value !== t && (!a.test(e.type) || _(e)))
        }, g = function (e, t, a, i) {
            C(window, "addEventListener") ? e.addEventListener(t, a, i) : C(window, "attachEvent") && void 0 !== window.event && ("blur" === t ? t = "focusout" : "focus" === t && (t = "focusin"), e.attachEvent("on" + t, a))
        }, y = function (e, t, a, i) {
            C(window, "removeEventListener") ? e.removeEventListener(t, a, i) : C(window, "detachEvent") && void 0 !== window.event && e.detachEvent("on" + t, a)
        }, b = function (e) {
            e = e || window.event, e.stopPropagation && e.preventDefault ? (e.stopPropagation(), e.preventDefault()) : (e.cancelBubble = !0, e.returnValue = !1)
        }, w = function (e) {
            return e = e || window.event, e.target || e.srcElement
        }, $ = function (e, t) {
            var a;
            e.className ? (a = RegExp("(^|\\s)" + t + "(\\s|$)"), a.test(e.className) || (e.className += " " + t)) : e.className = t
        }, x = function (e, t) {
            var a, i, o = "object" == typeof t ? t.length : 1,
                n = o;
            if (e.className)
                if (e.className === t) e.className = "";
                else
                    for (; o--;) a = RegExp("(^|\\s)" + (n > 1 ? t[o] : t) + "(\\s|$)"), (i = e.className.match(a)) && 3 === i.length && (e.className = e.className.replace(a, i[1] && i[2] ? " " : ""))
        }, C = function (e, t) {
            var a = typeof e[t];
            return !!(RegExp("^function|object$", "i").test(a) && e[t] || "unknown" === a)
        }, _ = function (e) {
            for (var t = document.getElementsByName(e.name), a = 0; t.length > a; a++)
                if (t[a].checked) return !0;
            return !1
        }, {
            setup: n
        }
    }),
    function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function (e) {
        "use strict";
        var t, a, i, o, n, r, s, c;
        for (c = window.document, s = Object.defineProperty || e.noop, n = !1, a = ["ms", "moz", "webkit", ""]; a.length;)
            if (t = a.pop(), (r = t ? t + "Hidden" : "hidden") in c) {
                n = !0;
                break
            }
        if (n) t && (e.event.special.visibilitychange = {
            bindType: t + "visibilitychange"
        }, s(c, "hidden", {
            get: function () {
                return c[r]
            }
        }), s(c, "visibilityState", {
            get: function () {
                return c[t + "VisibilityState"]
            }
        }));
        else {
            i = c.hidden = !1, o = c.visibilityState = "visible";
            try {
                s(c, "hidden", {
                    get: function () {
                        return i
                    },
                    set: e.noop
                }), s(c, "visibilityState", {
                    get: function () {
                        return o
                    },
                    set: e.noop
                })
            } catch (e) {}
            e(window).bind("focus blur", function (t) {
                var a = "blur" === t.type;
                i !== a && (c.hidden = i = a, c.visibilityState = o = a ? "hidden" : "visible", e(c).trigger("visibilitychange"))
            })
        }
    }),
    function (e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function (e) {
        "use strict";

        function t(t) {
            return !t.nodeName || -1 !== e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
        }

        function a(t) {
            return e.isFunction(t) || e.isPlainObject(t) ? t : {
                top: t,
                left: t
            }
        }

        var i = e.scrollTo = function (t, a, i) {
            return e(window).scrollTo(t, a, i)
        };
        return i.defaults = {
            axis: "xy",
            duration: 0,
            limit: !0
        }, e.fn.scrollTo = function (o, n, r) {
            "object" == typeof n && (r = n, n = 0), "function" == typeof r && (r = {
                onAfter: r
            }), "max" === o && (o = 9e9), r = e.extend({}, i.defaults, r), n = n || r.duration;
            var s = r.queue && 1 < r.axis.length;
            return s && (n /= 2), r.offset = a(r.offset), r.over = a(r.over), this.each(function () {
                function c(t) {
                    var a = e.extend({}, r, {
                        queue: !0,
                        duration: n,
                        complete: t && function () {
                            t.call(u, p, r)
                        }
                    });
                    f.animate(h, a)
                }

                if (null !== o) {
                    var l, d = t(this),
                        u = d ? this.contentWindow || window : this,
                        f = e(u),
                        p = o,
                        h = {};
                    switch (typeof p) {
                        case "number":
                        case "string":
                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(p)) {
                                p = a(p);
                                break
                            }
                            if (p = d ? e(p) : e(p, u), !p.length) return;
                        case "object":
                            (p.is || p.style) && (l = (p = e(p)).offset())
                    }
                    var m = e.isFunction(r.offset) && r.offset(u, p) || r.offset;
                    e.each(r.axis.split(""), function (e, t) {
                        var a = "x" === t ? "Left" : "Top",
                            o = a.toLowerCase(),
                            n = "scroll" + a,
                            v = f[n](),
                            g = i.max(u, t);
                        l ? (h[n] = l[o] + (d ? 0 : v - f.offset()[o]), r.margin && (h[n] -= parseInt(p.css("margin" + a), 10) || 0, h[n] -= parseInt(p.css("border" + a + "Width"), 10) || 0), h[n] += m[o] || 0, r.over[o] && (h[n] += p["x" === t ? "width" : "height"]() * r.over[o])) : (a = p[o], h[n] = a.slice && "%" === a.slice(-1) ? parseFloat(a) / 100 * g : a), r.limit && /^\d+$/.test(h[n]) && (h[n] = 0 >= h[n] ? 0 : Math.min(h[n], g)), !e && 1 < r.axis.length && (v === h[n] ? h = {} : s && (c(r.onAfterFirst), h = {}))
                    }), c(r.onAfter)
                }
            })
        }, i.max = function (a, i) {
            var o = "x" === i ? "Width" : "Height",
                n = "scroll" + o;
            if (!t(a)) return a[n] - e(a)[o.toLowerCase()]();
            var o = "client" + o,
                r = a.ownerDocument || a.document,
                s = r.documentElement,
                r = r.body;
            return Math.max(s[n], r[n]) - Math.min(s[o], r[o])
        }, e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = {
            get: function (t) {
                return e(t.elem)[t.prop]()
            },
            set: function (t) {
                var a = this.get(t);
                if (t.options.interrupt && t._last && t._last !== a) return e(t.elem).stop();
                var i = Math.round(t.now);
                a !== i && (e(t.elem)[t.prop](i), t._last = this.get(t))
            }
        }, i
    }),
    function (e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
    }(this, function () {
        "use strict";
        return function (e, t, a, i) {
            var o = {
                features: null,
                bind: function (e, t, a, i) {
                    var o = (i ? "remove" : "add") + "EventListener";
                    t = t.split(" ");
                    for (var n = 0; n < t.length; n++) t[n] && e[o](t[n], a, !1)
                },
                isArray: function (e) {
                    return e instanceof Array
                },
                createEl: function (e, t) {
                    var a = document.createElement(t || "div");
                    return e && (a.className = e), a && e && "div" === a.localName && "pswp__img pswp__img--placeholder pswp__img--placeholder--blank" === e && a.appendChild(this.combineTiledImage()), a
                },
                combineTiledImage: function () {
                    var e = document.createElement("div");
                    e.className = "pswp__img_container", e.style.position = "relative";
                    var t = [],
                        a = JSON.parse(atob(icaProductTypeList)),
                        i = Math.sqrt(a.names.length);
                    a.names.map(function (e, a) {
                        var o = Math.floor(a / i);
                        !t[o] && (t[o] = []), t[o][a % i] = e
                    });
                    for (var o = 0; o < t.length; o++) {
                        var n = document.createElement("div");
                        n.className = "row", n.style.lineHeight = "0";
                        for (var r = 0; r < t[o].length; r++) {
                            var s = document.createElement("img");
                            s.src = t[o][r], n.appendChild(s)
                        }
                        e.appendChild(n)
                    }
                    return e
                },
                getScrollY: function () {
                    var e = window.pageYOffset;
                    return void 0 !== e ? e : document.documentElement.scrollTop
                },
                unbind: function (e, t, a) {
                    o.bind(e, t, a, !0)
                },
                removeClass: function (e, t) {
                    var a = new RegExp("(\\s|^)" + t + "(\\s|$)");
                    e.className = e.className.replace(a, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                },
                addClass: function (e, t) {
                    o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
                },
                hasClass: function (e, t) {
                    return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
                },
                getChildByClass: function (e, t) {
                    for (var a = e.firstChild; a;) {
                        if (o.hasClass(a, t)) return a;
                        a = a.nextSibling
                    }
                },
                arraySearch: function (e, t, a) {
                    for (var i = e.length; i--;)
                        if (e[i][a] === t) return i;
                    return -1
                },
                extend: function (e, t, a) {
                    for (var i in t)
                        if (t.hasOwnProperty(i)) {
                            if (a && e.hasOwnProperty(i)) continue;
                            e[i] = t[i]
                        }
                },
                easing: {
                    sine: {
                        out: function (e) {
                            return Math.sin(e * (Math.PI / 2))
                        },
                        inOut: function (e) {
                            return -(Math.cos(Math.PI * e) - 1) / 2
                        }
                    },
                    cubic: {
                        out: function (e) {
                            return --e * e * e + 1
                        }
                    }
                },
                detectFeatures: function () {
                    if (o.features) return o.features;
                    var e = o.createEl(),
                        t = e.style,
                        a = "",
                        i = {};
                    if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                        var n = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            r && r.length > 0 && (r = parseInt(r[1], 10)) >= 1 && r < 8 && (i.isOldIOSPhone = !0)
                        }
                        var s = n.match(/Android\s([0-9\.]*)/),
                            c = s ? s[1] : 0;
                        c = parseFloat(c), c >= 1 && (c < 4.4 && (i.isOldAndroid = !0), i.androidVersion = c), i.isMobileOpera = /opera mini|opera mobi/i.test(n)
                    }
                    for (var l, d, u = ["transform", "perspective", "animationName"], f = ["", "webkit", "Moz", "ms", "O"], p = 0; p < 4; p++) {
                        a = f[p];
                        for (var h = 0; h < 3; h++) l = u[h], d = a + (a ? l.charAt(0).toUpperCase() + l.slice(1) : l), !i[l] && d in t && (i[l] = d);
                        a && !i.raf && (a = a.toLowerCase(), i.raf = window[a + "RequestAnimationFrame"], i.raf && (i.caf = window[a + "CancelAnimationFrame"] || window[a + "CancelRequestAnimationFrame"]))
                    }
                    if (!i.raf) {
                        var m = 0;
                        i.raf = function (e) {
                            var t = (new Date).getTime(),
                                a = Math.max(0, 16 - (t - m)),
                                i = window.setTimeout(function () {
                                    e(t + a)
                                }, a);
                            return m = t + a, i
                        }, i.caf = function (e) {
                            clearTimeout(e)
                        }
                    }
                    return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = i, i
                }
            };
            o.detectFeatures(), o.features.oldIE && (o.bind = function (e, t, a, i) {
                t = t.split(" ");
                for (var o, n = (i ? "detach" : "attach") + "Event", r = function () {
                    a.handleEvent.call(a)
                }, s = 0; s < t.length; s++)
                    if (o = t[s])
                        if ("object" == typeof a && a.handleEvent) {
                            if (i) {
                                if (!a["oldIE" + o]) return !1
                            } else a["oldIE" + o] = r;
                            e[n]("on" + o, a["oldIE" + o])
                        } else e[n]("on" + o, a)
            });
            var n = this,
                r = {
                    allowPanToNext: !0,
                    spacing: .12,
                    bgOpacity: 1,
                    mouseUsed: !1,
                    loop: !0,
                    pinchToClose: !0,
                    closeOnScroll: !0,
                    closeOnVerticalDrag: !0,
                    verticalDragRange: .75,
                    hideAnimationDuration: 333,
                    showAnimationDuration: 333,
                    showHideOpacity: !1,
                    focus: !0,
                    escKey: !0,
                    arrowKeys: !0,
                    mainScrollEndFriction: .35,
                    panEndFriction: .35,
                    isClickableElement: function (e) {
                        return "A" === e.tagName
                    },
                    getDoubleTapZoom: function (e, t) {
                        return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
                    },
                    maxSpreadZoom: 1.33,
                    modal: !0,
                    scaleMode: "fit"
                };
            o.extend(r, i);
            var s, c, l, d, u, f, p, h, m, v, g, y, b, w, $, x, C, _, k, P, S, I, T, E, O, M, A, F, L, D, N, R, z, j, H, B, V, U, q, Z, W, K, G, J, Y, X, Q, ee, te, ae, ie, oe, ne, re, se, ce, le,
                de = function () {
                    return {
                        x: 0,
                        y: 0
                    }
                },
                ue = de(),
                fe = de(),
                pe = de(),
                he = {},
                me = 0,
                ve = {},
                ge = de(),
                ye = 0,
                be = !0,
                we = [],
                $e = {},
                xe = !1,
                Ce = function (e, t) {
                    o.extend(n, t.publicMethods), we.push(e)
                },
                _e = function (e) {
                    var t = Jt();
                    return e > t - 1 ? e - t : e < 0 ? t + e : e
                },
                ke = {},
                Pe = function (e, t) {
                    return ke[e] || (ke[e] = []), ke[e].push(t)
                },
                Se = function (e) {
                    var t = ke[e];
                    if (t) {
                        var a = Array.prototype.slice.call(arguments);
                        a.shift();
                        for (var i = 0; i < t.length; i++) t[i].apply(n, a)
                    }
                },
                Ie = function () {
                    return (new Date).getTime()
                },
                Te = function (e) {
                    se = e, n.bg.style.opacity = e * r.bgOpacity
                },
                Ee = function (e, t, a, i, o) {
                    (!xe || o && o !== n.currItem) && (i /= o ? o.fitRatio : n.currItem.fitRatio), e[I] = y + t + "px, " + a + "px" + b + " scale(" + i + ")"
                },
                Oe = function (e) {
                    ae && (e && (v > n.currItem.fitRatio ? xe || (ca(n.currItem, !1, !0), xe = !0) : xe && (ca(n.currItem), xe = !1)), Ee(ae, pe.x, pe.y, v))
                },
                Me = function (e) {
                    e.container && Ee(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
                },
                Ae = function (e, t) {
                    t[I] = y + e + "px, 0px" + b
                },
                Fe = function (e, t) {
                    if (!r.loop && t) {
                        var a = d + (ge.x * me - e) / ge.x,
                            i = Math.round(e - mt.x);
                        (a < 0 && i > 0 || a >= Jt() - 1 && i < 0) && (e = mt.x + i * r.mainScrollEndFriction)
                    }
                    mt.x = e, Ae(e, u)
                },
                Le = function (e, t) {
                    var a = vt[e] - ve[e];
                    return fe[e] + ue[e] + a - a * (t / g)
                },
                De = function (e, t) {
                    t && e && (e.x = t.x, e.y = t.y, t.id && (e.id = t.id))
                },
                Ne = function (e) {
                    e.x = Math.round(e.x), e.y = Math.round(e.y)
                },
                Re = null,
                ze = function () {
                    Re && (o.unbind(document, "mousemove", ze), o.addClass(e, "pswp--has_mouse"), r.mouseUsed = !0, Se("mouseUsed")), Re = setTimeout(function () {
                        Re = null
                    }, 100)
                },
                je = function () {
                    o.bind(document, "keydown", n), N.transform && o.bind(n.scrollWrap, "click", n), r.mouseUsed || o.bind(document, "mousemove", ze), o.bind(window, "resize scroll orientationchange", n), Se("bindEvents")
                },
                He = function () {
                    o.unbind(window, "resize scroll orientationchange", n), o.unbind(window, "scroll", m.scroll), o.unbind(document, "keydown", n), o.unbind(document, "mousemove", ze), N.transform && o.unbind(n.scrollWrap, "click", n), q && o.unbind(window, p, n), clearTimeout(R), Se("unbindEvents")
                },
                Be = function (e, t) {
                    var a = oa(n.currItem, he, e);
                    return t && (te = a), a
                },
                Ve = function (e) {
                    return e || (e = n.currItem), e.initialZoomLevel
                },
                Ue = function (e) {
                    return e || (e = n.currItem), e.w > 0 ? r.maxSpreadZoom : 1
                },
                qe = function (e, t, a, i) {
                    return i === n.currItem.initialZoomLevel ? (a[e] = n.currItem.initialPosition[e], !0) : (a[e] = Le(e, i), a[e] > t.min[e] ? (a[e] = t.min[e], !0) : a[e] < t.max[e] && (a[e] = t.max[e], !0))
                },
                Ze = function () {
                    if (I) {
                        var t = N.perspective && !E;
                        return y = "translate" + (t ? "3d(" : "("), void (b = N.perspective ? ", 0px)" : ")")
                    }
                    I = "left", o.addClass(e, "pswp--ie"), Ae = function (e, t) {
                        t.left = e + "px"
                    }, Me = function (e) {
                        var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                            a = e.container.style,
                            i = t * e.w,
                            o = t * e.h;
                        a.width = i + "px", a.height = o + "px", a.left = e.initialPosition.x + "px", a.top = e.initialPosition.y + "px"
                    }, Oe = function () {
                        if (ae) {
                            var e = ae,
                                t = n.currItem,
                                a = t.fitRatio > 1 ? 1 : t.fitRatio,
                                i = a * t.w,
                                o = a * t.h;
                            e.width = i + "px", e.height = o + "px", e.left = pe.x + "px", e.top = pe.y + "px"
                        }
                    }
                },
                We = function (e) {
                    var t = "";
                    r.escKey && 27 === e.keyCode ? t = "close" : r.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, n[t]()))
                },
                Ke = function (e) {
                    e && (K || W || ie || V) && (e.preventDefault(), e.stopPropagation())
                },
                Ge = function () {
                    n.setScrollOffset(0, o.getScrollY())
                },
                Je = {},
                Ye = 0,
                Xe = function (e) {
                    Je[e] && (Je[e].raf && M(Je[e].raf), Ye--, delete Je[e])
                },
                Qe = function (e) {
                    Je[e] && Xe(e), Je[e] || (Ye++, Je[e] = {})
                },
                et = function () {
                    for (var e in Je) Je.hasOwnProperty(e) && Xe(e)
                },
                tt = function (e, t, a, i, o, n, r) {
                    var s, c = Ie();
                    Qe(e);
                    var l = function () {
                        if (Je[e]) {
                            if ((s = Ie() - c) >= i) return Xe(e), n(a), void (r && r());
                            n((a - t) * o(s / i) + t), Je[e].raf = O(l)
                        }
                    };
                    l()
                },
                at = {
                    shout: Se,
                    listen: Pe,
                    viewportSize: he,
                    options: r,
                    isMainScrollAnimating: function () {
                        return ie
                    },
                    getZoomLevel: function () {
                        return v
                    },
                    getCurrentIndex: function () {
                        return d
                    },
                    isDragging: function () {
                        return q
                    },
                    isZooming: function () {
                        return X
                    },
                    setScrollOffset: function (e, t) {
                        ve.x = e, D = ve.y = t, Se("updateScrollOffset", ve)
                    },
                    applyZoomPan: function (e, t, a, i) {
                        pe.x = t, pe.y = a, v = e, Oe(i)
                    },
                    init: function () {
                        if (!s && !c) {
                            var a;
                            n.framework = o, n.template = e, n.bg = o.getChildByClass(e, "pswp__bg"), A = e.className, s = !0, N = o.detectFeatures(), O = N.raf, M = N.caf, I = N.transform, L = N.oldIE, n.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"), n.container = o.getChildByClass(n.scrollWrap, "pswp__container"), u = n.container.style, n.itemHolders = x = [
                                {
                                    el: n.container.children[0],
                                    wrap: 0,
                                    index: -1
                                }, {
                                    el: n.container.children[1],
                                    wrap: 0,
                                    index: -1
                                }, {
                                    el: n.container.children[2],
                                    wrap: 0,
                                    index: -1
                                }], x[0].el.style.display = x[2].el.style.display = "none", Ze(), m = {
                                resize: n.updateSize,
                                orientationchange: function () {
                                    clearTimeout(R), R = setTimeout(function () {
                                        he.x !== n.scrollWrap.clientWidth && n.updateSize()
                                    }, 500)
                                },
                                scroll: Ge,
                                keydown: We,
                                click: Ke
                            };
                            var i = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
                            for (N.animationName && N.transform && !i || (r.showAnimationDuration = r.hideAnimationDuration = 0), a = 0; a < we.length; a++) n["init" + we[a]]();
                            if (t) {
                                (n.ui = new t(n, o)).init()
                            }
                            Se("firstUpdate"), d = d || r.index || 0, (isNaN(d) || d < 0 || d >= Jt()) && (d = 0), n.currItem = Gt(d), (N.isOldIOSPhone || N.isOldAndroid) && (be = !1), e.setAttribute("aria-hidden", "false"), r.modal && (be ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), void 0 === D && (Se("initialLayout"), D = F = o.getScrollY());
                            var l = "pswp--open ";
                            for (r.mainClass && (l += r.mainClass + " "), r.showHideOpacity && (l += "pswp--animate_opacity "), l += E ? "pswp--touch" : "pswp--notouch", l += N.animationName ? " pswp--css_animation" : "", l += N.svg ? " pswp--svg" : "", o.addClass(e, l), n.updateSize(), f = -1, ye = null, a = 0; a < 3; a++) Ae((a + f) * ge.x, x[a].el.style);
                            L || o.bind(n.scrollWrap, h, n), Pe("initialZoomInEnd", function () {
                                n.setContent(x[0], d - 1), n.setContent(x[2], d + 1), x[0].el.style.display = x[2].el.style.display = "block", r.focus && e.focus(), je()
                            }), n.setContent(x[1], d), n.updateCurrItem(), Se("afterInit"), be || (w = setInterval(function () {
                                Ye || q || X || v !== n.currItem.initialZoomLevel || n.updateSize()
                            }, 1e3)), o.addClass(e, "pswp--visible")
                        }
                    },
                    close: function () {
                        s && (s = !1, c = !0, Se("close"), He(), Xt(n.currItem, null, !0, n.destroy))
                    },
                    destroy: function () {
                        Se("destroy"), qt && clearTimeout(qt), e.setAttribute("aria-hidden", "true"), e.className = A, w && clearInterval(w), o.unbind(n.scrollWrap, h, n), o.unbind(window, "scroll", n), $t(), et(), ke = null
                    },
                    panTo: function (e, t, a) {
                        a || (e > te.min.x ? e = te.min.x : e < te.max.x && (e = te.max.x), t > te.min.y ? t = te.min.y : t < te.max.y && (t = te.max.y)), pe.x = e, pe.y = t, Oe()
                    },
                    handleEvent: function (e) {
                        e = e || window.event, m[e.type] && m[e.type](e)
                    },
                    goTo: function (e) {
                        e = _e(e);
                        var t = e - d;
                        ye = t, d = e, n.currItem = Gt(d), me -= t, Fe(ge.x * me), et(), ie = !1, n.updateCurrItem()
                    },
                    next: function () {
                        n.goTo(d + 1)
                    },
                    prev: function () {
                        n.goTo(d - 1)
                    },
                    updateCurrZoomItem: function (e) {
                        if (e && Se("beforeChange", 0), x[1].el.children.length) {
                            var t = x[1].el.children[0];
                            ae = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                        } else ae = null;
                        te = n.currItem.bounds, g = v = n.currItem.initialZoomLevel, pe.x = te.center.x, pe.y = te.center.y, e && Se("afterChange")
                    },
                    invalidateCurrItems: function () {
                        $ = !0;
                        for (var e = 0; e < 3; e++) x[e].item && (x[e].item.needsUpdate = !0)
                    },
                    updateCurrItem: function (e) {
                        if (0 !== ye) {
                            var t, a = Math.abs(ye);
                            if (!(e && a < 2)) {
                                n.currItem = Gt(d), xe = !1, Se("beforeChange", ye), a >= 3 && (f += ye + (ye > 0 ? -3 : 3), a = 3);
                                for (var i = 0; i < a; i++) ye > 0 ? (t = x.shift(), x[2] = t, f++, Ae((f + 2) * ge.x, t.el.style), n.setContent(t, d - a + i + 1 + 1)) : (t = x.pop(), x.unshift(t), f--, Ae(f * ge.x, t.el.style), n.setContent(t, d + a - i - 1 - 1));
                                if (ae && 1 === Math.abs(ye)) {
                                    var o = Gt(C);
                                    o.initialZoomLevel !== v && (oa(o, he), ca(o), Me(o))
                                }
                                ye = 0, n.updateCurrZoomItem(), C = d, Se("afterChange")
                            }
                        }
                    },
                    updateSize: function (t) {
                        if (!be && r.modal) {
                            var a = o.getScrollY();
                            if (D !== a && (e.style.top = a + "px", D = a), !t && $e.x === window.innerWidth && $e.y === window.innerHeight) return;
                            $e.x = window.innerWidth, $e.y = window.innerHeight, e.style.height = $e.y + "px"
                        }
                        if (he.x = n.scrollWrap.clientWidth, he.y = n.scrollWrap.clientHeight, Ge(), ge.x = he.x + Math.round(he.x * r.spacing), ge.y = he.y, Fe(ge.x * me), Se("beforeResize"), void 0 !== f) {
                            for (var i, s, c, l = 0; l < 3; l++) i = x[l], Ae((l + f) * ge.x, i.el.style), c = d + l - 1, r.loop && Jt() > 2 && (c = _e(c)), s = Gt(c), s && ($ || s.needsUpdate || !s.bounds) ? (n.cleanSlide(s), n.setContent(i, c), 1 === l && (n.currItem = s, n.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === i.index && c >= 0 && n.setContent(i, c), s && s.container && (oa(s, he), ca(s), Me(s));
                            $ = !1
                        }
                        g = v = n.currItem.initialZoomLevel, te = n.currItem.bounds, te && (pe.x = te.center.x, pe.y = te.center.y, Oe(!0)), Se("resize")
                    },
                    zoomTo: function (e, t, a, i, n) {
                        t && (g = v, vt.x = Math.abs(t.x) - pe.x, vt.y = Math.abs(t.y) - pe.y, De(fe, pe));
                        var r = Be(e, !1),
                            s = {};
                        qe("x", r, s, e), qe("y", r, s, e);
                        var c = v,
                            l = {
                                x: pe.x,
                                y: pe.y
                            };
                        Ne(s);
                        var d = function (t) {
                            1 === t ? (v = e, pe.x = s.x, pe.y = s.y) : (v = (e - c) * t + c, pe.x = (s.x - l.x) * t + l.x, pe.y = (s.y - l.y) * t + l.y), n && n(t), Oe(1 === t)
                        };
                        a ? tt("customZoomTo", 0, 1, a, i || o.easing.sine.inOut, d) : d(1)
                    }
                },
                it = {},
                ot = {},
                nt = {},
                rt = {},
                st = {},
                ct = [],
                lt = {},
                dt = [],
                ut = {},
                ft = 0,
                pt = de(),
                ht = 0,
                mt = de(),
                vt = de(),
                gt = de(),
                yt = function (e, t) {
                    return e.x === t.x && e.y === t.y
                },
                bt = function (e, t) {
                    return Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25
                },
                wt = function (e, t) {
                    return ut.x = Math.abs(e.x - t.x), ut.y = Math.abs(e.y - t.y), Math.sqrt(ut.x * ut.x + ut.y * ut.y)
                },
                $t = function () {
                    G && (M(G), G = null)
                },
                xt = function () {
                    q && (G = O(xt), Rt())
                },
                Ct = function () {
                    return !("fit" === r.scaleMode && v === n.currItem.initialZoomLevel)
                },
                _t = function (e, t) {
                    return !(!e || e === document) && (!(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : _t(e.parentNode, t)))
                },
                kt = {},
                Pt = function (e, t) {
                    return kt.prevent = !_t(e.target, r.isClickableElement), Se("preventDragEvent", e, t, kt), kt.prevent
                },
                St = function (e, t) {
                    return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
                },
                It = function (e, t, a) {
                    a.x = .5 * (e.x + t.x), a.y = .5 * (e.y + t.y)
                },
                Tt = function (e, t, a) {
                    if (e - j > 50) {
                        var i = dt.length > 2 ? dt.shift() : {};
                        i.x = t, i.y = a, dt.push(i), j = e
                    }
                },
                Et = function () {
                    var e = pe.y - n.currItem.initialPosition.y;
                    return 1 - Math.abs(e / (he.y / 2))
                },
                Ot = {},
                Mt = {},
                At = [],
                Ft = function (e) {
                    for (; At.length > 0;) At.pop();
                    return T ? (le = 0, ct.forEach(function (e) {
                        0 === le ? At[0] = e : 1 === le && (At[1] = e), le++
                    })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (At[0] = St(e.touches[0], Ot), e.touches.length > 1 && (At[1] = St(e.touches[1], Mt))) : (Ot.x = e.pageX, Ot.y = e.pageY, Ot.id = "", At[0] = Ot), At
                },
                Lt = function (e, t) {
                    var a, i, o, s, c = pe[e] + t[e],
                        l = t[e] > 0,
                        d = mt.x + t.x,
                        u = mt.x - lt.x;
                    if (a = c > te.min[e] || c < te.max[e] ? r.panEndFriction : 1, c = pe[e] + t[e] * a, (r.allowPanToNext || v === n.currItem.initialZoomLevel) && (ae ? "h" !== oe || "x" !== e || W || (l ? (c > te.min[e] && (a = r.panEndFriction, te.min[e] - c, i = te.min[e] - fe[e]), (i <= 0 || u < 0) && Jt() > 1 ? (s = d, u < 0 && d > lt.x && (s = lt.x)) : te.min.x !== te.max.x && (o = c)) : (c < te.max[e] && (a = r.panEndFriction, c - te.max[e], i = fe[e] - te.max[e]), (i <= 0 || u > 0) && Jt() > 1 ? (s = d, u > 0 && d < lt.x && (s = lt.x)) : te.min.x !== te.max.x && (o = c))) : s = d, "x" === e)) return void 0 !== s && (Fe(s, !0), J = s !== lt.x), te.min.x !== te.max.x && (void 0 !== o ? pe.x = o : J || (pe.x += t.x * a)), void 0 !== s;
                    ie || J || v > n.currItem.fitRatio && (pe[e] += t[e] * a)
                },
                Dt = function (e) {
                    if (!("mousedown" === e.type && e.button > 0)) {
                        if (Kt) return void e.preventDefault();
                        if (!U || "mousedown" !== e.type) {
                            if (Pt(e, !0) && e.preventDefault(), Se("pointerDown"), T) {
                                var t = o.arraySearch(ct, e.pointerId, "id");
                                t < 0 && (t = ct.length), ct[t] = {
                                    x: e.pageX,
                                    y: e.pageY,
                                    id: e.pointerId
                                }
                            }
                            var a = Ft(e),
                                i = a.length;
                            Y = null, et(), q && 1 !== i || (q = ne = !0, o.bind(window, p, n), B = ce = re = V = J = K = Z = W = !1, oe = null, Se("firstTouchStart", a), De(fe, pe), ue.x = ue.y = 0, De(rt, a[0]), De(st, rt), lt.x = ge.x * me, dt = [
                                {
                                    x: rt.x,
                                    y: rt.y
                                }], j = z = Ie(), Be(v, !0), $t(), xt()), !X && i > 1 && !ie && !J && (g = v, W = !1, X = Z = !0, ue.y = ue.x = 0, De(fe, pe), De(it, a[0]), De(ot, a[1]), It(it, ot, gt), vt.x = Math.abs(gt.x) - pe.x, vt.y = Math.abs(gt.y) - pe.y, Q = ee = wt(it, ot))
                        }
                    }
                },
                Nt = function (e) {
                    if (e.preventDefault(), T) {
                        var t = o.arraySearch(ct, e.pointerId, "id");
                        if (t > -1) {
                            var a = ct[t];
                            a.x = e.pageX, a.y = e.pageY
                        }
                    }
                    if (q) {
                        var i = Ft(e);
                        if (oe || K || X) Y = i;
                        else if (mt.x !== ge.x * me) oe = "h";
                        else {
                            var n = Math.abs(i[0].x - rt.x) - Math.abs(i[0].y - rt.y);
                            Math.abs(n) >= 10 && (oe = n > 0 ? "h" : "v", Y = i)
                        }
                    }
                },
                Rt = function () {
                    if (Y) {
                        var e = Y.length;
                        if (0 !== e)
                            if (De(it, Y[0]), nt.x = it.x - rt.x, nt.y = it.y - rt.y, X && e > 1) {
                                if (rt.x = it.x, rt.y = it.y, !nt.x && !nt.y && yt(Y[1], ot)) return;
                                De(ot, Y[1]), W || (W = !0, Se("zoomGestureStarted"));
                                var t = wt(it, ot),
                                    a = Vt(t);
                                a > n.currItem.initialZoomLevel + n.currItem.initialZoomLevel / 15 && (ce = !0);
                                var i = 1,
                                    o = Ve(),
                                    s = Ue();
                                if (a < o)
                                    if (r.pinchToClose && !ce && g <= n.currItem.initialZoomLevel) {
                                        var c = o - a,
                                            l = 1 - c / (o / 1.2);
                                        Te(l), Se("onPinchClose", l), re = !0
                                    } else i = (o - a) / o, i > 1 && (i = 1), a = o - i * (o / 3);
                                else a > s && (i = (a - s) / (6 * o), i > 1 && (i = 1), a = s + i * o);
                                i < 0 && (i = 0), Q = t, It(it, ot, pt), ue.x += pt.x - gt.x, ue.y += pt.y - gt.y, De(gt, pt), pe.x = Le("x", a), pe.y = Le("y", a), B = a > v, v = a, Oe()
                            } else {
                                if (!oe) return;
                                if (ne && (ne = !1, Math.abs(nt.x) >= 10 && (nt.x -= Y[0].x - st.x), Math.abs(nt.y) >= 10 && (nt.y -= Y[0].y - st.y)), rt.x = it.x, rt.y = it.y, 0 === nt.x && 0 === nt.y) return;
                                if ("v" === oe && r.closeOnVerticalDrag && !Ct()) {
                                    ue.y += nt.y, pe.y += nt.y;
                                    var d = Et();
                                    return V = !0, Se("onVerticalDrag", d), Te(d), void Oe()
                                }
                                Tt(Ie(), it.x, it.y), K = !0, te = n.currItem.bounds;
                                var u = Lt("x", nt);
                                u || (Lt("y", nt), Ne(pe), Oe())
                            }
                    }
                },
                zt = function (e) {
                    if (N.isOldAndroid) {
                        if (U && "mouseup" === e.type) return;
                        e.type.indexOf("touch") > -1 && (clearTimeout(U), U = setTimeout(function () {
                            U = 0
                        }, 600))
                    }
                    Se("pointerUp"), Pt(e, !1) && e.preventDefault();
                    var t;
                    if (T) {
                        var a = o.arraySearch(ct, e.pointerId, "id");
                        if (a > -1)
                            if (t = ct.splice(a, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse";
                            else {
                                var i = {
                                    4: "mouse",
                                    2: "touch",
                                    3: "pen"
                                };
                                t.type = i[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
                            }
                    }
                    var s, c = Ft(e),
                        l = c.length;
                    if ("mouseup" === e.type && (l = 0), 2 === l) return Y = null, !0;
                    1 === l && De(st, c[0]), 0 !== l || oe || ie || (t || ("mouseup" === e.type ? t = {
                        x: e.pageX,
                        y: e.pageY,
                        type: "mouse"
                    } : e.changedTouches && e.changedTouches[0] && (t = {
                        x: e.changedTouches[0].pageX,
                        y: e.changedTouches[0].pageY,
                        type: "touch"
                    })), Se("touchRelease", e, t));
                    var d = -1;
                    if (0 === l && (q = !1, o.unbind(window, p, n), $t(), X ? d = 0 : -1 !== ht && (d = Ie() - ht)), ht = 1 === l ? Ie() : -1, s = -1 !== d && d < 150 ? "zoom" : "swipe", X && l < 2 && (X = !1, 1 === l && (s = "zoomPointerUp"), Se("zoomGestureEnded")), Y = null, K || W || ie || V)
                        if (et(), H || (H = jt()), H.calculateSwipeSpeed("x"), V) {
                            var u = Et();
                            if (u < r.verticalDragRange) n.close();
                            else {
                                var f = pe.y,
                                    h = se;
                                tt("verticalDrag", 0, 1, 300, o.easing.cubic.out, function (e) {
                                    pe.y = (n.currItem.initialPosition.y - f) * e + f, Te((1 - h) * e + h), Oe()
                                }), Se("onVerticalDrag", 1)
                            }
                        } else {
                            if ((J || ie) && 0 === l) {
                                var m = Bt(s, H);
                                if (m) return;
                                s = "zoomPointerUp"
                            }
                            if (!ie) return "swipe" !== s ? void Ut() : void (!J && v > n.currItem.fitRatio && Ht(H))
                        }
                },
                jt = function () {
                    var e, t, a = {
                        lastFlickOffset: {},
                        lastFlickDist: {},
                        lastFlickSpeed: {},
                        slowDownRatio: {},
                        slowDownRatioReverse: {},
                        speedDecelerationRatio: {},
                        speedDecelerationRatioAbs: {},
                        distanceOffset: {},
                        backAnimDestination: {},
                        backAnimStarted: {},
                        calculateSwipeSpeed: function (i) {
                            dt.length > 1 ? (e = Ie() - j + 50, t = dt[dt.length - 2][i]) : (e = Ie() - z, t = st[i]), a.lastFlickOffset[i] = rt[i] - t, a.lastFlickDist[i] = Math.abs(a.lastFlickOffset[i]), a.lastFlickDist[i] > 20 ? a.lastFlickSpeed[i] = a.lastFlickOffset[i] / e : a.lastFlickSpeed[i] = 0, Math.abs(a.lastFlickSpeed[i]) < .1 && (a.lastFlickSpeed[i] = 0), a.slowDownRatio[i] = .95, a.slowDownRatioReverse[i] = 1 - a.slowDownRatio[i], a.speedDecelerationRatio[i] = 1
                        },
                        calculateOverBoundsAnimOffset: function (e, t) {
                            a.backAnimStarted[e] || (pe[e] > te.min[e] ? a.backAnimDestination[e] = te.min[e] : pe[e] < te.max[e] && (a.backAnimDestination[e] = te.max[e]), void 0 !== a.backAnimDestination[e] && (a.slowDownRatio[e] = .7, a.slowDownRatioReverse[e] = 1 - a.slowDownRatio[e], a.speedDecelerationRatioAbs[e] < .05 && (a.lastFlickSpeed[e] = 0, a.backAnimStarted[e] = !0, tt("bounceZoomPan" + e, pe[e], a.backAnimDestination[e], t || 300, o.easing.sine.out, function (t) {
                                pe[e] = t, Oe()
                            }))))
                        },
                        calculateAnimOffset: function (e) {
                            a.backAnimStarted[e] || (a.speedDecelerationRatio[e] = a.speedDecelerationRatio[e] * (a.slowDownRatio[e] + a.slowDownRatioReverse[e] - a.slowDownRatioReverse[e] * a.timeDiff / 10), a.speedDecelerationRatioAbs[e] = Math.abs(a.lastFlickSpeed[e] * a.speedDecelerationRatio[e]), a.distanceOffset[e] = a.lastFlickSpeed[e] * a.speedDecelerationRatio[e] * a.timeDiff, pe[e] += a.distanceOffset[e])
                        },
                        panAnimLoop: function () {
                            if (Je.zoomPan && (Je.zoomPan.raf = O(a.panAnimLoop), a.now = Ie(), a.timeDiff = a.now - a.lastNow, a.lastNow = a.now, a.calculateAnimOffset("x"), a.calculateAnimOffset("y"), Oe(), a.calculateOverBoundsAnimOffset("x"), a.calculateOverBoundsAnimOffset("y"), a.speedDecelerationRatioAbs.x < .05 && a.speedDecelerationRatioAbs.y < .05)) return pe.x = Math.round(pe.x), pe.y = Math.round(pe.y), Oe(), void Xe("zoomPan")
                        }
                    };
                    return a
                },
                Ht = function (e) {
                    if (e.calculateSwipeSpeed("y"), te = n.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05) return e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0;
                    Qe("zoomPan"), e.lastNow = Ie(), e.panAnimLoop()
                },
                Bt = function (e, t) {
                    var a;
                    ie || (ft = d);
                    var i;
                    if ("swipe" === e) {
                        var s = rt.x - st.x,
                            c = t.lastFlickDist.x < 10;
                        s > 30 && (c || t.lastFlickOffset.x > 20) ? i = -1 : s < -30 && (c || t.lastFlickOffset.x < -20) && (i = 1)
                    }
                    var l;
                    i && (d += i, d < 0 ? (d = r.loop ? Jt() - 1 : 0, l = !0) : d >= Jt() && (d = r.loop ? 0 : Jt() - 1, l = !0), l && !r.loop || (ye += i, me -= i, a = !0));
                    var u, f = ge.x * me,
                        p = Math.abs(f - mt.x);
                    return a || f > mt.x == t.lastFlickSpeed.x > 0 ? (u = Math.abs(t.lastFlickSpeed.x) > 0 ? p / Math.abs(t.lastFlickSpeed.x) : 333, u = Math.min(u, 400), u = Math.max(u, 250)) : u = 333, ft === d && (a = !1), ie = !0, Se("mainScrollAnimStart"), tt("mainScroll", mt.x, f, u, o.easing.cubic.out, Fe, function () {
                        et(), ie = !1, ft = -1, (a || ft !== d) && n.updateCurrItem(), Se("mainScrollAnimComplete")
                    }), a && n.updateCurrItem(!0), a
                },
                Vt = function (e) {
                    return 1 / ee * e * g
                },
                Ut = function () {
                    var e = v,
                        t = Ve(),
                        a = Ue();
                    v < t ? e = t : v > a && (e = a);
                    var i, r = se;
                    return re && !B && !ce && v < t ? (n.close(), !0) : (re && (i = function (e) {
                        Te((1 - r) * e + r)
                    }), n.zoomTo(e, 0, 200, o.easing.cubic.out, i), !0)
                };
            Ce("Gestures", {
                publicMethods: {
                    initGestures: function () {
                        var e = function (e, t, a, i, o) {
                            _ = e + t, k = e + a, P = e + i, S = o ? e + o : ""
                        };
                        T = N.pointerEvent, T && N.touch && (N.touch = !1), T ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : N.touch ? (e("touch", "start", "move", "end", "cancel"), E = !0) : e("mouse", "down", "move", "up"), p = k + " " + P + " " + S, h = _, T && !E && (E = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), n.likelyTouchDevice = E, m[_] = Dt, m[k] = Nt, m[P] = zt, S && (m[S] = m[P]), N.touch && (h += " mousedown", p += " mousemove mouseup", m.mousedown = m[_], m.mousemove = m[k], m.mouseup = m[P]), E || (r.allowPanToNext = !1)
                    }
                }
            });
            var qt, Zt, Wt, Kt, Gt, Jt, Yt, Xt = function (t, a, i, s) {
                    qt && clearTimeout(qt), Kt = !0, Wt = !0;
                    var c;
                    t.initialLayout ? (c = t.initialLayout, t.initialLayout = null) : c = r.getThumbBoundsFn && r.getThumbBoundsFn(d);
                    var u = i ? r.hideAnimationDuration : r.showAnimationDuration,
                        f = function () {
                            Xe("initialZoom"), i ? (n.template.removeAttribute("style"), n.bg.removeAttribute("style")) : (Te(1), a && (a.style.display = "block"), o.addClass(e, "pswp--animated-in"), Se("initialZoom" + (i ? "OutEnd" : "InEnd"))), s && s(), Kt = !1
                        };
                    if (!u || !c || void 0 === c.x) return Se("initialZoom" + (i ? "Out" : "In")), v = t.initialZoomLevel, De(pe, t.initialPosition), Oe(), e.style.opacity = i ? 0 : 1, Te(1), void (u ? setTimeout(function () {
                        f()
                    }, u) : f());
                    !function () {
                        var a = l,
                            s = !n.currItem.src || n.currItem.loadError || r.showHideOpacity;
                        t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (v = c.w / t.w, pe.x = c.x, pe.y = c.y - F, n[s ? "template" : "bg"].style.opacity = .001, Oe()), Qe("initialZoom"), i && !a && o.removeClass(e, "pswp--animated-in"), s && (i ? o[(a ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function () {
                            o.addClass(e, "pswp--animate_opacity")
                        }, 30)), qt = setTimeout(function () {
                            if (Se("initialZoom" + (i ? "Out" : "In")), i) {
                                var n = c.w / t.w,
                                    r = {
                                        x: pe.x,
                                        y: pe.y
                                    },
                                    l = v,
                                    d = se,
                                    p = function (t) {
                                        1 === t ? (v = n, pe.x = c.x, pe.y = c.y - D) : (v = (n - l) * t + l, pe.x = (c.x - r.x) * t + r.x, pe.y = (c.y - D - r.y) * t + r.y), Oe(), s ? e.style.opacity = 1 - t : Te(d - t * d)
                                    };
                                a ? tt("initialZoom", 0, 1, u, o.easing.cubic.out, p, f) : (p(1), qt = setTimeout(f, u + 20))
                            } else v = t.initialZoomLevel, De(pe, t.initialPosition), Oe(), Te(1), s ? e.style.opacity = 1 : Te(1), qt = setTimeout(f, u + 20)
                        }, i ? 25 : 90)
                    }()
                },
                Qt = {},
                ea = [],
                ta = {
                    index: 0,
                    errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                    forceProgressiveLoading: !1,
                    preload: [1, 1],
                    getNumItemsFn: function () {
                        return Zt.length
                    }
                },
                aa = function () {
                    return {
                        center: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        },
                        min: {
                            x: 0,
                            y: 0
                        }
                    }
                },
                ia = function (e, t, a) {
                    var i = e.bounds;
                    i.center.x = Math.round((Qt.x - t) / 2), i.center.y = Math.round((Qt.y - a) / 2) + e.vGap.top, i.max.x = t > Qt.x ? Math.round(Qt.x - t) : i.center.x, i.max.y = a > Qt.y ? Math.round(Qt.y - a) + e.vGap.top : i.center.y, i.min.x = t > Qt.x ? 0 : i.center.x, i.min.y = a > Qt.y ? e.vGap.top : i.center.y
                },
                oa = function (e, t, a) {
                    if (e.src && !e.loadError) {
                        var i = !a;
                        if (i && (e.vGap || (e.vGap = {
                            top: 0,
                            bottom: 0
                        }), Se("parseVerticalMargin", e)), Qt.x = t.x, Qt.y = t.y - e.vGap.top - e.vGap.bottom, i) {
                            var o = Qt.x / e.w,
                                n = Qt.y / e.h;
                            e.fitRatio = o < n ? o : n;
                            var s = r.scaleMode;
                            "orig" === s ? a = 1 : "fit" === s && (a = e.fitRatio), a > 1 && (a = 1), e.initialZoomLevel = a, e.bounds || (e.bounds = aa())
                        }
                        if (!a) return;
                        return ia(e, e.w * a, e.h * a), i && a === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
                    }
                    return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = aa(), e.initialPosition = e.bounds.center, e.bounds
                },
                na = function (e, t, a, i, o, r) {
                    t.loadError || i && (t.imageAppended = !0, ca(t, i, t === n.currItem && xe), a.appendChild(i), r && setTimeout(function () {
                        t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
                    }, 500))
                },
                ra = function (e) {
                    e.loading = !0, e.loaded = !1;
                    var t = e.img = o.createEl("pswp__img", "img"),
                        a = function () {
                            e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
                        };
                    return t.onload = a, t.onerror = function () {
                        e.loadError = !0, a()
                    }, t.src = e.src, t
                },
                sa = function (e, t) {
                    if (e.src && e.loadError && e.container) return t && (e.container.innerHTML = ""), e.container.innerHTML = r.errorMsg.replace("%url%", e.src), !0
                },
                ca = function (e, t, a) {
                    if (e.src) {
                        t || (t = e.container.lastChild);
                        var i = a ? e.w : Math.round(e.w * e.fitRatio),
                            o = a ? e.h : Math.round(e.h * e.fitRatio),
                            n = i / o;
                        i = 10 * Math.floor(i / 10), o = 10 * Math.floor(i / n / 10), !e.placeholder && (e.placeholder = e.container.firstChild), !e.placeholder && (e.placeholder = document.querySelector("div.pswp__img--placeholder")), e.placeholder && (e.placeholder.style.width = i + "px", e.placeholder.style.height = o + "px"), t.style.width = i + "px", t.style.height = o + "px"
                    }
                },
                la = function () {
                    if (ea.length) {
                        for (var e, t = 0; t < ea.length; t++) e = ea[t], e.holder.index === e.index && na(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
                        ea = []
                    }
                };
            Ce("Controller", {
                publicMethods: {
                    lazyLoadItem: function (e) {
                        e = _e(e);
                        var t = Gt(e);
                        t && (!t.loaded && !t.loading || $) && (Se("gettingData", e, t), t.src && ra(t))
                    },
                    initController: function () {
                        o.extend(r, ta, !0), n.items = Zt = a, Gt = n.getItemAt, Jt = r.getNumItemsFn, Yt = r.loop, Jt() < 3 && (r.loop = !1), Pe("beforeChange", function (e) {
                            var t, a = r.preload,
                                i = null === e || e >= 0,
                                o = Math.min(a[0], Jt()),
                                s = Math.min(a[1], Jt());
                            for (t = 1; t <= (i ? s : o); t++) n.lazyLoadItem(d + t);
                            for (t = 1; t <= (i ? o : s); t++) n.lazyLoadItem(d - t)
                        }), Pe("initialLayout", function () {
                            n.currItem.initialLayout = r.getThumbBoundsFn && r.getThumbBoundsFn(d)
                        }), Pe("mainScrollAnimComplete", la), Pe("initialZoomInEnd", la), Pe("destroy", function () {
                            for (var e, t = 0; t < Zt.length; t++) e = Zt[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                            ea = null
                        })
                    },
                    getItemAt: function (e) {
                        return e >= 0 && (void 0 !== Zt[e] && Zt[e])
                    },
                    allowProgressiveImg: function () {
                        return r.forceProgressiveLoading || !E || r.mouseUsed || screen.width > 1200
                    },
                    setContent: function (e, t) {
                        r.loop && (t = _e(t));
                        var a = n.getItemAt(e.index);
                        a && (a.container = null);
                        var i, c = n.getItemAt(t);
                        if (!c) return void (e.el.innerHTML = "");
                        Se("gettingData", t, c), e.index = t, e.item = c;
                        var l = c.container = o.createEl("pswp__zoom-wrap");
                        if (!c.src && c.html && (c.html.tagName ? l.appendChild(c.html) : l.innerHTML = c.html), sa(c), oa(c, he), !c.src || c.loadError || c.loaded) c.src && !c.loadError && (i = o.createEl("pswp__img", "img"), i.style.opacity = 1, i.src = c.src, ca(c, i), na(0, c, l, i));
                        else {
                            if (c.loadComplete = function (a) {
                                if (s) {
                                    if (e && e.index === t) {
                                        if (sa(a, !0)) return a.loadComplete = a.img = null, oa(a, he), Me(a), void (e.index === d && n.updateCurrZoomItem());
                                        a.imageAppended ? !Kt && a.placeholder && (a.placeholder.style.display = "none", a.placeholder = null) : N.transform && (ie || Kt) ? ea.push({
                                            item: a,
                                            baseDiv: l,
                                            img: a.img,
                                            index: t,
                                            holder: e,
                                            clearPlaceholder: !0
                                        }) : na(0, a, l, a.img, 0, !0)
                                    }
                                    a.loadComplete = null, a.img = null, Se("imageLoadComplete", t, a)
                                }
                            }, o.features.transform) {
                                var u = "pswp__img pswp__img--placeholder";
                                u += c.msrc ? "" : " pswp__img--placeholder--blank";
                                var f = o.createEl(u, c.msrc ? "img" : "");
                                c.msrc && (f.src = c.msrc), ca(c, f), l.appendChild(f), c.placeholder = f
                            }
                            c.loading || ra(c), n.allowProgressiveImg() && (!Wt && N.transform ? ea.push({
                                item: c,
                                baseDiv: l,
                                img: c.img,
                                index: t,
                                holder: e
                            }) : na(0, c, l, c.img, 0, !0))
                        }
                        Wt || t !== d ? Me(c) : (ae = l.style, Xt(c, i || c.img)), e.el.innerHTML = "", e.el.appendChild(l)
                    },
                    cleanSlide: function (e) {
                        e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                    }
                }
            });
            var da, ua = {},
                fa = function (e, t, a) {
                    var i = document.createEvent("CustomEvent"),
                        o = {
                            origEvent: e,
                            target: e.target,
                            releasePoint: t,
                            pointerType: a || "touch"
                        };
                    i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i)
                };
            Ce("Tap", {
                publicMethods: {
                    initTap: function () {
                        Pe("firstTouchStart", n.onTapStart), Pe("touchRelease", n.onTapRelease), Pe("destroy", function () {
                            ua = {}, da = null
                        })
                    },
                    onTapStart: function (e) {
                        e.length > 1 && (clearTimeout(da), da = null)
                    },
                    onTapRelease: function (e, t) {
                        if (t && !K && !Z && !Ye) {
                            var a = t;
                            if (da && (clearTimeout(da), da = null, bt(a, ua))) return void Se("doubleTap", a);
                            if ("mouse" === t.type) return void fa(e, t, "mouse");
                            if ("BUTTON" === e.target.tagName.toUpperCase() || o.hasClass(e.target, "pswp__single-tap")) return void fa(e, t);
                            De(ua, a), da = setTimeout(function () {
                                fa(e, t), da = null
                            }, 300)
                        }
                    }
                }
            });
            var pa;
            Ce("DesktopZoom", {
                publicMethods: {
                    initDesktopZoom: function () {
                        L || (E ? Pe("mouseUsed", function () {
                            n.setupDesktopZoom()
                        }) : n.setupDesktopZoom(!0))
                    },
                    setupDesktopZoom: function (t) {
                        pa = {};
                        var a = "wheel mousewheel DOMMouseScroll";
                        Pe("bindEvents", function () {
                            o.bind(e, a, n.handleMouseWheel)
                        }), Pe("unbindEvents", function () {
                            pa && o.unbind(e, a, n.handleMouseWheel)
                        }), n.mouseZoomedIn = !1;
                        var i, r = function () {
                                n.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), n.mouseZoomedIn = !1), v < 1 ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), s()
                            },
                            s = function () {
                                i && (o.removeClass(e, "pswp--dragging"), i = !1)
                            };
                        Pe("resize", r), Pe("afterChange", r), Pe("pointerDown", function () {
                            n.mouseZoomedIn && (i = !0, o.addClass(e, "pswp--dragging"))
                        }), Pe("pointerUp", s), t || r()
                    },
                    handleMouseWheel: function (e) {
                        if (v <= n.currItem.fitRatio) return r.modal && (!r.closeOnScroll || Ye || q ? e.preventDefault() : I && Math.abs(e.deltaY) > 2 && (l = !0, n.close())), !0;
                        if (e.stopPropagation(), pa.x = 0, "deltaX" in e) 1 === e.deltaMode ? (pa.x = 18 * e.deltaX, pa.y = 18 * e.deltaY) : (pa.x = e.deltaX, pa.y = e.deltaY);
                        else if ("wheelDelta" in e) e.wheelDeltaX && (pa.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? pa.y = -.16 * e.wheelDeltaY : pa.y = -.16 * e.wheelDelta;
                        else {
                            if (!("detail" in e)) return;
                            pa.y = e.detail
                        }
                        Be(v, !0);
                        var t = pe.x - pa.x,
                            a = pe.y - pa.y;
                        (r.modal || t <= te.min.x && t >= te.max.x && a <= te.min.y && a >= te.max.y) && e.preventDefault(), n.panTo(t, a)
                    },
                    toggleDesktopZoom: function (t) {
                        t = t || {
                            x: he.x / 2 + ve.x,
                            y: he.y / 2 + ve.y
                        };
                        var a = r.getDoubleTapZoom(!0, n.currItem),
                            i = v === a;
                        n.mouseZoomedIn = !i, n.zoomTo(i ? n.currItem.initialZoomLevel : a, t, 333), o[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                    }
                }
            });
            var ha, ma, va, ga, ya, ba, wa, $a, xa, Ca, _a, ka, Pa = {
                    history: !0,
                    galleryUID: 1
                },
                Sa = function () {
                    return _a.hash.substring(1)
                },
                Ia = function () {
                    ha && clearTimeout(ha), va && clearTimeout(va)
                },
                Ta = function () {
                    var e = Sa(),
                        t = {};
                    if (e.length < 5) return t;
                    var a, i = e.split("&");
                    for (a = 0; a < i.length; a++)
                        if (i[a]) {
                            var o = i[a].split("=");
                            o.length < 2 || (t[o[0]] = o[1])
                        }
                    if (r.galleryPIDs) {
                        var n = t.pid;
                        for (t.pid = 0, a = 0; a < Zt.length; a++)
                            if (Zt[a].pid === n) {
                                t.pid = a;
                                break
                            }
                    } else t.pid = parseInt(t.pid, 10) - 1;
                    return t.pid < 0 && (t.pid = 0), t
                },
                Ea = function () {
                    if (va && clearTimeout(va), Ye || q) return void (va = setTimeout(Ea, 500));
                    ga ? clearTimeout(ma) : ga = !0;
                    var e = d + 1,
                        t = Gt(d);
                    t.hasOwnProperty("pid") && (e = t.pid);
                    var a = wa + "&gid=" + r.galleryUID + "&pid=" + e;
                    $a || -1 === _a.hash.indexOf(a) && (Ca = !0);
                    var i = _a.href.split("#")[0] + "#" + a;
                    ka ? "#" + a !== window.location.hash && history[$a ? "replaceState" : "pushState"]("", document.title, i) : $a ? _a.replace(i) : _a.hash = a, $a = !0, ma = setTimeout(function () {
                        ga = !1
                    }, 60)
                };
            Ce("History", {
                publicMethods: {
                    initHistory: function () {
                        if (o.extend(r, Pa, !0), r.history) {
                            _a = window.location, Ca = !1, xa = !1, $a = !1, wa = Sa(), ka = "pushState" in history, wa.indexOf("gid=") > -1 && (wa = wa.split("&gid=")[0], wa = wa.split("?gid=")[0]), Pe("afterChange", n.updateURL), Pe("unbindEvents", function () {
                                o.unbind(window, "hashchange", n.onHashChange)
                            });
                            var e = function () {
                                ba = !0, xa || (Ca ? history.back() : wa ? _a.hash = wa : ka ? history.pushState("", document.title, _a.pathname + _a.search) : _a.hash = ""), Ia()
                            };
                            Pe("unbindEvents", function () {
                                l && e()
                            }), Pe("destroy", function () {
                                ba || e()
                            }), Pe("firstUpdate", function () {
                                d = Ta().pid
                            });
                            var t = wa.indexOf("pid=");
                            t > -1 && (wa = wa.substring(0, t), "&" === wa.slice(-1) && (wa = wa.slice(0, -1))), setTimeout(function () {
                                s && o.bind(window, "hashchange", n.onHashChange)
                            }, 40)
                        }
                    },
                    onHashChange: function () {
                        if (Sa() === wa) return xa = !0, void n.close();
                        ga || (ya = !0, n.goTo(Ta().pid), ya = !1)
                    },
                    updateURL: function () {
                        Ia(), ya || ($a ? ha = setTimeout(Ea, 800) : Ea())
                    }
                }
            }), o.extend(n, at)
        }
    }),
    function (e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
    }(this, function () {
        "use strict";
        return function (e, t) {
            var a, i, o, n, r, s, c, l, d, u, f, p, h, m, v, g, y, b, w, $ = this,
                x = !1,
                C = !0,
                _ = !0,
                k = {
                    barsSize: {
                        top: 44,
                        bottom: "auto"
                    },
                    closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                    timeToIdle: 4e3,
                    timeToIdleOutside: 1e3,
                    loadingIndicatorDelay: 1e3,
                    addCaptionHTMLFn: function (e, t) {
                        return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
                    },
                    closeEl: !0,
                    captionEl: !0,
                    fullscreenEl: !0,
                    zoomEl: !0,
                    shareEl: !0,
                    counterEl: !0,
                    arrowEl: !0,
                    preloaderEl: !0,
                    tapToClose: !1,
                    tapToToggleControls: !0,
                    clickToCloseNonZoomable: !0,
                    shareButtons: [
                        {
                            id: "facebook",
                            label: "Share on Facebook",
                            url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                        }, {
                            id: "twitter",
                            label: "Tweet",
                            url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                        }, {
                            id: "pinterest",
                            label: "Pin it",
                            url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                        }, {
                            id: "download",
                            label: "Download image",
                            url: "{{raw_image_url}}",
                            download: !0
                        }],
                    getImageURLForShare: function () {
                        return e.currItem.src || ""
                    },
                    getPageURLForShare: function () {
                        return window.location.href
                    },
                    getTextForShare: function () {
                        return e.currItem.title || ""
                    },
                    indexIndicatorSep: " / ",
                    fitControlsWidth: 1200
                },
                P = function (e) {
                    if (g) return !0;
                    e = e || window.event, v.timeToIdle && v.mouseUsed && !d && D();
                    for (var a, i, o = e.target || e.srcElement, n = o.getAttribute("class") || "", r = 0; r < U.length; r++) a = U[r], a.onTap && n.indexOf("pswp__" + a.name) > -1 && (a.onTap(), i = !0);
                    if (i) {
                        e.stopPropagation && e.stopPropagation(), g = !0;
                        var s = t.features.isOldAndroid ? 600 : 30;
                        y = setTimeout(function () {
                            g = !1
                        }, s)
                    }
                },
                S = function () {
                    return !e.likelyTouchDevice || v.mouseUsed || screen.width > v.fitControlsWidth
                },
                I = function (e, a, i) {
                    t[(i ? "add" : "remove") + "Class"](e, "pswp__" + a)
                },
                T = function () {
                    var e = 1 === v.getNumItemsFn();
                    e !== m && (I(i, "ui--one-slide", e), m = e)
                },
                E = function () {
                    I(c, "share-modal--hidden", _)
                },
                O = function () {
                    return _ = !_, _ ? (t.removeClass(c, "pswp__share-modal--fade-in"), setTimeout(function () {
                        _ && E()
                    }, 300)) : (E(), setTimeout(function () {
                        _ || t.addClass(c, "pswp__share-modal--fade-in")
                    }, 30)), _ || A(), !1
                },
                M = function (t) {
                    t = t || window.event;
                    var a = t.target || t.srcElement;
                    return e.shout("shareLinkClick", t, a), !!a.href && (!!a.hasAttribute("download") || (window.open(a.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), _ || O(), !1))
                },
                A = function () {
                    for (var e, t, a, i, o, n = "", r = 0; r < v.shareButtons.length; r++) e = v.shareButtons[r], a = v.getImageURLForShare(e), i = v.getPageURLForShare(e), o = v.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(a)).replace("{{raw_image_url}}", a).replace("{{text}}", encodeURIComponent(o)), n += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", v.parseShareButtonOut && (n = v.parseShareButtonOut(e, n));
                    c.children[0].innerHTML = n, c.children[0].onclick = M
                },
                F = function (e) {
                    for (var a = 0; a < v.closeElClasses.length; a++)
                        if (t.hasClass(e, "pswp__" + v.closeElClasses[a])) return !0
                },
                L = 0,
                D = function () {
                    clearTimeout(w), L = 0, d && $.setIdle(!1)
                },
                N = function (e) {
                    e = e || window.event;
                    var t = e.relatedTarget || e.toElement;
                    t && "HTML" !== t.nodeName || (clearTimeout(w), w = setTimeout(function () {
                        $.setIdle(!0)
                    }, v.timeToIdleOutside))
                },
                R = function () {
                    v.fullscreenEl && !t.features.isOldAndroid && (a || (a = $.getFullscreenAPI()), a ? (t.bind(document, a.eventK, $.updateFullscreen), $.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
                },
                z = function () {
                    v.preloaderEl && (j(!0), u("beforeChange", function () {
                        clearTimeout(h), h = setTimeout(function () {
                            e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && j(!1) : j(!0)
                        }, v.loadingIndicatorDelay)
                    }), u("imageLoadComplete", function (t, a) {
                        e.currItem === a && j(!0)
                    }))
                },
                j = function (e) {
                    p !== e && (I(f, "preloader--active", !e), p = e)
                },
                H = function (e) {
                    var a = e.vGap;
                    if (S()) {
                        var r = v.barsSize;
                        if (v.captionEl && "auto" === r.bottom)
                            if (n || (n = t.createEl("pswp__caption pswp__caption--fake"), n.appendChild(t.createEl("pswp__caption__center")), i.insertBefore(n, o), t.addClass(i, "pswp__ui--fit")), v.addCaptionHTMLFn(e, n, !0)) {
                                var s = n.clientHeight;
                                a.bottom = parseInt(s, 10) || 44
                            } else a.bottom = r.top;
                        else a.bottom = "auto" === r.bottom ? 0 : r.bottom;
                        a.top = r.top
                    } else a.top = a.bottom = 0
                },
                B = function () {
                    v.timeToIdle && u("mouseUsed", function () {
                        t.bind(document, "mousemove", D), t.bind(document, "mouseout", N), b = setInterval(function () {
                            2 === ++L && $.setIdle(!0)
                        }, v.timeToIdle / 2)
                    })
                },
                V = function () {
                    u("onVerticalDrag", function (e) {
                        C && e < .95 ? $.hideControls() : !C && e >= .95 && $.showControls()
                    });
                    var e;
                    u("onPinchClose", function (t) {
                        C && t < .9 ? ($.hideControls(), e = !0) : e && !C && t > .9 && $.showControls()
                    }), u("zoomGestureEnded", function () {
                        (e = !1) && !C && $.showControls()
                    })
                },
                U = [
                    {
                        name: "caption",
                        option: "captionEl",
                        onInit: function (e) {
                            o = e
                        }
                    }, {
                        name: "share-modal",
                        option: "shareEl",
                        onInit: function (e) {
                            c = e
                        },
                        onTap: function () {
                            O()
                        }
                    }, {
                        name: "button--share",
                        option: "shareEl",
                        onInit: function (e) {
                            s = e
                        },
                        onTap: function () {
                            O()
                        }
                    }, {
                        name: "button--zoom",
                        option: "zoomEl",
                        onTap: e.toggleDesktopZoom
                    }, {
                        name: "counter",
                        option: "counterEl",
                        onInit: function (e) {
                            r = e
                        }
                    }, {
                        name: "button--close",
                        option: "closeEl",
                        onTap: e.close
                    }, {
                        name: "button--arrow--left",
                        option: "arrowEl",
                        onTap: e.prev
                    }, {
                        name: "button--arrow--right",
                        option: "arrowEl",
                        onTap: e.next
                    }, {
                        name: "button--fs",
                        option: "fullscreenEl",
                        onTap: function () {
                            a.isFullscreen() ? a.exit() : a.enter()
                        }
                    }, {
                        name: "preloader",
                        option: "preloaderEl",
                        onInit: function (e) {
                            f = e
                        }
                    }],
                q = function () {
                    var e, a, o, n = function (i) {
                        if (i)
                            for (var n = i.length, r = 0; r < n; r++) {
                                e = i[r], a = e.className;
                                for (var s = 0; s < U.length; s++) o = U[s], a.indexOf("pswp__" + o.name) > -1 && (v[o.option] ? (t.removeClass(e, "pswp__element--disabled"), o.onInit && o.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                            }
                    };
                    n(i.children);
                    var r = t.getChildByClass(i, "pswp__top-bar");
                    r && n(r.children)
                };
            $.init = function () {
                t.extend(e.options, k, !0), v = e.options, i = t.getChildByClass(e.scrollWrap, "pswp__ui"), u = e.listen, V(), u("beforeChange", $.update), u("doubleTap", function (t) {
                    var a = e.currItem.initialZoomLevel;
                    e.getZoomLevel() !== a ? e.zoomTo(a, t, 333) : e.zoomTo(v.getDoubleTapZoom(!1, e.currItem), t, 333)
                }), u("preventDragEvent", function (e, t, a) {
                    var i = e.target || e.srcElement;
                    i && i.getAttribute("class") && e.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (a.prevent = !1)
                }), u("bindEvents", function () {
                    t.bind(i, "pswpTap click", P), t.bind(e.scrollWrap, "pswpTap", $.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", $.onMouseOver)
                }), u("unbindEvents", function () {
                    _ || O(), b && clearInterval(b), t.unbind(document, "mouseout", N), t.unbind(document, "mousemove", D), t.unbind(i, "pswpTap click", P), t.unbind(e.scrollWrap, "pswpTap", $.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", $.onMouseOver), a && (t.unbind(document, a.eventK, $.updateFullscreen), a.isFullscreen() && (v.hideAnimationDuration = 0, a.exit()), a = null)
                }), u("destroy", function () {
                    v.captionEl && (n && i.removeChild(n), t.removeClass(o, "pswp__caption--empty")), c && (c.children[0].onclick = null), t.removeClass(i, "pswp__ui--over-close"), t.addClass(i, "pswp__ui--hidden"), $.setIdle(!1)
                }), v.showAnimationDuration || t.removeClass(i, "pswp__ui--hidden"), u("initialZoomIn", function () {
                    v.showAnimationDuration && t.removeClass(i, "pswp__ui--hidden")
                }), u("initialZoomOut", function () {
                    t.addClass(i, "pswp__ui--hidden")
                }), u("parseVerticalMargin", H), q(), v.shareEl && s && c && (_ = !0), T(), B(), R(), z()
            }, $.setIdle = function (e) {
                d = e, I(i, "ui--idle", e)
            }, $.update = function () {
                C && e.currItem ? ($.updateIndexIndicator(), v.captionEl && (v.addCaptionHTMLFn(e.currItem, o), I(o, "caption--empty", !e.currItem.title)), x = !0) : x = !1, _ || O(), T()
            }, $.updateFullscreen = function (i) {
                i && setTimeout(function () {
                    e.setScrollOffset(0, t.getScrollY())
                }, 50), t[(a.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
            }, $.updateIndexIndicator = function () {
                v.counterEl && (r.innerHTML = e.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn())
            }, $.onGlobalTap = function (a) {
                a = a || window.event;
                var i = a.target || a.srcElement;
                if (!g)
                    if (a.detail && "mouse" === a.detail.pointerType) {
                        if (F(i)) return void e.close();
                        t.hasClass(i, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? v.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(a.detail.releasePoint))
                    } else if (v.tapToToggleControls && (C ? $.hideControls() : $.showControls()), v.tapToClose && (t.hasClass(i, "pswp__img") || F(i))) return void e.close()
            }, $.onMouseOver = function (e) {
                e = e || window.event;
                var t = e.target || e.srcElement;
                I(i, "ui--over-close", F(t))
            }, $.hideControls = function () {
                t.addClass(i, "pswp__ui--hidden"), C = !1
            }, $.showControls = function () {
                C = !0, x || $.update(), t.removeClass(i, "pswp__ui--hidden")
            }, $.supportsFullscreen = function () {
                var e = document;
                return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
            }, $.getFullscreenAPI = function () {
                var t, a = document.documentElement,
                    i = "fullscreenchange";
                return a.requestFullscreen ? t = {
                    enterK: "requestFullscreen",
                    exitK: "exitFullscreen",
                    elementK: "fullscreenElement",
                    eventK: i
                } : a.mozRequestFullScreen ? t = {
                    enterK: "mozRequestFullScreen",
                    exitK: "mozCancelFullScreen",
                    elementK: "mozFullScreenElement",
                    eventK: "moz" + i
                } : a.webkitRequestFullscreen ? t = {
                    enterK: "webkitRequestFullscreen",
                    exitK: "webkitExitFullscreen",
                    elementK: "webkitFullscreenElement",
                    eventK: "webkit" + i
                } : a.msRequestFullscreen && (t = {
                    enterK: "msRequestFullscreen",
                    exitK: "msExitFullscreen",
                    elementK: "msFullscreenElement",
                    eventK: "MSFullscreenChange"
                }), t && (t.enter = function () {
                    if (l = v.closeOnScroll, v.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK) return e.template[this.enterK]();
                    e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                }, t.exit = function () {
                    return v.closeOnScroll = l, document[this.exitK]()
                }, t.isFullscreen = function () {
                    return document[this.elementK]
                }), t
            }
        }
    }),
    function (e) {
        var t = !1;
        if ("function" == typeof define && define.amd && (define(e), t = !0), "object" == typeof exports && (module.exports = e(), t = !0), !t) {
            var a = window.Cookies,
                i = window.Cookies = e();
            i.noConflict = function () {
                return window.Cookies = a, i
            }
        }
    }(function () {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var a = arguments[e];
                for (var i in a) t[i] = a[i]
            }
            return t
        }

        function t(a) {
            function i(t, o, n) {
                var r;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if (n = e({
                            path: "/"
                        }, i.defaults, n), "number" == typeof n.expires) {
                            var s = new Date;
                            s.setMilliseconds(s.getMilliseconds() + 864e5 * n.expires), n.expires = s
                        }
                        n.expires = n.expires ? n.expires.toUTCString() : "";
                        try {
                            r = JSON.stringify(o), /^[\{\[]/.test(r) && (o = r)
                        } catch (e) {}
                        o = a.write ? a.write(o, t) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape);
                        var c = "";
                        for (var l in n) n[l] && (c += "; " + l, !0 !== n[l] && (c += "=" + n[l]));
                        return document.cookie = t + "=" + o + c
                    }
                    t || (r = {});
                    for (var d = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, f = 0; f < d.length; f++) {
                        var p = d[f].split("="),
                            h = p.slice(1).join("=");
                        '"' === h.charAt(0) && (h = h.slice(1, -1));
                        try {
                            var m = p[0].replace(u, decodeURIComponent);
                            if (h = a.read ? a.read(h, m) : a(h, m) || h.replace(u, decodeURIComponent), this.json) try {
                                h = JSON.parse(h)
                            } catch (e) {}
                            if (t === m) {
                                r = h;
                                break
                            }
                            t || (r[m] = h)
                        } catch (e) {}
                    }
                    return r
                }
            }

            return i.set = i, i.get = function (e) {
                return i.call(i, e)
            }, i.getJSON = function () {
                return i.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, i.defaults = {}, i.remove = function (t, a) {
                i(t, "", e(a, {
                    expires: -1
                }))
            }, i.withConverter = t, i
        }

        return t(function () {})
    }), $.extend($.scrollTo.defaults, {
    offset: {
        left: 0,
        top: -50
    },
    duration: 400
}), $.fn.isVisible = function () {
    var e = this[0].getBoundingClientRect();
    return (e.height > 0 || e.width > 0) && e.bottom >= 0 && e.right >= 0 && e.top <= (window.innerHeight || document.documentElement.clientHeight) && e.left <= (window.innerWidth || document.documentElement.clientWidth)
}, Array.min = function (e) {
    return Math.min.apply(Math, e)
}, Array.max = function (e) {
    return Math.max.apply(Math, e)
}, Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
    value: function (e, t) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var a = Object(this),
            i = a.length >>> 0;
        if (0 === i) return !1;
        for (var o = 0 | t, n = Math.max(o >= 0 ? o : i - Math.abs(o), 0); n < i;) {
            if (function (e, t) {
                return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
            }(a[n], e)) return !0;
            n++
        }
        return !1
    }
}), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
    value: function (e, t) {
        "use strict";
        if (null === e || void 0 === e) throw new TypeError("Cannot convert undefined or null to object");
        for (var a = Object(e), i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            if (null !== o && void 0 !== o)
                for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (a[n] = o[n])
        }
        return a
    },
    writable: !0,
    configurable: !0
});
var Schema = {
        data: {},
        getSKU: function () {
            return $("[data-reference]").data().reference
        },
        getFullSku: function () {
            return this.getSKU() + "#" + getAnchor()
        },
        getKeys: function (e) {
            var t = Object.keys(e);
            t.length && t.forEach(function (t) {
                "object" == typeof e[t] && void 0 === e[t].code ? this.getKeys(e[t]) : this.data[e[t].code] = e[t]
            }.bind(this))
        },
        getConfigAttributes: function (e) {
            return !Object.keys(this.data).length && this.getKeys(typeIcaVariants), this.data[e]
        },
        getPrice: function () {
            var e = $("#price");
            return e.length ? e.text().slice(1) : this.getConfigAttributes(getAnchor()).price
        },
        createSchemaOfProductType: function (e) {
            return (!this.getSchemaOfProductType().length || e) && $("head").append($('<script type="application/ld+json">{"@context":"http://schema.org","@type":"Product","name":"' + dataLayer[0].imageName + '"}<\/script>')), this.getSchemaOfProductType(e).last()
        },
        getSchemaOfProductType: function (e) {
            var t = $('script[type="application/ld+json"]').filter(function () {
                return "Product" === JSON.parse(this.innerHTML)["@type"]
            });
            return e ? t.last() : t
        },
        addOffers: function (e) {
            var t = e.length ? e : this.createSchemaOfProductType(),
                a = JSON.parse(t[0].innerHTML),
                i = this.getFullSku();
            a.offers = {
                "@type": "Offer",
                priceCurrency: "USD",
                price: this.getPrice()
            }, a.sku = a.sku || i, 1 === this.getSchemaOfProductType().index(t) && (a.sku = i), a.description = gtmActionField.list, a.image = getMainImage(), t[0].innerHTML = JSON.stringify(a)
        },
        deleteAdditionalProductSchema: function () {
            for (; this.getSchemaOfProductType().length > 1;) this.getSchemaOfProductType().last().remove()
        },
        deleteProductSchema: function () {
            for (; this.getSchemaOfProductType().length > 1;) this.getSchemaOfProductType().first().remove()
        },
        updateAdditionalProductSchema: function () {
            var e = this.getSchemaOfProductType().length < 2;
            return this.createSchemaOfProductType(e)
        }
    },
    AdestraHelper = {
        createAdestraEvent: function (e, t) {
            var a = {
                name: e
            };
            t && (a = Object.assign(a, t)), sessionStorage.setItem("adestra_event", JSON.stringify(a))
        },
        processTrackingPixelData: function (e, t) {
            $.ajax({
                url: "/?fc=module&module=icacanvas&controller=syncservices&action=getTrackingPixel&ajax=true",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: [],
                success: function (a) {
                    "success" === a.result && "url" in a.data && a.data.url.length && ("publish" === e && $.publish(t, a.data.url), "create_event" === e && AdestraHelper.createAdestraEvent(t, {
                        url: a.data.url
                    }))
                }
            })
        }
    },
    TrustPilot = {
        updateProductPageWidget: function () {
            var e = $("#trustpilot-container");
            if (e.length) {
                var t = Schema.getPrice();
                e.attr("data-price", t)
            }
        },
        isSchemaExist: function () {
            return !!$("head").contents().filter(function () {
                return 8 === this.nodeType && -1 !== this.textContent.indexOf("Added by Trustpilot")
            }).length
        }
    },
    CategoryContext = {
        data: {},
        setValue: function (e, t) {
            this.data[e] = t
        },
        getValue: function (e) {
            return void 0 !== this.data[e] ? this.data[e] : null
        }
    },
    Events = {
        dispatch: function (e) {
            window.document.dispatchEvent(new Event(e, {
                bubbles: !0,
                cancelable: !0
            }))
        }
    };
NumberFormatter = {
    categoryCountNumber: function (e) {
        return e ? e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") : ""
    }
}, KlarnaPlacement = {
    locale: "en-US",
    default_theme: "default",
    theme: "",
    minPrice: 35,
    maxPrice: 1e3,
    createPlacement: function (e, t) {
        $("klarna-placement").length > 0 || (this.addPlacementToElemById(e), this.addDataAttribute("key", t), this.addDataAttribute("locale", this.locale), this.getPlacementTheme())
    },
    addPlacementToElemById: function (e) {
        $("#" + e).append("<klarna-placement></klarna-placement>")
    },
    addDataAttribute: function (e, t) {
        $("klarna-placement").attr("data-" + e, t)
    },
    addPriceToPurchaseAmount: function (e) {
        var t = parseInt(100 * this.getPreparedPrice(e), 10);
        this.addDataAttribute("purchase-amount", t)
    },
    refreshPlacement: function () {
        window.KlarnaOnsiteService = window.KlarnaOnsiteService || [], window.KlarnaOnsiteService.push({
            eventName: "refresh-placements"
        })
    },
    updatePriceToPurchaseAmount: function (e, t, a) {
        $("klarna-placement").remove(), this.isSatisfyForDisplayByPrice(e) && (this.createPlacement(t, a), this.addPriceToPurchaseAmount(e), this.refreshPlacement())
    },
    setPlacementTheme: function (e) {
        this.theme = e
    },
    getPlacementTheme: function () {
        var e = this.theme;
        return "" !== e ? e : this.default_theme
    },
    getMinPrice: function () {
        return Number(this.minPrice)
    },
    getMaxPrice: function () {
        return Number(this.maxPrice)
    },
    isSatisfyForDisplayByPrice: function (e) {
        var t = 100 * this.getPreparedPrice(e);
        return t > 100 * this.getMinPrice() && t < 100 * this.getMaxPrice()
    },
    getPreparedPrice: function (e) {
        return Math.floor(100 * e) / 100
    }
},
    function (e, t, a) {
        var i = e({});
        e.each({
            trigger: "publish",
            on: "subscribe",
            off: "unsubscribe",
            one: "subscribeOnce"
        }, function (t, a) {
            e[a] = function () {
                i[t].apply(i, arguments)
            }
        })
    }(jQuery, window, document), $(function () {
    var e = $("body"),
        t = $("html, body"),
        a = $(document),
        i = /iPad|iPhone|iPod/.test(navigator.platform),
        o = function (o) {
            o instanceof $ && 1 === o.length && o.hasClass("modal") && (a.on("keydown.ica-modal", r(o)), e.addClass("modal-on"), e.addClass("modal-on-" + o.attr("id")), o.fadeIn(200, function () {
                i && o.has("input").length > 0 && t.css({
                    overflow: "hidden",
                    height: "auto"
                })
            }))
        },
        n = function (a) {
            if (a instanceof $ && 1 === a.length && a.hasClass("modal")) {
                var o = a.find("iframe");
                1 === o.length && o.get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*"), i && t.css({
                    overflow: "",
                    height: ""
                }), a.fadeOut(200), e.removeClass("modal-on-" + a.attr("id")), e.removeClass("modal-on")
            }
        },
        r = function (e) {
            return function (t) {
                27 === t.which && (a.off("keydown.ica-modal"), t.stopPropagation(), t.preventDefault(), n(e))
            }
        };
    $.fn.extend({
        showModal: function () {
            o($(this))
        }
    }), e.on("click", "*[data-modal]:not([data-ajax])", function (e) {
        e.preventDefault(), $(this).attr("data-modal").length > 0 && o($("#" + $(this).attr("data-modal") + ":first"))
    }), $("div.modal").each(function () {
        var e = $(this),
            t = function (t) {
                t.preventDefault(), n(e)
            };
        e.find("div.modal-box").click(function (e) {
            e.stopPropagation()
        }).on("click", ".close", t), e.click(t)
    })
}), $(function () {
    var e = $("body"),
        t = $("#video-modal"),
        a = t.find("iframe"),
        i = a.get(0),
        o = ["enterFullScreen", "requestFullScreen", "webkitEnterFullScreen", "webkitRequestFullScreen", "mozRequestFullScreen", "oRequestFullScreen", "msRequestFullScreen", "khtmlRequestFullScreen"];
    e.on("click", "*[data-modal-video]", function (e) {
        e.preventDefault();
        var n = $(this);
        if (t.find("header span").text(n.data("modal-video-title")), a.on("load", function () {
            a.off("load"), a.get(0).contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }), a.attr("src", "//www.youtube.com/embed/" + n.data("modal-video") + "?rel=0&enablejsapi=1"), t.showModal(), $(window).width() <= 1025)
            for (var r = 0; r < o.length; r++)
                if (void 0 !== i[o[r]]) {
                    i[o[r]]();
                    break
                }
    })
}), $(function () {
    var e = $(window),
        t = $("html, body"),
        a = $("body"),
        i = ($("#nav-header"), $("#nav-main")),
        o = $("#nav-main li.nav-main-d1-has-children"),
        n = $("#header-search"),
        r = $("#header-search-query"),
        s = $("#back-to-top");
    init = function () {
        e.on("touchstart", testTouch), e.on("scroll", updateStyles), o.hoverIntent(function () {
            $(this).addClass(e.width() > 620 ? "active" : "hover")
        }, function () {
            $(this).removeClass(e.width() > 620 ? "active" : "hover")
        }), o.find("a").on("click", function (t) {
            e.width() <= 620 && $(this).parent().find("ul").length && !$(this).hasClass("nav-main-d2") ? t.preventDefault() : a.removeClass("show-menu")
        }), o.find("a.nav-main-d1").on("click", function (t) {
            if (e.width() <= 620) {
                t.preventDefault();
                var a = $(this).parent();
                o.not(a).removeClass("active touch"), a.toggleClass("active"), a.toggleClass("touch", a.hasClass("active"))
            }
        }), $("#header-hamburger").click(function (e) {
            o.removeClass("active"), a.removeClass("show-filter show-sort").toggleClass("show-menu")
        }), $("#menu-cover").click(function () {
            o.removeClass("active"), a.removeClass("show-menu show-filter")
        }), $("#header-search-icon").click(function (i) {
            e.width() > 920 ? t.finish().animate({
                scrollTop: "0px"
            }, function () {
                r.focus()
            }) : e.width() <= 470 && (a.removeClass("show-menu show-filter show-sort").addClass("show-search"), r.focus(), setLocalStorageValue("search_state", "1")), asyncPositioningWithAnimationCheck()
        }), $("#header-search-close").click(function (e) {
            a.removeClass("show-search"), setLocalStorageValue("search_state", "0"), asyncPositioningWithAnimationCheck()
        }), n.focusin(function () {
            n.addClass("focus"), $("#header-search-icon").addClass("focus")
        }).focusout(function () {
            n.removeClass("focus"), $("#header-search-icon").removeClass("focus")
        }), s.click(function () {
            t.finish().animate({
                scrollTop: "0px"
            })
        }), null !== document.location.pathname.match(/(^\/(canvas-art-prints|canvas-print)\/|\.html$)/) && $(".sign-in").attr("href", "/login?back=" + encodeURIComponent(document.location)), updateStyles()
    }, testTouch = function () {
        e.off("touchstart", testTouch), a.addClass("touch")
    }, updateStyles = function () {
        var t = e.scrollTop(),
            o = t > 60;
        a.hasClass("header-collapsed") !== o && (a.toggleClass("header-collapsed", o).toggleClass("header-uncollapsed", !o), setTimeout(function () {
            var e = $("<li></li>");
            i.append(e), setTimeout(function () {
                e.remove()
            }, 20)
        }, 200)), s.toggleClass("active", t >= 1984)
    }, init(), e.width() <= 470 && "0" !== getLocalStorageValue("search_state") && (document.body.classList.add("show-search"), setTimeout(function () {
        setPagePositionBelowSearch()
    }, 0))
}), $(".copy h3 a").on("click", function (e) {
    var t = $($(this).attr("href")).offset().top - $("#header").height();
    $("html").animate({
        scrollTop: t
    })
}), $(function () {
    var e = $("#header-search"),
        t = e.find("#header-search-query");
    if ("internal" !== e.attr("data-search") && e.submit(function (e) {
        e.preventDefault();
        var a = encodeURIComponent(t.val());
        t.blur(), window.location = "http://art.icanvas.com/search?w=" + a
    }), t.focus(function () {
        t.select()
    }).mouseup(function (e) {
        e.preventDefault()
    }), "internal" === e.attr("data-search")) {
        t.attr("autocomplete", "off");
        var a = document.createElement("ul"),
            i = e.offset();
        a.setAttribute("id", "search-auto-complete"), $(a).css("top", i.top + e.height() + 5), $(a).css("width", t.outerWidth() || 0), $(a).css("left", i.left), e.append(a);
        var o, n = $("#search-auto-complete");
        t.on("keydown", function (e) {
            13 === e.which && ($("li.product.selected a").length > 0 ? (e.preventDefault(), window.location.href = $("li.product.selected a")[0].href) : $("li.category.selected a").length > 0 && (e.preventDefault(), window.location.href = $("li.category.selected a")[0].href))
        }), t.on("keyup focus", function (t) {
            var a = $(this);
            if (13 === t.which || a.val().trim().length < 3 || t.which >= 37 && t.which <= 40) {
                var i = $("#search-auto-complete").find($("li.suggestion.selected"));
                return i.length > 0 && $("#header-search-query").val($(i).text().trim()), void clearTimeout(o)
            }
            o && clearTimeout(o), e.find("button").addClass("btn-loading"), o = setTimeout(function () {
                $.ajax({
                    type: "GET",
                    url: e.attr("action"),
                    data: {
                        w: a.val().trim(),
                        auto_complete: "true"
                    }
                }).done(function (e) {
                    e.length > 0 && (n.html(e), n.find("li").length && n.show(), n.find("li:visible").length || n.hide(), n.data("selected_item", null), n.data("item_count", n.find("li[class]").length))
                }).done(function () {
                    e.find("button").removeClass("btn-loading")
                })
            }, 500)
        }), $(document).on("click", ".suggestion", function () {
            t.val($(this).text().trim()), e.submit()
        }), $(document).keydown(function (e) {
            var t = $("#search-auto-complete");
            if (t.is(":visible")) {
                var a = e.which;
                if (38 === a || 40 === a) {
                    e.preventDefault();
                    var i = 40 === a ? 1 : -1,
                        o = t.data("selected_item"),
                        n = t.data("item_count"),
                        r = t.find("li[class]");
                    null === o ? o = 0 : (o += i + n, o %= n), t.data("selected_item", o), r.removeClass("selected"), r.eq(o).addClass("selected")
                }
            }
        }), $(document).on("click", function (e) {
            "header-search-query" !== e.target.id && e.screenX && 0 !== e.screenX && e.screenY && 0 !== e.screenY && n.hide()
        })
    }
});
var dynamicLoadService = function () {
    var e = {
            page_services: null,
            service_request_marker: "service_request_marker",
            service_checker_marker: "sli_cart_data",
            service_logged_marker: "is_logged",
            service_user_location: "user_location"
        },
        t = ["account-info", "favorite-list", "cart-count"],
        a = {
            "favorite-list": "checkFavoritesData"
        },
        i = {
            "account-info": "setAccountInfoData",
            "favorite-list": "setFavoritesData",
            "cart-count": "setCartCountData"
        },
        o = [],
        n = [],
        r = !1,
        s = !1;
    return {
        app: function (t) {
            $.extend(e, t)
        },
        options: function () {
            return e
        },
        initialization: function (e) {
            if (0 != e.length) {
                var i = this;
                $.each(e, function () {
                    var e = $(this).data("service");
                    -1 != t.indexOf(e) && (-1 == o.indexOf(e) && o.push(e), a[e] && i[a[e]](this))
                })
            }
        },
        checkFavoritesData: function (e) {
            if (s || $(e).attr("data-modal", "please-sign-in"), !r) return void o.splice("favorite-list", 1);
            n.fav_products || (n.fav_products = "");
            var t = $(e).data("id-product");
            t && (n.fav_products = n.fav_products ? n.fav_products + "," + t : t)
        },
        getServices: function (e, t) {
            o = [], n = [], this.initialization(e);
            var a = this;
            $.isEmptyObject(o) || $.ajax({
                url: this.getServiceUrl(o),
                type: "GET",
                data: $.extend({}, n),
                success: function (i, o, n) {
                    a.processResponseHeaders(n.getAllResponseHeaders()), a.processServices(e), a.servicesResponse(i), void 0 !== t && t.call()
                },
                cache: !0,
                dataType: "json"
            })
        },
        setFavoritesData: function (e, t) {
            $('[data-service="' + e + '"]').filter(function () {
                var e = !1;
                return $(this).data("id-product") in t && ($(this).data("in-favorites", t[$(this).data("id-product")].join(",")), t[$(this).data("id-product")].indexOf($(this).data("type")) > -1 && (e = !0)), e
            }).addClass("active").find(".active_status").addClass("active")
        },
        setAccountInfoData: function (e, t) {
            r = t.has_favorites, s = t.is_login, t.html.length > 0 && $('[data-service="' + e + '"]').html(t.html), this.toggleFavoritesElements(), this.dataLayerUserCredential(t), this.handleLogin(t), this.handleLoadUserGroup(t.userGroup)
        },
        setCartCountData: function (e, t) {
            t > 0 && $('[data-service="' + e + '"]').addClass("active").text(t), $.publish("dynamic/load/cart/count", {
                cartCount: Number(t)
            })
        },
        getServiceUrl: function (e) {
            var t = this.getServiceRequestMarker();
            return "/?fc=module&module=icacanvas&controller=dynamic&ajax=true&services=" + e.join(",") + (t ? "&_=" + t : "")
        },
        servicesResponse: function (e) {
            if (0 != e.length) {
                var t = this;
                $.each(e, function (e, a) {
                    i[e] && t[i[e]](e, a)
                })
            }
        },
        getServiceRequestMarker: function () {
            var t = getLocalStorageValue(e.service_checker_marker) || "",
                a = getCookie(e.service_checker_marker) || "",
                i = "";
            return t !== a ? (i = String("m" + this.generateServiceRequestMarker()), setLocalStorageValue(e.service_checker_marker, a), setLocalStorageValue(e.service_request_marker, i)) : i = getLocalStorageValue(e.service_request_marker), "" === i && "" === t && "" === a && (i = "g"), i
        },
        processServices: function (e) {
            e.attr("data-service-was-processed", !0)
        },
        generateServiceRequestMarker: function () {
            return (new Date).getTime() + Math.random()
        },
        checkHeaderFavoritesIcon: function () {
            this.getRemainedFavoritesIcon().toggleClass("active", $("#header-favorites").hasClass("active"))
        },
        checkFooterFavoritesVisibility: function () {
            this.getFooterFavorites().toggleClass("active", $("#header-favorites").hasClass("active"))
        },
        toggleFavoritesElements: function () {
            this.checkHeaderFavoritesIcon(), this.checkFooterFavoritesVisibility()
        },
        dataLayerUserCredential: function (e) {
            ["hashedemail", "userCredential"].forEach(function (t) {
                var a = {};
                void 0 !== e[t] && (a[t] = e[t], dataLayer.push(a))
            })
        },
        getRemainedFavoritesIcon: function () {
            return $("#header-favorites-icon")
        },
        getFooterFavorites: function () {
            return $("#footer-favorites")
        },
        isLogged: function () {
            return s
        },
        handleLogin: function (t) {
            var a = getSessionStorageValue(e.service_logged_marker) || null,
                i = this.isLogged() ? "login" : "logout";
            setSessionStorageValue(e.service_logged_marker, i), null !== a && ("login" === a && a !== i && $.publish("user/logout", {
                data: t
            }), "login" === i && a !== i && $.publish("user/login", {
                data: t
            }))
        },
        processResponseHeaders: function (e) {
            var t = e.trim().split(/[\r\n]+/),
                a = {};
            t.forEach(function (e) {
                var t = e.split(": "),
                    i = t.shift();
                a[i] = t.join(": ")
            }), void 0 !== a["x-country"] && this.processXCountryHeader(a["x-country"])
        },
        processXCountryHeader: function (e) {
            $.publish("dynamic/load", {
                country: e
            })
        },
        handleLoadUserGroup: function (e) {
            $.publish("dynamic/load", {
                userGroup: e
            })
        }
    }
}();
dynamicLoadService.app(), dynamicLoadService.getServices($('[data-service="account-info"],[data-service="cart-count"]'), function () {
    dynamicLoadService.getServices($('[data-service="favorite-list"]'))
}), $(function () {
    shouldMakeSiteWideBannerRequest() && $.subscribe("dynamic/load/cart/count", function (e, t) {
        void 0 !== t.cartCount && makeSiteWideBannerRequest(0 === t.cartCount)
    })
});
var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
    WeakMap = window.WeakMap;
if (void 0 === WeakMap) {
    var defineProperty = Object.defineProperty,
        counter = Date.now() % 1e9;
    WeakMap = function () {
        this.name = "__st" + (1e9 * Math.random() >>> 0) + counter++ + "__"
    }, WeakMap.prototype = {
        set: function (e, t) {
            var a = e[this.name];
            return a && a[0] === e ? a[1] = t : defineProperty(e, this.name, {
                value: [e, t],
                writable: !0
            }), this
        },
        get: function (e) {
            var t;
            return (t = e[this.name]) && t[0] === e ? t[1] : void 0
        },
        delete: function (e) {
            var t = e[this.name];
            if (!t) return !1;
            var a = t[0] === e;
            return t[0] = t[1] = void 0, a
        },
        has: function (e) {
            var t = e[this.name];
            return !!t && t[0] === e
        }
    }
}
var registrationsTable = new WeakMap,
    setImmediate = window.msSetImmediate;
if (!setImmediate) {
    var setImmediateQueue = [],
        sentinel = String(Math.random());
    window.addEventListener("message", function (e) {
        if (e.data === sentinel) {
            var t = setImmediateQueue;
            setImmediateQueue = [], t.forEach(function (e) {
                e()
            })
        }
    }), setImmediate = function (e) {
        setImmediateQueue.push(e), window.postMessage(sentinel, "*")
    }
}
var isScheduled = !1,
    scheduledObservers = [],
    uidCounter = 0;
JsMutationObserver.prototype = {
    observe: function (e, t) {
        if (e = wrapIfNeeded(e), !t.childList && !t.attributes && !t.characterData || t.attributeOldValue && !t.attributes || t.attributeFilter && t.attributeFilter.length && !t.attributes || t.characterDataOldValue && !t.characterData) throw new SyntaxError;
        var a = registrationsTable.get(e);
        a || registrationsTable.set(e, a = []);
        for (var i, o = 0; o < a.length; o++)
            if (a[o].observer === this) {
                i = a[o], i.removeListeners(), i.options = t;
                break
            }
        i || (i = new Registration(this, e, t), a.push(i), this.nodes_.push(e)), i.addListeners()
    },
    disconnect: function () {
        this.nodes_.forEach(function (e) {
            for (var t = registrationsTable.get(e), a = 0; a < t.length; a++) {
                var i = t[a];
                if (i.observer === this) {
                    i.removeListeners(), t.splice(a, 1);
                    break
                }
            }
        }, this), this.records_ = []
    },
    takeRecords: function () {
        var e = this.records_;
        return this.records_ = [], e
    }
};
var currentRecord, recordWithOldValue;
Registration.prototype = {
    enqueue: function (e) {
        var t = this.observer.records_,
            a = t.length;
        if (t.length > 0) {
            var i = t[a - 1],
                o = selectRecord(i, e);
            if (o) return void (t[a - 1] = o)
        } else scheduleCallback(this.observer);
        t[a] = e
    },
    addListeners: function () {
        this.addListeners_(this.target)
    },
    addListeners_: function (e) {
        var t = this.options;
        t.attributes && e.addEventListener("DOMAttrModified", this, !0), t.characterData && e.addEventListener("DOMCharacterDataModified", this, !0), t.childList && e.addEventListener("DOMNodeInserted", this, !0), (t.childList || t.subtree) && e.addEventListener("DOMNodeRemoved", this, !0)
    },
    removeListeners: function () {
        this.removeListeners_(this.target)
    },
    removeListeners_: function (e) {
        var t = this.options;
        t.attributes && e.removeEventListener("DOMAttrModified", this, !0), t.characterData && e.removeEventListener("DOMCharacterDataModified", this, !0), t.childList && e.removeEventListener("DOMNodeInserted", this, !0), (t.childList || t.subtree) && e.removeEventListener("DOMNodeRemoved", this, !0)
    },
    addTransientObserver: function (e) {
        if (e !== this.target) {
            this.addListeners_(e), this.transientObservedNodes.push(e);
            var t = registrationsTable.get(e);
            t || registrationsTable.set(e, t = []), t.push(this)
        }
    },
    removeTransientObservers: function () {
        var e = this.transientObservedNodes;
        this.transientObservedNodes = [], e.forEach(function (e) {
            this.removeListeners_(e);
            for (var t = registrationsTable.get(e), a = 0; a < t.length; a++)
                if (t[a] === this) {
                    t.splice(a, 1);
                    break
                }
        }, this)
    },
    handleEvent: function (e) {
        switch (e.stopImmediatePropagation(), e.type) {
            case "DOMAttrModified":
                var t = e.attrName,
                    a = e.relatedNode.namespaceURI,
                    i = e.target,
                    o = new getRecord("attributes", i);
                o.attributeName = t, o.attributeNamespace = a;
                var n = null;
                "undefined" != typeof MutationEvent && e.attrChange === MutationEvent.ADDITION || (n = e.prevValue), forEachAncestorAndObserverEnqueueRecord(i, function (e) {
                    if (e.attributes && (!e.attributeFilter || !e.attributeFilter.length || -1 !== e.attributeFilter.indexOf(t) || -1 !== e.attributeFilter.indexOf(a))) return e.attributeOldValue ? getRecordWithOldValue(n) : o
                });
                break;
            case "DOMCharacterDataModified":
                var i = e.target,
                    o = getRecord("characterData", i),
                    n = e.prevValue;
                forEachAncestorAndObserverEnqueueRecord(i, function (e) {
                    if (e.characterData) return e.characterDataOldValue ? getRecordWithOldValue(n) : o
                });
                break;
            case "DOMNodeRemoved":
                this.addTransientObserver(e.target);
            case "DOMNodeInserted":
                var r, s, i = e.relatedNode,
                    c = e.target;
                "DOMNodeInserted" === e.type ? (r = [c], s = []) : (r = [], s = [c]);
                var l = c.previousSibling,
                    d = c.nextSibling,
                    o = getRecord("childList", i);
                o.addedNodes = r, o.removedNodes = s, o.previousSibling = l, o.nextSibling = d, forEachAncestorAndObserverEnqueueRecord(i, function (e) {
                    if (e.childList) return o
                })
        }
        clearRecords()
    }
}, MutationObserver || (MutationObserver = JsMutationObserver);
var timeToHideSuccessSubscribe = 4e3,
    helloBarHeight = 0,
    helloBarTimeCheck = 0,
    counterForListener = 0,
    check_timerId, check_intervalCount = 0,
    header_previous_height = 0,
    helloBarIFrameSelector = "iframe.HB-Bar:not(.hb-animateOut), iframe.HB-Modal, iframe.HB-Slider",
    helloBarIFrameHidden = "iframe.HB-Bar.hb-animateOut",
    setMenuPositionTimer = null;
$(".ica-trustpilot-widget-large").addClass("trustpilot-widget").attr({
    "data-locale": "en-US",
    "data-template-id": "539adbd6dec7e10e686debee",
    "data-businessunit-id": "53f64b0b000064000579db1f",
    "data-style-height": "1400px",
    "data-style-width": "100%",
    "data-stars": "4,5"
}), $(function () {
    $("#live-help").click(function (e) {
        e.preventDefault(), OpenLHNChat()
    })
}), $(function () {
    $("form.mailchimp-subscribe").each(function () {
        var e = $(this),
            t = (e.find(".mc-1"), void 0 !== e.data("modalForm") && e.data("modalForm"));
        H5F.setup(this), e.submit(function (a) {
            a.preventDefault();
            var i = function (t) {
                    var a = $("body");
                    if ("success" === t.result) {
                        var i = e.find("div.success");
                        setSubscribed(), 0 == $(i).text().length && i.html(t.msg), e.closest("#subscribe-modal").addClass("success"), e.find("div.footer-block > *, .h5f-form-entry > *").not(".subscribe-header, .success").fadeOut(360, function () {
                            shiftContainersOnError(), i.add(e.find(".close")).fadeIn(360)
                        }), $("#subscribe-image-author-wrapper").css("display", "none"), detectMedia(1025) && $("#subscribe-modal .mailchimp-subscribe").css("height", "unset"), setTimeout(function () {
                            $("#subscribe-modal").hide(360, function () {
                                shiftContainersOnError()
                            }), a.removeClass("modal-on-subscribe-modalid"), a.removeClass("modal-on")
                        }, timeToHideSuccessSubscribe)
                    } else logError(t.msg), e.find("div.cover").fadeOut(180), e.find("div.error-message-remote").html(t.msg.replace(/^\d+\s*-\s*/, "")).stop().fadeIn(180, function () {
                        shiftContainersOnError()
                    }).delay(7777).fadeOut(180, function () {
                        shiftContainersOnError()
                    })
                },
                o = {
                    b_4abc9666097b618b61fb487f6_9591371e50: e.find(".mc-0").val(),
                    EMAIL: $.trim(e.find(".mc-1").val())
                };
            e.find(".cover").fadeIn(180), sendToMailChimp("9591371e50", t ? "Modal" : "Footer", o, i)
        })
    }), $(".modal-box").on("click", function (e) {
        var t = $(this).find(".h5f-form-entry input[type='email']");
        t.is(e.target) || 0 !== t.has(e.target).length || t.removeClass("required"), "submit" !== $(e.target).attr("type") ? t.addClass("prevent") : t.removeClass("prevent"), shiftContainersOnError()
    }), $(document).on("click", function () {
        if (detectMedia(1025)) {
            var e = $('.modal-box .h5f-form-entry input[type="email"]');
            e.removeClass("required"), e.addClass("prevent"), e.length && shiftContainersOnError(), $(helloBarIFrameSelector).length && setNavBarOffset()
        }
    }), loaderHelloBar(), $("#header").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", asyncPositioningWithAnimationCheck)
}), $.subscribe("dynamic/load", function (e, t) {
    shouldDisplaySubscriptionPopUp(t) && displaySubscriptionPopUp(t.country)
}), $(function () {
    function e(e, t, a, i) {
        switch (e) {
            case "twitter":
                window.open("https://twitter.com/intent/tweet?text=" + t + " " + encodeURIComponent(a), "sharertwt", "toolbar=0,status=0,width=640,height=445");
                break;
            case "facebook":
                window.open("http://www.facebook.com/sharer.php?u=" + a, "sharer", "toolbar=0,status=0,width=660,height=445");
                break;
            case "gplus":
                window.open("https://plus.google.com/share?url=" + a, "sharer", "toolbar=0,status=0,width=660,height=445");
                break;
            case "pinterest":
                window.open("http://www.pinterest.com/pin/create/button/?media=" + i + "&url=" + a, "sharerpinterest", "toolbar=0,status=0,width=660,height=445")
        }
    }

    $("#social-share a").click(function (t) {
        t.preventDefault();
        var a = $("#product-header h1").text(),
            i = [location.protocol, "//", location.host, location.pathname].join(""),
            o = ($("#options-pc li.selected").attr("data-value"), $("meta[property='og:image']").attr("content"));
        e($(this).attr("data-type"), a, i, o)
    }), $("#scholarship-share a").click(function (t) {
        t.preventDefault();
        var a = $("#scholarship-share-title").text(),
            i = [location.protocol, "//", location.host, location.pathname].join("");
        $(this).attr("href") && $(this).attr("href").length && e(($(this).attr("href") || "").split("#")[1], a, i)
    }), $(".product-share a").click(function (t) {
        t.preventDefault();
        var a = $(this).parents(".product-header").find("a").html(),
            i = $(this).parents(".product-header").find("a").attr("href"),
            o = $(this).parents(".container-product").find(".left-block img")[0].src;
        e($(this).attr("data-type"), a, i, o)
    })
});
var handleUrls = function (e) {
    $(".categories-grid ul li a, ul#nav-main li a").not(".help-menu").each(function () {
        var t = $(this).attr("href") || "";
        if (/(\?product)/.test(t)) {
            if ($(this).hasClass("url-handled")) {
                var a = /(.*)\?/.exec(t),
                    i = a.input.split("#");
                i.length < 2 ? $(this).attr("href", a[1] + "?product=" + e) : $(this).attr("href", a[1] + "?product=" + e + "#" + i[1])
            }
        } else {
            var i = t.split("#");
            i.length < 2 ? $(this).attr("href", t + "?product=" + e) : $(this).attr("href", i[0] + "?product=" + e + "#" + i[1]), $(this).addClass("url-handled")
        }
    })
};
$(document).ready(function () {
    var e = null;
    if (window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (t, a, i) {
        "product" === a && (e = i.split("#")[0])
    }), null !== e && handleUrls(e), "onhashchange" in window) window.onhashchange = function () {
        $.publish("change_hash", {
            hash: window.location.hash
        })
    };
    else {
        var t = window.location.hash;
        window.setInterval(function () {
            window.location.hash != t && (t = window.location.hash, $.publish("change_hash", {
                hash: t
            }))
        }, 100)
    }
}), $("#filters, .canvas-filter-bar").each(function () {
    var e, t = $(this),
        a = $("html, body"),
        i = $("body"),
        o = $(window),
        n = $("#category-product-list"),
        r = t.find(".filter").not(".static-filter"),
        s = t.find(".filter_tree"),
        c = i.hasClass("module-icacanvas-sli"),
        l = $("#product-list"),
        d = null,
        u = $("#category-sort").is("[data-color-option]"),
        f = $("#category-sort").hasClass("exclusive");
    filter_methods_helper.init({
        filters: r,
        filters_tree: s,
        query_base: t.attr("data-query-base"),
        id: t.attr("data-list-id")
    });
    var p = function (e) {
            $("#category-sort").toggleClass("exclusive", e), $('#category-sort [data-order="exclusive"]').hasClass("selected") && $('#category-sort [data-order="popular"]').toggleClass("selected", !e)
        },
        h = function (e) {
            var t = sessionStorage.getItem("view_type");
            t || (t = "grid"), $("#view-selector .selector-type").removeClass("selected");
            var a = $("#view-selector").find('.selector-type[data-type="' + t + '"]');
            if (a.addClass("selected"), "line" === t) a.css("background-position", "0"), a.css("background-size", "30px"), a.css("transform", "none");
            else {
                var i = $("#view-selector").find('.selector-type[data-type="line"]');
                i.css("background-position", "-105px -428px"), i.css("background-size", "250px"), i.css("transform", "scale(1.3)")
            }
            e.attr("data-view", t)
        };
    f || $('#category-sort [data-order="exclusive"]').hasClass("selected") && p(f), h(l), d = new masonry(l);
    var m = function (i, n, f, h) {
        var m = $(".masonry").attr("data-controller"),
            g = r.find("li.selected").length > 0 || s.find("li.selected").length > 0,
            y = g ? "&filter_search=true" : "",
            b = t.attr("data-preview") ? "&preview=true" : "",
            w = "/?fc=module&module=icacanvas&controller=" + m + "&ajax=true" + y + b + (t.attr("data-custom") ? "&custom=" + t.attr("data-custom") : ""),
            x = !!(["combo-art"].indexOf(m) > -1);
        g ? $("#show-filter").addClass("has-active-items") : $("#show-filter").removeClass("has-active-items");
        var C, _ = {};
        window.location.href.split(/[?&]/).forEach(function (e, t) {
            if (0 === t) {
                var a = e.split("/");
                C = a[a.length - 1]
            } else {
                var i = e.split("=");
                !_[i[0]] && (_[i[0]] = i[1])
            }
        });
        var k = "";
        if (x) {
            var P = $("#product-list").attr("data-canvas-code");
            if (P != _.product) {
                var S = window.location.origin + window.location.pathname;
                window.history.replaceState({}, "List", S + "?product=" + P)
            }
            w += "&product=" + _.product
        }
        if (filter_methods_helper.arrange_query(), u || (0 === r.filter(".colors").find("li.selected").length ? ($("#category-sort li").not('[data-order="color"]').removeClass("disabled"), $('#category-sort li[data-order="color"]').addClass("disabled")) : ($("#category-sort li").not('[data-order="color"]').addClass("disabled"), $('#category-sort li[data-order="color"]').removeClass("disabled").addClass("selected"))), x || !c) {
            if (n) {
                var I = n.product,
                    T = n.sort,
                    E = "";
                $("#filter-bar ul li, #product-type ul li, #category-sort ul li").removeClass("selected"), $('#filter-bar ul li[data-type="' + I + '"], #product-type ul li[data-type="' + I + '"], #category-sort ul li[data-order="' + T + '"]').addClass("selected")
            } else var I = $("#filter-bar ul li.selected").length > 0 ? $("#filter-bar ul li.selected").attr("data-type") : $("#filter-bar").length > 0 ? $("#filter-bar").attr("data-type") : "canvas",
                T = getListSortOptionValue(),
                E = $("#category-sort ul").attr("data-order-key");
            var S = $("#filter-bar").attr("data-url"),
                O = "";
            !S && (S = C), void 0 !== I && (!x && (_.product = I), !x && (_.sort = T)), !k && (k = C), n && (_.sort = n.sort);
            var M = "?",
                A = {
                    sort: getListSortOptionValue()
                };
            if (!x && (A.product = I), _.sort = T, "selling" === T || "favorites" === T) {
                var F = $('#period-sort li[data-order="' + T + '"].selected').data() || {};
                _.period = F.period || ""
            }
            for (var L in _) k += M + L + "=" + _[L], M = "&", O += L + "=" + _[L] + "&";
            if ("&" == O.slice(-1) && (O = O.slice(0, -1)), window.location.hash.length && (k += window.location.hash), null !== window.history.state && (A = $.extend(window.history.state, A)), void 0 === n)
                if (x || void 0 !== f) {
                    if ("selling" === T || "favorites" === T) return void (window.location.href = k);
                    window.history.pushState(A, "List", k)
                } else /\?product/.test(window.location.href) || "popular" !== T || (k = S, O && (k += "?" + O)), window.history.replaceState(A, "List", k);
            else window.history.replaceState(A, "List", k);
            if (t.hasClass("canvas-filter-bar") && (w = "/?fc=module&module=icacanvas&controller=deal&ajax=true"), n ? w += "&sort=" + n.sort : (w += "&sort=" + getListSortOptionValue(), "random" == getListSortOptionValue() && E.length && (w += "&sort_key=" + E)), w += updateUrlTrendingSortOptions(), t.hasClass("canvas-filter-bar") ? w += "&slug=" + t.attr("data-slug") : w = filter_methods_helper.get_url(w), void 0 !== i && !0 === i && !$("body").hasClass("sale-list")) {
                if (void 0 !== h && !0 === h) {
                    var D = l.find("#new-count"),
                        N = D.attr("data-count"),
                        R = D.attr("data-filter-count");
                    D.attr("data-has-exclusive");
                    return d.setUrl(w, !0), void 0 !== N && (changeCounts(I, N), $("#show-filter div span").html("(" + N + ")")), void (R && (R = JSON.parse(R), filter_methods_helper.disable_nodes(R)))
                }
                return void d.setUrl(w)
            }
            I = x ? _.product : I, -1 !== w.indexOf("&product") ? w = w.replace(/(&product=)[^&]+/gi, "$1" + I) : w += "&product=" + I, e = l.offset().top - 70, o.scrollTop() > e && void 0 === f && a.scrollTop(e), handleUrls(I), l.load(w, function (e) {
                var t = l.find("#new-count"),
                    a = t.attr("data-count"),
                    i = t.attr("data-filter-count"),
                    o = "true" === t.attr("data-has-exclusive");
                d.setUrl(w, !0), changeCounts(I, a), p(o), $("#show-filter div span").html("(" + a + ")"), "undefined" != typeof publishAjaxProductList && !x && publishAjaxProductList(), i && (i = JSON.parse(i), filter_methods_helper.disable_nodes(i), v())
            }), $.publish("filter/click", {
                type: I
            })
        }
    };
    $("#view-selector").on("click", function () {
        var e = CategoryContext.getValue("focus_image");
        sessionStorage.setItem("view_type", "grid" === l.attr("data-view") ? "line" : "grid"), h(l), d.redraw(e || null)
    }), $(".clear_all").on("click", function () {
        $(".clear_all, .clear_all_panel").hide(), $(".js-icanvas-tree").each(function () {
            $(this).icanvastree("deselect_all", void 0, !1)
        }), $(".filter:not(.static-filter) li.selected").removeClass("selected"), $(".filter:not(.static-filter).clear").removeClass("clear"), m()
    }), o.on("scroll resize", function () {
        t.parent(".scroll").attr("data-scroll_top", t.parent(".scroll").scrollTop()), g()
    }), filter_methods_helper.register_events(m), $("nav#filter-and-sort li").on("click", function () {
        var e = $(this).closest("nav"),
            t = this.id,
            a = e.find(" ul > li").not("#" + t).map(function () {
                return this.id
            }).get();
        i.removeClass(a.join(" ")).toggleClass(t), asyncPositioningWithAnimationCheck()
    }), $("#filter-bar ul li.item, #product-type ul li.item, .filter.product ul li.item").click(function (e) {
        $("#filter-bar ul li, #product-type ul li, .filter.product ul li.item").removeClass("selected");
        var t = $(this).attr("data-type");
        if ($("#filter-bar ul li[data-type='" + t + "']").addClass("selected"), $("#product-type ul li[data-type='" + t + "']").addClass("selected"), $(".filter.product ul li.item[data-type='" + t + "']").addClass("selected"), i.removeClass("show-product"), $(this).closest(".product")) {
            var a = $(this).closest(".filter");
            $.publish("facets/facet/select", {
                filter_accordion: a,
                element: a.find("label.accordion-group-label span").text(),
                target: e.target
            })
        }
        m(!1, void 0, !0)
    }), u ? $("#category-sort li").removeClass("disabled") : $("#category-sort li").filter('[data-order="color"]').addClass("selected").siblings().removeClass("disabled"), $('[id*="-sort"]:not(#filter-and-sort) li').click(function () {
        this.dataset;
        i.toggleClass("show-sort"), $order = $(this), ("color" != $order.attr("data-order") || u) && ($(this).addClass("selected").siblings().removeClass("selected"), "random" == $order.attr("data-order") && $("#category-sort ul").attr("data-order-key", Math.random().toString(36)), m(!1, void 0, !0)), updateSortOptionsData(getListSortOptionValue())
    }), null !== window.history.state && void 0 !== window.history.state.target && null !== window.history.state.target && void 0 !== window.history.state.url && window.history.state.url === location.href || m(!0), window.onpopstate = function (e) {
        m(!1, e.state, !0)
    }, $.subscribe("list/load/lite", function (e, t) {
        m(!0, void 0, void 0, !0)
    }), $.subscribe("list/load/full", function (e, t) {
        m()
    });
    var v = function () {
            var e = t.parent(".scroll"),
                a = e.prop("scrollHeight") - e.scrollTop(),
                i = $("#category-description").outerHeight() + $("#breadcrumbs").outerHeight() + $("#filter-bar").outerHeight() + $("#category-sort").outerHeight() + $("#product-list").outerHeight(),
                r = n.outerHeight() + o.scrollTop() - 50;
            a + o.scrollTop() > n.outerHeight() ? ($(".facet_height").css("height", a > r ? a : r - i + "px"), g(), e.scrollTop(e.attr("data-scroll_top"))) : (2 * (a + o.scrollTop()) < n.outerHeight() && $(".facet_height").css("height", ""), g())
        },
        g = function () {
            if ($("#category-product-list").length > 0) {
                var e = t.parent().parent("aside"),
                    a = t.parent(".scroll"),
                    i = n.offset().top - o.scrollTop(),
                    r = n.outerHeight(),
                    s = a.prop("scrollHeight") - a.scrollTop(),
                    c = r - 1 > e.prop("scrollHeight") - e.scrollTop() && r > s,
                    l = c && i <= 50 && !(i + r <= 50 + s) && $(window).width() > 770;
                e.toggleClass("fixed", c && i <= 50), a.toggleClass("scrolled", l), l ? e.css("height", o.outerHeight() - 50 + "px") : e.css("height", ""), e.toggleClass("bottom", c && i + r <= 50 + s)
            }
        }
}), $(function () {
    $("#favorite-product-list").each(function () {
        new masonry($(this))
    }), jQuery().icanvastree && $(".filter_tree").icanvastree({})
}), $("#not-found-product-list").each(function () {
    new masonry($(this))
}), $(".slides").each(function () {
    var e = $(this),
        t = e.find("a"),
        a = e.find(".slides-timer"),
        i = e.find(".slides-arrow-next"),
        o = !1,
        n = function () {
            a.animate({
                width: "100%"
            }, 15e3, "linear", function () {
                i.click()
            })
        };
    t.length <= 1 || (e.find(".slides-arrow").on("click dblclick", function (i) {
        if (i.preventDefault(), e.hasClass("refresh") && (e.removeClass("refresh"), t = e.find("a"), t.length < 2)) return e.off(), e.find(".slides-arrow").off().hide(), void a.pause().hide();
        var r = t.filter(".current"),
            s = (t.length + t.index(r) + ($(this).hasClass("slides-arrow-next") ? 1 : -1)) % t.length;
        t.eq(s).addClass("current"), r.removeClass("current"), a.css({
            width: "0"
        }), n(), o && a.pause()
    }).on("selectstart", function (e) {
        e.preventDefault()
    }), e.addClass("active"), e.hover(function () {
        a.pause(), o = !0
    }, function () {
        a.resume(), o = !1
    }), n())
}), $(function () {
    icaHorizontalProductList(".horizontal-list-outer"), icaHorizontalProductListInitialScroll(".horizontal-list-outer")
}), $(function () {
    if (window.localStorage) {
        var e = localStorage.getItem("ica-recently-viewed") || "",
            t = $("#recent-product-container"),
            a = t.find(".horizontal-list");
        e = "string" != typeof e || "" == e ? [] : e.split(","), e = e.filter(function (e, t) {
            var a = new RegExp("^95506-[1,2,3]$", "g"),
                i = new RegExp("^95506$", "g");
            return !e.match(i) && !e.match(a)
        }), localStorage.setItem("ica-recently-viewed", e), $("#columns[data-id-product]:not(:has(.gift-card))").each(function () {
            var t = $(this).data("id-product"),
                a = getAnchor(),
                i = $.inArray(t, e);
            i >= 0 && e.splice(i, 1);
            var o = e.filter(function (e, a) {
                var i = new RegExp(t + "-(.*)", "g");
                return !e.match(i)
            });
            o.unshift(t + "-" + a), o = o.slice(0, 50), localStorage.setItem("ica-recently-viewed", o.join(","))
        }), e.length > 0 && $("#footer-recent").addClass("active"), $("#footer-tabs li").click(function () {
            var i = $(this),
                o = i.attr("id"),
                n = "/favorites?ajax=1",
                r = i.attr("data-ica-type") || "";
            "footer-recent" === o && (n = "/module/icacanvas/recent?list=" + e.join(",") + (r.length ? "&ica_type=" + Number(r) : "")), n += "&rand=" + (new Date).getTime(), a.load(n, function () {
                a.find("ul").css("width", 150 * a.find("li").length + "px"), t.find(".product-list").toggleClass("favorite-product-list", "footer-favorites" === o), t.find("h2").text(i.text()), t.addClass("active"), icaHorizontalProductList(t), $(".remove-from-recent").on("click", function () {
                    var i = getVisibleProductsInHorizontalProductList(a, a.scrollLeft(), a.width());
                    if (recent_temp = localStorage.getItem("ica-recently-viewed") || "", recent_temp = "string" != typeof recent_temp || "" == recent_temp ? [] : recent_temp.split(","), current_value = $(this).data("id-product"), recent_temp.splice(recent_temp.indexOf(current_value.toString()), 1), localStorage.setItem("ica-recently-viewed", recent_temp.join(",")), e = recent_temp, $(this).closest("li").remove(), 0 === e.length) t.removeClass("active"), $("#footer-recent").removeClass("active");
                    else {
                        publishHorizontalProductList(getProductsIDsForPublish(getNewVisibleProductsElInHorizontalProductList(i, getVisibleProductsInHorizontalProductList(a, a.scrollLeft(), a.width()))), getCallbackNameForPublishHorizontalProductList(getNameOfHorizontalProductList(a)))
                    }
                })
            })
        }), t.find(".close").click(function () {
            t.removeClass("active")
        })
    }
}), $("body[data-time]").each(function () {
    var e, t, a, i, o, n, r, s, c = $(".flash-deal-box .timer"),
        l = c.length,
        d = [],
        u = function () {
            for (a = Date.now(), e = 0; e < l; e++) t = c.eq(e), i = Math.floor((1 * t.data("expires") - a) / 1e3), i > 0 ? (r = Math.floor(i / 86400), r > 1 ? (r += " days Left", t.text() !== r && t.text(r)) : (n = Math.floor(i / 3600), o = Math.floor(i / 60) % 60, o < 10 && (o = "0" + o), i %= 60, i < 10 && (i = "0" + i), t.text(n + ":" + o + ":" + i + " Left"))) : d.push(t);
            if (d.length > 0) {
                for (e = 0; e < d.length; e++) t = d[e], 1 === t.closest("#deals-grid").length ? t.closest("li").fadeOut(300, function () {
                    $(this).remove()
                }) : 1 === t.closest("#slides").length ? (t = t.closest("a"), t.siblings("a").length > 0 ? t.hasClass("current") ? (t.siblings(".slides-arrow-next").click(), t.fadeOut(300, function () {
                    $(this).closest("#slides").addClass("refresh"), $(this).remove()
                })) : (t.closest("#slides").addClass("refresh"), t.remove()) : t.closest("#slides").fadeOut(300, function (e) {
                    return function () {
                        e.remove()
                    }
                }(t))) : 1 === t.closest("#deal-product-list").length ? (t.text("").addClass("timer-expired").removeClass("timer"), $("#product-list li").remove(), void 0 !== s && s.setUrl(!1, !0), $("#product-list").fadeOut()) : 1 === t.closest("#price-block").length ? (t.closest(".flash-deal-box").remove(), $("#images").trigger("removediscount")) : 1 === t.closest("p.product-cart-descr-sale").length && (t.closest("p.product-cart-descr-sale").fadeOut(300, function () {
                    $(this).remove()
                }), $.ajax({
                    headers: {
                        "cache-control": "no-cache"
                    },
                    url: "/?controller=cart&ajax=true&summary=true&rand=" + (new Date).getTime(),
                    async: !0,
                    cache: !1,
                    dataType: "json",
                    success: function (e) {
                        void 0 !== e.summary && updateCartSummary(e.summary)
                    }
                }));
                c = $(".flash-deal-box .timer"), l = c.length, d = []
            }
        };
    if (l > 0) {
        for (e = 0; e < l; e++) t = c.eq(e), t.data("expires", 1e3 * t.data("expires"));
        window.setInterval(u, 1e3), u()
    }
    $("#deal-product-list #product-list").each(function () {
        s = new masonry($(this)), s.setUrl("/?fc=module&module=icacanvas&controller=deal&ajax=true&slug=" + $(this).attr("data-slug"), !0)
    })
}), $(function () {
    $("body").off("click", "#product-add-to-favorites[data-id-product], .product-list li .add-to-favorites[data-id-product]").on("click", "#product-add-to-favorites[data-id-product], .product-list li .add-to-favorites[data-id-product]", function (e) {
        var t = $(this).data("config");
        dynamicLoadService && !dynamicLoadService.isLogged() ? $("#please-sign-in").fadeIn(250) : toggleFavorite(this, t)
    })
});
var tracking = function () {
        var e = {
                storage: null
            },
            t = {},
            a = [],
            i = [],
            o = {};
        return {
            app: function (t) {
                $.extend(e, t)
            },
            setEcommerceEvent__default: function () {
                var e = this.getPushProducts();
                return !!e.length && this.addToGTM({
                    ecommerce: {
                        impressions: e
                    }
                })
            },
            setEcommerceEvent__productView: function () {
                var e = this.getPushActionField(),
                    t = this.getPushProducts();
                return !($.isEmptyObject(e) || !t.length) && this.addToGTM({
                    ecommerce: {
                        detail: {
                            actionField: e,
                            products: t
                        }
                    }
                })
            },
            setEcommerceEvent__productClick: function () {
                var e = this.getPushActionField(),
                    t = this.getPushProducts();
                return !($.isEmptyObject(e) || !t.length) && this.addToGTM({
                    event: "productClick",
                    ecommerce: {
                        click: {
                            actionField: e,
                            products: t
                        }
                    }
                })
            },
            setEcommerceEvent__addToCart: function () {
                var e = this.getPushActionField(),
                    t = this.getPushProducts();
                return !($.isEmptyObject(e) || !t.length) && this.addToGTM({
                    event: "addToCart",
                    ecommerce: {
                        currencyCode: "USD",
                        add: {
                            actionField: e,
                            products: t
                        }
                    }
                })
            },
            setEcommerceEvent__removeFromCart: function () {
                var e = this.getPushActionField(),
                    t = this.getPushProducts();
                return !($.isEmptyObject(e) || !t.length) && this.addToGTM({
                    event: "removeFromCart",
                    ecommerce: {
                        remove: {
                            actionField: e,
                            products: t
                        }
                    }
                })
            },
            setEcommerceEvent__checkout: function () {
                var e = this.getPushActionField(),
                    t = this.getPushProducts();
                return !($.isEmptyObject(e) || !t.length) && this.addToGTM({
                    event: "checkout",
                    ecommerce: {
                        checkout: {
                            actionField: e,
                            products: t
                        }
                    }
                })
            },
            setEcommerceEvent__purchase: function () {
                var e = this.getPushActionField(),
                    t = this.getPushProducts(),
                    a = this.getPushDiscountProducts();
                return !($.isEmptyObject(e) || !t.length) && this.addToGTM({
                    event: "purchase",
                    ecommerce: {
                        purchase: {
                            actionField: e,
                            products: t,
                            disc_products: a
                        }
                    }
                })
            },
            setPush: function (e) {
                "actionField" in e && this.setPushActionField(this.preparePushActionField(e.actionField)), "products" in e && this.setPushProducts(this.preparePushProducts(e.products)), "discount_products" in e && this.setPushDiscountProducts(this.preparePushProducts(e.discount_products)), "tree" in e && this.setPushFacetObject(this.prepareFacetEvents(e)), "element" in e && this.setPushFacetObject(this.prepareFilterAccordionEvents(e))
            },
            getPushDiscountProducts: function () {
                return i
            },
            setPushDiscountProducts: function (e) {
                i = e
            },
            getPushProducts: function () {
                return a
            },
            setPushProducts: function (e) {
                a = e
            },
            preparePushProducts: function (e) {
                var t = ["id", "name", "price", "category", "list", "variant"],
                    a = ["quantity", "position"];
                return e = $.map(e, function (e, i) {
                    for (var o in t) t[o] in e && (e[t[o]] = String(e[t[o]]));
                    for (var n in a) a[n] in e && (e[a[n]] = Number(e[a[n]]));
                    return e
                })
            },
            getPushActionField: function () {
                return t
            },
            setPushActionField: function (e) {
                t = e
            },
            preparePushActionField: function (e) {
                var t = ["id", "revenue", "tax", "shipping", "coupon", "list"];
                for (var a in t) t[a] in e && (e[t[a]] = String(e[t[a]]));
                return e
            },
            prepareFacetEvents: function (e) {
                return !1 === $(e.tree).hasClass("filter_tree") ? null : (this.setPushActionField("SelectFacet"), {
                    clickedParent: $(e.tree).find("> ul > li:first span.item-first").text().toLowerCase(),
                    clickedItem: "facet" in e ? $(e.facet).find("span:first").text().toLowerCase() : $(e.target).text().toLowerCase()
                })
            },
            prepareFilterAccordionEvents: function (e) {
                return this.setPushActionField("SelectFacet"), -1 !== ["Shape", "Color", "Product Type"].indexOf(e.element) ? {
                    clickedParent: $(e.target).closest(".filter-accordion-sub").attr("data-key"),
                    clickedItem: $(e.target).attr("data-value") ? $(e.target).attr("data-value") : $(e.target).parent().attr("data-type")
                } : "clear" === e.element ? {
                    clickedParent: $(e.filter_accordion_clear_click_touch).find("label.accordion-group-label span").text().toLowerCase(),
                    clickedItem: $(e.target).text()
                } : void 0
            },
            setPushFacetObject: function (e) {
                o = e
            },
            getPushFacetObject: function (e) {
                return o
            },
            setFacetEvent__select: function () {
                return this.setFacetActionEvent()
            },
            setFacetActionEvent__clear: function () {
                return this.setFacetActionEvent()
            },
            setFacetActionEvent__collapse: function () {
                return this.setFacetActionEvent()
            },
            setFacetActionEvent__expand: function () {
                return this.setFacetActionEvent()
            },
            setFacetActionEvent: function () {
                var e = this.getPushActionField(),
                    t = this.getPushFacetObject();
                return !$.isEmptyObject(e) && !$.isEmptyObject(t) && this.addToGTM({
                    event: e,
                    clickedParent: t.clickedParent,
                    clickedItem: t.clickedItem
                })
            },
            options: function () {
                return e
            },
            issetGTM: function () {
                return void 0 !== e.storage && null !== e.storage
            },
            addToGTM: function (t) {
                return !!this.issetGTM() && (e.storage.push(t), !0)
            }
        }
    }(),
    trackingGA = function () {
        var e = {
                trackingID: "UA-2165401-2",
                trackingDomain: "www.icanvas.com"
            },
            t = !1;
        return {
            app: function (t) {
                $.extend(e, t)
            },
            setGAEvent__checkoutErrors: function (e) {
                e.length && ga("send", "event", "Checkout Errors", "Errors", String(e), 1, {
                    nonInteraction: 1
                })
            },
            setGAEvent__subscribeErrors: function (e) {
                e.length && ga("send", "event", "Subscribe Errors", "Errors", String(e), 1, {
                    nonInteraction: 1
                })
            },
            setGAEvent__default: function () {
                t || (window.ga = window.ga || function () {
                    (ga.q = ga.q || []).push(arguments)
                }, ga.l = +new Date, ga("create", e.trackingID, e.trackingDomain), ga("require", "ec")), t = !0
            },
            setGAEvent__addImpression: function (e) {
                ga("ec:addImpression", {
                    id: e.id,
                    name: e.name,
                    category: e.category,
                    list: e.list,
                    position: e.position,
                    price: e.price
                })
            },
            setGAEvent__checkoutNewUserOrGuest: function (e) {
                ga("send", "event", "Checkout Page", "Address info submission", String(e), 1, {
                    nonInteraction: 1
                })
            }
        }
    }();
tracking.app({
    storage: dataLayer
}), $.subscribe("product/listloaded", function (e, t) {
    void 0 === window.ga ? (tracking.setPush(t), tracking.setEcommerceEvent__default()) : "products" in t && (trackingGA.setGAEvent__default(), $.each(t.products, function (e, t) {
        trackingGA.setGAEvent__addImpression(t)
    }))
}), $.subscribe("product/view", function (e, t) {
    tracking.setPush(t), tracking.setEcommerceEvent__productView()
}), $.subscribe("product/click", function (e, t) {
    tracking.setPush(t), tracking.setEcommerceEvent__productClick()
}), $.subscribe("slider/toggle/", function (e, t) {
    tracking.setPush(t), tracking.setEcommerceEvent__default()
}), $.subscribe("cart/load", function (e, t) {
    tracking.setPush(t), tracking.setEcommerceEvent__checkout()
}), $.subscribe("cart/add", function (e, t) {
    tracking.setPush(t), tracking.setEcommerceEvent__addToCart()
}), $.subscribe("cart/remove", function (e, t) {
    tracking.setPush(t), tracking.setEcommerceEvent__removeFromCart()
}), $.subscribeOnce("order/confirm", function (e, t) {
    tracking.setPush(t), tracking.setEcommerceEvent__purchase()
}), $.subscribe("facets/facet/select", function (e, t) {
    tracking.setPush(t), tracking.setFacetEvent__select()
}), $.subscribe("facets/actions/clear/click", function (e, t) {
    tracking.setPush(t), tracking.setFacetActionEvent__clear()
}), $.subscribe("facets/actions/clear/touch", function (e, t) {
    tracking.setPush(t), tracking.setFacetActionEvent__clear()
}), $.subscribe("facets/actions/less/click", function (e, t) {
    tracking.setPush(t), tracking.setFacetActionEvent__collapse()
}), $.subscribe("facets/actions/more/click", function (e, t) {
    tracking.setPush(t), tracking.setFacetActionEvent__expand()
}), $(function () {
    initProductsEventListener()
}), $.subscribe("adestra_cart/add", function (e, t) {
    processAdestraTracking(t)
}), $.subscribeOnce("adestra_cart/update", function (e, t) {
    processAdestraTracking(t)
}), $.subscribe("adestra_cart/repeated_update", function (e, t) {
    processAdestraTracking(t)
}), $.subscribe("adestra_cart/delete", function (e, t) {
    processAdestraTracking(t)
}), $.subscribeOnce("adestra_order/confirm", function (e, t) {
    processAdestraTracking(t)
}), $.subscribe("user/login", function (e, t) {
    var a = dynamicLoadService.getServiceRequestMarker();
    $.ajax({
        url: "/?fc=module&module=icacanvas&controller=syncservices&action=getTrackingPixel&ajax=true" + (a ? "&_=" + a : ""),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: [],
        success: function (e) {
            "success" === e.result && "url" in e.data && e.data.url.length && $.publish("adestra_cart/update", e.data.url)
        }
    })
}), $(function () {
    "undefined" != typeof gtmProductsItem && gtmProductsItem && (pageProduct__Load__publish(gtmProductsItem), "undefined" != typeof gtmActionField && gtmActionField && pageProduct__ProductView__publish(gtmActionField, gtmProductsItem))
}), $(function () {
    $("#ica-checkout").each(function () {
        $("#checkout-new-account-or-guest .button").click(function () {
            $("#login_form").parent("div.form-column").hide(), $("#new_account_form").addClass("single-col").removeClass("double-col").parent("div.form-column").removeClass("form-column");
            var e = $("#opc_new_account .checkout-section-title");
            e.html(e.html().replace("Account", "Checkout")), $.scrollTo(".checkout-section-title")
        }), $("#checkout-now-header").click(function () {
            return orderValidate($(this), checkoutNowValidateCallback, "checkCartRulesExpired"), !1
        }), $("#payment-tabs li").click(function () {
            var e = $(this),
                t = $("#" + e.attr("data-payment-method"));
            if ("payment_klarna" === e.data("payment-method") && displayKlarnaPaymentContainer(), e.hasClass("selected")) return void (t.is(":hidden") && $("#HOOK_PAYMENT .ica-payment-method").hide().filter(t).show());
            $("#payment-tabs li").not(this).removeClass("selected"), e.addClass("selected"), $("#HOOK_PAYMENT > *").not("#cod_module").not(t).slideUp(), t.slideDown()
        }), $(".product-cart-descr-gift").click(function () {
            var e = $(this);
            $.getJSON("/module/icacanvas/cartgift", {
                id: e.data("id"),
                rand: Math.floor(1e6 * Math.random())
            }, function (t) {
                void 0 !== t.success && t.success && e.toggleClass("checked", t.is_gift)
            })
        }), updatePaymentMethodTabs()
    })
});
var crossSell = function () {
    var e = {
        page: null,
        url: window.location.href,
        container_id: ""
    };
    return {
        app: function (t) {
            $.extend(e, t)
        },
        getIcaRecommendations: function () {
            var t = this;
            $.ajax({
                type: "POST",
                url: e.url,
                async: !0,
                dataType: "json",
                data: {
                    ica_ajax: !0,
                    ica_method: "getIcaRecommendations"
                },
                success: function (e, a) {
                    e.hasError && !1 !== e.hasError || (t.getContainer().html(e.html), icaHorizontalProductList(t.getContainerListElName()), icaHorizontalProductListInitialScroll(t.getContainerListElName()))
                }
            })
        },
        getContainer: function () {
            return $("#" + e.container_id)
        },
        getContainerListElName: function () {
            return "#" + e.container_id + " .horizontal-list-outer"
        },
        isContainer: function () {
            return this.getContainer().length
        },
        isReady: function () {
            return null !== e.page && e.url.length && this.isContainer()
        }
    }
}();
$(document).ready(function () {
    var e = Schema.getPrice();
    KlarnaPlacement.isSatisfyForDisplayByPrice(e) && (KlarnaPlacement.createPlacement("klarna-widget-placement", "credit-promotion-small"), KlarnaPlacement.addPriceToPurchaseAmount(e), KlarnaPlacement.refreshPlacement()), $(window).scroll(function () {
        if (detectMedia(760)) {
            var e = $("#options-depth"),
                t = $("#price-block"),
                a = e.offset().top,
                i = e.outerHeight(),
                o = $(window).height();
            $(this).scrollTop() > a + i - o + 150 ? t.removeClass("fixed") : t.addClass("fixed")
        }
    })
}), $(function () {}), $(function () {}), $("#images").each(function () {
    function e() {
        return getClassByPrefix($("#thumbnails li.selected"), "position-")
    }

    function t() {
        return void 0 !== w.attr("data-configuration") ? JSON.parse(w.attr("data-configuration")) : {}
    }

    function a(e) {
        w.attr("data-configuration", JSON.stringify(e))
    }

    function i() {
        var e = getClassByPrefix(w, "pc-");
        return getClassByPrefix($("#options-type li.selected"), "type-") + "-" + e
    }

    function o() {
        return -1 === $("section#images").attr("class").indexOf("position-")
    }

    function n(e) {
        return $(e).hasClass("canvas") && D.hasClass("zoom")
    }

    function r() {
        return $('meta[property="og:image"]').attr("content")
    }

    function s() {
        return r().split(".").slice(0, -1).join(".").split("/").slice(0, -1).join("/") + "/"
    }

    function c() {
        return 1 * $('meta[property="og:image:width"]').attr("content")
    }

    function l() {
        return 1 * $('meta[property="og:image:height"]').attr("content")
    }

    function d() {
        return r().split(".").slice(0, -1).join(".").split("/").pop()
    }

    function u() {
        return $("#columns").attr("data-id-product")
    }

    function f() {
        return {
            "2d": [r()],
            names: [d()],
            image_size: {
                width: c(),
                height: l()
            },
            notify: {
                check_path: r(),
                reference: d(),
                id: u()
            },
            path: s(),
            reference: d()
        }
    }

    function p(e) {
        return new Promise(function (t, a) {
            var i = new Image;
            i.onload = function () {
                t({
                    width: this.width,
                    height: this.height
                })
            }, i.onerror = function () {
                a(e)
            }, i.src = e
        })
    }

    function h() {
        "undefined" != typeof PhotoSwipe && detectMedia() ? m() : "undefined" != typeof PhotoSwipe && o() ? m() : D.toggleClass("zoom")
    }

    function m() {
        if ("undefined" != typeof PhotoSwipe) {
            var e = c(),
                t = l(),
                a = {},
                i = document.querySelectorAll(".pswp")[0],
                o = [];
            "undefined" == typeof icaProductTypeList ? (a = f(), icaProductTypeList = btoa(JSON.stringify(a))) : a = JSON.parse(atob(icaProductTypeList));
            var n = {
                history: !0,
                focus: !1,
                tapToClose: !0,
                tapToToggleControls: !1,
                showAnimationDuration: 0,
                hideAnimationDuration: 0,
                showHideOpacity: !0
            };
            p(a.names.length ? a["2d"] : a.start_point).then(function (e) {
                o = v(10 * e.width, 10 * e.height), new PhotoSwipe(i, PhotoSwipeUI_Default, o, n).init()
            }).catch(function (r) {
                p(a["2d"]).then(function (e) {
                    o = v(e.width, e.height), new PhotoSwipe(i, PhotoSwipeUI_Default, o, n).init()
                }).catch(function (a) {
                    o = v(e, t), new PhotoSwipe(i, PhotoSwipeUI_Default, o, n).init()
                })
            })
        }
    }

    function v(e, t) {
        var a = Math.ceil(50 * Math.max(window.screen.availHeight / t + .3, window.screen.availWidth / e + .3)) / 50;
        return [
            {
                src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                w: e * a,
                h: t * a,
                pid: "main-image"
            }]
    }

    function g(e, t) {
        $.get("/", {
            fc: "module",
            module: "icacanvas",
            controller: "cart",
            action: "response",
            ajax: "true",
            token: window.static_token,
            rand: Math.floor(1e6 * Math.random())
        }, function (e) {
            y("Item successfully added to cart", e)
        })
    }

    function y(e, t) {
        Ie(e, t), N.find(".horizontal-list-outer").length && (N.find(".horizontal-list-outer").off("click", ".product-list li .add-to-favorites").on("click", ".product-list li .add-to-favorites", function (e) {
            $(this).is("[data-id-product]") || $(this).is("[data-modal]") && $("#" + $(this).attr("data-modal") + ":first").showModal()
        }), icaHorizontalProductList("#cart-action-modal .horizontal-list-outer"), icaHorizontalProductListInitialScroll("#cart-action-modal .horizontal-list-outer"))
    }

    var b, w = $(this),
        x = $("#large-image li"),
        C = $("#thumbnails li"),
        _ = $("#options-type li"),
        k = $("#options-amount li"),
        P = $("#options-pc li"),
        S = $("#options-size li"),
        I = $("#options-depth li"),
        T = $("#options-frame2 li"),
        E = $("#options-color li"),
        O = $("#frame-value"),
        M = $("#frame-change"),
        A = $("#price-old span"),
        F = $("#price"),
        L = $("#price-msrp span"),
        D = ($("#product-zoom"), $("#product-main")),
        N = $("#cart-action-modal"),
        R = N.find(".modal-title"),
        z = N.find(".modal-body"),
        j = $("#options"),
        H = $("#columns").attr("data-id-product"),
        B = $.isEmptyObject(window.typeIcaVariants) ? {} : JSON.parse(JSON.stringify(window.typeIcaVariants)),
        V = window.typeIcaVariants,
        U = null,
        q = null,
        Z = !1,
        W = {
            mw: "FM02",
            mg: "FM03",
            m: "FM01",
            nw: "FM06"
        },
        K = {
            16: "s",
            24: "m"
        },
        G = j.attr("data-group"),
        J = function () {
            var e = $("#options-type li.selected"),
                t = Number(e.attr("data-value")),
                a = Number(e.attr("data-view")),
                o = e.attr("data-anchor-group-" + G);
            if (3 !== t) {
                toggleFramingOptions(t, a), toggleRecentlyViewed(t);
                !$e(i()) && o && me(o), X()
            }
        },
        Y = function () {
            var e = (Number($("#options-type li.selected").attr("data-value")), Number($("#options-type li.selected").attr("data-view")), Number($("#options-pc li.selected").attr("data-value")));
            _.filter(".selected").attr("data-preselected-piece", e)
        },
        X = function () {
            var e, t = Number($("#options-type li.selected").attr("data-value")),
                a = Number($("#options-type li.selected").attr("data-view")),
                i = Number($("#options-type li.selected").attr("data-preselected-piece")),
                o = Object.keys(V[t][a]);
            1 === t && 2 === a || 2 === t ? P.parents(".filter:first").addClass("hide-preselected") : P.parents(".filter:first").removeClass("hide-preselected");
            for (var n = P.length; n--;) e = P.eq(n), e.toggleClass("active", -1 !== $.inArray(e.attr("data-value"), o));
            e = P.filter('[data-value = "' + i + '"]').length ? P.filter('[data-value = "' + i + '"]') : P.filter(".selected"), e.hasClass("active") ? e.removeClass("selected") : e = P.filter(".active:first"), e.click()
        },
        Q = function () {
            for (var e, t = $("#options-type li.selected").attr("data-value"), a = $("#options-type li.selected").attr("data-view"), i = $("#options-pc li.selected").attr("data-value"), o = Object.keys(B[t][a][i]), n = S.length; n--;) e = S.eq(n), e.toggleClass("active", -1 !== $.inArray(e.attr("data-value"), o));
            ee(), e = S.not(".excluded").filter(".selected"), e.hasClass("active") ? e.removeClass("selected") : e = S.not(".excluded").filter(".active:first"), e.click()
        },
        ee = function () {
            var e, t = $("#options-type li.selected").attr("data-value"),
                a = $("#options-type li.selected").attr("data-view"),
                i = $("#options-pc li.selected").attr("data-value"),
                o = Object.keys(V[t][a][i]),
                n = !1;
            $.each(S.filter(".active"), function (t, a) {
                e = $(a);
                var i = -1 === $.inArray(e.attr("data-value"), o);
                e.toggleClass("excluded", i), n = n || i
            }), $(".sizes_excluded_text").toggle(n)
        },
        te = function (e) {
            for (var t, a = $("#options-type li.selected").attr("data-value"), i = $("#options-type li.selected").attr("data-view"), o = $("#options-pc li.selected").attr("data-value"), n = $("#options-size li.selected").attr("data-value"), r = Object.keys(V[a][i][o][n]), s = I.length; s--;) t = I.eq(s), t.toggleClass("active", -1 !== $.inArray(t.attr("data-value"), r));
            e && (t = I.filter(".selected"), t.hasClass("active") ? t.removeClass("selected") : t = I.filter(".active:first"), t.click())
        },
        ae = function () {
            var e, t, a = Number($("#options-type li.selected").attr("data-value")),
                o = Number($("#options-type li.selected").attr("data-view")),
                n = $("#options-type li.selected").attr("data-anchor-group-" + G),
                r = $("#options-pc li.selected").attr("data-value"),
                s = $("#options-size li.selected").attr("data-value"),
                c = $("#options-depth li.selected").attr("data-value"),
                l = ($("#options-color li.selected").attr("data-value"), V[a][o][r][s]),
                d = V[a][o][r][s][c].frames || !1;
            if (!1 === d) {
                w.removeClass(w.attr("class").match(/\bframe-[a-z0-9]+\b/g).join(" ")).addClass("frame-n"), T.parents(".filter:first").addClass("hide-preselected"), E.parents(".filter:first").addClass("hide-preselected"), I.parents(".filter:first").removeClass("hide-preselected");
                for (var u = 0; u < T.length; u++) e = T.eq(u), e.removeClass("selected"), "n" === e.attr("data-value") && e.addClass("selected");
                return ce(), _e(), xe(), ee(), void te(!1)
            }
            T.parents(".filter:first").removeClass("hide-preselected"), I.parents(".filter:first").addClass("hide-preselected"), E.parents(".filter:first").addClass("hide-preselected");
            for (var u = 0; u < T.length; u++) {
                e = T.eq(u), e.removeClass("active");
                for (var f in l) "frames" in l[f] && -1 !== $.inArray(e.attr("data-value"), Object.keys(l[f].frames)) && e.addClass("active")
            }
            $.each(d, function (e, a) {
                a.code && a.code == n && (t = e)
            });
            var p = $e(i());
            e = T.filter(".selected"), null === p && t && T.filter('.active[data-value="' + t + '"]').length ? (e.hasClass("active") && e.removeClass("selected"), e = T.filter('.active[data-value="' + t + '"]')) : e.hasClass("active") ? e.removeClass("selected") : e = T.filter(".active:first"), e.click()
        },
        ie = function () {
            var e = Number($("#options-type li.selected").attr("data-value")),
                t = Number($("#options-type li.selected").attr("data-view")),
                a = $("#options-pc li.selected").attr("data-value"),
                i = $("#options-size li.selected").attr("data-value"),
                o = $("#options-depth li.selected").attr("data-value"),
                n = V[e][t][a][i][o].frames || !1,
                r = Object.keys(n).map(function (e, t) {
                    return n[e].color
                }),
                s = $("#options-frame2 li.selected");
            if (0 != r.length) {
                for (var c = E.length; c--;) {
                    var l = E.eq(c);
                    l.toggleClass("active", -1 !== $.inArray(l.attr("data-frame"), Object.keys(n)) && -1 !== $.inArray(l.attr("data-value"), r)), s.attr("data-color") == l.attr("data-value") ? l.addClass("selected") : l.removeClass("selected")
                }
                E.parent().toggleClass("options-color-4-per-row", E.filter(".active").length > 5);
                var d = $("#options-color li.selected").attr("data-value");
                T.filter('[data-color != "' + d + '"]').removeClass("active"), E.parents(".filter:first").removeClass("hide-preselected")
            }
        },
        oe = function () {
            var e = Number($("#options-type li.selected").attr("data-value")),
                t = Number($("#options-type li.selected").attr("data-view")),
                a = $("#options-pc li.selected").attr("data-value"),
                i = $("#options-size li.selected").attr("data-value"),
                o = $("#options-depth li.selected").attr("data-value"),
                n = $("#options-color li.selected").attr("data-value"),
                r = V[e][t][a][i][o].frames || !1;
            if ($("#options-frame2 li.selected").attr("data-color") != n) {
                T.removeClass("selected");
                for (var s in r) r[s].color == n && T.filter('[data-value = "' + s + '"]').addClass("selected");
                ae()
            }
        },
        ne = function () {
            var e = Number($("#options-type li.selected").attr("data-value")),
                t = Number($("#options-type li.selected").attr("data-view")),
                a = $("#options-pc li.selected").attr("data-value"),
                i = $("#options-size li.selected").attr("data-value"),
                o = ($("#options-depth li.selected").attr("data-value"), V[e][t][a][i]),
                n = $("#options-frame2 li.selected").attr("data-value");
            for (var r in o) "frames" in o[r] && -1 !== $.inArray(n, Object.keys(o[r].frames)) && I.filter('[data-value="' + r + '"]').click()
        },
        re = function () {
            var e = Number($("#options-type li.selected").attr("data-value")),
                t = Number($("#options-type li.selected").attr("data-view")),
                a = $("#options-pc li.selected").attr("data-value"),
                i = $("#options-size li.selected").attr("data-value"),
                o = $("#options-depth li.selected").attr("data-value"),
                n = V[e][t][a][i],
                r = $("#options-frame2 li.selected").attr("data-value");
            return "frames" in n[o] && -1 !== $.inArray(r, Object.keys(n[o].frames))
        },
        se = function () {
            return 2 == Number($("#options-type li.selected").attr("data-value"))
        },
        ce = function () {
            var e, t, a = $("#options-type li.selected").attr("data-value"),
                i = $("#options-type li.selected").attr("data-view"),
                o = $("#options-pc li.selected").attr("data-value"),
                n = $("#options-size li.selected").attr("data-value"),
                r = $("#options-depth li.selected").attr("data-value"),
                s = $("#options-frame2 li.selected"),
                c = s.attr("data-value"),
                l = V[a][i][o][n][r],
                d = V[a][i][o][n][6],
                u = V[a][i][o][n][3],
                f = parseFloat(l.price) || 0,
                p = parseFloat(l.msrp) || 0,
                h = "",
                m = $("#standard-to-slim-discount");
            U = l.id || 0, q = l.code || "", "frames" in l && ("n" === c ? (O.html(""), M.removeClass("active")) : (e = l.frames[c], U = e.id, q = e.code, t = parseFloat(e.price), O.html(s.find("h3").text() + ": <strong>$" + t.toFixed(2) + "</strong>"), M.addClass("active"), f += t, p += parseFloat(e.msrp))), !1 !== Z && (A.text("$" + f.toFixed(2)), f = Math.floor(100 * Z(f)) / 100), KlarnaPlacement.updatePriceToPurchaseAmount(f, "klarna-widget-placement", "credit-promotion-small"), F.text("$" + f.toFixed(2)), L.text("$" + p.toFixed(2)), d && d.price && u && u.price && !isNaN(h = Math.floor((d.price - u.price) / d.price * 100)) && m.text("save " + h + "%"), fe(f.toFixed(2))
        },
        le = function () {
            var e = $("#options-type li.selected").attr("data-value"),
                t = $("#options-type li.selected").attr("data-view"),
                a = $("#options-amount li.selected").attr("data-value"),
                i = V[e][t][a],
                o = parseFloat(i.price) || 0,
                n = parseFloat(i.msrp) || 0;
            U = i.id || 0, q = i.code || "", !1 !== Z && (A.text("$" + o.toFixed(2)), o = Z(o)), F.text("$" + o.toFixed(2)), L.text("$" + n.toFixed(2))
        },
        de = function () {
            var e = ($("#options-type li.selected").attr("data-value"), $("#options-type li.selected").attr("data-view"), $("#options-amount li.selected").attr("data-value"));
            !1 === C.filter(":not(.example).a-" + e).hasClass("selected") && C.filter(":not(.example).a-" + e).trigger("click"), !1 === x.filter(":not(.example).a-" + e).hasClass("selected") && x.removeClass("selected").filter(":not(.example).a-" + e).addClass("selected")
        },
        ue = function () {
            var e = ($("#options-type li.selected").attr("data-value"), $("#options-type li.selected").attr("data-view"), $("#options-amount li.selected").attr("data-value")),
                t = C.filter(".example"),
                a = x.filter(".example"),
                i = 0;
            if (0 != t.length && 0 != a) {
                var o = t.attr("class").match(new RegExp("\\ba-[a-z0-9]+\\b", "g")),
                    n = "a-" + e;
                if (null != o && o.length)
                    for (; i < o.length; i++) o[i] !== n && (t.removeClass(o[i]), a.removeClass(o[i]));
                t.addClass(n).attr("data-amount", e), a.addClass(n).attr("data-amount", e)
            }
        },
        fe = function (e) {
            $("#trustpilot-container").attr("data-price", e)
        },
        pe = function (e, t) {
            var a = e.match(new RegExp(t));
            if (null !== a) {
                var i, o = a[2],
                    n = a[5],
                    r = a[4],
                    s = a[6] || !1,
                    c = !1,
                    l = !1,
                    d = getTypeByAnchor(e),
                    u = (a[1], !1 !== d ? d : icaProductType),
                    f = 1 == u && s ? 2 : 1,
                    p = !!(u in V && V[u][f]) && V[u][f],
                    h = e,
                    m = !1;
                if (!1 === p) return;
                if (!1 === (p = p[o] || !1)) return;
                for (var v in p)
                    if (void 0 !== p[v][r])
                        if ("code" in p[v][r]) {
                            if (p[v][r].code === h) {
                                n = v;
                                break
                            }
                        } else if ("frames" in p[v][r])
                            for (var l in p[v][r].frames)
                                if (p[v][r].frames[l].code === h) {
                                    n = v, m = l;
                                    break
                                }
                if (!1 !== m && (l = m), !1 === (p = p[n] || !1)) return;
                if (!1 === (p = p[r] || !1)) return;
                if (c = p.frames || !1, $('#options-type li[data-value="' + u + '"][data-view="' + f + '"]').trigger("click"), $('#options-pc li[data-value="' + o + '"]').trigger("click"), $('#options-size li[data-value="' + n + '"]').trigger("click"), $('#options-depth li[data-value="' + r + '"]').trigger("click"), $('#options-color li[data-frame="' + l + '"]').trigger("click"), s && c)
                    for (var g = 1; g < T.length; g++)
                        if (i = T.eq(g), frameCode = i.attr("data-value"), frameCode == l) {
                            T.removeClass("selected").filter('[data-value="' + frameCode + '"]').addClass("selected");
                            break
                        }
                toggleFramesView("#options-frame2-container"), be(se()), toggleFramingOptions(Number(u), Number(f)), toggleRecentlyViewed(Number(u))
            }
        },
        he = function (e, t) {
            var a = e.match(new RegExp(t));
            if (null !== a) {
                var i = a[2],
                    o = icaProductType,
                    n = V[o][1] || !1;
                if (!1 === n) return;
                $('#options-type li[data-value="' + o + '"][data-view="1"]').trigger("click"), $('#options-amount li[data-value="' + i + '"]').trigger("click")
            }
        },
        me = function (e) {
            var t = e || getAnchor(),
                a = /((\d+)(PC|PF)(.+)-(\d+x\d+))?(-F([a-z])(\d+))?/i,
                i = /(FX-(\d+))?/i;
            "" !== t && (3 === icaProductType ? he(t, i) : (pe(t, a), xe()))
        },
        ve = function (e) {
            null !== e && (me(e.code), ge(e.position))
        },
        ge = function (e) {
            void 0 === e || "" === e ? ye() : $("#thumbnails li.room." + e + ":not(.selected)").click()
        },
        ye = function () {
            var e = getClassByPrefix(w, "pc-");
            $("#thumbnails li.canvas." + e + ":not(.selected)").click()
        },
        be = function (e) {
            var t = $("#options-frame2-container").siblings("h3");
            e ? t.text(t.data("name-color")) : t.text(t.data("name-thickness"))
        },
        we = function () {
            var o = i(),
                n = t(),
                r = getAnchor();
            n[o] = {
                code: r,
                position: e()
            }, a(n)
        },
        $e = function (e) {
            var a = t();
            return e in a ? a[e] : null
        },
        xe = function () {
            var e, t = $("#options-type li.selected").attr("data-value"),
                a = $("#options-type li.selected").attr("data-view"),
                i = $("#options-pc li.selected").attr("data-value"),
                o = $("#options-size li.selected").attr("data-value"),
                n = $("#options-depth li.selected").attr("data-value"),
                r = $("#options-frame2 li.selected"),
                s = r.attr("data-value"),
                c = V[t][a][i][o][n],
                l = Ce("room-shots-tag"),
                d = $("#product-main").data("room-shot-tag");
            if (U = c.id || 0, q = c.code || "", "frames" in c) {
                if (void 0 === c.frames[s]) return;
                "n" !== s && (e = c.frames[s], U = e.id, q = e.code)
            }
            void 0 === l.data("code-" + q) && (l.data("code-" + q, "loading"), $.getJSON("/", {
                fc: "module",
                module: "icacanvas",
                controller: "roomshot",
                id_ica_canvasconfig: U,
                id_ica_room_shot_tag: d
            }, function (e) {
                "success" === e.status && l.append(e.data.css)
            }).done(function () {
                l.data("code-" + q, "loaded")
            }).fail(function () {
                l.removeData("code-" + q)
            }))
        },
        Ce = function (e) {
            var t = $("style#" + e);
            return 0 === t.length && (t = $("<style type='text/css'  id='" + e + "'></style>"), t.appendTo("body")), t
        },
        _e = function () {
            var e, t = $("#options-type li.selected").attr("data-value"),
                a = $("#options-type li.selected").attr("data-view"),
                i = $("#options-pc li.selected").attr("data-value"),
                o = $("#options-size li.selected").attr("data-value"),
                n = $("#options-depth li.selected").attr("data-value"),
                r = $("#options-frame2 li.selected"),
                s = r.attr("data-value"),
                c = V[t][a][i][o][n],
                l = c.code;
            if (Se(t), "frames" in c && "n" !== s && (e = c.frames[s], l = e.code), -1 !== ["m", "mw", "mg", "nw"].indexOf(s)) {
                var d = $("#product-main").attr("data-shape"),
                    u = o.split("x"),
                    f = Math.max(Number(u[0]), Number(u[1])),
                    p = "vertical" === d ? 0 : 1;
                // return true;
                imageSize = void 0 !== K[u[p]] ? K[u[p]] : "m",
                    $("#product-main").attr("data-shape-conf", f);
                var h = $("img.product-small-pic").attr("alt").split("/");
            }
            -1 !== ["mw", "mg", "nw"].indexOf(s) && s in W ? ($("img.product-small-pic").attr("alt", "//" + h[2] + "/" + h[3].replace("d=3", "d=2" + imageSize + "&fr=" + W[s])), $("img.product-big-pic").attr("alt", "//" + h[2] + "/" + h[3].replace("d=3", "d=2" + imageSize + "&fr=" + W[s]))) : ($("#large-image img.product-big-picture").remove(), $("#thumbnails img.product-small-picture").remove()), setAnchor(l), Pe(l), we(), TrustPilot.isSchemaExist() || TrustPilot.updateProductPageWidget();


            var v = getFavoriteType(t, a, i);
            if ($("#product-add-to-favorites").data("config", l), $("#product-add-to-favorites").data("type", v), void 0 !== $("#product-add-to-favorites").data("in-favorites")) {
                favorites_types = $("#product-add-to-favorites").data("in-favorites").split(",");
                var g = favorites_types.indexOf(v) > -1,
                    y = $("#product-add-to-favorites");
                y.toggleClass("active", g), y.hasClass("add-to-favorites") && y.closest("li").toggleClass("removed-from-favorites", !g), g && $("#header-favorites, #header-favorites-icon, #footer-favorites, .fav_count").addClass("active")
            }
        },
        ke = function () {
            var e = $("#options-type li.selected").attr("data-value"),
                t = $("#options-type li.selected").attr("data-view"),
                a = $("#options-amount li.selected").attr("data-value");
            setAnchor(V[e][t][a].code)
        },
        Pe = function (e) {
            var t = "code-" + e,
                a = w.attr("class").match(new RegExp("\\bcode-[-A-Za-z0-9]+\\b", "g")),
                i = 0;
            if (w.addClass(t), null != a && a.length)
                for (; i < a.length; i++) a[i] !== t && w.removeClass(a[i])
        },
        Se = function (e) {
            var t = e,
                a = "type-" + e,
                i = window.typePieces,
                o = $("#options-pc li.selected").attr("data-value"),
                n = w.attr("class").match(new RegExp("\\btype-[-A-Za-z0-9]+\\b", "g")),
                r = 0;
            if ($("img.product-small-pic").attr("alt", i[t][o].image_url_low), $("img.product-big-pic").attr("alt", i[t][o].image_url), $("#title-postfix").text(typeTitles[t]), $("#description-title-postfix").text(typeTitles[t]), $(".descriptions").hide(), $("#description-" + t).show(), $("title").text(meta_titles[t]), w.addClass(a), null != n && n.length)
                for (; r < n.length; r++) n[r] !== a && w.removeClass(n[r])
        },
        Ie = function (e, t) {
            R.html(e), z.html(t), N.showModal()
        },
        Te = function (e) {
            e = 1 === e.length ? "<p>" + e[0] + "</p>" : "<ol><li>" + e.join("</li><li>") + "</li></ol>", e = '<div class="alert alert-danger">' + e + "</div>", e += '<button class="button close">Keep shopping</button>', Ie("Shopping cart error", e)
        },
        Ee = function () {
            V = JSON.parse(JSON.stringify(B)), Oe(V), clearObjectEmpties(V)
        },
        Oe = function (e) {
            for (var t in e) {
                if (Object.keys(e).includes("groups")) {
                    var a = e.groups;
                    if (!Object.keys(a).map(function (e) {
                        return a[e]
                    }).includes(G)) {
                        delete e[t];
                        continue
                    }
                }
                "object" == typeof e[t] && Oe(e[t])
            }
        },
        Me = function () {
            $("#options .not-orderable-container").hide(), $("#options .orderable-container").show()
        },
        Ae = function () {
            $("#options .orderable-container").hide(), $("#options .not-orderable-container").show()
        };
    C.click(function () {
        var e = $(this),
            t = C.filter(".selected");
        n(this) && D.toggleClass("zoom"), e.hasClass("selected") || (t.removeClass("selected"), t.hasClass("room") && w.removeClass(t.attr("class")), e.hasClass("room") && w.addClass(e.attr("class")), e.addClass("selected"), we())
    }), w.on("click", "#large-image li", function (e) {
        detectMedia() && !w.hasClass("room") && (w.hasClass("frame-n") || w.hasClass("frame-m")) && m()
    }), w.on("click", "#product-zoom", function (e) {
        h()
    }), void 0 !== V && ($.subscribe("change_hash", function (e, t) {
        -1 !== t.hash.indexOf("&pid=main-image") && h()
    }), b = parseFloat(D.data("discount")), b > 0 && (F.addClass("sale"), "%" === D.data("discount-type") ? (b = 1 - b / 100, Z = function (e) {
        return e * b
    }) : "$" === D.data("discount-type") && (Z = function (e) {
        return e - b
    })), w.on("removediscount", function () {
        w.off("removediscount"), Z = !1, A.parent().remove(), F.removeClass("sale"), ce()
    }), $("#options li").click(function (e) {
        var t = $(this),
            a = t.siblings("li.selected"),
            o = t.parent().attr("prefix"),
            n = o + "-" + t.attr("data-value"),
            r = w.attr("class").match(new RegExp("\\b" + o + "-[a-z0-9]+\\b", "g")),
            s = 0;
        if (!t.hasClass("selected") && (3 === icaProductType || t.is("[data-group-" + G + "]"))) {
            if (a.removeClass("selected"), t.addClass("selected"), w.addClass(n), null != r && r.length)
                for (; s < r.length; s++) r[s] !== n && w.removeClass(r[s]);
            switch (o) {
                case "type":
                    J();
                    break;
                case "pc":
                    Y();
                    var c = $e(i());
                    null !== c ? ve(c) : ye(), Q();
                    break;
                case "size":
                    te(!0);
                    break;
                case "depth":
                    ae();
                    break;
                case "color":
                    oe();
                    break;
                case "frame":
                    se() && T.parents(".filter:first").addClass("hide-preselected"), ie(), ee(), !1 === re() ? ne() : (toggleFramesView("#options-frame2-container"), ce(), _e(), xe(), be(se()));
                    break;
                case "amount":
                    de(), le(), ke(), ue()
            }
        }
    }), 3 === icaProductType ? (me(getQueryParam("code")), le(), ke(), C.click(function () {
        var e = $(this);
        k.filter("[data-value=" + e.attr("data-amount") + "]").trigger("click"), e.hasClass("example") ? x.removeClass("selected").filter(".example").addClass("selected") : x.filter(".example").hasClass("selected") && (x.filter(".example").removeClass("selected"), x.filter(":not(.example).a-" + e.attr("data-amount")).addClass("selected"))
    }), $("#add-to-cart").click(function (e) {
        e.preventDefault(), $.getJSON("/", {
            fc: "module",
            module: "icacanvas",
            controller: "cart",
            ajax: "true",
            action: "product/gift_card/add",
            token: window.static_token,
            id_product: H,
            id_ica_canvasconfig: U,
            gift_card_form: $("#gift-card-form").serialize(),
            amount: $("#options-amount li.selected").attr("data-value"),
            rand: Math.floor(1e6 * Math.random())
        }, function (e) {
            void 0 !== e.hasError ? 0 == e.hasError ? ($("#header-cart-count").text(e.nbTotalProducts).addClass("active"), Ie("Item successfully added to cart", e.html)) : Te([e.errors]) : Te(["Unknown cart error"])
        })
    })) : (Ee(), $.isEmptyObject(V) ? Ae() : (me(getQueryParam("code")), ae(), Me()), $.subscribe("dynamic/load", function (e, t) {
        if (void 0 !== t.userGroup) {
            if (G === t.userGroup) return;
            G = t.userGroup, j.attr("data-group", G), Ee(), $.isEmptyObject(V) ? Ae() : (ae(), Me())
        }
    }), $("#add-to-cart").click(function (e) {
        e.preventDefault(), $.getJSON("/", {
            fc: "module",
            module: "icacanvas",
            controller: "cart",
            ajax: "true",
            token: window.static_token,
            id_product: H,
            id_ica_canvasconfig: U,
            rand: Math.floor(1e6 * Math.random())
        }, function (e) {
            if (void 0 === e.hasError ? Te(["Unknown cart error"]) : e.hasError ? Te(e.errors) : (e.html ? y("Item successfully added to cart", e.html) : g(H, U), void 0 !== e.nbTotalProducts && $("#header-cart-count").text(e.nbTotalProducts).addClass("active"), "undefined" != typeof gtmProductsItem && gtmProductsItem && "undefined" != typeof gtmActionField && gtmActionField && pageProduct__CartAdd__publish(gtmActionField, [
                {
                    id: gtmProductsItem[0].id,
                    name: gtmProductsItem[0].name,
                    price: $("#price").text().slice(1),
                    quantity: 1,
                    variant: q,
                    list: gtmProductsItem[0].list,
                    category: gtmProductsItem[0].category
                }]), "undefined" != typeof adestraTrackingUrl && adestraTrackingUrl && pageProduct__Adestra__CartAdd__publish(adestraTrackingUrl)), $(".tier-message").length > 0) {
                if ($(".tier-message[data-type=0]").length > 0) var t = $(".tier-message[data-type=0]").html();
                else if ($(".tier-message[data-type=1]").length > 0) var t = $(".tier-message[data-type=1]").html();
                t && $("#sitewide-banner-inner, #product-main .ica-coupon").html(t)
            }
        })
    })), null !== getUrlParameterByName("addtocart") && $("#add-to-cart").length && $("#add-to-cart").trigger("click"), "undefined" != typeof dataLayer && dataLayer.push({
        event: "optimize.activate"
    }))
});
var pageProduct = function () {
        var e = {
                page_key: null
            },
            t = $(".container-product");
        t.data("id-product"), t.data("reference");
        return {
            app: function (t) {
                $.extend(e, t)
            },
            showRelatedProducts: function () {
                void 0 !== crossSell && (crossSell.app({
                    page: e.page_key,
                    container_id: "related-container-" + e.page_key + "-parent-cross-sell"
                }), crossSell.isReady() && crossSell.getIcaRecommendations())
            },
            showTermsAndConditionsModal: function (e, t) {
                0 !== e.length && e.showModal()
            },
            viewStream: function () {}
        }
    }(),
    pageKey;
pageProduct.app({
    page_key: pageKey || null
}), pageProduct.showRelatedProducts(), pageProduct.viewStream();
var scrollHidden = function () {
    function e() {
        d.keydown(function (e) {
            var t = e.keyCode || e.which,
                a = d.scrollLeft();
            t === P.LEFT ? d.scrollLeft(a - 5) : t === P.RIGHT && d.scrollLeft(a + 5)
        })
    }

    function t(e, t) {
        return /touch/.test(e.type) ? (e.originalEvent || e).changedTouches[0]["page" + t] : e["page" + t]
    }

    function a(e) {
        if ("touchstart" === e.type) p = !0;
        else if (p) return p = !1, !1;
        return !0
    }

    function i(e) {
        a(e) && !h && (h = !0, x = t(e, "X"), C = t(e, "Y"), m = 0, v = 0, k = x, u = setTimeout(function () {
            w = !0
        }, 200), "mousedown" === e.type && $(document).on("mousemove", o).on("mouseup", n))
    }

    function o(e) {
        if (h) {
            if (g = t(e, "X"), y = t(e, "Y"), m = g - x, v = y - C, w || _ || b || (Math.abs(v) > 10 ? (b = !0, $(this).trigger("touchend")) : Math.abs(m) > 7 && (_ = !0)), _) {
                e.preventDefault();
                var a = I(g - k, S);
                k = g, d.scrollLeft(d.scrollLeft() - a)
            }
            w && e.preventDefault(), (Math.abs(m) > 5 || Math.abs(v) > 5) && clearTimeout(u)
        }
    }

    function n(e) {
        h && (h = !1, _ || w || !b && Math.abs(m) < 5 && Math.abs(v) < 5 && e.type, _ = !1, w = !1, b = !1, clearTimeout(u), "mouseup" === e.type && $(document).off("mousemove", o).off("mouseup", n))
    }

    function r() {
        if (void 0 !== f.align) return isNaN(parseInt(f.align)) ? void ("left" === f.align ? d.scrollLeft(0) : "right" === f.align && d.scrollLeft(99999)) : void d.scrollLeft(parseInt(f.align))
    }

    function s() {
        r()
    }

    function c() {
        d.on("touchstart mousedown", i).on("touchmove", o).on("touchend touchcancel", n)
    }

    function l() {
        $(window).on("resize", s).triggerHandler("resize")
    }

    var d, u, f, p, h, m, v, g, y, b, w, x, C, _, k, P = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
        },
        S = 40,
        I = function (e, t) {
            var a = e;
            return e > 0 ? e > t && (a = t) : e < 0 - t && (a = 0 - t), a
        };
    return {
        init: function (t) {
            f = t, d = f.target || $("#breadcrumbs"), e(), c(), f.align && l()
        }
    }
}();
$(function () {
    var e = detectMedia(760) ? "left" : "right";
    scrollHidden.init({
        align: e
    })
});