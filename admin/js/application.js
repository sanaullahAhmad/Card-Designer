(function() {
    var e, t, n, r, i, o, a, s, l, u;
    e = window.device, window.device = {}, n = window.document.documentElement, u = window.navigator.userAgent.toLowerCase(), device.ios = function() {
        return device.iphone() || device.ipod() || device.ipad()
    }, device.iphone = function() {
        return r("iphone")
    }, device.ipod = function() {
        return r("ipod")
    }, device.ipad = function() {
        return r("ipad")
    }, device.android = function() {
        return r("android")
    }, device.androidPhone = function() {
        return device.android() && r("mobile")
    }, device.androidTablet = function() {
        return device.android() && !r("mobile")
    }, device.blackberry = function() {
        return r("blackberry") || r("bb10") || r("rim")
    }, device.blackberryPhone = function() {
        return device.blackberry() && !r("tablet")
    }, device.blackberryTablet = function() {
        return device.blackberry() && r("tablet")
    }, device.windows = function() {
        return r("windows")
    }, device.windowsPhone = function() {
        return device.windows() && r("phone")
    }, device.windowsTablet = function() {
        return device.windows() && r("touch") && !device.windowsPhone()
    }, device.fxos = function() {
        return (r("(mobile;") || r("(tablet;")) && r("; rv:")
    }, device.fxosPhone = function() {
        return device.fxos() && r("mobile")
    }, device.fxosTablet = function() {
        return device.fxos() && r("tablet")
    }, device.meego = function() {
        return r("meego")
    }, device.cordova = function() {
        return window.cordova && "file:" === location.protocol
    }, device.nodeWebkit = function() {
        return "object" == typeof window.process
    }, device.mobile = function() {
        return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego()
    }, device.tablet = function() {
        return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet()
    }, device.desktop = function() {
        return !device.tablet() && !device.mobile()
    }, device.portrait = function() {
        return window.innerHeight / window.innerWidth > 1
    }, device.landscape = function() {
        return window.innerHeight / window.innerWidth < 1
    }, device.noConflict = function() {
        return window.device = e, this
    }, r = function(e) {
        return -1 !== u.indexOf(e)
    }, o = function(e) {
        var t;
        return t = new RegExp(e, "i"), n.className.match(t)
    }, t = function(e) {
        return o(e) ? void 0 : n.className += " " + e
    }, s = function(e) {
        return o(e) ? n.className = n.className.replace(e, "") : void 0
    }, device.ios() ? device.ipad() ? t("ios ipad tablet") : device.iphone() ? t("ios iphone mobile") : device.ipod() && t("ios ipod mobile") : t(device.android() ? device.androidTablet() ? "android tablet" : "android mobile" : device.blackberry() ? device.blackberryTablet() ? "blackberry tablet" : "blackberry mobile" : device.windows() ? device.windowsTablet() ? "windows tablet" : device.windowsPhone() ? "windows mobile" : "desktop" : device.fxos() ? device.fxosTablet() ? "fxos tablet" : "fxos mobile" : device.meego() ? "meego mobile" : device.nodeWebkit() ? "node-webkit" : "desktop"), device.cordova() && t("cordova"), i = function() {
        return device.landscape() ? (s("portrait"), t("landscape")) : (s("landscape"), t("portrait"))
    }, l = "onorientationchange" in window, a = l ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(a, i, !1) : window.attachEvent ? window.attachEvent(a, i) : window[a] = i, i()
}).call(this),
    function(e, t) {
        "use strict";
        var n, r, i = e,
            o = i.document,
            a = i.navigator,
            s = i.setTimeout,
            l = i.encodeURIComponent,
            u = i.ActiveXObject,
            c = i.Error,
            d = i.Number.parseInt || i.parseInt,
            p = i.Number.parseFloat || i.parseFloat,
            f = i.Number.isNaN || i.isNaN,
            h = i.Math.round,
            m = i.Date.now,
            v = i.Object.keys,
            g = i.Object.defineProperty,
            y = i.Object.prototype.hasOwnProperty,
            b = i.Array.prototype.slice,
            w = function() {
                var e = function(e) {
                    return e
                };
                if ("function" == typeof i.wrap && "function" == typeof i.unwrap) try {
                    var t = o.createElement("div"),
                        n = i.unwrap(t);
                    1 === t.nodeType && n && 1 === n.nodeType && (e = i.unwrap)
                } catch (r) {}
                return e
            }(),
            x = function(e) {
                return b.call(e, 0)
            },
            T = function() {
                var e, n, r, i, o, a, s = x(arguments),
                    l = s[0] || {};
                for (e = 1, n = s.length; n > e; e++)
                    if (null != (r = s[e]))
                        for (i in r) y.call(r, i) && (o = l[i], a = r[i], l !== a && a !== t && (l[i] = a));
                return l
            },
            C = function(e) {
                var t, n, r, i;
                if ("object" != typeof e || null == e) t = e;
                else if ("number" == typeof e.length)
                    for (t = [], n = 0, r = e.length; r > n; n++) y.call(e, n) && (t[n] = C(e[n]));
                else {
                    t = {};
                    for (i in e) y.call(e, i) && (t[i] = C(e[i]))
                }
                return t
            },
            k = function(e, t) {
                for (var n = {}, r = 0, i = t.length; i > r; r++) t[r] in e && (n[t[r]] = e[t[r]]);
                return n
            },
            E = function(e, t) {
                var n = {};
                for (var r in e) - 1 === t.indexOf(r) && (n[r] = e[r]);
                return n
            },
            N = function(e) {
                if (e)
                    for (var t in e) y.call(e, t) && delete e[t];
                return e
            },
            S = function(e, t) {
                if (e && 1 === e.nodeType && e.ownerDocument && t && (1 === t.nodeType && t.ownerDocument && t.ownerDocument === e.ownerDocument || 9 === t.nodeType && !t.ownerDocument && t === e.ownerDocument))
                    do {
                        if (e === t) return !0;
                        e = e.parentNode
                    } while (e);
                return !1
            },
            D = function(e) {
                var t;
                return "string" == typeof e && e && (t = e.split("#")[0].split("?")[0], t = e.slice(0, e.lastIndexOf("/") + 1)), t
            },
            j = function(e) {
                var t, n;
                return "string" == typeof e && e && (n = e.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/), n && n[1] ? t = n[1] : (n = e.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/), n && n[1] && (t = n[1]))), t
            },
            L = function() {
                var e, t;
                try {
                    throw new c
                } catch (n) {
                    t = n
                }
                return t && (e = t.sourceURL || t.fileName || j(t.stack)), e
            },
            A = function() {
                var e, n, r;
                if (o.currentScript && (e = o.currentScript.src)) return e;
                if (n = o.getElementsByTagName("script"), 1 === n.length) return n[0].src || t;
                if ("readyState" in n[0])
                    for (r = n.length; r--;)
                        if ("interactive" === n[r].readyState && (e = n[r].src)) return e;
                return "loading" === o.readyState && (e = n[n.length - 1].src) ? e : (e = L()) ? e : t
            },
            $ = function() {
                var e, n, r, i = o.getElementsByTagName("script");
                for (e = i.length; e--;) {
                    if (!(r = i[e].src)) {
                        n = null;
                        break
                    }
                    if (r = D(r), null == n) n = r;
                    else if (n !== r) {
                        n = null;
                        break
                    }
                }
                return n || t
            },
            F = function() {
                var e = D(A()) || $() || "";
                return e + "ZeroClipboard.swf"
            },
            O = {
                bridge: null,
                version: "0.0.0",
                pluginType: "unknown",
                disabled: null,
                outdated: null,
                unavailable: null,
                deactivated: null,
                overdue: null,
                ready: null
            },
            _ = "11.0.0",
            H = {},
            M = {},
            P = null,
            I = {
                ready: "Flash communication is established",
                error: {
                    "flash-disabled": "Flash is disabled or not installed",
                    "flash-outdated": "Flash is too outdated to support ZeroClipboard",
                    "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
                    "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate",
                    "flash-overdue": "Flash communication was established but NOT within the acceptable time limit"
                }
            },
            q = {
                swfPath: F(),
                trustedDomains: e.location.host ? [e.location.host] : [],
                cacheBust: !0,
                forceEnhancedClipboard: !1,
                flashLoadTimeout: 3e4,
                autoActivate: !0,
                bubbleEvents: !0,
                containerId: "global-zeroclipboard-html-bridge",
                containerClass: "global-zeroclipboard-container",
                swfObjectId: "global-zeroclipboard-flash-bridge",
                hoverClass: "zeroclipboard-is-hover",
                activeClass: "zeroclipboard-is-active",
                forceHandCursor: !1,
                title: null,
                zIndex: 999999999
            },
            R = function(e) {
                if ("object" == typeof e && null !== e)
                    for (var t in e)
                        if (y.call(e, t))
                            if (/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(t)) q[t] = e[t];
                            else if (null == O.bridge)
                    if ("containerId" === t || "swfObjectId" === t) {
                        if (!ne(e[t])) throw new Error("The specified `" + t + "` value is not valid as an HTML4 Element ID");
                        q[t] = e[t]
                    } else q[t] = e[t]; {
                        if ("string" != typeof e || !e) return C(q);
                        if (y.call(q, e)) return q[e]
                    }
            },
            B = function() {
                return {
                    browser: k(a, ["userAgent", "platform", "appName"]),
                    flash: E(O, ["bridge"]),
                    zeroclipboard: {
                        version: Ae.version,
                        config: Ae.config()
                    }
                }
            },
            W = function() {
                return !!(O.disabled || O.outdated || O.unavailable || O.deactivated)
            },
            z = function(e, t) {
                var n, r, i, o = {};
                if ("string" == typeof e && e) i = e.toLowerCase().split(/\s+/);
                else if ("object" == typeof e && e && "undefined" == typeof t)
                    for (n in e) y.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && Ae.on(n, e[n]);
                if (i && i.length) {
                    for (n = 0, r = i.length; r > n; n++) e = i[n].replace(/^on/, ""), o[e] = !0, H[e] || (H[e] = []), H[e].push(t);
                    if (o.ready && O.ready && Ae.emit({
                            type: "ready"
                        }), o.error) {
                        var a = ["disabled", "outdated", "unavailable", "deactivated", "overdue"];
                        for (n = 0, r = a.length; r > n; n++)
                            if (O[a[n]] === !0) {
                                Ae.emit({
                                    type: "error",
                                    name: "flash-" + a[n]
                                });
                                break
                            }
                    }
                }
                return Ae
            },
            X = function(e, t) {
                var n, r, i, o, a;
                if (0 === arguments.length) o = v(H);
                else if ("string" == typeof e && e) o = e.split(/\s+/);
                else if ("object" == typeof e && e && "undefined" == typeof t)
                    for (n in e) y.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && Ae.off(n, e[n]);
                if (o && o.length)
                    for (n = 0, r = o.length; r > n; n++)
                        if (e = o[n].toLowerCase().replace(/^on/, ""), a = H[e], a && a.length)
                            if (t)
                                for (i = a.indexOf(t); - 1 !== i;) a.splice(i, 1), i = a.indexOf(t, i);
                            else a.length = 0;
                return Ae
            },
            U = function(e) {
                var t;
                return t = "string" == typeof e && e ? C(H[e]) || null : C(H)
            },
            V = function(e) {
                var t, n, r;
                return e = re(e), e && !ue(e) ? "ready" === e.type && O.overdue === !0 ? Ae.emit({
                    type: "error",
                    name: "flash-overdue"
                }) : (t = T({}, e), le.call(this, t), "copy" === e.type && (r = me(M), n = r.data, P = r.formatMap), n) : void 0
            },
            Y = function() {
                if ("boolean" != typeof O.ready && (O.ready = !1), !Ae.isFlashUnusable() && null === O.bridge) {
                    var e = q.flashLoadTimeout;
                    "number" == typeof e && e >= 0 && s(function() {
                        "boolean" != typeof O.deactivated && (O.deactivated = !0), O.deactivated === !0 && Ae.emit({
                            type: "error",
                            name: "flash-deactivated"
                        })
                    }, e), O.overdue = !1, fe()
                }
            },
            Q = function() {
                Ae.clearData(), Ae.blur(), Ae.emit("destroy"), he(), Ae.off()
            },
            G = function(e, t) {
                var n;
                if ("object" == typeof e && e && "undefined" == typeof t) n = e, Ae.clearData();
                else {
                    if ("string" != typeof e || !e) return;
                    n = {}, n[e] = t
                }
                for (var r in n) "string" == typeof r && r && y.call(n, r) && "string" == typeof n[r] && n[r] && (M[r] = n[r])
            },
            J = function(e) {
                "undefined" == typeof e ? (N(M), P = null) : "string" == typeof e && y.call(M, e) && delete M[e]
            },
            K = function(e) {
                return "undefined" == typeof e ? C(M) : "string" == typeof e && y.call(M, e) ? M[e] : void 0
            },
            Z = function(e) {
                if (e && 1 === e.nodeType) {
                    n && (Ce(n, q.activeClass), n !== e && Ce(n, q.hoverClass)), n = e, Te(e, q.hoverClass);
                    var t = e.getAttribute("title") || q.title;
                    if ("string" == typeof t && t) {
                        var r = pe(O.bridge);
                        r && r.setAttribute("title", t)
                    }
                    var i = q.forceHandCursor === !0 || "pointer" === ke(e, "cursor");
                    De(i), Se()
                }
            },
            ee = function() {
                var e = pe(O.bridge);
                e && (e.removeAttribute("title"), e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.top = "1px"), n && (Ce(n, q.hoverClass), Ce(n, q.activeClass), n = null)
            },
            te = function() {
                return n || null
            },
            ne = function(e) {
                return "string" == typeof e && e && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e)
            },
            re = function(e) {
                var t;
                if ("string" == typeof e && e ? (t = e, e = {}) : "object" == typeof e && e && "string" == typeof e.type && e.type && (t = e.type), t) {
                    !e.target && /^(copy|aftercopy|_click)$/.test(t.toLowerCase()) && (e.target = r), T(e, {
                        type: t.toLowerCase(),
                        target: e.target || n || null,
                        relatedTarget: e.relatedTarget || null,
                        currentTarget: O && O.bridge || null,
                        timeStamp: e.timeStamp || m() || null
                    });
                    var i = I[e.type];
                    return "error" === e.type && e.name && i && (i = i[e.name]), i && (e.message = i), "ready" === e.type && T(e, {
                        target: null,
                        version: O.version
                    }), "error" === e.type && (/^flash-(disabled|outdated|unavailable|deactivated|overdue)$/.test(e.name) && T(e, {
                        target: null,
                        minimumVersion: _
                    }), /^flash-(outdated|unavailable|deactivated|overdue)$/.test(e.name) && T(e, {
                        version: O.version
                    })), "copy" === e.type && (e.clipboardData = {
                        setData: Ae.setData,
                        clearData: Ae.clearData
                    }), "aftercopy" === e.type && (e = ve(e, P)), e.target && !e.relatedTarget && (e.relatedTarget = ie(e.target)), e = oe(e)
                }
            },
            ie = function(e) {
                var t = e && e.getAttribute && e.getAttribute("data-clipboard-target");
                return t ? o.getElementById(t) : null
            },
            oe = function(e) {
                if (e && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)) {
                    var n = e.target,
                        r = "_mouseover" === e.type && e.relatedTarget ? e.relatedTarget : t,
                        a = "_mouseout" === e.type && e.relatedTarget ? e.relatedTarget : t,
                        s = Ne(n),
                        l = i.screenLeft || i.screenX || 0,
                        u = i.screenTop || i.screenY || 0,
                        c = o.body.scrollLeft + o.documentElement.scrollLeft,
                        d = o.body.scrollTop + o.documentElement.scrollTop,
                        p = s.left + ("number" == typeof e._stageX ? e._stageX : 0),
                        f = s.top + ("number" == typeof e._stageY ? e._stageY : 0),
                        h = p - c,
                        m = f - d,
                        v = l + h,
                        g = u + m,
                        y = "number" == typeof e.movementX ? e.movementX : 0,
                        b = "number" == typeof e.movementY ? e.movementY : 0;
                    delete e._stageX, delete e._stageY, T(e, {
                        srcElement: n,
                        fromElement: r,
                        toElement: a,
                        screenX: v,
                        screenY: g,
                        pageX: p,
                        pageY: f,
                        clientX: h,
                        clientY: m,
                        x: h,
                        y: m,
                        movementX: y,
                        movementY: b,
                        offsetX: 0,
                        offsetY: 0,
                        layerX: 0,
                        layerY: 0
                    })
                }
                return e
            },
            ae = function(e) {
                var t = e && "string" == typeof e.type && e.type || "";
                return !/^(?:(?:before)?copy|destroy)$/.test(t)
            },
            se = function(e, t, n, r) {
                r ? s(function() {
                    e.apply(t, n)
                }, 0) : e.apply(t, n)
            },
            le = function(e) {
                if ("object" == typeof e && e && e.type) {
                    var t = ae(e),
                        n = H["*"] || [],
                        r = H[e.type] || [],
                        o = n.concat(r);
                    if (o && o.length) {
                        var a, s, l, u, c, d = this;
                        for (a = 0, s = o.length; s > a; a++) l = o[a], u = d, "string" == typeof l && "function" == typeof i[l] && (l = i[l]), "object" == typeof l && l && "function" == typeof l.handleEvent && (u = l, l = l.handleEvent), "function" == typeof l && (c = T({}, e), se(l, u, [c], t))
                    }
                    return this
                }
            },
            ue = function(e) {
                var t = e.target || n || null,
                    i = "swf" === e._source;
                delete e._source;
                var o = ["flash-disabled", "flash-outdated", "flash-unavailable", "flash-deactivated", "flash-overdue"];
                switch (e.type) {
                    case "error":
                        -1 !== o.indexOf(e.name) && T(O, {
                            disabled: "flash-disabled" === e.name,
                            outdated: "flash-outdated" === e.name,
                            unavailable: "flash-unavailable" === e.name,
                            deactivated: "flash-deactivated" === e.name,
                            overdue: "flash-overdue" === e.name,
                            ready: !1
                        });
                        break;
                    case "ready":
                        var a = O.deactivated === !0;
                        T(O, {
                            disabled: !1,
                            outdated: !1,
                            unavailable: !1,
                            deactivated: !1,
                            overdue: a,
                            ready: !a
                        });
                        break;
                    case "beforecopy":
                        r = t;
                        break;
                    case "copy":
                        var s, l, u = e.relatedTarget;
                        !M["text/html"] && !M["text/plain"] && u && (l = u.value || u.outerHTML || u.innerHTML) && (s = u.value || u.textContent || u.innerText) ? (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", s), l !== s && e.clipboardData.setData("text/html", l)) : !M["text/plain"] && e.target && (s = e.target.getAttribute("data-clipboard-text")) && (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", s));
                        break;
                    case "aftercopy":
                        Ae.clearData(), t && t !== xe() && t.focus && t.focus();
                        break;
                    case "_mouseover":
                        Ae.focus(t), q.bubbleEvents === !0 && i && (t && t !== e.relatedTarget && !S(e.relatedTarget, t) && ce(T({}, e, {
                            type: "mouseenter",
                            bubbles: !1,
                            cancelable: !1
                        })), ce(T({}, e, {
                            type: "mouseover"
                        })));
                        break;
                    case "_mouseout":
                        Ae.blur(), q.bubbleEvents === !0 && i && (t && t !== e.relatedTarget && !S(e.relatedTarget, t) && ce(T({}, e, {
                            type: "mouseleave",
                            bubbles: !1,
                            cancelable: !1
                        })), ce(T({}, e, {
                            type: "mouseout"
                        })));
                        break;
                    case "_mousedown":
                        Te(t, q.activeClass), q.bubbleEvents === !0 && i && ce(T({}, e, {
                            type: e.type.slice(1)
                        }));
                        break;
                    case "_mouseup":
                        Ce(t, q.activeClass), q.bubbleEvents === !0 && i && ce(T({}, e, {
                            type: e.type.slice(1)
                        }));
                        break;
                    case "_click":
                        r = null, q.bubbleEvents === !0 && i && ce(T({}, e, {
                            type: e.type.slice(1)
                        }));
                        break;
                    case "_mousemove":
                        q.bubbleEvents === !0 && i && ce(T({}, e, {
                            type: e.type.slice(1)
                        }))
                }
                return /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type) ? !0 : void 0
            },
            ce = function(e) {
                if (e && "string" == typeof e.type && e) {
                    var t, n = e.target || null,
                        r = n && n.ownerDocument || o,
                        a = {
                            view: r.defaultView || i,
                            canBubble: !0,
                            cancelable: !0,
                            detail: "click" === e.type ? 1 : 0,
                            button: "number" == typeof e.which ? e.which - 1 : "number" == typeof e.button ? e.button : r.createEvent ? 0 : 1
                        },
                        s = T(a, e);
                    n && r.createEvent && n.dispatchEvent && (s = [s.type, s.canBubble, s.cancelable, s.view, s.detail, s.screenX, s.screenY, s.clientX, s.clientY, s.ctrlKey, s.altKey, s.shiftKey, s.metaKey, s.button, s.relatedTarget], t = r.createEvent("MouseEvents"), t.initMouseEvent && (t.initMouseEvent.apply(t, s), t._source = "js", n.dispatchEvent(t)))
                }
            },
            de = function() {
                var e = o.createElement("div");
                return e.id = q.containerId, e.className = q.containerClass, e.style.position = "absolute", e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.height = "1px", e.style.zIndex = "" + je(q.zIndex), e
            },
            pe = function(e) {
                for (var t = e && e.parentNode; t && "OBJECT" === t.nodeName && t.parentNode;) t = t.parentNode;
                return t || null
            },
            fe = function() {
                var e, t = O.bridge,
                    n = pe(t);
                if (!t) {
                    var r = we(i.location.host, q),
                        a = "never" === r ? "none" : "all",
                        s = ye(q),
                        l = q.swfPath + ge(q.swfPath, q);
                    n = de();
                    var u = o.createElement("div");
                    n.appendChild(u), o.body.appendChild(n);
                    var c = o.createElement("div"),
                        d = "activex" === O.pluginType;
                    c.innerHTML = '<object id="' + q.swfObjectId + '" name="' + q.swfObjectId + '" width="100%" height="100%" ' + (d ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + l + '"') + ">" + (d ? '<param name="movie" value="' + l + '"/>' : "") + '<param name="allowScriptAccess" value="' + r + '"/><param name="allowNetworking" value="' + a + '"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="' + s + '"/></object>', t = c.firstChild, c = null, w(t).ZeroClipboard = Ae, n.replaceChild(t, u)
                }
                return t || (t = o[q.swfObjectId], t && (e = t.length) && (t = t[e - 1]), !t && n && (t = n.firstChild)), O.bridge = t || null, t
            },
            he = function() {
                var e = O.bridge;
                if (e) {
                    var t = pe(e);
                    t && ("activex" === O.pluginType && "readyState" in e ? (e.style.display = "none", function n() {
                        if (4 === e.readyState) {
                            for (var r in e) "function" == typeof e[r] && (e[r] = null);
                            e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t)
                        } else s(n, 10)
                    }()) : (e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t))), O.ready = null, O.bridge = null, O.deactivated = null
                }
            },
            me = function(e) {
                var t = {},
                    n = {};
                if ("object" == typeof e && e) {
                    for (var r in e)
                        if (r && y.call(e, r) && "string" == typeof e[r] && e[r]) switch (r.toLowerCase()) {
                            case "text/plain":
                            case "text":
                            case "air:text":
                            case "flash:text":
                                t.text = e[r], n.text = r;
                                break;
                            case "text/html":
                            case "html":
                            case "air:html":
                            case "flash:html":
                                t.html = e[r], n.html = r;
                                break;
                            case "application/rtf":
                            case "text/rtf":
                            case "rtf":
                            case "richtext":
                            case "air:rtf":
                            case "flash:rtf":
                                t.rtf = e[r], n.rtf = r
                        }
                        return {
                            data: t,
                            formatMap: n
                        }
                }
            },
            ve = function(e, t) {
                if ("object" != typeof e || !e || "object" != typeof t || !t) return e;
                var n = {};
                for (var r in e)
                    if (y.call(e, r)) {
                        if ("success" !== r && "data" !== r) {
                            n[r] = e[r];
                            continue
                        }
                        n[r] = {};
                        var i = e[r];
                        for (var o in i) o && y.call(i, o) && y.call(t, o) && (n[r][t[o]] = i[o])
                    }
                return n
            },
            ge = function(e, t) {
                var n = null == t || t && t.cacheBust === !0;
                return n ? (-1 === e.indexOf("?") ? "?" : "&") + "noCache=" + m() : ""
            },
            ye = function(e) {
                var t, n, r, o, a = "",
                    s = [];
                if (e.trustedDomains && ("string" == typeof e.trustedDomains ? o = [e.trustedDomains] : "object" == typeof e.trustedDomains && "length" in e.trustedDomains && (o = e.trustedDomains)), o && o.length)
                    for (t = 0, n = o.length; n > t; t++)
                        if (y.call(o, t) && o[t] && "string" == typeof o[t]) {
                            if (r = be(o[t]), !r) continue;
                            if ("*" === r) {
                                s.length = 0, s.push(r);
                                break
                            }
                            s.push.apply(s, [r, "//" + r, i.location.protocol + "//" + r])
                        }
                return s.length && (a += "trustedOrigins=" + l(s.join(","))), e.forceEnhancedClipboard === !0 && (a += (a ? "&" : "") + "forceEnhancedClipboard=true"), "string" == typeof e.swfObjectId && e.swfObjectId && (a += (a ? "&" : "") + "swfObjectId=" + l(e.swfObjectId)), a
            },
            be = function(e) {
                if (null == e || "" === e) return null;
                if (e = e.replace(/^\s+|\s+$/g, ""), "" === e) return null;
                var t = e.indexOf("//");
                e = -1 === t ? e : e.slice(t + 2);
                var n = e.indexOf("/");
                return e = -1 === n ? e : -1 === t || 0 === n ? null : e.slice(0, n), e && ".swf" === e.slice(-4).toLowerCase() ? null : e || null
            },
            we = function() {
                var e = function(e) {
                    var t, n, r, i = [];
                    if ("string" == typeof e && (e = [e]), "object" != typeof e || !e || "number" != typeof e.length) return i;
                    for (t = 0, n = e.length; n > t; t++)
                        if (y.call(e, t) && (r = be(e[t]))) {
                            if ("*" === r) {
                                i.length = 0, i.push("*");
                                break
                            } - 1 === i.indexOf(r) && i.push(r)
                        }
                    return i
                };
                return function(t, n) {
                    var r = be(n.swfPath);
                    null === r && (r = t);
                    var i = e(n.trustedDomains),
                        o = i.length;
                    if (o > 0) {
                        if (1 === o && "*" === i[0]) return "always";
                        if (-1 !== i.indexOf(t)) return 1 === o && t === r ? "sameDomain" : "always"
                    }
                    return "never"
                }
            }(),
            xe = function() {
                try {
                    return o.activeElement
                } catch (e) {
                    return null
                }
            },
            Te = function(e, t) {
                if (!e || 1 !== e.nodeType) return e;
                if (e.classList) return e.classList.contains(t) || e.classList.add(t), e;
                if (t && "string" == typeof t) {
                    var n = (t || "").split(/\s+/);
                    if (1 === e.nodeType)
                        if (e.className) {
                            for (var r = " " + e.className + " ", i = e.className, o = 0, a = n.length; a > o; o++) r.indexOf(" " + n[o] + " ") < 0 && (i += " " + n[o]);
                            e.className = i.replace(/^\s+|\s+$/g, "")
                        } else e.className = t
                }
                return e
            },
            Ce = function(e, t) {
                if (!e || 1 !== e.nodeType) return e;
                if (e.classList) return e.classList.contains(t) && e.classList.remove(t), e;
                if ("string" == typeof t && t) {
                    var n = t.split(/\s+/);
                    if (1 === e.nodeType && e.className) {
                        for (var r = (" " + e.className + " ").replace(/[\n\t]/g, " "), i = 0, o = n.length; o > i; i++) r = r.replace(" " + n[i] + " ", " ");
                        e.className = r.replace(/^\s+|\s+$/g, "")
                    }
                }
                return e
            },
            ke = function(e, t) {
                var n = i.getComputedStyle(e, null).getPropertyValue(t);
                return "cursor" !== t || n && "auto" !== n || "A" !== e.nodeName ? n : "pointer"
            },
            Ee = function() {
                var e, t, n, r = 1;
                return "function" == typeof o.body.getBoundingClientRect && (e = o.body.getBoundingClientRect(), t = e.right - e.left, n = o.body.offsetWidth, r = h(t / n * 100) / 100), r
            },
            Ne = function(e) {
                var t = {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0
                };
                if (e.getBoundingClientRect) {
                    var n, r, a, s = e.getBoundingClientRect();
                    "pageXOffset" in i && "pageYOffset" in i ? (n = i.pageXOffset, r = i.pageYOffset) : (a = Ee(), n = h(o.documentElement.scrollLeft / a), r = h(o.documentElement.scrollTop / a));
                    var l = o.documentElement.clientLeft || 0,
                        u = o.documentElement.clientTop || 0;
                    t.left = s.left + n - l, t.top = s.top + r - u, t.width = "width" in s ? s.width : s.right - s.left, t.height = "height" in s ? s.height : s.bottom - s.top
                }
                return t
            },
            Se = function() {
                var e;
                if (n && (e = pe(O.bridge))) {
                    var t = Ne(n);
                    T(e.style, {
                        width: t.width + "px",
                        height: t.height + "px",
                        top: t.top + "px",
                        left: t.left + "px",
                        zIndex: "" + je(q.zIndex)
                    })
                }
            },
            De = function(e) {
                O.ready === !0 && (O.bridge && "function" == typeof O.bridge.setHandCursor ? O.bridge.setHandCursor(e) : O.ready = !1)
            },
            je = function(e) {
                if (/^(?:auto|inherit)$/.test(e)) return e;
                var t;
                return "number" != typeof e || f(e) ? "string" == typeof e && (t = je(d(e, 10))) : t = e, "number" == typeof t ? t : "auto"
            },
            Le = function(e) {
                function t(e) {
                    var t = e.match(/[\d]+/g);
                    return t.length = 3, t.join(".")
                }

                function n(e) {
                    return !!e && (e = e.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e) || "chrome.plugin" === e.slice(-13))
                }

                function r(e) {
                    e && (l = !0, e.version && (d = t(e.version)), !d && e.description && (d = t(e.description)), e.filename && (c = n(e.filename)))
                }
                var i, o, s, l = !1,
                    u = !1,
                    c = !1,
                    d = "";
                if (a.plugins && a.plugins.length) i = a.plugins["Shockwave Flash"], r(i), a.plugins["Shockwave Flash 2.0"] && (l = !0, d = "2.0.0.11");
                else if (a.mimeTypes && a.mimeTypes.length) s = a.mimeTypes["application/x-shockwave-flash"], i = s && s.enabledPlugin, r(i);
                else if ("undefined" != typeof e) {
                    u = !0;
                    try {
                        o = new e("ShockwaveFlash.ShockwaveFlash.7"), l = !0, d = t(o.GetVariable("$version"))
                    } catch (f) {
                        try {
                            o = new e("ShockwaveFlash.ShockwaveFlash.6"), l = !0, d = "6.0.21"
                        } catch (h) {
                            try {
                                o = new e("ShockwaveFlash.ShockwaveFlash"), l = !0, d = t(o.GetVariable("$version"))
                            } catch (m) {
                                u = !1
                            }
                        }
                    }
                }
                O.disabled = l !== !0, O.outdated = d && p(d) < p(_), O.version = d || "0.0.0", O.pluginType = c ? "pepper" : u ? "activex" : l ? "netscape" : "unknown"
            };
        Le(u);
        var Ae = function() {
            return this instanceof Ae ? void("function" == typeof Ae._createClient && Ae._createClient.apply(this, x(arguments))) : new Ae
        };
        g(Ae, "version", {
            value: "2.1.6",
            writable: !1,
            configurable: !0,
            enumerable: !0
        }), Ae.config = function() {
            return R.apply(this, x(arguments))
        }, Ae.state = function() {
            return B.apply(this, x(arguments))
        }, Ae.isFlashUnusable = function() {
            return W.apply(this, x(arguments))
        }, Ae.on = function() {
            return z.apply(this, x(arguments))
        }, Ae.off = function() {
            return X.apply(this, x(arguments))
        }, Ae.handlers = function() {
            return U.apply(this, x(arguments))
        }, Ae.emit = function() {
            return V.apply(this, x(arguments))
        }, Ae.create = function() {
            return Y.apply(this, x(arguments))
        }, Ae.destroy = function() {
            return Q.apply(this, x(arguments))
        }, Ae.setData = function() {
            return G.apply(this, x(arguments))
        }, Ae.clearData = function() {
            return J.apply(this, x(arguments))
        }, Ae.getData = function() {
            return K.apply(this, x(arguments))
        }, Ae.focus = Ae.activate = function() {
            return Z.apply(this, x(arguments))
        }, Ae.blur = Ae.deactivate = function() {
            return ee.apply(this, x(arguments))
        }, Ae.activeElement = function() {
            return te.apply(this, x(arguments))
        };
        var $e = 0,
            Fe = {},
            Oe = 0,
            _e = {},
            He = {};
        T(q, {
            autoActivate: !0
        });
        var Me = function(e) {
                var t = this;
                t.id = "" + $e++, Fe[t.id] = {
                    instance: t,
                    elements: [],
                    handlers: {}
                }, e && t.clip(e), Ae.on("*", function(e) {
                    return t.emit(e)
                }), Ae.on("destroy", function() {
                    t.destroy()
                }), Ae.create()
            },
            Pe = function(e, t) {
                var n, r, i, o = {},
                    a = Fe[this.id] && Fe[this.id].handlers;
                if ("string" == typeof e && e) i = e.toLowerCase().split(/\s+/);
                else if ("object" == typeof e && e && "undefined" == typeof t)
                    for (n in e) y.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && this.on(n, e[n]);
                if (i && i.length) {
                    for (n = 0, r = i.length; r > n; n++) e = i[n].replace(/^on/, ""), o[e] = !0, a[e] || (a[e] = []), a[e].push(t);
                    if (o.ready && O.ready && this.emit({
                            type: "ready",
                            client: this
                        }), o.error) {
                        var s = ["disabled", "outdated", "unavailable", "deactivated", "overdue"];
                        for (n = 0, r = s.length; r > n; n++)
                            if (O[s[n]]) {
                                this.emit({
                                    type: "error",
                                    name: "flash-" + s[n],
                                    client: this
                                });
                                break
                            }
                    }
                }
                return this
            },
            Ie = function(e, t) {
                var n, r, i, o, a, s = Fe[this.id] && Fe[this.id].handlers;
                if (0 === arguments.length) o = v(s);
                else if ("string" == typeof e && e) o = e.split(/\s+/);
                else if ("object" == typeof e && e && "undefined" == typeof t)
                    for (n in e) y.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && this.off(n, e[n]);
                if (o && o.length)
                    for (n = 0, r = o.length; r > n; n++)
                        if (e = o[n].toLowerCase().replace(/^on/, ""), a = s[e], a && a.length)
                            if (t)
                                for (i = a.indexOf(t); - 1 !== i;) a.splice(i, 1), i = a.indexOf(t, i);
                            else a.length = 0;
                return this
            },
            qe = function(e) {
                var t = null,
                    n = Fe[this.id] && Fe[this.id].handlers;
                return n && (t = "string" == typeof e && e ? n[e] ? n[e].slice(0) : [] : C(n)), t
            },
            Re = function(e) {
                if (Ue.call(this, e)) {
                    "object" == typeof e && e && "string" == typeof e.type && e.type && (e = T({}, e));
                    var t = T({}, re(e), {
                        client: this
                    });
                    Ve.call(this, t)
                }
                return this
            },
            Be = function(e) {
                e = Ye(e);
                for (var t = 0; t < e.length; t++)
                    if (y.call(e, t) && e[t] && 1 === e[t].nodeType) {
                        e[t].zcClippingId ? -1 === _e[e[t].zcClippingId].indexOf(this.id) && _e[e[t].zcClippingId].push(this.id) : (e[t].zcClippingId = "zcClippingId_" + Oe++, _e[e[t].zcClippingId] = [this.id], q.autoActivate === !0 && Qe(e[t]));
                        var n = Fe[this.id] && Fe[this.id].elements; - 1 === n.indexOf(e[t]) && n.push(e[t])
                    }
                return this
            },
            We = function(e) {
                var t = Fe[this.id];
                if (!t) return this;
                var n, r = t.elements;
                e = "undefined" == typeof e ? r.slice(0) : Ye(e);
                for (var i = e.length; i--;)
                    if (y.call(e, i) && e[i] && 1 === e[i].nodeType) {
                        for (n = 0; - 1 !== (n = r.indexOf(e[i], n));) r.splice(n, 1);
                        var o = _e[e[i].zcClippingId];
                        if (o) {
                            for (n = 0; - 1 !== (n = o.indexOf(this.id, n));) o.splice(n, 1);
                            0 === o.length && (q.autoActivate === !0 && Ge(e[i]), delete e[i].zcClippingId)
                        }
                    }
                return this
            },
            ze = function() {
                var e = Fe[this.id];
                return e && e.elements ? e.elements.slice(0) : []
            },
            Xe = function() {
                this.unclip(), this.off(), delete Fe[this.id]
            },
            Ue = function(e) {
                if (!e || !e.type) return !1;
                if (e.client && e.client !== this) return !1;
                var t = Fe[this.id] && Fe[this.id].elements,
                    n = !!t && t.length > 0,
                    r = !e.target || n && -1 !== t.indexOf(e.target),
                    i = e.relatedTarget && n && -1 !== t.indexOf(e.relatedTarget),
                    o = e.client && e.client === this;
                return r || i || o ? !0 : !1
            },
            Ve = function(e) {
                if ("object" == typeof e && e && e.type) {
                    var t = ae(e),
                        n = Fe[this.id] && Fe[this.id].handlers["*"] || [],
                        r = Fe[this.id] && Fe[this.id].handlers[e.type] || [],
                        o = n.concat(r);
                    if (o && o.length) {
                        var a, s, l, u, c, d = this;
                        for (a = 0, s = o.length; s > a; a++) l = o[a], u = d, "string" == typeof l && "function" == typeof i[l] && (l = i[l]), "object" == typeof l && l && "function" == typeof l.handleEvent && (u = l, l = l.handleEvent), "function" == typeof l && (c = T({}, e), se(l, u, [c], t))
                    }
                    return this
                }
            },
            Ye = function(e) {
                return "string" == typeof e && (e = []), "number" != typeof e.length ? [e] : e
            },
            Qe = function(e) {
                if (e && 1 === e.nodeType) {
                    var t = function(e) {
                            (e || (e = i.event)) && ("js" !== e._source && (e.stopImmediatePropagation(), e.preventDefault()), delete e._source)
                        },
                        n = function(n) {
                            (n || (n = i.event)) && (t(n), Ae.focus(e))
                        };
                    e.addEventListener("mouseover", n, !1), e.addEventListener("mouseout", t, !1), e.addEventListener("mouseenter", t, !1), e.addEventListener("mouseleave", t, !1), e.addEventListener("mousemove", t, !1), He[e.zcClippingId] = {
                        mouseover: n,
                        mouseout: t,
                        mouseenter: t,
                        mouseleave: t,
                        mousemove: t
                    }
                }
            },
            Ge = function(e) {
                if (e && 1 === e.nodeType) {
                    var t = He[e.zcClippingId];
                    if ("object" == typeof t && t) {
                        for (var n, r, i = ["move", "leave", "enter", "out", "over"], o = 0, a = i.length; a > o; o++) n = "mouse" + i[o], r = t[n], "function" == typeof r && e.removeEventListener(n, r, !1);
                        delete He[e.zcClippingId]
                    }
                }
            };
        Ae._createClient = function() {
            Me.apply(this, x(arguments))
        }, Ae.prototype.on = function() {
            return Pe.apply(this, x(arguments))
        }, Ae.prototype.off = function() {
            return Ie.apply(this, x(arguments))
        }, Ae.prototype.handlers = function() {
            return qe.apply(this, x(arguments))
        }, Ae.prototype.emit = function() {
            return Re.apply(this, x(arguments))
        }, Ae.prototype.clip = function() {
            return Be.apply(this, x(arguments))
        }, Ae.prototype.unclip = function() {
            return We.apply(this, x(arguments))
        }, Ae.prototype.elements = function() {
            return ze.apply(this, x(arguments))
        }, Ae.prototype.destroy = function() {
            return Xe.apply(this, x(arguments))
        }, Ae.prototype.setText = function(e) {
            return Ae.setData("text/plain", e), this
        }, Ae.prototype.setHtml = function(e) {
            return Ae.setData("text/html", e), this
        }, Ae.prototype.setRichText = function(e) {
            return Ae.setData("application/rtf", e), this
        }, Ae.prototype.setData = function() {
            return Ae.setData.apply(this, x(arguments)), this
        }, Ae.prototype.clearData = function() {
            return Ae.clearData.apply(this, x(arguments)), this
        }, Ae.prototype.getData = function() {
            return Ae.getData.apply(this, x(arguments))
        }, "function" == typeof define && define.amd ? define(function() {
            return Ae
        }) : "object" == typeof module && module && "object" == typeof module.exports && module.exports ? module.exports = Ae : e.ZeroClipboard = Ae
    }(function() {
        return this || window
    }());
var requirejs, require, define;
! function(e) {
    function t(e, t) {
        return g.call(e, t)
    }

    function n(e, t) {
        var n, r, i, o, a, s, l, u, c, d, p, f = t && t.split("/"),
            h = m.map,
            v = h && h["*"] || {};
        if (e && "." === e.charAt(0))
            if (t) {
                for (f = f.slice(0, f.length - 1), e = e.split("/"), a = e.length - 1, m.nodeIdCompat && b.test(e[a]) && (e[a] = e[a].replace(b, "")), e = f.concat(e), c = 0; c < e.length; c += 1)
                    if (p = e[c], "." === p) e.splice(c, 1), c -= 1;
                    else if (".." === p) {
                    if (1 === c && (".." === e[2] || ".." === e[0])) break;
                    c > 0 && (e.splice(c - 1, 2), c -= 2)
                }
                e = e.join("/")
            } else 0 === e.indexOf("./") && (e = e.substring(2));
        if ((f || v) && h) {
            for (n = e.split("/"), c = n.length; c > 0; c -= 1) {
                if (r = n.slice(0, c).join("/"), f)
                    for (d = f.length; d > 0; d -= 1)
                        if (i = h[f.slice(0, d).join("/")], i && (i = i[r])) {
                            o = i, s = c;
                            break
                        }
                if (o) break;
                !l && v && v[r] && (l = v[r], u = c)
            }!o && l && (o = l, s = u), o && (n.splice(0, s, o), e = n.join("/"))
        }
        return e
    }

    function r(t, n) {
        return function() {
            return c.apply(e, y.call(arguments, 0).concat([t, n]))
        }
    }

    function i(e) {
        return function(t) {
            return n(t, e)
        }
    }

    function o(e) {
        return function(t) {
            f[e] = t
        }
    }

    function a(n) {
        if (t(h, n)) {
            var r = h[n];
            delete h[n], v[n] = !0, u.apply(e, r)
        }
        if (!t(f, n) && !t(v, n)) throw new Error("No " + n);
        return f[n]
    }

    function s(e) {
        var t, n = e ? e.indexOf("!") : -1;
        return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
    }

    function l(e) {
        return function() {
            return m && m.config && m.config[e] || {}
        }
    }
    var u, c, d, p, f = {},
        h = {},
        m = {},
        v = {},
        g = Object.prototype.hasOwnProperty,
        y = [].slice,
        b = /\.js$/;
    d = function(e, t) {
        var r, o = s(e),
            l = o[0];
        return e = o[1], l && (l = n(l, t), r = a(l)), l ? e = r && r.normalize ? r.normalize(e, i(t)) : n(e, t) : (e = n(e, t), o = s(e), l = o[0], e = o[1], l && (r = a(l))), {
            f: l ? l + "!" + e : e,
            n: e,
            pr: l,
            p: r
        }
    }, p = {
        require: function(e) {
            return r(e)
        },
        exports: function(e) {
            var t = f[e];
            return "undefined" != typeof t ? t : f[e] = {}
        },
        module: function(e) {
            return {
                id: e,
                uri: "",
                exports: f[e],
                config: l(e)
            }
        }
    }, u = function(n, i, s, l) {
        var u, c, m, g, y, b, w = [],
            x = typeof s;
        if (l = l || n, "undefined" === x || "function" === x) {
            for (i = !i.length && s.length ? ["require", "exports", "module"] : i, y = 0; y < i.length; y += 1)
                if (g = d(i[y], l), c = g.f, "require" === c) w[y] = p.require(n);
                else if ("exports" === c) w[y] = p.exports(n), b = !0;
            else if ("module" === c) u = w[y] = p.module(n);
            else if (t(f, c) || t(h, c) || t(v, c)) w[y] = a(c);
            else {
                if (!g.p) throw new Error(n + " missing " + c);
                g.p.load(g.n, r(l, !0), o(c), {}), w[y] = f[c]
            }
            m = s ? s.apply(f[n], w) : void 0, n && (u && u.exports !== e && u.exports !== f[n] ? f[n] = u.exports : m === e && b || (f[n] = m))
        } else n && (f[n] = s)
    }, requirejs = require = c = function(t, n, r, i, o) {
        if ("string" == typeof t) return p[t] ? p[t](n) : a(d(t, n).f);
        if (!t.splice) {
            if (m = t, m.deps && c(m.deps, m.callback), !n) return;
            n.splice ? (t = n, n = r, r = null) : t = e
        }
        return n = n || function() {}, "function" == typeof r && (r = i, i = o), i ? u(e, t, n, r) : setTimeout(function() {
            u(e, t, n, r)
        }, 4), c
    }, c.config = function(e) {
        return c(e)
    }, requirejs._defined = f, define = function(e, n, r) {
        n.splice || (r = n, n = []), t(f, e) || t(h, e) || (h[e] = [e, n, r])
    }, define.amd = {
        jQuery: !0
    }
}(),
function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = ie.type(e);
        return "function" === n || ie.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (ie.isFunction(t)) return ie.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return ie.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (pe.test(t)) return ie.filter(t, e, n);
            t = ie.filter(t, e)
        }
        return ie.grep(e, function(e) {
            return ie.inArray(e, t) >= 0 !== n
        })
    }

    function i(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = we[e] = {};
        return ie.each(e.match(be) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (he.detachEvent("onreadystatechange", s),
            e.detachEvent("onload", s))
    }

    function s() {
        (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (a(), ie.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Ee, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ke.test(n) ? ie.parseJSON(n) : n
                } catch (i) {}
                ie.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ie.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, r) {
        if (ie.acceptData(e)) {
            var i, o, a = ie.expando,
                s = e.nodeType,
                l = s ? ie.cache : e,
                u = s ? e[a] : e[a] && a;
            if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = Y.pop() || ie.guid++ : a), l[u] || (l[u] = s ? {} : {
                toJSON: ie.noop
            }), ("object" == typeof t || "function" == typeof t) && (r ? l[u] = ie.extend(l[u], t) : l[u].data = ie.extend(l[u].data, t)), o = l[u], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ie.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[ie.camelCase(t)])) : i = o, i
        }
    }

    function d(e, t, n) {
        if (ie.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? ie.cache : e,
                s = o ? e[ie.expando] : ie.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    ie.isArray(t) ? t = t.concat(ie.map(t, ie.camelCase)) : t in r ? t = [t] : (t = ie.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !u(r) : !ie.isEmptyObject(r)) return
                }(n || (delete a[s].data, u(a[s]))) && (o ? ie.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function p() {
        return !0
    }

    function f() {
        return !1
    }

    function h() {
        try {
            return he.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = He.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function v(e, t) {
        var n, r, i = 0,
            o = typeof e.getElementsByTagName !== Ce ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ce ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || ie.nodeName(r, t) ? o.push(r) : ie.merge(o, v(r, t));
        return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([e], o) : o
    }

    function g(e) {
        Le.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return ie.nodeName(e, "table") && ie.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== ie.find.attr(e, "type")) + "/" + e.type, e
    }

    function w(e) {
        var t = Ve.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ie._data(n, "globalEval", !t || ie._data(t[r], "globalEval"))
    }

    function T(e, t) {
        if (1 === t.nodeType && ie.hasData(e)) {
            var n, r, i, o = ie._data(e),
                a = ie._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) ie.event.add(t, n, s[n][r])
            }
            a.data && (a.data = ie.extend({}, a.data))
        }
    }

    function C(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[ie.expando]) {
                i = ie._data(t);
                for (r in i.events) ie.removeEvent(t, r, i.handle);
                t.removeAttribute(ie.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !ie.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Le.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function k(t, n) {
        var r, i = ie(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : ie.css(i[0], "display");
        return i.detach(), o
    }

    function E(e) {
        var t = he,
            n = Ze[e];
        return n || (n = k(e, t), "none" !== n && n || (Ke = (Ke || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ke[0].contentWindow || Ke[0].contentDocument).document, t.write(), t.close(), n = k(e, t), Ke.detach()), Ze[e] = n), n
    }

    function N(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function S(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = pt.length; i--;)
            if (t = pt[i] + n, t in e) return t;
        return r
    }

    function D(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ie._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && De(r) && (o[a] = ie._data(r, "olddisplay", E(r.nodeName)))) : (i = De(r), (n && "none" !== n || !i) && ie._data(r, "olddisplay", i ? n : ie.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function j(e, t, n) {
        var r = lt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function L(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ie.css(e, n + Se[o], !0, i)), r ? ("content" === n && (a -= ie.css(e, "padding" + Se[o], !0, i)), "margin" !== n && (a -= ie.css(e, "border" + Se[o] + "Width", !0, i))) : (a += ie.css(e, "padding" + Se[o], !0, i), "padding" !== n && (a += ie.css(e, "border" + Se[o] + "Width", !0, i)));
        return a
    }

    function A(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = et(e),
            a = ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = tt(e, t, o), (0 > i || null == i) && (i = e.style[t]), rt.test(i)) return i;
            r = a && (ne.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + L(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function $(e, t, n, r, i) {
        return new $.prototype.init(e, t, n, r, i)
    }

    function F() {
        return setTimeout(function() {
            ft = void 0
        }), ft = ie.now()
    }

    function O(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Se[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function _(e, t, n) {
        for (var r, i = (bt[t] || []).concat(bt["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function H(e, t, n) {
        var r, i, o, a, s, l, u, c, d = this,
            p = {},
            f = e.style,
            h = e.nodeType && De(e),
            m = ie._data(e, "fxshow");
        n.queue || (s = ie._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, ie.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = ie.css(e, "display"), c = "none" === u ? ie._data(e, "olddisplay") || E(e.nodeName) : u, "inline" === c && "none" === ie.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], mt.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    h = !0
                }
                p[r] = m && m[r] || ie.style(e, r)
            } else u = void 0;
        if (ie.isEmptyObject(p)) "inline" === ("none" === u ? E(e.nodeName) : u) && (f.display = u);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = ie._data(e, "fxshow", {}), o && (m.hidden = !h), h ? ie(e).show() : d.done(function() {
                ie(e).hide()
            }), d.done(function() {
                var t;
                ie._removeData(e, "fxshow");
                for (t in p) ie.style(e, t, p[t])
            });
            for (r in p) a = _(h ? m[r] : 0, r, d), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function M(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = ie.camelCase(n), i = t[r], o = e[n], ie.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ie.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function P(e, t, n) {
        var r, i, o = 0,
            a = yt.length,
            s = ie.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                for (var t = ft || F(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: ie.extend({}, t),
                opts: ie.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ft || F(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = ie.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (M(c, u.opts.specialEasing); a > o; o++)
            if (r = yt[o].call(u, e, c, u.opts)) return r;
        return ie.map(c, _, u), ie.isFunction(u.opts.start) && u.opts.start.call(e, u), ie.fx.timer(ie.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function I(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(be) || [];
            if (ie.isFunction(n))
                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function q(e, t, n, r) {
        function i(s) {
            var l;
            return o[s] = !0, ie.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
            }), l
        }
        var o = {},
            a = e === Wt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function R(e, t) {
        var n, r, i = ie.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && ie.extend(!0, e, n), e
    }

    function B(e, t, n) {
        for (var r, i, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    l.unshift(a);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function W(e, t, n, r) {
        var i, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (i in u)
                    if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function z(e, t, n, r) {
        var i;
        if (ie.isArray(t)) ie.each(t, function(t, i) {
            n || Vt.test(e) ? r(e, i) : z(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== ie.type(t)) r(e, t);
        else
            for (i in t) z(e + "[" + i + "]", t[i], n, r)
    }

    function X() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function U() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function V(e) {
        return ie.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var Y = [],
        Q = Y.slice,
        G = Y.concat,
        J = Y.push,
        K = Y.indexOf,
        Z = {},
        ee = Z.toString,
        te = Z.hasOwnProperty,
        ne = {},
        re = "1.11.3",
        ie = function(e, t) {
            return new ie.fn.init(e, t)
        },
        oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        se = /-([\da-z])/gi,
        le = function(e, t) {
            return t.toUpperCase()
        };
    ie.fn = ie.prototype = {
        jquery: re,
        constructor: ie,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this)
        },
        pushStack: function(e) {
            var t = ie.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return ie.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(ie.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: J,
        sort: Y.sort,
        splice: Y.splice
    }, ie.extend = ie.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || ie.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (i = arguments[s]))
                for (r in i) e = a[r], n = i[r], a !== n && (u && n && (ie.isPlainObject(n) || (t = ie.isArray(n))) ? (t ? (t = !1, o = e && ie.isArray(e) ? e : []) : o = e && ie.isPlainObject(e) ? e : {}, a[r] = ie.extend(u, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }, ie.extend({
        expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ie.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === ie.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !ie.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== ie.type(e) || e.nodeType || ie.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (ne.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && ie.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(se, le)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(oe, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ie.merge(r, "string" == typeof e ? [e] : e) : J.call(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (K) return K.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; a > o; o++) i = t(e[o], o, r), null != i && l.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && l.push(i);
            return G.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), ie.isFunction(e) ? (n = Q.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(Q.call(arguments)))
            }, r.guid = e.guid = e.guid || ie.guid++, r) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ne
    }), ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ue = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, l, u, d, f, h, m;
            if ((t ? t.ownerDocument || t : q) !== $ && A(t), t = t || $, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!r && O) {
                if (11 !== s && (i = ye.exec(e)))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && P(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && x.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
                    }
                if (x.qsa && (!_ || !_.test(e))) {
                    if (f = d = I, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = E(e), (d = t.getAttribute("id")) ? f = d.replace(we, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + p(u[l]);
                        h = be.test(e) && c(t.parentNode) || t, m = u.join(",")
                    }
                    if (m) try {
                        return K.apply(n, h.querySelectorAll(m)), n
                    } catch (v) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(le, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[I] = !0, e
        }

        function i(e) {
            var t = $.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function f(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = B++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, a) {
                var s, l, u = [R, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (l = t[I] || (t[I] = {}), (s = l[r]) && s[0] === R && s[1] === o) return u[2] = s[2];
                            if (l[r] = u, u[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function v(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
            return a
        }

        function g(e, t, n, i, o, a) {
            return i && !i[I] && (i = g(i)), o && !o[I] && (o = g(o, a)), r(function(r, a, s, l) {
                var u, c, d, p = [],
                    f = [],
                    h = a.length,
                    g = r || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? g : v(g, p, e, s, l),
                    b = n ? o || (r ? e : h || i) ? [] : a : y;
                if (n && n(y, b, s, l), i)
                    for (u = v(b, f), i(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[f[c]] = !(y[f[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (u = o ? ee(r, d) : p[c]) > -1 && (r[u] = !(a[u] = d))
                    }
                } else b = v(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, l) : K.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, l = f(function(e) {
                    return e === t
                }, a, !0), u = f(function(e) {
                    return ee(t, e) > -1
                }, a, !0), c = [function(e, n, r) {
                    var i = !o && (r || n !== D) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                    return t = null, i
                }]; i > s; s++)
                if (n = T.relative[e[s].type]) c = [f(h(c), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[I]) {
                        for (r = ++s; i > r && !T.relative[e[r].type]; r++);
                        return g(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function b(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, l, u) {
                    var c, d, p, f = 0,
                        h = "0",
                        m = r && [],
                        g = [],
                        y = D,
                        b = r || o && T.find.TAG("*", u),
                        w = R += null == y ? 1 : Math.random() || .1,
                        x = b.length;
                    for (u && (D = a !== $ && a); h !== x && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (d = 0; p = e[d++];)
                                if (p(c, a, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (R = w)
                        }
                        i && ((c = !p && c) && f--, r && m.push(c))
                    }
                    if (f += h, i && h !== f) {
                        for (d = 0; p = n[d++];) p(m, g, a, s);
                        if (r) {
                            if (f > 0)
                                for (; h--;) m[h] || g[h] || (g[h] = G.call(l));
                            g = v(g)
                        }
                        K.apply(l, g), u && !r && g.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (R = w, D = y), m
                };
            return i ? r(a) : a
        }
        var w, x, T, C, k, E, N, S, D, j, L, A, $, F, O, _, H, M, P, I = "sizzle" + 1 * new Date,
            q = e.document,
            R = 0,
            B = 0,
            W = n(),
            z = n(),
            X = n(),
            U = function(e, t) {
                return e === t && (L = !0), 0
            },
            V = 1 << 31,
            Y = {}.hasOwnProperty,
            Q = [],
            G = Q.pop,
            J = Q.push,
            K = Q.push,
            Z = Q.slice,
            ee = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = re.replace("w", "w#"),
            oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            pe = new RegExp(ae),
            fe = new RegExp("^" + ie + "$"),
            he = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /^(?:input|select|textarea|button)$/i,
            ve = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            we = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            Te = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            Ce = function() {
                A()
            };
        try {
            K.apply(Q = Z.call(q.childNodes), q.childNodes), Q[q.childNodes.length].nodeType
        } catch (ke) {
            K = {
                apply: Q.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, A = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : q;
            return r !== $ && 9 === r.nodeType && r.documentElement ? ($ = r, F = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), O = !k(r), x.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = i(function(e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = ge.test(r.getElementsByClassName), x.getById = i(function(e) {
                return F.appendChild(e).id = I, !r.getElementsByName || !r.getElementsByName(I).length
            }), x.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(xe, Te);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(xe, Te);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = x.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = x.getElementsByClassName && function(e, t) {
                return O ? t.getElementsByClassName(e) : void 0
            }, H = [], _ = [], (x.qsa = ge.test(r.querySelectorAll)) && (i(function(e) {
                F.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && _.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || _.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + I + "-]").length || _.push("~="), e.querySelectorAll(":checked").length || _.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || _.push(".#.+[+~]")
            }), i(function(e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && _.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || _.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), _.push(",.*:")
            })), (x.matchesSelector = ge.test(M = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && i(function(e) {
                x.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), H.push("!=", ae)
            }), _ = _.length && new RegExp(_.join("|")), H = H.length && new RegExp(H.join("|")), t = ge.test(F.compareDocumentPosition), P = t || ge.test(F.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t) return L = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === q && P(q, e) ? -1 : t === r || t.ownerDocument === q && P(q, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return L = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    l = [e],
                    u = [t];
                if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                if (o === s) return a(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; l[i] === u[i];) i++;
                return i ? a(l[i], u[i]) : l[i] === q ? -1 : u[i] === q ? 1 : 0
            }, r) : $
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== $ && A(e), n = n.replace(de, "='$1']"), x.matchesSelector && O && (!H || !H.test(n)) && (!_ || !_.test(n))) try {
                var r = M.call(e, n);
                if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, $, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== $ && A(e), P(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== $ && A(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : x.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (L = !x.detectDuplicates, j = !x.sortStable && e.slice(0), e.sort(U), L) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return j = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xe, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, Te).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, d, p, f, h, m = o !== a ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            g = s && t.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (v) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === g : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                for (c = v[I] || (v[I] = {}), u = c[e] || [], f = u[0] === R && u[1], p = u[0] === R && u[2], d = f && v.childNodes[f]; d = ++f && d && d[m] || (p = f = 0) || h.pop();)
                                    if (1 === d.nodeType && ++p && d === t) {
                                        c[e] = [R, f, p];
                                        break
                                    }
                            } else if (y && (u = (t[I] || (t[I] = {}))[e]) && u[0] === R) p = u[1];
                            else
                                for (;
                                    (d = ++f && d && d[m] || (p = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++p || (y && ((d[I] || (d[I] = {}))[e] = [R, p]), d !== t)););
                            return p -= i, p === r || p % r === 0 && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[I] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = N(e.replace(le, "$1"));
                    return i[I] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(xe, Te),
                        function(t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, Te).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === F
                },
                focus: function(e) {
                    return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return ve.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[w] = s(w);
        for (w in {
                submit: !0,
                reset: !0
            }) T.pseudos[w] = l(w);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = t.tokenize = function(e, n) {
                var r, i, o, a, s, l, u, c = z[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (s = e, l = [], u = T.preFilter; s;) {
                    (!r || (i = ue.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(le, " ")
                    }), s = s.slice(r.length));
                    for (a in T.filter) !(i = he[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                    if (!r) break
                }
                return n ? s.length : s ? t.error(e) : z(e, l).slice(0)
            }, N = t.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = X[e + " "];
                if (!o) {
                    for (t || (t = E(e)), n = t.length; n--;) o = y(t[n]), o[I] ? r.push(o) : i.push(o);
                    o = X(e, b(i, r)), o.selector = e
                }
                return o
            }, S = t.select = function(e, t, n, r) {
                var i, o, a, s, l, u = "function" == typeof e && e,
                    d = !r && E(e = u.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                        if (t = (T.find.ID(a.matches[0].replace(xe, Te), t) || [])[0], !t) return n;
                        u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
                        if ((l = T.find[s]) && (r = l(a.matches[0].replace(xe, Te), be.test(o[0].type) && c(t.parentNode) || t))) {
                            if (o.splice(i, 1), e = r.length && p(o), !e) return K.apply(n, r), n;
                            break
                        }
                }
                return (u || N(e, d))(r, t, !O, n, be.test(e) && c(t.parentNode) || t), n
            }, x.sortStable = I.split("").sort(U).join("") === I, x.detectDuplicates = !!L,
            A(), x.sortDetached = i(function(e) {
                return 1 & e.compareDocumentPosition($.createElement("div"))
            }), i(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), x.attributes && i(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), i(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(te, function(e, t, n) {
                var r;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), t
    }(e);
    ie.find = ue, ie.expr = ue.selectors, ie.expr[":"] = ie.expr.pseudos, ie.unique = ue.uniqueSort, ie.text = ue.getText, ie.isXMLDoc = ue.isXML, ie.contains = ue.contains;
    var ce = ie.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pe = /^.[^:#\[\.,]*$/;
    ie.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ie.find.matchesSelector(r, e) ? [r] : [] : ie.find.matches(e, ie.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ie.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(ie(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (ie.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) ie.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ie.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && ce.test(e) ? ie(e) : e || [], !1).length
        }
    });
    var fe, he = e.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ve = ie.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || fe).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof ie ? t[0] : t, ie.merge(this, ie.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), de.test(n[1]) && ie.isPlainObject(t))
                        for (n in t) ie.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (r = he.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return fe.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = he, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ie.isFunction(e) ? "undefined" != typeof fe.ready ? fe.ready(e) : e(ie) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ie.makeArray(e, this))
        };
    ve.prototype = ie.fn, fe = ie(he);
    var ge = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ie.extend({
        dir: function(e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !ie(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), ie.fn.extend({
        has: function(e) {
            var t, n = ie(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (ie.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = ce.test(e) || "string" != typeof e ? ie(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ie.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ie.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ie.inArray(this[0], ie(e)) : ie.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ie.unique(ie.merge(this.get(), ie(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ie.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ie.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ie.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return ie.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ie.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ie.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ie.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ie.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ie.sibling(e.firstChild)
        },
        contents: function(e) {
            return ie.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ie.merge([], e.childNodes)
        }
    }, function(e, t) {
        ie.fn[e] = function(n, r) {
            var i = ie.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ie.filter(r, i)), this.length > 1 && (ye[e] || (i = ie.unique(i)), ge.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var be = /\S+/g,
        we = {};
    ie.Callbacks = function(e) {
        e = "string" == typeof e ? we[e] || o(e) : ie.extend({}, e);
        var t, n, r, i, a, s, l = [],
            u = !e.once && [],
            c = function(o) {
                for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = l.length, t = !0; l && i > a; a++)
                    if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var r = l.length;
                        ! function o(t) {
                            ie.each(t, function(t, n) {
                                var r = ie.type(n);
                                "function" === r ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        }(arguments), t ? i = l.length : n && (s = r, c(n))
                    }
                    return this
                },
                remove: function() {
                    return l && ie.each(arguments, function(e, n) {
                        for (var r;
                            (r = ie.inArray(n, l, r)) > -1;) l.splice(r, 1), t && (i >= r && i--, a >= r && a--)
                    }), this
                },
                has: function(e) {
                    return e ? ie.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], i = 0, this
                },
                disable: function() {
                    return l = u = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, n || d.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, n) {
                    return !l || r && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return d
    }, ie.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", ie.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ie.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ie.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ie.Deferred(function(n) {
                            ie.each(t, function(t, o) {
                                var a = ie.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && ie.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ie.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, ie.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = Q.call(arguments),
                a = o.length,
                s = 1 !== a || e && ie.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : ie.Deferred(),
                u = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? Q.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && ie.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --s;
            return s || l.resolveWith(r, o), l.promise()
        }
    });
    var xe;
    ie.fn.ready = function(e) {
        return ie.ready.promise().done(e), this
    }, ie.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ie.readyWait++ : ie.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--ie.readyWait : !ie.isReady) {
                if (!he.body) return setTimeout(ie.ready);
                ie.isReady = !0, e !== !0 && --ie.readyWait > 0 || (xe.resolveWith(he, [ie]), ie.fn.triggerHandler && (ie(he).triggerHandler("ready"), ie(he).off("ready")))
            }
        }
    }), ie.ready.promise = function(t) {
        if (!xe)
            if (xe = ie.Deferred(), "complete" === he.readyState) setTimeout(ie.ready);
            else if (he.addEventListener) he.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && he.documentElement
            } catch (r) {}
            n && n.doScroll && ! function i() {
                if (!ie.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    a(), ie.ready()
                }
            }()
        }
        return xe.promise(t)
    };
    var Te, Ce = "undefined";
    for (Te in ie(ne)) break;
    ne.ownLast = "0" !== Te, ne.inlineBlockNeedsLayout = !1, ie(function() {
            var e, t, n, r;
            n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function() {
            var e = he.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ne.deleteExpando = !1
                }
            }
            e = null
        }(), ie.acceptData = function(e) {
            var t = ie.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ee = /([A-Z])/g;
    ie.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? ie.cache[e[ie.expando]] : e[ie.expando], !!e && !u(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }), ie.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ie.data(o), 1 === o.nodeType && !ie._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ie.camelCase(r.slice(5)), l(o, r, i[r])));
                    ie._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                ie.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                ie.data(this, e, t)
            }) : o ? l(o, e, ie.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                ie.removeData(this, e)
            })
        }
    }), ie.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ie._data(e, t), n && (!r || ie.isArray(n) ? r = ie._data(e, t, ie.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ie.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ie._queueHooks(e, t),
                a = function() {
                    ie.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ie._data(e, n) || ie._data(e, n, {
                empty: ie.Callbacks("once memory").add(function() {
                    ie._removeData(e, t + "queue"), ie._removeData(e, n)
                })
            })
        }
    }), ie.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ie.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ie.queue(this, e, t);
                ie._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ie.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ie.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = ie.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ie._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Se = ["Top", "Right", "Bottom", "Left"],
        De = function(e, t) {
            return e = t || e, "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e)
        },
        je = ie.access = function(e, t, n, r, i, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === ie.type(n)) {
                i = !0;
                for (s in n) ie.access(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, ie.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(ie(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        Le = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = he.createElement("input"),
            t = he.createElement("div"),
            n = he.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                ne.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                ne.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, n, r = he.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), ne[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var Ae = /^(?:input|select|textarea)$/i,
        $e = /^key/,
        Fe = /^(?:mouse|pointer|contextmenu)|click/,
        Oe = /^(?:focusinfocus|focusoutblur)$/,
        _e = /^([^.]*)(?:\.(.+)|)$/;
    ie.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, l, u, c, d, p, f, h, m, v = ie._data(e);
            if (v) {
                for (n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = ie.guid++), (a = v.events) || (a = v.events = {}), (c = v.handle) || (c = v.handle = function(e) {
                        return typeof ie === Ce || e && ie.event.triggered === e.type ? void 0 : ie.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) o = _e.exec(t[s]) || [], f = m = o[1], h = (o[2] || "").split(".").sort(), f && (u = ie.event.special[f] || {}, f = (i ? u.delegateType : u.bindType) || f, u = ie.event.special[f] || {}, d = ie.extend({
                    type: f,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ie.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, l), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, u.setup && u.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, d) : p.push(d), ie.event.global[f] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, d, p, f, h, m, v = ie.hasData(e) && ie._data(e);
            if (v && (c = v.events)) {
                for (t = (t || "").match(be) || [""], u = t.length; u--;)
                    if (s = _e.exec(t[u]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                        for (d = ie.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, p = c[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--;) a = p[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !p.length && (d.teardown && d.teardown.call(e, h, v.handle) !== !1 || ie.removeEvent(e, f, v.handle), delete c[f])
                    } else
                        for (f in c) ie.event.remove(e, f + t[u], n, r, !0);
                ie.isEmptyObject(c) && (delete v.handle, ie._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, l, u, c, d, p = [r || he],
                f = te.call(t, "type") ? t.type : t,
                h = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || he, 3 !== r.nodeType && 8 !== r.nodeType && !Oe.test(f + ie.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, t = t[ie.expando] ? t : new ie.Event(f, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ie.makeArray(n, [t]), u = ie.event.special[f] || {}, i || !u.trigger || u.trigger.apply(r, n) !== !1)) {
                if (!i && !u.noBubble && !ie.isWindow(r)) {
                    for (l = u.delegateType || f, Oe.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                    c === (r.ownerDocument || he) && p.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (s = p[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || f, o = (ie._data(s, "events") || {})[t.type] && ie._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && ie.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = f, !i && !t.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), n) === !1) && ie.acceptData(r) && a && r[f] && !ie.isWindow(r)) {
                    c = r[a], c && (r[a] = null), ie.event.triggered = f;
                    try {
                        r[f]()
                    } catch (m) {}
                    ie.event.triggered = void 0, c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = ie.event.fix(e);
            var t, n, r, i, o, a = [],
                s = Q.call(arguments),
                l = (ie._data(this, "events") || {})[e.type] || [],
                u = ie.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = ie.event.handlers.call(this, e, l), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, o = 0;
                        (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((ie.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], o = 0; s > o; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? ie(n, this).index(l) >= 0 : ie.find(n, this, null, [l]).length), i[n] && i.push(r);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[ie.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Fe.test(i) ? this.mouseHooks : $e.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ie.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || he, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ie.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return ie.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = ie.extend(new ie.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ie.event.trigger(i, null, t) : ie.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ie.removeEvent = he.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Ce && (e[r] = null), e.detachEvent(r, n))
    }, ie.Event = function(e, t) {
        return this instanceof ie.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : f) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), void(this[ie.expando] = !0)) : new ie.Event(e, t)
    }, ie.Event.prototype = {
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ie.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ie.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !ie.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ne.submitBubbles || (ie.event.special.submit = {
        setup: function() {
            return ie.nodeName(this, "form") ? !1 : void ie.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = ie.nodeName(t, "input") || ie.nodeName(t, "button") ? t.form : void 0;
                n && !ie._data(n, "submitBubbles") && (ie.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), ie._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ie.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return ie.nodeName(this, "form") ? !1 : void ie.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (ie.event.special.change = {
        setup: function() {
            return Ae.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ie.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ie.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ie.event.simulate("change", this, e, !0)
            })), !1) : void ie.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ae.test(t.nodeName) && !ie._data(t, "changeBubbles") && (ie.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ie.event.simulate("change", this.parentNode, e, !0)
                }), ie._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return ie.event.remove(this, "._change"), !Ae.test(this.nodeName)
        }
    }), ne.focusinBubbles || ie.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ie.event.simulate(t, e.target, ie.event.fix(e), !0)
        };
        ie.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = ie._data(r, t);
                i || r.addEventListener(e, n, !0), ie._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = ie._data(r, t) - 1;
                i ? ie._data(r, t, i) : (r.removeEventListener(e, n, !0), ie._removeData(r, t))
            }
        }
    }), ie.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = f;
            else if (!r) return this;
            return 1 === i && (a = r, r = function(e) {
                return ie().off(e), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = ie.guid++)), this.each(function() {
                ie.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ie(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = f), this.each(function() {
                ie.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ie.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? ie.event.trigger(e, t, n, !0) : void 0
        }
    });
    var He = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Me = / jQuery\d+="(?:null|\d+)"/g,
        Pe = new RegExp("<(?:" + He + ")[\\s/>]", "i"),
        Ie = /^\s+/,
        qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Re = /<([\w:]+)/,
        Be = /<tbody/i,
        We = /<|&#?\w+;/,
        ze = /<(?:script|style|link)/i,
        Xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ue = /^$|\/(?:java|ecma)script/i,
        Ve = /^true\/(.*)/,
        Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ge = m(he),
        Je = Ge.appendChild(he.createElement("div"));
    Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td, ie.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = ie.contains(e.ownerDocument, e);
            if (ne.html5Clone || ie.isXMLDoc(e) || !Pe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Je.innerHTML = e.outerHTML, Je.removeChild(o = Je.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e)))
                for (r = v(o), s = v(e), a = 0; null != (i = s[a]); ++a) r[a] && C(i, r[a]);
            if (t)
                if (n)
                    for (s = s || v(e), r = r || v(o), a = 0; null != (i = s[a]); a++) T(i, r[a]);
                else T(e, o);
            return r = v(o, "script"), r.length > 0 && x(r, !l && v(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, l, u, c, d = e.length, p = m(t), f = [], h = 0; d > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === ie.type(o)) ie.merge(f, o.nodeType ? [o] : o);
                    else if (We.test(o)) {
                for (s = s || p.appendChild(t.createElement("div")), l = (Re.exec(o) || ["", ""])[1].toLowerCase(), c = Qe[l] || Qe._default, s.innerHTML = c[1] + o.replace(qe, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!ne.leadingWhitespace && Ie.test(o) && f.push(t.createTextNode(Ie.exec(o)[0])), !ne.tbody)
                    for (o = "table" !== l || Be.test(o) ? "<table>" !== c[1] || Be.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ie.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (ie.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = p.lastChild
            } else f.push(t.createTextNode(o));
            for (s && p.removeChild(s), ne.appendChecked || ie.grep(v(f, "input"), g), h = 0; o = f[h++];)
                if ((!r || -1 === ie.inArray(o, r)) && (a = ie.contains(o.ownerDocument, o), s = v(p.appendChild(o), "script"), a && x(s), n))
                    for (i = 0; o = s[i++];) Ue.test(o.type || "") && n.push(o);
            return s = null, p
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = ie.expando, l = ie.cache, u = ne.deleteExpando, c = ie.event.special; null != (n = e[a]); a++)
                if ((t || ie.acceptData(n)) && (i = n[s], o = i && l[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, o.handle);
                    l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== Ce ? n.removeAttribute(s) : n[s] = null, Y.push(i))
                }
        }
    }), ie.fn.extend({
        text: function(e) {
            return je(this, function(e) {
                return void 0 === e ? ie.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? ie.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ie.cleanData(v(n)), n.parentNode && (t && ie.contains(n.ownerDocument, n) && x(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ie.cleanData(v(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ie.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return ie.clone(this, e, t)
            })
        },
        html: function(e) {
            return je(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Me, "") : void 0;
                if ("string" == typeof e && !ze.test(e) && (ne.htmlSerialize || !Pe.test(e)) && (ne.leadingWhitespace || !Ie.test(e)) && !Qe[(Re.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(qe, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (ie.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, ie.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = G.apply([], e);
            var n, r, i, o, a, s, l = 0,
                u = this.length,
                c = this,
                d = u - 1,
                p = e[0],
                f = ie.isFunction(p);
            if (f || u > 1 && "string" == typeof p && !ne.checkClone && Xe.test(p)) return this.each(function(n) {
                var r = c.eq(n);
                f && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
            });
            if (u && (s = ie.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = ie.map(v(s, "script"), b), i = o.length; u > l; l++) r = s, l !== d && (r = ie.clone(r, !0, !0), i && ie.merge(o, v(r, "script"))), t.call(this[l], r, l);
                if (i)
                    for (a = o[o.length - 1].ownerDocument, ie.map(o, w), l = 0; i > l; l++) r = o[l], Ue.test(r.type || "") && !ie._data(r, "globalEval") && ie.contains(a, r) && (r.src ? ie._evalUrl && ie._evalUrl(r.src) : ie.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Ye, "")));
                s = n = null
            }
            return this
        }
    }), ie.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ie.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = ie(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ie(o[r])[t](n), J.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Ke, Ze = {};
    ! function() {
        var e;
        ne.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, r;
            return n = he.getElementsByTagName("body")[0], n && n.style ? (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
        }
    }();
    var et, tt, nt = /^margin/,
        rt = new RegExp("^(" + Ne + ")(?!px)[a-z%]+$", "i"),
        it = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        }, tt = function(e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ie.contains(e.ownerDocument, e) || (a = ie.style(e, t)), rt.test(a) && nt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
        }) : he.documentElement.currentStyle && (et = function(e) {
            return e.currentStyle
        }, tt = function(e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rt.test(a) && !it.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
        }),
        function() {
            function t() {
                var t, n, r, i;
                n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top,
                    a = "4px" === (e.getComputedStyle(t, null) || {
                        width: "4px"
                    }).width, i = t.appendChild(he.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(i)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r))
            }
            var n, r, i, o, a, s, l;
            n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], r = i && i.style, r && (r.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === r.opacity, ne.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, ie.extend(ne, {
                reliableHiddenOffsets: function() {
                    return null == s && t(), s
                },
                boxSizingReliable: function() {
                    return null == a && t(), a
                },
                pixelPosition: function() {
                    return null == o && t(), o
                },
                reliableMarginRight: function() {
                    return null == l && t(), l
                }
            }))
        }(), ie.swap = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };
    var ot = /alpha\([^)]*\)/i,
        at = /opacity\s*=\s*([^)]*)/,
        st = /^(none|table(?!-c[ea]).+)/,
        lt = new RegExp("^(" + Ne + ")(.*)$", "i"),
        ut = new RegExp("^([+-])=(" + Ne + ")", "i"),
        ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        pt = ["Webkit", "O", "Moz", "ms"];
    ie.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = ie.camelCase(t),
                    l = e.style;
                if (t = ie.cssProps[s] || (ie.cssProps[s] = S(l, s)), a = ie.cssHooks[t] || ie.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                if (o = typeof n, "string" === o && (i = ut.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ie.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || ie.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    l[t] = n
                } catch (u) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = ie.camelCase(t);
            return t = ie.cssProps[s] || (ie.cssProps[s] = S(e.style, s)), a = ie.cssHooks[t] || ie.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tt(e, t, r)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (i = parseFloat(o), n === !0 || ie.isNumeric(i) ? i || 0 : o) : o
        }
    }), ie.each(["height", "width"], function(e, t) {
        ie.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? st.test(ie.css(e, "display")) && 0 === e.offsetWidth ? ie.swap(e, ct, function() {
                    return A(e, t, r)
                }) : A(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && et(e);
                return j(e, n, r ? L(e, t, r, ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ne.opacity || (ie.cssHooks.opacity = {
        get: function(e, t) {
            return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = ie.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ie.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = ot.test(o) ? o.replace(ot, i) : o + " " + i)
        }
    }), ie.cssHooks.marginRight = N(ne.reliableMarginRight, function(e, t) {
        return t ? ie.swap(e, {
            display: "inline-block"
        }, tt, [e, "marginRight"]) : void 0
    }), ie.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ie.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Se[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, nt.test(e) || (ie.cssHooks[e + t].set = j)
    }), ie.fn.extend({
        css: function(e, t) {
            return je(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (ie.isArray(t)) {
                    for (r = et(e), i = t.length; i > a; a++) o[t[a]] = ie.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return D(this, !0)
        },
        hide: function() {
            return D(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                De(this) ? ie(this).show() : ie(this).hide()
            })
        }
    }), ie.Tween = $, $.prototype = {
        constructor: $,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ie.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = $.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ie.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop]) ? ie.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ie.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ie.fx = $.prototype.init, ie.fx.step = {};
    var ft, ht, mt = /^(?:toggle|show|hide)$/,
        vt = new RegExp("^(?:([+-])=|)(" + Ne + ")([a-z%]*)$", "i"),
        gt = /queueHooks$/,
        yt = [H],
        bt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = vt.exec(t),
                    o = i && i[3] || (ie.cssNumber[e] ? "" : "px"),
                    a = (ie.cssNumber[e] || "px" !== o && +r) && vt.exec(ie.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, ie.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    ie.Animation = ie.extend(P, {
            tweener: function(e, t) {
                ie.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], bt[n] = bt[n] || [], bt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? yt.unshift(e) : yt.push(e)
            }
        }), ie.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? ie.extend({}, e) : {
                complete: n || !n && t || ie.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ie.isFunction(t) && t
            };
            return r.duration = ie.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ie.fx.speeds ? ie.fx.speeds[r.duration] : ie.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                ie.isFunction(r.old) && r.old.call(this), r.queue && ie.dequeue(this, r.queue)
            }, r
        }, ie.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(De).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = ie.isEmptyObject(e),
                    o = ie.speed(t, n, r),
                    a = function() {
                        var t = P(this, ie.extend({}, e), o);
                        (i || ie._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = ie.timers,
                        a = ie._data(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && gt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && ie.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ie._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = ie.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, ie.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ie.each(["toggle", "show", "hide"], function(e, t) {
            var n = ie.fn[t];
            ie.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, r, i)
            }
        }), ie.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ie.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), ie.timers = [], ie.fx.tick = function() {
            var e, t = ie.timers,
                n = 0;
            for (ft = ie.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || ie.fx.stop(), ft = void 0
        }, ie.fx.timer = function(e) {
            ie.timers.push(e), e() ? ie.fx.start() : ie.timers.pop()
        }, ie.fx.interval = 13, ie.fx.start = function() {
            ht || (ht = setInterval(ie.fx.tick, ie.fx.interval))
        }, ie.fx.stop = function() {
            clearInterval(ht), ht = null
        }, ie.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ie.fn.delay = function(e, t) {
            return e = ie.fx ? ie.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e, t, n, r, i;
            t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = he.createElement("select"), i = n.appendChild(he.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(r.getAttribute("style")), ne.hrefNormalized = "/a" === r.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = i.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !i.disabled, e = he.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
        }();
    var wt = /\r/g;
    ie.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = ie.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, ie(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ie.isArray(i) && (i = ie.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), t = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = ie.valHooks[i.type] || ie.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)
            }
        }
    }), ie.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ie.find.attr(e, "value");
                    return null != t ? t : ie.trim(ie.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)
                        if (n = r[l], (n.selected || l === i) && (ne.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ie.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ie(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = ie.makeArray(t), a = i.length; a--;)
                        if (r = i[a], ie.inArray(ie.valHooks.option.get(r), o) >= 0) try {
                            r.selected = n = !0
                        } catch (s) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), ie.each(["radio", "checkbox"], function() {
        ie.valHooks[this] = {
            set: function(e, t) {
                return ie.isArray(t) ? e.checked = ie.inArray(ie(e).val(), t) >= 0 : void 0
            }
        }, ne.checkOn || (ie.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var xt, Tt, Ct = ie.expr.attrHandle,
        kt = /^(?:checked|selected)$/i,
        Et = ne.getSetAttribute,
        Nt = ne.input;
    ie.fn.extend({
        attr: function(e, t) {
            return je(this, ie.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ie.removeAttr(this, e)
            })
        }
    }), ie.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Ce ? ie.prop(e, t, n) : (1 === o && ie.isXMLDoc(e) || (t = t.toLowerCase(), r = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? Tt : xt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ie.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void ie.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(be);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = ie.propFix[n] || n, ie.expr.match.bool.test(n) ? Nt && Et || !kt.test(n) ? e[r] = !1 : e[ie.camelCase("default-" + n)] = e[r] = !1 : ie.attr(e, n, ""), e.removeAttribute(Et ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ne.radioValue && "radio" === t && ie.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Tt = {
        set: function(e, t, n) {
            return t === !1 ? ie.removeAttr(e, n) : Nt && Et || !kt.test(n) ? e.setAttribute(!Et && ie.propFix[n] || n, n) : e[ie.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Ct[t] || ie.find.attr;
        Ct[t] = Nt && Et || !kt.test(t) ? function(e, t, r) {
            var i, o;
            return r || (o = Ct[t], Ct[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Ct[t] = o), i
        } : function(e, t, n) {
            return n ? void 0 : e[ie.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Nt && Et || (ie.attrHooks.value = {
        set: function(e, t, n) {
            return ie.nodeName(e, "input") ? void(e.defaultValue = t) : xt && xt.set(e, t, n)
        }
    }), Et || (xt = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Ct.id = Ct.name = Ct.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, ie.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: xt.set
    }, ie.attrHooks.contenteditable = {
        set: function(e, t, n) {
            xt.set(e, "" === t ? !1 : t, n)
        }
    }, ie.each(["width", "height"], function(e, t) {
        ie.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), ne.style || (ie.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var St = /^(?:input|select|textarea|button|object)$/i,
        Dt = /^(?:a|area)$/i;
    ie.fn.extend({
        prop: function(e, t) {
            return je(this, ie.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = ie.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), ie.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !ie.isXMLDoc(e), o && (t = ie.propFix[t] || t, i = ie.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ie.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : St.test(e.nodeName) || Dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || ie.each(["href", "src"], function(e, t) {
        ie.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ne.optSelected || (ie.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ie.propFix[this.toLowerCase()] = this
    }), ne.enctype || (ie.propFix.enctype = "encoding");
    var jt = /[\t\r\n\f]/g;
    ie.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s = 0,
                l = this.length,
                u = "string" == typeof e && e;
            if (ie.isFunction(e)) return this.each(function(t) {
                ie(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(be) || []; l > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = ie.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (ie.isFunction(e)) return this.each(function(t) {
                ie(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(be) || []; l > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        a = e ? ie.trim(r) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ie.isFunction(e) ? this.each(function(n) {
                ie(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, r = 0, i = ie(this), o = e.match(be) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === Ce || "boolean" === n) && (this.className && ie._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ie._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jt, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ie.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ie.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Lt = ie.now(),
        At = /\?/,
        $t = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ie.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = ie.trim(t + "");
        return i && !ie.trim(i.replace($t, function(e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : ie.error("Invalid JSON: " + t)
    }, ie.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ie.error("Invalid XML: " + t), n
    };
    var Ft, Ot, _t = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Mt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        It = /^(?:GET|HEAD)$/,
        qt = /^\/\//,
        Rt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Bt = {},
        Wt = {},
        zt = "*/".concat("*");
    try {
        Ot = location.href
    } catch (Xt) {
        Ot = he.createElement("a"), Ot.href = "", Ot = Ot.href
    }
    Ft = Rt.exec(Ot.toLowerCase()) || [], ie.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ot,
            type: "GET",
            isLocal: Pt.test(Ft[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ie.parseJSON,
                "text xml": ie.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? R(R(e, ie.ajaxSettings), t) : R(ie.ajaxSettings, e)
        },
        ajaxPrefilter: I(Bt),
        ajaxTransport: I(Wt),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var i, c, g, y, w, T = t;
                2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = r || "", x.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = B(d, x, n)), y = W(d, y, x, i), i ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ie.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (ie.etag[o] = w)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, g = y.error, i = !g)) : (g = T, (e || !T) && (T = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || T) + "", i ? h.resolveWith(p, [c, T, x]) : h.rejectWith(p, [x, T, g]), x.statusCode(v), v = void 0, l && f.trigger(i ? "ajaxSuccess" : "ajaxError", [x, d, i ? c : g]), m.fireWith(p, [x, T]), l && (f.trigger("ajaxComplete", [x, d]), --ie.active || ie.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, a, s, l, u, c, d = ie.ajaxSetup({}, t),
                p = d.context || d,
                f = d.context && (p.nodeType || p.jquery) ? ie(p) : ie.event,
                h = ie.Deferred(),
                m = ie.Callbacks("once memory"),
                v = d.statusCode || {},
                g = {},
                y = {},
                b = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = Mt.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) v[t] = [v[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || Ot) + "").replace(_t, "").replace(qt, Ft[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ie.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (r = Rt.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === Ft[1] && r[2] === Ft[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Ft[3] || ("http:" === Ft[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ie.param(d.data, d.traditional)), q(Bt, d, t, x), 2 === b) return x;
            l = ie.event && d.global, l && 0 === ie.active++ && ie.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !It.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (At.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Ht.test(o) ? o.replace(Ht, "$1_=" + Lt++) : o + (At.test(o) ? "&" : "?") + "_=" + Lt++)), d.ifModified && (ie.lastModified[o] && x.setRequestHeader("If-Modified-Since", ie.lastModified[o]), ie.etag[o] && x.setRequestHeader("If-None-Match", ie.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : d.accepts["*"]);
            for (i in d.headers) x.setRequestHeader(i, d.headers[i]);
            if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === b)) return x.abort();
            w = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[i](d[i]);
            if (u = q(Wt, d, t, x)) {
                x.readyState = 1, l && f.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, u.send(g, n)
                } catch (T) {
                    if (!(2 > b)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, n) {
            return ie.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ie.get(e, void 0, t, "script")
        }
    }), ie.each(["get", "post"], function(e, t) {
        ie[t] = function(e, n, r, i) {
            return ie.isFunction(n) && (i = i || r, r = n, n = void 0), ie.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), ie._evalUrl = function(e) {
        return ie.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ie.fn.extend({
        wrapAll: function(e) {
            if (ie.isFunction(e)) return this.each(function(t) {
                ie(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ie(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return ie.isFunction(e) ? this.each(function(t) {
                ie(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ie(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ie.isFunction(e);
            return this.each(function(n) {
                ie(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ie.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ie.css(e, "display"))
    }, ie.expr.filters.visible = function(e) {
        return !ie.expr.filters.hidden(e)
    };
    var Ut = /%20/g,
        Vt = /\[\]$/,
        Yt = /\r?\n/g,
        Qt = /^(?:submit|button|image|reset|file)$/i,
        Gt = /^(?:input|select|textarea|keygen)/i;
    ie.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = ie.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || e.jquery && !ie.isPlainObject(e)) ie.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) z(n, e[n], t, i);
        return r.join("&").replace(Ut, "+")
    }, ie.fn.extend({
        serialize: function() {
            return ie.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ie.prop(this, "elements");
                return e ? ie.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ie(this).is(":disabled") && Gt.test(this.nodeName) && !Qt.test(e) && (this.checked || !Le.test(e))
            }).map(function(e, t) {
                var n = ie(this).val();
                return null == n ? null : ie.isArray(n) ? ie.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Yt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Yt, "\r\n")
                }
            }).get()
        }
    }), ie.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U()
    } : X;
    var Jt = 0,
        Kt = {},
        Zt = ie.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Kt) Kt[e](void 0, !0)
    }), ne.cors = !!Zt && "withCredentials" in Zt, Zt = ne.ajax = !!Zt, Zt && ie.ajaxTransport(function(e) {
        if (!e.crossDomain || ne.cors) {
            var t;
            return {
                send: function(n, r) {
                    var i, o = e.xhr(),
                        a = ++Jt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                    o.send(e.hasContent && e.data || null), t = function(n, i) {
                        var s, l, u;
                        if (t && (i || 4 === o.readyState))
                            if (delete Kt[a], t = void 0, o.onreadystatechange = ie.noop, i) 4 !== o.readyState && o.abort();
                            else {
                                u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (c) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            }
                        u && r(s, l, u, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Kt[a] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), ie.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ie.globalEval(e), e
            }
        }
    }), ie.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ie.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = he.head || ie("head")[0] || he.documentElement;
            return {
                send: function(r, i) {
                    t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
    ie.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = en.pop() || ie.expando + "_" + Lt++;
            return this[e] = !0, e
        }
    }), ie.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ie.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + i) : t.jsonp !== !1 && (t.url += (At.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || ie.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, en.push(i)), a && ie.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), ie.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || he;
        var r = de.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = ie.buildFragment([e], t, i), i && i.length && ie(i).remove(), ie.merge([], r.childNodes))
    };
    var nn = ie.fn.load;
    ie.fn.load = function(e, t, n) {
        if ("string" != typeof e && nn) return nn.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = ie.trim(e.slice(s, e.length)), e = e.slice(0, s)), ie.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && ie.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(r ? ie("<div>").append(ie.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, i || [e.responseText, t, e])
        }), this
    }, ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ie.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ie.expr.filters.animated = function(e) {
        return ie.grep(ie.timers, function(t) {
            return e === t.elem
        }).length
    };
    var rn = e.document.documentElement;
    ie.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, l, u, c = ie.css(e, "position"),
                d = ie(e),
                p = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), o = ie.css(e, "top"), l = ie.css(e, "left"), u = ("absolute" === c || "fixed" === c) && ie.inArray("auto", [o, l]) > -1, u ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), ie.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : d.css(p)
        }
    }, ie.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                ie.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                o = i && i.ownerDocument;
            if (o) return t = o.documentElement, ie.contains(t, i) ? (typeof i.getBoundingClientRect !== Ce && (r = i.getBoundingClientRect()), n = V(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === ie.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ie.nodeName(e[0], "html") || (n = e.offset()), n.top += ie.css(e[0], "borderTopWidth", !0), n.left += ie.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ie.css(r, "marginTop", !0),
                    left: t.left - n.left - ie.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || rn; e && !ie.nodeName(e, "html") && "static" === ie.css(e, "position");) e = e.offsetParent;
                return e || rn
            })
        }
    }), ie.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        ie.fn[e] = function(r) {
            return je(this, function(e, r, i) {
                var o = V(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? ie(o).scrollLeft() : i, n ? i : ie(o).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }), ie.each(["top", "left"], function(e, t) {
        ie.cssHooks[t] = N(ne.pixelPosition, function(e, n) {
            return n ? (n = tt(e, t), rt.test(n) ? ie(e).position()[t] + "px" : n) : void 0
        })
    }), ie.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ie.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            ie.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || i === !0 ? "margin" : "border");
                return je(this, function(t, n, r) {
                    var i;
                    return ie.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ie.css(t, n, a) : ie.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), ie.fn.size = function() {
        return this.length
    }, ie.fn.andSelf = ie.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ie
    });
    var on = e.jQuery,
        an = e.$;
    return ie.noConflict = function(t) {
        return e.$ === ie && (e.$ = an), t && e.jQuery === ie && (e.jQuery = on), ie
    }, typeof t === Ce && (e.jQuery = e.$ = ie), ie
}), + function(e) {
    "use strict";

    function t(t) {
        t && 3 === t.which || (e(i).remove(), e(o).each(function() {
            var r = n(e(this)),
                i = {
                    relatedTarget: this
                };
            r.hasClass("open") && (r.trigger(t = e.Event("hide.bs.dropdown", i)), t.isDefaultPrevented() || r.removeClass("open").trigger("hidden.bs.dropdown", i))
        }))
    }

    function n(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && e(n);
        return r && r.length ? r : t.parent()
    }

    function r(t) {
        return this.each(function() {
            var n = e(this),
                r = n.data("bs.dropdown");
            r || n.data("bs.dropdown", r = new a(this)), "string" == typeof t && r[t].call(n)
        })
    }
    var i = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        a = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.2.0", a.prototype.toggle = function(r) {
        var i = e(this);
        if (!i.is(".disabled, :disabled")) {
            var o = n(i),
                a = o.hasClass("open");
            if (t(), !a) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
                var s = {
                    relatedTarget: this
                };
                if (o.trigger(r = e.Event("show.bs.dropdown", s)), r.isDefaultPrevented()) return;
                i.trigger("focus"), o.toggleClass("open").trigger("shown.bs.dropdown", s)
            }
            return !1
        }
    }, a.prototype.keydown = function(t) {
        if (/(38|40|27)/.test(t.keyCode)) {
            var r = e(this);
            if (t.preventDefault(), t.stopPropagation(), !r.is(".disabled, :disabled")) {
                var i = n(r),
                    a = i.hasClass("open");
                if (!a || a && 27 == t.keyCode) return 27 == t.which && i.find(o).trigger("focus"), r.trigger("click");
                var s = " li:not(.divider):visible a",
                    l = i.find('[role="menu"]' + s + ', [role="listbox"]' + s);
                if (l.length) {
                    var u = l.index(l.filter(":focus"));
                    38 == t.keyCode && u > 0 && u--, 40 == t.keyCode && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = r, e.fn.dropdown.Constructor = a, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = s, this
    }, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, a.prototype.toggle).on("keydown.bs.dropdown.data-api", o + ', [role="menu"], [role="listbox"]', a.prototype.keydown)
}(jQuery), + function(e) {
    "use strict";

    function t(t, r) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.modal"),
                a = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t);
            o || i.data("bs.modal", o = new n(this, a)), "string" == typeof t ? o[t](r) : a.show && o.show(r)
        })
    }
    var n = function(t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function(t) {
        var n = this,
            r = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function() {
            var r = e.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), r && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var i = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            r ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(i)
            }).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(i)
        }))
    }, n.prototype.hide = function(t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(t) {
        var n = this,
            r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = e.support.transition && r;
            if (this.$backdrop = e('<div class="modal-backdrop ' + r + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                    e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            i ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(150) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function() {
                n.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o()
        } else t && t()
    }, n.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var r = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
        return e.fn.modal = r, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var r = e(this),
            i = r.attr("href"),
            o = e(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            a = o.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(i) && i
            }, o.data(), r.data());
        r.is("a") && n.preventDefault(), o.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        }), t.call(o, a, this)
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.tooltip"),
                o = "object" == typeof t && t;
            (i || "destroy" != t) && (i || r.data("bs.tooltip", i = new n(this, o)), "string" == typeof t && i[t]())
        })
    }
    var n = function(e, t) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(t, n, r) {
        this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && e(this.options.viewport.selector || this.options.viewport);
        for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
            var a = i[o];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, n.prototype.getDelegateOptions = function() {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function(e, r) {
            n[e] != r && (t[e] = r)
        }), t
    }, n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var n = e.contains(document.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !n) return;
            var r = this,
                i = this.tip(),
                o = this.getUID(this.type);
            this.setContent(), i.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && i.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
                s = /\s?auto?\s?/i,
                l = s.test(a);
            l && (a = a.replace(s, "") || "top"), i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
            var u = this.getPosition(),
                c = i[0].offsetWidth,
                d = i[0].offsetHeight;
            if (l) {
                var p = a,
                    f = this.$element.parent(),
                    h = this.getPosition(f);
                a = "bottom" == a && u.top + u.height + d - h.scroll > h.height ? "top" : "top" == a && u.top - h.scroll - d < 0 ? "bottom" : "right" == a && u.right + c > h.width ? "left" : "left" == a && u.left - c < h.left ? "right" : a, i.removeClass(p).addClass(a)
            }
            var m = this.getCalculatedOffset(a, u, c, d);
            this.applyPlacement(m, a);
            var v = function() {
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null
            };
            e.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", v).emulateTransitionEnd(150) : v()
        }
    }, n.prototype.applyPlacement = function(t, n) {
        var r = this.tip(),
            i = r[0].offsetWidth,
            o = r[0].offsetHeight,
            a = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), t.top = t.top + a, t.left = t.left + s, e.offset.setOffset(r[0], e.extend({
            using: function(e) {
                r.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), r.addClass("in");
        var l = r[0].offsetWidth,
            u = r[0].offsetHeight;
        "top" == n && u != o && (t.top = t.top + o - u);
        var c = this.getViewportAdjustedDelta(n, t, l, u);
        c.left ? t.left += c.left : t.top += c.top;
        var d = c.left ? 2 * c.left - i + l : 2 * c.top - o + u,
            p = c.left ? "left" : "top",
            f = c.left ? "offsetWidth" : "offsetHeight";
        r.offset(t), this.replaceArrow(d, r[0][f], p)
    }, n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function() {
        function t() {
            "in" != n.hoverState && r.detach(), n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this,
            r = this.tip(),
            i = e.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (r.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", t).emulateTransitionEnd(150) : t(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0],
            r = "BODY" == n.tagName;
        return e.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, {
            scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop(),
            width: r ? e(window).width() : t.outerWidth(),
            height: r ? e(window).height() : t.outerHeight()
        }, r ? {
            top: 0,
            left: 0
        } : t.offset())
    }, n.prototype.getCalculatedOffset = function(e, t, n, r) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - r,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(e, t, n, r) {
        var i = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return i;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var s = t.top - o - a.scroll,
                l = t.top + o - a.scroll + r;
            s < a.top ? i.top = a.top - s : l > a.top + a.height && (i.top = a.top + a.height - l)
        } else {
            var u = t.left - o,
                c = t.left + o + n;
            u < a.left ? i.left = a.left - u : c > a.width && (i.left = a.left + a.width - c)
        }
        return i
    }, n.prototype.getTitle = function() {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, n.prototype.getUID = function(e) {
        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
        return e
    }, n.prototype.tip = function() {
        return this.$tip = this.$tip || e(this.options.template)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var r = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = r, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.popover"),
                o = "object" == typeof t && t;
            (i || "destroy" != t) && (i || r.data("bs.popover", i = new n(this, o)), "string" == typeof t && i[t]())
        })
    }
    var n = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.2.0", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, n.prototype.tip = function() {
        return this.$tip || (this.$tip = e(this.options.template)), this.$tip
    };
    var r = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
        return e.fn.popover = r, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.tab");
            i || r.data("bs.tab", i = new n(this)), "string" == typeof t && i[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.2.0", n.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            r = t.data("target");
        if (r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var i = n.find(".active:last a")[0],
                o = e.Event("show.bs.tab", {
                    relatedTarget: i
                });
            if (t.trigger(o), !o.isDefaultPrevented()) {
                var a = e(r);
                this.activate(t.closest("li"), n), this.activate(a, a.parent(), function() {
                    t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i
                    })
                })
            }
        }
    }, n.prototype.activate = function(t, n, r) {
        function i() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
        }
        var o = n.find("> .active"),
            a = r && e.support.transition && o.hasClass("fade");
        a ? o.one("bsTransitionEnd", i).emulateTransitionEnd(150) : i(), o.removeClass("in")
    };
    var r = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
        return e.fn.tab = r, this
    }, e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(n) {
        n.preventDefault(), t.call(e(this), "show")
    })
}(jQuery),
function() {
    var e, t, n, r, i, o, a, s, l, u, c, d, p, f, h, m, v, g, y, b, w = [].slice,
        x = [].indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (t in this && this[t] === e) return t;
            return -1
        };
    e = jQuery, e.payment = {}, e.payment.fn = {}, e.fn.payment = function() {
        var t, n;
        return n = arguments[0], t = 2 <= arguments.length ? w.call(arguments, 1) : [], e.payment.fn[n].apply(this, t)
    }, i = /(\d{1,4})/g, r = [{
        type: "visaelectron",
        pattern: /^4(026|17500|405|508|844|91[37])/,
        format: i,
        length: [16],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "maestro",
        pattern: /^(5(018|0[23]|[68])|6(39|7))/,
        format: i,
        length: [12, 13, 14, 15, 16, 17, 18, 19],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "forbrugsforeningen",
        pattern: /^600/,
        format: i,
        length: [16],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "dankort",
        pattern: /^5019/,
        format: i,
        length: [16],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "visa",
        pattern: /^4/,
        format: i,
        length: [13, 16],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "mastercard",
        pattern: /^5[0-5]/,
        format: i,
        length: [16],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "amex",
        pattern: /^3[47]/,
        format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
        length: [15],
        cvcLength: [3, 4],
        luhn: !0
    }, {
        type: "dinersclub",
        pattern: /^3[0689]/,
        format: i,
        length: [14],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "discover",
        pattern: /^6([045]|22)/,
        format: i,
        length: [16],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "unionpay",
        pattern: /^(62|88)/,
        format: i,
        length: [16, 17, 18, 19],
        cvcLength: [3],
        luhn: !1
    }, {
        type: "jcb",
        pattern: /^35/,
        format: i,
        length: [16],
        cvcLength: [3],
        luhn: !0
    }], t = function(e) {
        var t, n, i;
        for (e = (e + "").replace(/\D/g, ""), n = 0, i = r.length; i > n; n++)
            if (t = r[n], t.pattern.test(e)) return t
    }, n = function(e) {
        var t, n, i;
        for (n = 0, i = r.length; i > n; n++)
            if (t = r[n], t.type === e) return t
    }, p = function(e) {
        var t, n, r, i, o, a;
        for (r = !0, i = 0, n = (e + "").split("").reverse(), o = 0, a = n.length; a > o; o++) t = n[o], t = parseInt(t, 10), (r = !r) && (t *= 2), t > 9 && (t -= 9), i += t;
        return i % 10 === 0
    }, d = function(e) {
        var t;
        return null != e.prop("selectionStart") && e.prop("selectionStart") !== e.prop("selectionEnd") ? !0 : ("undefined" != typeof document && null !== document && null != (t = document.selection) && "function" == typeof t.createRange ? t.createRange().text : void 0) ? !0 : !1
    }, f = function(t) {
        return setTimeout(function() {
            var n, r;
            return n = e(t.currentTarget), r = n.val(), r = e.payment.formatCardNumber(r), n.val(r)
        })
    }, s = function(n) {
        var r, i, o, a, s, l, u;
        return o = String.fromCharCode(n.which), !/^\d+$/.test(o) || (r = e(n.currentTarget), u = r.val(), i = t(u + o), a = (u.replace(/\D/g, "") + o).length, l = 16, i && (l = i.length[i.length.length - 1]), a >= l || null != r.prop("selectionStart") && r.prop("selectionStart") !== u.length) ? void 0 : (s = i && "amex" === i.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/, s.test(u) ? (n.preventDefault(), setTimeout(function() {
            return r.val(u + " " + o)
        })) : s.test(u + o) ? (n.preventDefault(), setTimeout(function() {
            return r.val(u + o + " ")
        })) : void 0)
    }, o = function(t) {
        var n, r;
        return n = e(t.currentTarget), r = n.val(), 8 !== t.which || null != n.prop("selectionStart") && n.prop("selectionStart") !== r.length ? void 0 : /\d\s$/.test(r) ? (t.preventDefault(), setTimeout(function() {
            return n.val(r.replace(/\d\s$/, ""))
        })) : /\s\d?$/.test(r) ? (t.preventDefault(), setTimeout(function() {
            return n.val(r.replace(/\s\d?$/, ""))
        })) : void 0
    }, h = function(t) {
        return setTimeout(function() {
            var n, r;
            return n = e(t.currentTarget), r = n.val(), r = e.payment.formatExpiry(r), n.val(r)
        })
    }, l = function(t) {
        var n, r, i;
        return r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (n = e(t.currentTarget), i = n.val() + r, /^\d$/.test(i) && "0" !== i && "1" !== i ? (t.preventDefault(), setTimeout(function() {
            return n.val("0" + i + " / ")
        })) : /^\d\d$/.test(i) ? (t.preventDefault(), setTimeout(function() {
            return n.val("" + i + " / ")
        })) : void 0) : void 0
    }, u = function(t) {
        var n, r, i;
        return r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (n = e(t.currentTarget), i = n.val(), /^\d\d$/.test(i) ? n.val("" + i + " / ") : void 0) : void 0
    }, c = function(t) {
        var n, r, i;
        return i = String.fromCharCode(t.which), "/" === i || " " === i ? (n = e(t.currentTarget), r = n.val(), /^\d$/.test(r) && "0" !== r ? n.val("0" + r + " / ") : void 0) : void 0
    }, a = function(t) {
        var n, r;
        return n = e(t.currentTarget), r = n.val(), 8 !== t.which || null != n.prop("selectionStart") && n.prop("selectionStart") !== r.length ? void 0 : /\s\/\s\d?$/.test(r) ? (t.preventDefault(), setTimeout(function() {
            return n.val(r.replace(/\s\/\s\d?$/, ""))
        })) : void 0
    }, y = function(e) {
        var t;
        return e.metaKey || e.ctrlKey ? !0 : 32 === e.which ? !1 : 0 === e.which ? !0 : e.which < 33 ? !0 : (t = String.fromCharCode(e.which), !!/[\d\s]/.test(t))
    }, v = function(n) {
        var r, i, o, a;
        return r = e(n.currentTarget), o = String.fromCharCode(n.which), /^\d+$/.test(o) && !d(r) ? (a = (r.val() + o).replace(/\D/g, ""), i = t(a), i ? a.length <= i.length[i.length.length - 1] : a.length <= 16) : void 0
    }, g = function(t) {
        var n, r, i;
        return n = e(t.currentTarget), r = String.fromCharCode(t.which), /^\d+$/.test(r) && !d(n) ? (i = n.val() + r, i = i.replace(/\D/g, ""), i.length > 6 ? !1 : void 0) : void 0
    }, m = function(t) {
        var n, r, i;
        return n = e(t.currentTarget), r = String.fromCharCode(t.which), /^\d+$/.test(r) && !d(n) ? (i = n.val() + r, i.length <= 4) : void 0
    }, b = function(t) {
        var n, i, o, a, s;
        return n = e(t.currentTarget), s = n.val(), a = e.payment.cardType(s) || "unknown", n.hasClass(a) ? void 0 : (i = function() {
            var e, t, n;
            for (n = [], e = 0, t = r.length; t > e; e++) o = r[e], n.push(o.type);
            return n
        }(), n.removeClass("unknown"), n.removeClass(i.join(" ")), n.addClass(a), n.toggleClass("identified", "unknown" !== a), n.trigger("payment.cardType", a))
    }, e.payment.fn.formatCardCVC = function() {
        return this.payment("restrictNumeric"), this.on("keypress", m), this
    }, e.payment.fn.formatCardExpiry = function() {
        return this.payment("restrictNumeric"), this.on("keypress", g), this.on("keypress", l), this.on("keypress", c), this.on("keypress", u), this.on("keydown", a), this.on("change", h), this.on("input", h), this
    }, e.payment.fn.formatCardNumber = function() {
        return this.payment("restrictNumeric"), this.on("keypress", v), this.on("keypress", s), this.on("keydown", o), this.on("keyup", b), this.on("paste", f), this.on("change", f), this.on("input", f), this.on("input", b), this
    }, e.payment.fn.restrictNumeric = function() {
        return this.on("keypress", y), this
    }, e.payment.fn.cardExpiryVal = function() {
        return e.payment.cardExpiryVal(e(this).val())
    }, e.payment.cardExpiryVal = function(e) {
        var t, n, r, i;
        return e = e.replace(/\s/g, ""), i = e.split("/", 2), t = i[0], r = i[1], 2 === (null != r ? r.length : void 0) && /^\d+$/.test(r) && (n = (new Date).getFullYear(), n = n.toString().slice(0, 2), r = n + r), t = parseInt(t, 10), r = parseInt(r, 10), {
            month: t,
            year: r
        }
    }, e.payment.validateCardNumber = function(e) {
        var n, r;
        return e = (e + "").replace(/\s+|-/g, ""), /^\d+$/.test(e) ? (n = t(e), n ? (r = e.length, x.call(n.length, r) >= 0 && (n.luhn === !1 || p(e))) : !1) : !1
    }, e.payment.validateCardExpiry = function(t, n) {
        var r, i, o;
        return "object" == typeof t && "month" in t && (o = t, t = o.month, n = o.year), t && n ? (t = e.trim(t), n = e.trim(n), /^\d+$/.test(t) && /^\d+$/.test(n) && t >= 1 && 12 >= t ? (2 === n.length && (n = 70 > n ? "20" + n : "19" + n), 4 !== n.length ? !1 : (i = new Date(n, t), r = new Date, i.setMonth(i.getMonth() - 1), i.setMonth(i.getMonth() + 1, 1), i > r)) : !1) : !1
    }, e.payment.validateCardCVC = function(t, r) {
        var i, o;
        return t = e.trim(t), /^\d+$/.test(t) ? (i = n(r), null != i ? (o = t.length, x.call(i.cvcLength, o) >= 0) : t.length >= 3 && t.length <= 4) : !1
    }, e.payment.cardType = function(e) {
        var n;
        return e ? (null != (n = t(e)) ? n.type : void 0) || null : null
    }, e.payment.formatCardNumber = function(n) {
        var r, i, o, a;
        return (r = t(n)) ? (o = r.length[r.length.length - 1], n = n.replace(/\D/g, ""), n = n.slice(0, o), r.format.global ? null != (a = n.match(r.format)) ? a.join(" ") : void 0 : (i = r.format.exec(n), null != i ? (i.shift(), i = e.grep(i, function(e) {
            return e
        }), i.join(" ")) : void 0)) : n
    }, e.payment.formatExpiry = function(e) {
        var t, n, r, i;
        return (n = e.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/)) ? (t = n[1] || "", r = n[2] || "", i = n[3] || "", (i.length > 0 || r.length > 0 && !/\ \/?\ ?/.test(r)) && (r = " / "), 1 === t.length && "0" !== t && "1" !== t && (t = "0" + t, r = " / "), t + r + i) : ""
    }
}.call(this), jQuery(function(e) {
        "use strict";
        e(".button-flyer-download").on("click", function() {
            var e = {
                "File Format": this.getAttribute("data-format"),
                "Flyer URL": this.getAttribute("data-url")
            };
            window.ga("send", "event", "button", "click", "flyer-download"), window.mixpanel.people.set_once("First Flyer Download", new Date), window.mixpanel.track("Flyer Download", e), window.Intercom("trackEvent", "downloaded flyer", e)
        }), e(".button-flyer-edit").on("click", function() {
            var e = {
                "Flyer URL": this.getAttribute("data-url")
            };
            window.ga("send", "event", "button", "click", "flyer-edit"), window.mixpanel.people.set_once("First Flyer Edit", new Date), window.mixpanel.track("Flyer Edit", e), window.Intercom("trackEvent", "edited flyer", e)
        }), e(".button-flyer-preview").on("click", function() {
            var e = {
                "Flyer URL": this.getAttribute("data-url")
            };
            window.ga("send", "event", "button", "click", "flyer-preview"), window.mixpanel.people.set_once("First Flyer Preview", new Date), window.mixpanel.track("Flyer Preview", e), window.Intercom("trackEvent", "previewed flyer", e)
        }), e(".button-flyer-save").on("click", function() {
            var e = {
                "Flyer URL": this.getAttribute("data-url")
            };
            window.ga("send", "event", "button", "click", "flyer-save"), window.mixpanel.people.set_once("First Flyer Save", new Date), window.mixpanel.track("Flyer Save", e), window.Intercom("trackEvent", "saved flyer", e)
        }), e(".button-flyer-share-copy").on("click", function() {
            var e = {
                Method: "Copy",
                "Flyer URL": this.getAttribute("data-url")
            };
            window.ga("send", "event", "button", "click", "flyer-share-copy"), window.mixpanel.people.set_once("First Flyer Share", new Date), window.mixpanel.people.set_once("First Flyer Share By Copy", new Date), window.mixpanel.track("Flyer Share", e), window.Intercom("trackEvent", "shared flyer", e)
        }), e(".button-flyer-share-email").on("click", function() {
            var e = {
                Method: "Email",
                "Flyer URL": this.getAttribute("data-url")
            };
            window.ga("send", "event", "button", "click", "flyer-share-email"), window.mixpanel.people.set_once("First Flyer Share", new Date), window.mixpanel.people.set_once("First Flyer Share By Email", new Date), window.mixpanel.track("Flyer Share", e), window.Intercom("trackEvent", "shared flyer", e)
        }), e(".button-flyer-share-facebook").on("click", function() {
            var e = {
                Method: "Facebook",
                "Flyer URL": this.getAttribute("data-url")
            };
            window.ga("send", "event", "button", "click", "flyer-share-facebook"), window.mixpanel.people.set_once("First Flyer Share", new Date), window.mixpanel.people.set_once("First Flyer Share On Facebook", new Date), window.mixpanel.track("Flyer Share", e), window.Intercom("trackEvent", "shared flyer", e)
        }), e(".button-flyer-share-google-plus").on("click", function() {
            var e = {
                Method: "Google Plus",
                "Flyer URL": this.getAttribute("data-url")
            };
            window.ga("send", "event", "button", "click", "flyer-share-google-plus"), window.mixpanel.people.set_once("First Flyer Share", new Date), window.mixpanel.people.set_once("First Flyer Share On Google Plus", new Date), window.mixpanel.track("Flyer Share", e), window.Intercom("trackEvent", "shared flyer", e)
        }), e(".button-flyer-share-linkedin").on("click", function() {
            var e = {
                Method: "LinkedIn",
                "Flyer URL": this.getAttribute("data-url")
            };
            window.ga("send", "event", "button", "click", "flyer-share-linkedin"), window.mixpanel.people.set_once("First Flyer Share", new Date), window.mixpanel.people.set_once("First Flyer Share On LinkedIn", new Date), window.mixpanel.track("Flyer Share", e), window.Intercom("trackEvent", "shared flyer", e)
        }), e(".button-flyer-share-pinterest").on("click", function() {
            var e = {
                Method: "Pinterest",
                "Flyer URL": this.getAttribute("data-url")
            };
            window.ga("send", "event", "button", "click", "flyer-share-pinterest"), window.mixpanel.people.set_once("First Flyer Share", new Date), window.mixpanel.people.set_once("First Flyer Share On Pinterest", new Date), window.mixpanel.track("Flyer Share", e), window.Intercom("trackEvent", "shared flyer", e)
        }), e(".button-flyer-share-twitter").on("click", function() {
            var e = {
                Method: "Twitter",
                "Flyer URL": this.getAttribute("data-url")
            };
            window.ga("send", "event", "button", "click", "flyer-share-twitter"), window.mixpanel.people.set_once("First Flyer Share", new Date), window.mixpanel.people.set_once("First Flyer Share On Twitter", new Date), window.mixpanel.track("Flyer Share", e), window.Intercom("trackEvent", "shared flyer", e)
        })
    }),
    function(e) {
        "use strict";
        var t = {
            initialize: function() {
                this.methodLinks = e("a[data-method]").on("click", this.handleMethod)
            },
            handleMethod: function(n) {
                var r = e(this);
                return r.data("confirm") && !window.confirm(r.data("confirm")) ? !1 : (t.createForm(r).submit(), void n.preventDefault())
            },
            createForm: function(t) {
                var n = e("meta[name=csrf-token]").attr("content"),
                    r = e("<form>", {
                        method: "POST",
                        action: t.attr("href")
                    }),
                    i = e("<input>", {
                        type: "hidden",
                        name: "_token",
                        value: n
                    }),
                    o = e("<input>", {
                        name: "_method",
                        type: "hidden",
                        value: t.data("method").toUpperCase()
                    });
                return r.append(i, o).appendTo("body")
            }
        };
        t.initialize()
    }(jQuery), jQuery(function(e) {
        "use strict";
        "FileReader" in window || e(".incompatibility-filereader").removeClass("hide")
    }), jQuery(function(e) {
        "use strict";

        function t(e, t) {
            return '<div class="alert alert-' + t + '"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' + e + "</div>"
        }
        var n = e("[data-invitation-form]"),
            r = n.find("button[type=submit]"),
            i = n.find("textarea");
        n.on("submit", function() {
            return r.prop("disabled", !0), e.ajax({
                url: this.action,
                type: "POST",
                data: n.serialize()
            }).done(function() {
                i.val(""), i.before(t("Invitations sent successfully.", "success"))
            }).fail(function(e) {
                var n = e.responseText || "Error sending the email. Please verify the email addresses and try again.";
                i.before(t(n, "danger"))
            }).always(function() {
                r.prop("disabled", !1)
            }), !1
        })
    }), jQuery(function(e) {
        "use strict";

        function t(e, t) {
            e.parent(".form-group").toggleClass("has-error", t)
        }
        var n = e(".stripe-form");
        n.find(".payment-errors").hide(), e(".cc-cvc").payment("formatCardCVC"), e(".cc-exp-month").payment("restrictNumeric"), e(".cc-exp-year").payment("restrictNumeric"), e(".cc-number").payment("formatCardNumber"), n.submit(function() {
            function n(t, n) {
                n.error ? (o.text(n.error.message).show(), i.prop("disabled", !1)) : (r.append(e('<input type="hidden" name="stripe-token" />').val(n.id)), r.get(0).submit())
            }
            var r = e(this),
                i = r.find("button"),
                o = r.find(".payment-errors"),
                a = r.find(".payment"),
                s = r.find(".cc-cvc"),
                l = r.find(".cc-exp-month"),
                u = r.find(".cc-exp-year"),
                c = r.find(".cc-number");
            if (0 !== a.length) {
                var d = e.payment.validateCardCVC(s.val(), e.payment.cardType(c.val())),
                    p = e.payment.validateCardExpiry(l.val(), u.val()),
                    f = e.payment.validateCardNumber(c.val());
                return t(s, !d), t(l, !p), t(u, !p), t(c, !f), d && p && f && (i.prop("disabled", !0), window.Stripe.card.createToken(r, n)), !1
            }
        })
    }), jQuery(function(e) {
        "use strict";

        function t(e, t) {
            return '<div class="alert alert-' + t + '"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' + e + "</div>"
        }
        var n = e("[data-editor-share-modal]"),
            r = e("[data-editor-share]"),
            i = e("[data-share-copy]"),
            o = e("[data-share-input]"),
            a = e("[data-share-email-customize]"),
            s = e("[data-share-email-form]"),
            l = s.find("#emails"),
            u = s.find("button[type=submit]"),
            c = i.text();
        return i.tooltip(), i.on("click", function() {
            i.text(i.data("share-copy")).blur(), window.setTimeout(function() {
                i.text(c)
            }, 500)
        }), r.on("click", function() {
            n.modal("show")
        }), o.on("click", function() {
            this.select()
        }), a.on("click", function(t) {
            t.preventDefault(), e(this.dataset.shareEmailCustomize).slideToggle(500)
        }), s.on("submit", function() {
            return u.prop("disabled", !0).blur(), e.ajax({
                url: this.action,
                type: "POST",
                data: s.serialize()
            }).done(function() {
                l.val(""), s.prepend(t("Email sent successfully.", "success"))
            }).fail(function() {
                s.prepend(t("Error sending the email. Please verify the email addresses and try again.", "danger"))
            }).always(function() {
                u.prop("disabled", !1)
            }), !1
        }), new ZeroClipboard(i)
    }), jQuery(function(e) {
        "use strict";
        if (location.hash) {
            var t = e("[href=" + location.hash + "]");
            t && t.tab("show")
        }
        e(".nav-tabs a").on("click", function() {
            window.history.pushState(null, null, this.href)
        })
    }), jQuery(function(e) {
        "use strict";
        e("[data-show-team-members]").each(function() {
            var t = e(this),
                n = t.text(),
                r = t.data("show-team-members");
            t.on("click", function(i) {
                i.preventDefault(), t.text(t.text() === n ? r : n), e(this.getAttribute("data-target")).slideToggle(500)
            })
        })
    }), jQuery(function(e) {
        "use strict";
        var t = e("a[data-thumbnail-popover]");
        t.popover({
            content: function() {
                return '<img src="' + e(this).data("thumbnail-popover") + '">'
            },
            html: !0,
            trigger: "hover"
        }), t.each(function() {
            var t = new Image;
            t.src = e(this).data("thumbnail-popover")
        })
    });
//# sourceMappingURL=/assets/maps/application.js.map