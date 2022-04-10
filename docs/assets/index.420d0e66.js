var za = Object.defineProperty;
var di = Object.getOwnPropertySymbols;
var Ma = Object.prototype.hasOwnProperty,
  Ia = Object.prototype.propertyIsEnumerable;
var pi = (e, t, n) =>
    t in e
      ? za(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  mi = (e, t) => {
    for (var n in t || (t = {})) Ma.call(t, n) && pi(e, n, t[n]);
    if (di) for (var n of di(t)) Ia.call(t, n) && pi(e, n, t[n]);
    return e;
  };
const ja = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerpolicy && (o.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
};
ja();
var st = { exports: {} },
  z = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var hi = Object.getOwnPropertySymbols,
  Fa = Object.prototype.hasOwnProperty,
  Da = Object.prototype.propertyIsEnumerable;
function Ua(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
function $a() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (o) {
      return t[o];
    });
    if (r.join("") !== "0123456789") return !1;
    var l = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (o) {
        l[o] = o;
      }),
      Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var Mu = $a()
  ? Object.assign
  : function (e, t) {
      for (var n, r = Ua(e), l, o = 1; o < arguments.length; o++) {
        n = Object(arguments[o]);
        for (var i in n) Fa.call(n, i) && (r[i] = n[i]);
        if (hi) {
          l = hi(n);
          for (var u = 0; u < l.length; u++)
            Da.call(n, l[u]) && (r[l[u]] = n[l[u]]);
        }
      }
      return r;
    };
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ho = Mu,
  Vt = 60103,
  Iu = 60106;
z.Fragment = 60107;
z.StrictMode = 60108;
z.Profiler = 60114;
var ju = 60109,
  Fu = 60110,
  Du = 60112;
z.Suspense = 60113;
var Uu = 60115,
  $u = 60116;
if (typeof Symbol == "function" && Symbol.for) {
  var ye = Symbol.for;
  (Vt = ye("react.element")),
    (Iu = ye("react.portal")),
    (z.Fragment = ye("react.fragment")),
    (z.StrictMode = ye("react.strict_mode")),
    (z.Profiler = ye("react.profiler")),
    (ju = ye("react.provider")),
    (Fu = ye("react.context")),
    (Du = ye("react.forward_ref")),
    (z.Suspense = ye("react.suspense")),
    (Uu = ye("react.memo")),
    ($u = ye("react.lazy"));
}
var yi = typeof Symbol == "function" && Symbol.iterator;
function Va(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yi && e[yi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
function $n(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Vu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Au = {};
function At(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Au),
    (this.updater = n || Vu);
}
At.prototype.isReactComponent = {};
At.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error($n(85));
  this.updater.enqueueSetState(this, e, t, "setState");
};
At.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Bu() {}
Bu.prototype = At.prototype;
function yo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Au),
    (this.updater = n || Vu);
}
var vo = (yo.prototype = new Bu());
vo.constructor = yo;
ho(vo, At.prototype);
vo.isPureReactComponent = !0;
var go = { current: null },
  Wu = Object.prototype.hasOwnProperty,
  Hu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qu(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Wu.call(t, r) && !Hu.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), d = 0; d < u; d++) s[d] = arguments[d + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Vt,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: go.current,
  };
}
function Aa(e, t) {
  return {
    $$typeof: Vt,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function wo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vt;
}
function Ba(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var vi = /\/+/g;
function ll(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ba("" + e.key)
    : t.toString(36);
}
function or(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Vt:
          case Iu:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + ll(i, 0) : r),
      Array.isArray(l)
        ? ((n = ""),
          e != null && (n = e.replace(vi, "$&/") + "/"),
          or(l, t, n, "", function (d) {
            return d;
          }))
        : l != null &&
          (wo(l) &&
            (l = Aa(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(vi, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Array.isArray(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + ll(o, u);
      i += or(o, t, n, s, l);
    }
  else if (((s = Va(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + ll(o, u++)), (i += or(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = "" + e),
      Error(
        $n(
          31,
          t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t
        )
      ))
    );
  return i;
}
function Gn(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    or(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Wa(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      (e._status = 0),
      (e._result = t),
      t.then(
        function (n) {
          e._status === 0 &&
            ((n = n.default), (e._status = 1), (e._result = n));
        },
        function (n) {
          e._status === 0 && ((e._status = 2), (e._result = n));
        }
      );
  }
  if (e._status === 1) return e._result;
  throw e._result;
}
var Yu = { current: null };
function Re() {
  var e = Yu.current;
  if (e === null) throw Error($n(321));
  return e;
}
var Ha = {
  ReactCurrentDispatcher: Yu,
  ReactCurrentBatchConfig: { transition: 0 },
  ReactCurrentOwner: go,
  IsSomeRendererActing: { current: !1 },
  assign: ho,
};
z.Children = {
  map: Gn,
  forEach: function (e, t, n) {
    Gn(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Gn(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Gn(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!wo(e)) throw Error($n(143));
    return e;
  },
};
z.Component = At;
z.PureComponent = yo;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ha;
z.cloneElement = function (e, t, n) {
  if (e == null) throw Error($n(267, e));
  var r = ho({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = go.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Wu.call(t, s) &&
        !Hu.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var d = 0; d < s; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: Vt, type: e.type, key: l, ref: o, props: r, _owner: i };
};
z.createContext = function (e, t) {
  return (
    t === void 0 && (t = null),
    (e = {
      $$typeof: Fu,
      _calculateChangedBits: t,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (e.Provider = { $$typeof: ju, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = Qu;
z.createFactory = function (e) {
  var t = Qu.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: Du, render: e };
};
z.isValidElement = wo;
z.lazy = function (e) {
  return { $$typeof: $u, _payload: { _status: -1, _result: e }, _init: Wa };
};
z.memo = function (e, t) {
  return { $$typeof: Uu, type: e, compare: t === void 0 ? null : t };
};
z.useCallback = function (e, t) {
  return Re().useCallback(e, t);
};
z.useContext = function (e, t) {
  return Re().useContext(e, t);
};
z.useDebugValue = function () {};
z.useEffect = function (e, t) {
  return Re().useEffect(e, t);
};
z.useImperativeHandle = function (e, t, n) {
  return Re().useImperativeHandle(e, t, n);
};
z.useLayoutEffect = function (e, t) {
  return Re().useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return Re().useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return Re().useReducer(e, t, n);
};
z.useRef = function (e) {
  return Re().useRef(e);
};
z.useState = function (e) {
  return Re().useState(e);
};
z.version = "17.0.2";
st.exports = z;
var Gu = { exports: {} },
  he = {},
  Ku = { exports: {} },
  Xu = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  var t, n, r, l;
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  if (typeof window == "undefined" || typeof MessageChannel != "function") {
    var s = null,
      d = null,
      g = function () {
        if (s !== null)
          try {
            var w = e.unstable_now();
            s(!0, w), (s = null);
          } catch (O) {
            throw (setTimeout(g, 0), O);
          }
      };
    (t = function (w) {
      s !== null ? setTimeout(t, 0, w) : ((s = w), setTimeout(g, 0));
    }),
      (n = function (w, O) {
        d = setTimeout(w, O);
      }),
      (r = function () {
        clearTimeout(d);
      }),
      (e.unstable_shouldYield = function () {
        return !1;
      }),
      (l = e.unstable_forceFrameRate = function () {});
  } else {
    var N = window.setTimeout,
      h = window.clearTimeout;
    if (typeof console != "undefined") {
      var k = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame != "function" &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
        ),
        typeof k != "function" &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
          );
    }
    var C = !1,
      E = null,
      c = -1,
      a = 5,
      f = 0;
    (e.unstable_shouldYield = function () {
      return e.unstable_now() >= f;
    }),
      (l = function () {}),
      (e.unstable_forceFrameRate = function (w) {
        0 > w || 125 < w
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (a = 0 < w ? Math.floor(1e3 / w) : 5);
      });
    var p = new MessageChannel(),
      m = p.port2;
    (p.port1.onmessage = function () {
      if (E !== null) {
        var w = e.unstable_now();
        f = w + a;
        try {
          E(!0, w) ? m.postMessage(null) : ((C = !1), (E = null));
        } catch (O) {
          throw (m.postMessage(null), O);
        }
      } else C = !1;
    }),
      (t = function (w) {
        (E = w), C || ((C = !0), m.postMessage(null));
      }),
      (n = function (w, O) {
        c = N(function () {
          w(e.unstable_now());
        }, O);
      }),
      (r = function () {
        h(c), (c = -1);
      });
  }
  function P(w, O) {
    var R = w.length;
    w.push(O);
    e: for (;;) {
      var $ = (R - 1) >>> 1,
        Q = w[$];
      if (Q !== void 0 && 0 < L(Q, O)) (w[$] = O), (w[R] = Q), (R = $);
      else break e;
    }
  }
  function v(w) {
    return (w = w[0]), w === void 0 ? null : w;
  }
  function x(w) {
    var O = w[0];
    if (O !== void 0) {
      var R = w.pop();
      if (R !== O) {
        w[0] = R;
        e: for (var $ = 0, Q = w.length; $ < Q; ) {
          var be = 2 * ($ + 1) - 1,
            et = w[be],
            Kt = be + 1,
            yt = w[Kt];
          if (et !== void 0 && 0 > L(et, R))
            yt !== void 0 && 0 > L(yt, et)
              ? ((w[$] = yt), (w[Kt] = R), ($ = Kt))
              : ((w[$] = et), (w[be] = R), ($ = be));
          else if (yt !== void 0 && 0 > L(yt, R))
            (w[$] = yt), (w[Kt] = R), ($ = Kt);
          else break e;
        }
      }
      return O;
    }
    return null;
  }
  function L(w, O) {
    var R = w.sortIndex - O.sortIndex;
    return R !== 0 ? R : w.id - O.id;
  }
  var _ = [],
    H = [],
    el = 1,
    ae = null,
    X = 3,
    Yn = !1,
    qe = !1,
    Gt = !1;
  function tl(w) {
    for (var O = v(H); O !== null; ) {
      if (O.callback === null) x(H);
      else if (O.startTime <= w)
        x(H), (O.sortIndex = O.expirationTime), P(_, O);
      else break;
      O = v(H);
    }
  }
  function nl(w) {
    if (((Gt = !1), tl(w), !qe))
      if (v(_) !== null) (qe = !0), t(rl);
      else {
        var O = v(H);
        O !== null && n(nl, O.startTime - w);
      }
  }
  function rl(w, O) {
    (qe = !1), Gt && ((Gt = !1), r()), (Yn = !0);
    var R = X;
    try {
      for (
        tl(O), ae = v(_);
        ae !== null &&
        (!(ae.expirationTime > O) || (w && !e.unstable_shouldYield()));

      ) {
        var $ = ae.callback;
        if (typeof $ == "function") {
          (ae.callback = null), (X = ae.priorityLevel);
          var Q = $(ae.expirationTime <= O);
          (O = e.unstable_now()),
            typeof Q == "function" ? (ae.callback = Q) : ae === v(_) && x(_),
            tl(O);
        } else x(_);
        ae = v(_);
      }
      if (ae !== null) var be = !0;
      else {
        var et = v(H);
        et !== null && n(nl, et.startTime - O), (be = !1);
      }
      return be;
    } finally {
      (ae = null), (X = R), (Yn = !1);
    }
  }
  var Ra = l;
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (w) {
      w.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      qe || Yn || ((qe = !0), t(rl));
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return X;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return v(_);
    }),
    (e.unstable_next = function (w) {
      switch (X) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = X;
      }
      var R = X;
      X = O;
      try {
        return w();
      } finally {
        X = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = Ra),
    (e.unstable_runWithPriority = function (w, O) {
      switch (w) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          w = 3;
      }
      var R = X;
      X = w;
      try {
        return O();
      } finally {
        X = R;
      }
    }),
    (e.unstable_scheduleCallback = function (w, O, R) {
      var $ = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? $ + R : $))
          : (R = $),
        w)
      ) {
        case 1:
          var Q = -1;
          break;
        case 2:
          Q = 250;
          break;
        case 5:
          Q = 1073741823;
          break;
        case 4:
          Q = 1e4;
          break;
        default:
          Q = 5e3;
      }
      return (
        (Q = R + Q),
        (w = {
          id: el++,
          callback: O,
          priorityLevel: w,
          startTime: R,
          expirationTime: Q,
          sortIndex: -1,
        }),
        R > $
          ? ((w.sortIndex = R),
            P(H, w),
            v(_) === null && w === v(H) && (Gt ? r() : (Gt = !0), n(nl, R - $)))
          : ((w.sortIndex = Q), P(_, w), qe || Yn || ((qe = !0), t(rl))),
        w
      );
    }),
    (e.unstable_wrapCallback = function (w) {
      var O = X;
      return function () {
        var R = X;
        X = O;
        try {
          return w.apply(this, arguments);
        } finally {
          X = R;
        }
      };
    });
})(Xu);
Ku.exports = Xu;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $r = st.exports,
  F = Mu,
  W = Ku.exports;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
if (!$r) throw Error(y(227));
var Zu = new Set(),
  xn = {};
function dt(e, t) {
  Ft(e, t), Ft(e + "Capture", t);
}
function Ft(e, t) {
  for (xn[e] = t, e = 0; e < t.length; e++) Zu.add(t[e]);
}
var Le = !(
    typeof window == "undefined" ||
    typeof window.document == "undefined" ||
    typeof window.document.createElement == "undefined"
  ),
  Qa =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  gi = Object.prototype.hasOwnProperty,
  wi = {},
  Si = {};
function Ya(e) {
  return gi.call(Si, e)
    ? !0
    : gi.call(wi, e)
    ? !1
    : Qa.test(e)
    ? (Si[e] = !0)
    : ((wi[e] = !0), !1);
}
function Ga(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ka(e, t, n, r) {
  if (t === null || typeof t == "undefined" || Ga(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function te(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var K = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    K[e] = new te(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  K[t] = new te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  K[e] = new te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  K[e] = new te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    K[e] = new te(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  K[e] = new te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  K[e] = new te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  K[e] = new te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  K[e] = new te(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var So = /[\-:]([a-z])/g;
function ko(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(So, ko);
    K[t] = new te(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(So, ko);
    K[t] = new te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(So, ko);
  K[t] = new te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  K[e] = new te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
K.xlinkHref = new te(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  K[e] = new te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Eo(e, t, n, r) {
  var l = K.hasOwnProperty(t) ? K[t] : null,
    o =
      l !== null
        ? l.type === 0
        : r
        ? !1
        : !(
            !(2 < t.length) ||
            (t[0] !== "o" && t[0] !== "O") ||
            (t[1] !== "n" && t[1] !== "N")
          );
  o ||
    (Ka(t, n, l, r) && (n = null),
    r || l === null
      ? Ya(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pt = $r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  sn = 60103,
  nt = 60106,
  Me = 60107,
  _o = 60108,
  pn = 60114,
  Co = 60109,
  xo = 60110,
  Vr = 60112,
  mn = 60113,
  yr = 60120,
  Ar = 60115,
  Po = 60116,
  No = 60121,
  To = 60128,
  Ju = 60129,
  Oo = 60130,
  Tl = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var B = Symbol.for;
  (sn = B("react.element")),
    (nt = B("react.portal")),
    (Me = B("react.fragment")),
    (_o = B("react.strict_mode")),
    (pn = B("react.profiler")),
    (Co = B("react.provider")),
    (xo = B("react.context")),
    (Vr = B("react.forward_ref")),
    (mn = B("react.suspense")),
    (yr = B("react.suspense_list")),
    (Ar = B("react.memo")),
    (Po = B("react.lazy")),
    (No = B("react.block")),
    B("react.scope"),
    (To = B("react.opaque.id")),
    (Ju = B("react.debug_trace_mode")),
    (Oo = B("react.offscreen")),
    (Tl = B("react.legacy_hidden"));
}
var ki = typeof Symbol == "function" && Symbol.iterator;
function Xt(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ki && e[ki]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ol;
function an(e) {
  if (ol === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ol = (t && t[1]) || "";
    }
  return (
    `
` +
    ol +
    e
  );
}
var il = !1;
function Kn(e, t) {
  if (!e || il) return "";
  il = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u]))
                return (
                  `
` + l[i].replace(" at new ", " at ")
                );
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (il = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? an(e) : "";
}
function Xa(e) {
  switch (e.tag) {
    case 5:
      return an(e.type);
    case 16:
      return an("Lazy");
    case 13:
      return an("Suspense");
    case 19:
      return an("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Kn(e.type, !1)), e;
    case 11:
      return (e = Kn(e.type.render, !1)), e;
    case 22:
      return (e = Kn(e.type._render, !1)), e;
    case 1:
      return (e = Kn(e.type, !0)), e;
    default:
      return "";
  }
}
function Pt(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Me:
      return "Fragment";
    case nt:
      return "Portal";
    case pn:
      return "Profiler";
    case _o:
      return "StrictMode";
    case mn:
      return "Suspense";
    case yr:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case xo:
        return (e.displayName || "Context") + ".Consumer";
      case Co:
        return (e._context.displayName || "Context") + ".Provider";
      case Vr:
        var t = e.render;
        return (
          (t = t.displayName || t.name || ""),
          e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
        );
      case Ar:
        return Pt(e.type);
      case No:
        return Pt(e._render);
      case Po:
        (t = e._payload), (e = e._init);
        try {
          return Pt(e(t));
        } catch {}
    }
  return null;
}
function Qe(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return e;
    default:
      return "";
  }
}
function qu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Za(e) {
  var t = qu(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n != "undefined" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Xn(e) {
  e._valueTracker || (e._valueTracker = Za(e));
}
function bu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = qu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function vr(e) {
  if (
    ((e = e || (typeof document != "undefined" ? document : void 0)),
    typeof e == "undefined")
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ol(e, t) {
  var n = t.checked;
  return F({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function Ei(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Qe(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function es(e, t) {
  (t = t.checked), t != null && Eo(e, "checked", t, !1);
}
function Ll(e, t) {
  es(e, t);
  var n = Qe(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Rl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Rl(e, t.type, Qe(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function _i(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Rl(e, t, n) {
  (t !== "number" || vr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
function Ja(e) {
  var t = "";
  return (
    $r.Children.forEach(e, function (n) {
      n != null && (t += n);
    }),
    t
  );
}
function zl(e, t) {
  return (
    (e = F({ children: void 0 }, t)),
    (t = Ja(t.children)) && (e.children = t),
    e
  );
}
function Nt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Qe(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ml(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return F({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ci(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Qe(n) };
}
function ts(e, t) {
  var n = Qe(t.value),
    r = Qe(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function xi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
var Il = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg",
};
function ns(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function jl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ns(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Zn,
  rs = (function (e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== Il.svg || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        Zn = Zn || document.createElement("div"),
          Zn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Zn.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Pn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var hn = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  qa = ["Webkit", "ms", "Moz", "O"];
Object.keys(hn).forEach(function (e) {
  qa.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (hn[t] = hn[e]);
  });
});
function ls(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (hn.hasOwnProperty(e) && hn[e])
    ? ("" + t).trim()
    : t + "px";
}
function os(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ls(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var ba = F(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Fl(e, t) {
  if (t) {
    if (ba[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        !(
          typeof t.dangerouslySetInnerHTML == "object" &&
          "__html" in t.dangerouslySetInnerHTML
        )
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function Dl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
function Lo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ul = null,
  Tt = null,
  Ot = null;
function Pi(e) {
  if ((e = An(e))) {
    if (typeof Ul != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = Gr(t)), Ul(e.stateNode, e.type, t));
  }
}
function is(e) {
  Tt ? (Ot ? Ot.push(e) : (Ot = [e])) : (Tt = e);
}
function us() {
  if (Tt) {
    var e = Tt,
      t = Ot;
    if (((Ot = Tt = null), Pi(e), t)) for (e = 0; e < t.length; e++) Pi(t[e]);
  }
}
function Ro(e, t) {
  return e(t);
}
function ss(e, t, n, r, l) {
  return e(t, n, r, l);
}
function zo() {}
var as = Ro,
  rt = !1,
  ul = !1;
function Mo() {
  (Tt !== null || Ot !== null) && (zo(), us());
}
function ef(e, t, n) {
  if (ul) return e(t, n);
  ul = !0;
  try {
    return as(e, t, n);
  } finally {
    (ul = !1), Mo();
  }
}
function Nn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Gr(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var $l = !1;
if (Le)
  try {
    var Zt = {};
    Object.defineProperty(Zt, "passive", {
      get: function () {
        $l = !0;
      },
    }),
      window.addEventListener("test", Zt, Zt),
      window.removeEventListener("test", Zt, Zt);
  } catch {
    $l = !1;
  }
function tf(e, t, n, r, l, o, i, u, s) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (g) {
    this.onError(g);
  }
}
var yn = !1,
  gr = null,
  wr = !1,
  Vl = null,
  nf = {
    onError: function (e) {
      (yn = !0), (gr = e);
    },
  };
function rf(e, t, n, r, l, o, i, u, s) {
  (yn = !1), (gr = null), tf.apply(nf, arguments);
}
function lf(e, t, n, r, l, o, i, u, s) {
  if ((rf.apply(this, arguments), yn)) {
    if (yn) {
      var d = gr;
      (yn = !1), (gr = null);
    } else throw Error(y(198));
    wr || ((wr = !0), (Vl = d));
  }
}
function mt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 1026) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function fs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ni(e) {
  if (mt(e) !== e) throw Error(y(188));
}
function of(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = mt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Ni(l), e;
        if (o === r) return Ni(l), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function cs(e) {
  if (((e = of(e)), !e)) return null;
  for (var t = e; ; ) {
    if (t.tag === 5 || t.tag === 6) return t;
    if (t.child) (t.child.return = t), (t = t.child);
    else {
      if (t === e) break;
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return null;
}
function Ti(e, t) {
  for (var n = e.alternate; t !== null; ) {
    if (t === e || t === n) return !0;
    t = t.return;
  }
  return !1;
}
var ds,
  Io,
  ps,
  ms,
  Al = !1,
  we = [],
  De = null,
  Ue = null,
  $e = null,
  Tn = new Map(),
  On = new Map(),
  Jt = [],
  Oi =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Bl(e, t, n, r, l) {
  return {
    blockedOn: e,
    domEventName: t,
    eventSystemFlags: n | 16,
    nativeEvent: l,
    targetContainers: [r],
  };
}
function Li(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      De = null;
      break;
    case "dragenter":
    case "dragleave":
      Ue = null;
      break;
    case "mouseover":
    case "mouseout":
      $e = null;
      break;
    case "pointerover":
    case "pointerout":
      Tn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      On.delete(t.pointerId);
  }
}
function qt(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = Bl(t, n, r, l, o)),
      t !== null && ((t = An(t)), t !== null && Io(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function uf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (De = qt(De, e, t, n, r, l)), !0;
    case "dragenter":
      return (Ue = qt(Ue, e, t, n, r, l)), !0;
    case "mouseover":
      return ($e = qt($e, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Tn.set(o, qt(Tn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), On.set(o, qt(On.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function sf(e) {
  var t = lt(e.target);
  if (t !== null) {
    var n = mt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = fs(n)), t !== null)) {
          (e.blockedOn = t),
            ms(e.lanePriority, function () {
              W.unstable_runWithPriority(e.priority, function () {
                ps(n);
              });
            });
          return;
        }
      } else if (t === 3 && n.stateNode.hydrate) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ir(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Uo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null)
      return (t = An(n)), t !== null && Io(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ri(e, t, n) {
  ir(e) && n.delete(t);
}
function af() {
  for (Al = !1; 0 < we.length; ) {
    var e = we[0];
    if (e.blockedOn !== null) {
      (e = An(e.blockedOn)), e !== null && ds(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Uo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n !== null) {
        e.blockedOn = n;
        break;
      }
      t.shift();
    }
    e.blockedOn === null && we.shift();
  }
  De !== null && ir(De) && (De = null),
    Ue !== null && ir(Ue) && (Ue = null),
    $e !== null && ir($e) && ($e = null),
    Tn.forEach(Ri),
    On.forEach(Ri);
}
function bt(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Al ||
      ((Al = !0), W.unstable_scheduleCallback(W.unstable_NormalPriority, af)));
}
function hs(e) {
  function t(l) {
    return bt(l, e);
  }
  if (0 < we.length) {
    bt(we[0], e);
    for (var n = 1; n < we.length; n++) {
      var r = we[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    De !== null && bt(De, e),
      Ue !== null && bt(Ue, e),
      $e !== null && bt($e, e),
      Tn.forEach(t),
      On.forEach(t),
      n = 0;
    n < Jt.length;
    n++
  )
    (r = Jt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Jt.length && ((n = Jt[0]), n.blockedOn === null); )
    sf(n), n.blockedOn === null && Jt.shift();
}
function Jn(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var St = {
    animationend: Jn("Animation", "AnimationEnd"),
    animationiteration: Jn("Animation", "AnimationIteration"),
    animationstart: Jn("Animation", "AnimationStart"),
    transitionend: Jn("Transition", "TransitionEnd"),
  },
  sl = {},
  ys = {};
Le &&
  ((ys = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete St.animationend.animation,
    delete St.animationiteration.animation,
    delete St.animationstart.animation),
  "TransitionEvent" in window || delete St.transitionend.transition);
function Br(e) {
  if (sl[e]) return sl[e];
  if (!St[e]) return e;
  var t = St[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ys) return (sl[e] = t[n]);
  return e;
}
var vs = Br("animationend"),
  gs = Br("animationiteration"),
  ws = Br("animationstart"),
  Ss = Br("transitionend"),
  ks = new Map(),
  jo = new Map(),
  ff = [
    "abort",
    "abort",
    vs,
    "animationEnd",
    gs,
    "animationIteration",
    ws,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    Ss,
    "transitionEnd",
    "waiting",
    "waiting",
  ];
function Fo(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n],
      l = e[n + 1];
    (l = "on" + (l[0].toUpperCase() + l.slice(1))),
      jo.set(r, t),
      ks.set(r, l),
      dt(l, [r]);
  }
}
var cf = W.unstable_now;
cf();
var M = 8;
function gt(e) {
  if ((1 & e) !== 0) return (M = 15), 1;
  if ((2 & e) !== 0) return (M = 14), 2;
  if ((4 & e) !== 0) return (M = 13), 4;
  var t = 24 & e;
  return t !== 0
    ? ((M = 12), t)
    : (e & 32) !== 0
    ? ((M = 11), 32)
    : ((t = 192 & e),
      t !== 0
        ? ((M = 10), t)
        : (e & 256) !== 0
        ? ((M = 9), 256)
        : ((t = 3584 & e),
          t !== 0
            ? ((M = 8), t)
            : (e & 4096) !== 0
            ? ((M = 7), 4096)
            : ((t = 4186112 & e),
              t !== 0
                ? ((M = 6), t)
                : ((t = 62914560 & e),
                  t !== 0
                    ? ((M = 5), t)
                    : e & 67108864
                    ? ((M = 4), 67108864)
                    : (e & 134217728) !== 0
                    ? ((M = 3), 134217728)
                    : ((t = 805306368 & e),
                      t !== 0
                        ? ((M = 2), t)
                        : (1073741824 & e) !== 0
                        ? ((M = 1), 1073741824)
                        : ((M = 8), e))))));
}
function df(e) {
  switch (e) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function pf(e) {
  switch (e) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, e));
  }
}
function Ln(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return (M = 0);
  var r = 0,
    l = 0,
    o = e.expiredLanes,
    i = e.suspendedLanes,
    u = e.pingedLanes;
  if (o !== 0) (r = o), (l = M = 15);
  else if (((o = n & 134217727), o !== 0)) {
    var s = o & ~i;
    s !== 0
      ? ((r = gt(s)), (l = M))
      : ((u &= o), u !== 0 && ((r = gt(u)), (l = M)));
  } else
    (o = n & ~i),
      o !== 0 ? ((r = gt(o)), (l = M)) : u !== 0 && ((r = gt(u)), (l = M));
  if (r === 0) return 0;
  if (
    ((r = 31 - Ye(r)),
    (r = n & (((0 > r ? 0 : 1 << r) << 1) - 1)),
    t !== 0 && t !== r && (t & i) === 0)
  ) {
    if ((gt(t), l <= M)) return t;
    M = l;
  }
  if (((t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ye(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Es(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Sr(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return (e = wt(24 & ~t)), e === 0 ? Sr(10, t) : e;
    case 10:
      return (e = wt(192 & ~t)), e === 0 ? Sr(8, t) : e;
    case 8:
      return (
        (e = wt(3584 & ~t)),
        e === 0 && ((e = wt(4186112 & ~t)), e === 0 && (e = 512)),
        e
      );
    case 2:
      return (t = wt(805306368 & ~t)), t === 0 && (t = 268435456), t;
  }
  throw Error(y(358, e));
}
function wt(e) {
  return e & -e;
}
function al(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Wr(e, t, n) {
  e.pendingLanes |= t;
  var r = t - 1;
  (e.suspendedLanes &= r),
    (e.pingedLanes &= r),
    (e = e.eventTimes),
    (t = 31 - Ye(t)),
    (e[t] = n);
}
var Ye = Math.clz32 ? Math.clz32 : yf,
  mf = Math.log,
  hf = Math.LN2;
function yf(e) {
  return e === 0 ? 32 : (31 - ((mf(e) / hf) | 0)) | 0;
}
var vf = W.unstable_UserBlockingPriority,
  gf = W.unstable_runWithPriority,
  ur = !0;
function wf(e, t, n, r) {
  rt || zo();
  var l = Do,
    o = rt;
  rt = !0;
  try {
    ss(l, e, t, n, r);
  } finally {
    (rt = o) || Mo();
  }
}
function Sf(e, t, n, r) {
  gf(vf, Do.bind(null, e, t, n, r));
}
function Do(e, t, n, r) {
  if (ur) {
    var l;
    if ((l = (t & 4) === 0) && 0 < we.length && -1 < Oi.indexOf(e))
      (e = Bl(null, e, t, n, r)), we.push(e);
    else {
      var o = Uo(e, t, n, r);
      if (o === null) l && Li(e, r);
      else {
        if (l) {
          if (-1 < Oi.indexOf(e)) {
            (e = Bl(o, e, t, n, r)), we.push(e);
            return;
          }
          if (uf(o, e, t, n, r)) return;
          Li(e, r);
        }
        js(e, t, r, null, n);
      }
    }
  }
}
function Uo(e, t, n, r) {
  var l = Lo(r);
  if (((l = lt(l)), l !== null)) {
    var o = mt(l);
    if (o === null) l = null;
    else {
      var i = o.tag;
      if (i === 13) {
        if (((l = fs(o)), l !== null)) return l;
        l = null;
      } else if (i === 3) {
        if (o.stateNode.hydrate)
          return o.tag === 3 ? o.stateNode.containerInfo : null;
        l = null;
      } else o !== l && (l = null);
    }
  }
  return js(e, t, r, l, n), null;
}
var Ie = null,
  $o = null,
  sr = null;
function _s() {
  if (sr) return sr;
  var e,
    t = $o,
    n = t.length,
    r,
    l = "value" in Ie ? Ie.value : Ie.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (sr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function ar(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function qn() {
  return !0;
}
function zi() {
  return !1;
}
function se(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? qn
        : zi),
      (this.isPropagationStopped = zi),
      this
    );
  }
  return (
    F(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = qn));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = qn));
      },
      persist: function () {},
      isPersistent: qn,
    }),
    t
  );
}
var Bt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Vo = se(Bt),
  Vn = F({}, Bt, { view: 0, detail: 0 }),
  kf = se(Vn),
  fl,
  cl,
  en,
  Hr = F({}, Vn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ao,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== en &&
            (en && e.type === "mousemove"
              ? ((fl = e.screenX - en.screenX), (cl = e.screenY - en.screenY))
              : (cl = fl = 0),
            (en = e)),
          fl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : cl;
    },
  }),
  Mi = se(Hr),
  Ef = F({}, Hr, { dataTransfer: 0 }),
  _f = se(Ef),
  Cf = F({}, Vn, { relatedTarget: 0 }),
  dl = se(Cf),
  xf = F({}, Bt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Pf = se(xf),
  Nf = F({}, Bt, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Tf = se(Nf),
  Of = F({}, Bt, { data: 0 }),
  Ii = se(Of),
  Lf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Rf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  zf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Mf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = zf[e]) ? !!t[e] : !1;
}
function Ao() {
  return Mf;
}
var If = F({}, Vn, {
    key: function (e) {
      if (e.key) {
        var t = Lf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ar(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Rf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ao,
    charCode: function (e) {
      return e.type === "keypress" ? ar(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ar(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  jf = se(If),
  Ff = F({}, Hr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ji = se(Ff),
  Df = F({}, Vn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ao,
  }),
  Uf = se(Df),
  $f = F({}, Bt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vf = se($f),
  Af = F({}, Hr, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Bf = se(Af),
  Wf = [9, 13, 27, 32],
  Bo = Le && "CompositionEvent" in window,
  vn = null;
Le && "documentMode" in document && (vn = document.documentMode);
var Hf = Le && "TextEvent" in window && !vn,
  Cs = Le && (!Bo || (vn && 8 < vn && 11 >= vn)),
  Fi = String.fromCharCode(32),
  Di = !1;
function xs(e, t) {
  switch (e) {
    case "keyup":
      return Wf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ps(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var kt = !1;
function Qf(e, t) {
  switch (e) {
    case "compositionend":
      return Ps(t);
    case "keypress":
      return t.which !== 32 ? null : ((Di = !0), Fi);
    case "textInput":
      return (e = t.data), e === Fi && Di ? null : e;
    default:
      return null;
  }
}
function Yf(e, t) {
  if (kt)
    return e === "compositionend" || (!Bo && xs(e, t))
      ? ((e = _s()), (sr = $o = Ie = null), (kt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Cs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Gf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ui(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Gf[e.type] : t === "textarea";
}
function Ns(e, t, n, r) {
  is(r),
    (t = kr(t, "onChange")),
    0 < t.length &&
      ((n = new Vo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var gn = null,
  Rn = null;
function Kf(e) {
  zs(e, 0);
}
function Qr(e) {
  var t = _t(e);
  if (bu(t)) return e;
}
function Xf(e, t) {
  if (e === "change") return t;
}
var Ts = !1;
if (Le) {
  var pl;
  if (Le) {
    var ml = "oninput" in document;
    if (!ml) {
      var $i = document.createElement("div");
      $i.setAttribute("oninput", "return;"),
        (ml = typeof $i.oninput == "function");
    }
    pl = ml;
  } else pl = !1;
  Ts = pl && (!document.documentMode || 9 < document.documentMode);
}
function Vi() {
  gn && (gn.detachEvent("onpropertychange", Os), (Rn = gn = null));
}
function Os(e) {
  if (e.propertyName === "value" && Qr(Rn)) {
    var t = [];
    if ((Ns(t, Rn, e, Lo(e)), (e = Kf), rt)) e(t);
    else {
      rt = !0;
      try {
        Ro(e, t);
      } finally {
        (rt = !1), Mo();
      }
    }
  }
}
function Zf(e, t, n) {
  e === "focusin"
    ? (Vi(), (gn = t), (Rn = n), gn.attachEvent("onpropertychange", Os))
    : e === "focusout" && Vi();
}
function Jf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Qr(Rn);
}
function qf(e, t) {
  if (e === "click") return Qr(t);
}
function bf(e, t) {
  if (e === "input" || e === "change") return Qr(t);
}
function ec(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var fe = typeof Object.is == "function" ? Object.is : ec,
  tc = Object.prototype.hasOwnProperty;
function zn(e, t) {
  if (fe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++)
    if (!tc.call(t, n[r]) || !fe(e[n[r]], t[n[r]])) return !1;
  return !0;
}
function Ai(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Bi(e, t) {
  var n = Ai(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ai(n);
  }
}
function Ls(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ls(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Wi() {
  for (var e = window, t = vr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = vr(e.document);
  }
  return t;
}
function Wl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
var nc = Le && "documentMode" in document && 11 >= document.documentMode,
  Et = null,
  Hl = null,
  wn = null,
  Ql = !1;
function Hi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ql ||
    Et == null ||
    Et !== vr(r) ||
    ((r = Et),
    "selectionStart" in r && Wl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (wn && zn(wn, r)) ||
      ((wn = r),
      (r = kr(Hl, "onSelect")),
      0 < r.length &&
        ((t = new Vo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Et))));
}
Fo(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
    " "
  ),
  0
);
Fo(
  "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
    " "
  ),
  1
);
Fo(ff, 2);
for (
  var Qi =
      "change selectionchange textInput compositionstart compositionend compositionupdate".split(
        " "
      ),
    hl = 0;
  hl < Qi.length;
  hl++
)
  jo.set(Qi[hl], 0);
Ft("onMouseEnter", ["mouseout", "mouseover"]);
Ft("onMouseLeave", ["mouseout", "mouseover"]);
Ft("onPointerEnter", ["pointerout", "pointerover"]);
Ft("onPointerLeave", ["pointerout", "pointerover"]);
dt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
dt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
dt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
dt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
dt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var fn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Rs = new Set("cancel close invalid load scroll toggle".split(" ").concat(fn));
function Yi(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), lf(r, t, void 0, e), (e.currentTarget = null);
}
function zs(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            d = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          Yi(l, u, d), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (d = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          Yi(l, u, d), (o = s);
        }
    }
  }
  if (wr) throw ((e = Vl), (wr = !1), (Vl = null), e);
}
function I(e, t) {
  var n = Ds(t),
    r = e + "__bubble";
  n.has(r) || (Is(t, e, 2, !1), n.add(r));
}
var Gi = "_reactListening" + Math.random().toString(36).slice(2);
function Ms(e) {
  e[Gi] ||
    ((e[Gi] = !0),
    Zu.forEach(function (t) {
      Rs.has(t) || Ki(t, !1, e, null), Ki(t, !0, e, null);
    }));
}
function Ki(e, t, n, r) {
  var l = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
    o = n;
  if (
    (e === "selectionchange" && n.nodeType !== 9 && (o = n.ownerDocument),
    r !== null && !t && Rs.has(e))
  ) {
    if (e !== "scroll") return;
    (l |= 2), (o = r);
  }
  var i = Ds(o),
    u = e + "__" + (t ? "capture" : "bubble");
  i.has(u) || (t && (l |= 4), Is(o, e, l, t), i.add(u));
}
function Is(e, t, n, r) {
  var l = jo.get(t);
  switch (l === void 0 ? 2 : l) {
    case 0:
      l = wf;
      break;
    case 1:
      l = Sf;
      break;
    default:
      l = Do;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !$l ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function js(e, t, n, r, l) {
  var o = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = lt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ef(function () {
    var d = o,
      g = Lo(n),
      N = [];
    e: {
      var h = ks.get(e);
      if (h !== void 0) {
        var k = Vo,
          C = e;
        switch (e) {
          case "keypress":
            if (ar(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = jf;
            break;
          case "focusin":
            (C = "focus"), (k = dl);
            break;
          case "focusout":
            (C = "blur"), (k = dl);
            break;
          case "beforeblur":
          case "afterblur":
            k = dl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = Mi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = _f;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Uf;
            break;
          case vs:
          case gs:
          case ws:
            k = Pf;
            break;
          case Ss:
            k = Vf;
            break;
          case "scroll":
            k = kf;
            break;
          case "wheel":
            k = Bf;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Tf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = ji;
        }
        var E = (t & 4) !== 0,
          c = !E && e === "scroll",
          a = E ? (h !== null ? h + "Capture" : null) : h;
        E = [];
        for (var f = d, p; f !== null; ) {
          p = f;
          var m = p.stateNode;
          if (
            (p.tag === 5 &&
              m !== null &&
              ((p = m),
              a !== null && ((m = Nn(f, a)), m != null && E.push(Mn(f, m, p)))),
            c)
          )
            break;
          f = f.return;
        }
        0 < E.length &&
          ((h = new k(h, C, null, n, g)), N.push({ event: h, listeners: E }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (k = e === "mouseout" || e === "pointerout"),
          h &&
            (t & 16) === 0 &&
            (C = n.relatedTarget || n.fromElement) &&
            (lt(C) || C[Wt]))
        )
          break e;
        if (
          (k || h) &&
          ((h =
            g.window === g
              ? g
              : (h = g.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          k
            ? ((C = n.relatedTarget || n.toElement),
              (k = d),
              (C = C ? lt(C) : null),
              C !== null &&
                ((c = mt(C)), C !== c || (C.tag !== 5 && C.tag !== 6)) &&
                (C = null))
            : ((k = null), (C = d)),
          k !== C)
        ) {
          if (
            ((E = Mi),
            (m = "onMouseLeave"),
            (a = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((E = ji),
              (m = "onPointerLeave"),
              (a = "onPointerEnter"),
              (f = "pointer")),
            (c = k == null ? h : _t(k)),
            (p = C == null ? h : _t(C)),
            (h = new E(m, f + "leave", k, n, g)),
            (h.target = c),
            (h.relatedTarget = p),
            (m = null),
            lt(g) === d &&
              ((E = new E(a, f + "enter", C, n, g)),
              (E.target = p),
              (E.relatedTarget = c),
              (m = E)),
            (c = m),
            k && C)
          )
            t: {
              for (E = k, a = C, f = 0, p = E; p; p = vt(p)) f++;
              for (p = 0, m = a; m; m = vt(m)) p++;
              for (; 0 < f - p; ) (E = vt(E)), f--;
              for (; 0 < p - f; ) (a = vt(a)), p--;
              for (; f--; ) {
                if (E === a || (a !== null && E === a.alternate)) break t;
                (E = vt(E)), (a = vt(a));
              }
              E = null;
            }
          else E = null;
          k !== null && Xi(N, h, k, E, !1),
            C !== null && c !== null && Xi(N, c, C, E, !0);
        }
      }
      e: {
        if (
          ((h = d ? _t(d) : window),
          (k = h.nodeName && h.nodeName.toLowerCase()),
          k === "select" || (k === "input" && h.type === "file"))
        )
          var P = Xf;
        else if (Ui(h))
          if (Ts) P = bf;
          else {
            P = Jf;
            var v = Zf;
          }
        else
          (k = h.nodeName) &&
            k.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (P = qf);
        if (P && (P = P(e, d))) {
          Ns(N, P, n, g);
          break e;
        }
        v && v(e, h, d),
          e === "focusout" &&
            (v = h._wrapperState) &&
            v.controlled &&
            h.type === "number" &&
            Rl(h, "number", h.value);
      }
      switch (((v = d ? _t(d) : window), e)) {
        case "focusin":
          (Ui(v) || v.contentEditable === "true") &&
            ((Et = v), (Hl = d), (wn = null));
          break;
        case "focusout":
          wn = Hl = Et = null;
          break;
        case "mousedown":
          Ql = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ql = !1), Hi(N, n, g);
          break;
        case "selectionchange":
          if (nc) break;
        case "keydown":
        case "keyup":
          Hi(N, n, g);
      }
      var x;
      if (Bo)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        kt
          ? xs(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (Cs &&
          n.locale !== "ko" &&
          (kt || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && kt && (x = _s())
            : ((Ie = g),
              ($o = "value" in Ie ? Ie.value : Ie.textContent),
              (kt = !0))),
        (v = kr(d, L)),
        0 < v.length &&
          ((L = new Ii(L, e, null, n, g)),
          N.push({ event: L, listeners: v }),
          x ? (L.data = x) : ((x = Ps(n)), x !== null && (L.data = x)))),
        (x = Hf ? Qf(e, n) : Yf(e, n)) &&
          ((d = kr(d, "onBeforeInput")),
          0 < d.length &&
            ((g = new Ii("onBeforeInput", "beforeinput", null, n, g)),
            N.push({ event: g, listeners: d }),
            (g.data = x)));
    }
    zs(N, t);
  });
}
function Mn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function kr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Nn(e, n)),
      o != null && r.unshift(Mn(e, o, l)),
      (o = Nn(e, t)),
      o != null && r.push(Mn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function vt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Xi(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      d = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      d !== null &&
      ((u = d),
      l
        ? ((s = Nn(n, o)), s != null && i.unshift(Mn(n, s, u)))
        : l || ((s = Nn(n, o)), s != null && i.push(Mn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
function Er() {}
var yl = null,
  vl = null;
function Fs(e, t) {
  switch (e) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!t.autoFocus;
  }
  return !1;
}
function Yl(e, t) {
  return (
    e === "textarea" ||
    e === "option" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Zi = typeof setTimeout == "function" ? setTimeout : void 0,
  rc = typeof clearTimeout == "function" ? clearTimeout : void 0;
function Wo(e) {
  e.nodeType === 1
    ? (e.textContent = "")
    : e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ""));
}
function Lt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function Ji(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var gl = 0;
function lc(e) {
  return { $$typeof: To, toString: e, valueOf: e };
}
var Yr = Math.random().toString(36).slice(2),
  je = "__reactFiber$" + Yr,
  _r = "__reactProps$" + Yr,
  Wt = "__reactContainer$" + Yr,
  qi = "__reactEvents$" + Yr;
function lt(e) {
  var t = e[je];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Wt] || n[je])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ji(e); e !== null; ) {
          if ((n = e[je])) return n;
          e = Ji(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function An(e) {
  return (
    (e = e[je] || e[Wt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function _t(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function Gr(e) {
  return e[_r] || null;
}
function Ds(e) {
  var t = e[qi];
  return t === void 0 && (t = e[qi] = new Set()), t;
}
var Gl = [],
  Ct = -1;
function Ze(e) {
  return { current: e };
}
function j(e) {
  0 > Ct || ((e.current = Gl[Ct]), (Gl[Ct] = null), Ct--);
}
function U(e, t) {
  Ct++, (Gl[Ct] = e.current), (e.current = t);
}
var Ge = {},
  b = Ze(Ge),
  oe = Ze(!1),
  at = Ge;
function Dt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ge;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ie(e) {
  return (e = e.childContextTypes), e != null;
}
function Cr() {
  j(oe), j(b);
}
function bi(e, t, n) {
  if (b.current !== Ge) throw Error(y(168));
  U(b, t), U(oe, n);
}
function Us(e, t, n) {
  var r = e.stateNode;
  if (((e = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in e)) throw Error(y(108, Pt(t) || "Unknown", l));
  return F({}, n, r);
}
function fr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ge),
    (at = b.current),
    U(b, e),
    U(oe, oe.current),
    !0
  );
}
function eu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = Us(e, t, at)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      j(oe),
      j(b),
      U(b, e))
    : j(oe),
    U(oe, n);
}
var Ho = null,
  ut = null,
  oc = W.unstable_runWithPriority,
  Qo = W.unstable_scheduleCallback,
  Kl = W.unstable_cancelCallback,
  ic = W.unstable_shouldYield,
  tu = W.unstable_requestPaint,
  Xl = W.unstable_now,
  uc = W.unstable_getCurrentPriorityLevel,
  Kr = W.unstable_ImmediatePriority,
  $s = W.unstable_UserBlockingPriority,
  Vs = W.unstable_NormalPriority,
  As = W.unstable_LowPriority,
  Bs = W.unstable_IdlePriority,
  wl = {},
  sc = tu !== void 0 ? tu : function () {},
  xe = null,
  cr = null,
  Sl = !1,
  nu = Xl(),
  J =
    1e4 > nu
      ? Xl
      : function () {
          return Xl() - nu;
        };
function Ut() {
  switch (uc()) {
    case Kr:
      return 99;
    case $s:
      return 98;
    case Vs:
      return 97;
    case As:
      return 96;
    case Bs:
      return 95;
    default:
      throw Error(y(332));
  }
}
function Ws(e) {
  switch (e) {
    case 99:
      return Kr;
    case 98:
      return $s;
    case 97:
      return Vs;
    case 96:
      return As;
    case 95:
      return Bs;
    default:
      throw Error(y(332));
  }
}
function ft(e, t) {
  return (e = Ws(e)), oc(e, t);
}
function In(e, t, n) {
  return (e = Ws(e)), Qo(e, t, n);
}
function Ce() {
  if (cr !== null) {
    var e = cr;
    (cr = null), Kl(e);
  }
  Hs();
}
function Hs() {
  if (!Sl && xe !== null) {
    Sl = !0;
    var e = 0;
    try {
      var t = xe;
      ft(99, function () {
        for (; e < t.length; e++) {
          var n = t[e];
          do n = n(!0);
          while (n !== null);
        }
      }),
        (xe = null);
    } catch (n) {
      throw (xe !== null && (xe = xe.slice(e + 1)), Qo(Kr, Ce), n);
    } finally {
      Sl = !1;
    }
  }
}
var ac = pt.ReactCurrentBatchConfig;
function ve(e, t) {
  if (e && e.defaultProps) {
    (t = F({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var xr = Ze(null),
  Pr = null,
  xt = null,
  Nr = null;
function Yo() {
  Nr = xt = Pr = null;
}
function Go(e) {
  var t = xr.current;
  j(xr), (e.type._context._currentValue = t);
}
function Qs(e, t) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) === t) {
      if (n === null || (n.childLanes & t) === t) break;
      n.childLanes |= t;
    } else (e.childLanes |= t), n !== null && (n.childLanes |= t);
    e = e.return;
  }
}
function Rt(e, t) {
  (Pr = e),
    (Nr = xt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (ge = !0), (e.firstContext = null));
}
function pe(e, t) {
  if (Nr !== e && t !== !1 && t !== 0)
    if (
      ((typeof t != "number" || t === 1073741823) &&
        ((Nr = e), (t = 1073741823)),
      (t = { context: e, observedBits: t, next: null }),
      xt === null)
    ) {
      if (Pr === null) throw Error(y(308));
      (xt = t),
        (Pr.dependencies = { lanes: 0, firstContext: t, responders: null });
    } else xt = xt.next = t;
  return e._currentValue;
}
var ze = !1;
function Ko(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null },
    effects: null,
  };
}
function Ys(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ve(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ae(e, t) {
  if (((e = e.updateQueue), e !== null)) {
    e = e.shared;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
}
function ru(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function jn(e, t, n, r) {
  var l = e.updateQueue;
  ze = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      d = s.next;
    (s.next = null), i === null ? (o = d) : (i.next = d), (i = s);
    var g = e.alternate;
    if (g !== null) {
      g = g.updateQueue;
      var N = g.lastBaseUpdate;
      N !== i &&
        (N === null ? (g.firstBaseUpdate = d) : (N.next = d),
        (g.lastBaseUpdate = s));
    }
  }
  if (o !== null) {
    (N = l.baseState), (i = 0), (g = d = s = null);
    do {
      u = o.lane;
      var h = o.eventTime;
      if ((r & u) === u) {
        g !== null &&
          (g = g.next =
            {
              eventTime: h,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var k = e,
            C = o;
          switch (((u = t), (h = n), C.tag)) {
            case 1:
              if (((k = C.payload), typeof k == "function")) {
                N = k.call(h, N, u);
                break e;
              }
              N = k;
              break e;
            case 3:
              k.flags = (k.flags & -4097) | 64;
            case 0:
              if (
                ((k = C.payload),
                (u = typeof k == "function" ? k.call(h, N, u) : k),
                u == null)
              )
                break e;
              N = F({}, N, u);
              break e;
            case 2:
              ze = !0;
          }
        }
        o.callback !== null &&
          ((e.flags |= 32),
          (u = l.effects),
          u === null ? (l.effects = [o]) : u.push(o));
      } else
        (h = {
          eventTime: h,
          lane: u,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          g === null ? ((d = g = h), (s = N)) : (g = g.next = h),
          (i |= u);
      if (((o = o.next), o === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (o = u.next),
          (u.next = null),
          (l.lastBaseUpdate = u),
          (l.shared.pending = null);
      }
    } while (1);
    g === null && (s = N),
      (l.baseState = s),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = g),
      (Wn |= i),
      (e.lanes = i),
      (e.memoizedState = N);
  }
}
function lu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var Gs = new $r.Component().refs;
function Tr(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : F({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Xr = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? mt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = Be(e),
      o = Ve(r, l);
    (o.payload = t), n != null && (o.callback = n), Ae(e, o), We(e, l, r);
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = Be(e),
      o = Ve(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      Ae(e, o),
      We(e, l, r);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = Be(e),
      l = Ve(n, r);
    (l.tag = 2), t != null && (l.callback = t), Ae(e, l), We(e, r, n);
  },
};
function ou(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !zn(n, r) || !zn(l, o)
      : !0
  );
}
function Ks(e, t, n) {
  var r = !1,
    l = Ge,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = pe(o))
      : ((l = ie(t) ? at : b.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Dt(e, l) : Ge)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Xr),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function iu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Xr.enqueueReplaceState(t, t.state, null);
}
function Zl(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Gs), Ko(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = pe(o))
    : ((o = ie(t) ? at : b.current), (l.context = Dt(e, o))),
    jn(e, n, l, r),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Tr(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Xr.enqueueReplaceState(l, l.state, null),
      jn(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4);
}
var bn = Array.isArray;
function tn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (o) {
            var i = r.refs;
            i === Gs && (i = r.refs = {}),
              o === null ? delete i[l] : (i[l] = o);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function er(e, t) {
  if (e.type !== "textarea")
    throw Error(
      y(
        31,
        Object.prototype.toString.call(t) === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : t
      )
    );
}
function Xs(e) {
  function t(c, a) {
    if (e) {
      var f = c.lastEffect;
      f !== null
        ? ((f.nextEffect = a), (c.lastEffect = a))
        : (c.firstEffect = c.lastEffect = a),
        (a.nextEffect = null),
        (a.flags = 8);
    }
  }
  function n(c, a) {
    if (!e) return null;
    for (; a !== null; ) t(c, a), (a = a.sibling);
    return null;
  }
  function r(c, a) {
    for (c = new Map(); a !== null; )
      a.key !== null ? c.set(a.key, a) : c.set(a.index, a), (a = a.sibling);
    return c;
  }
  function l(c, a) {
    return (c = Xe(c, a)), (c.index = 0), (c.sibling = null), c;
  }
  function o(c, a, f) {
    return (
      (c.index = f),
      e
        ? ((f = c.alternate),
          f !== null
            ? ((f = f.index), f < a ? ((c.flags = 2), a) : f)
            : ((c.flags = 2), a))
        : a
    );
  }
  function i(c) {
    return e && c.alternate === null && (c.flags = 2), c;
  }
  function u(c, a, f, p) {
    return a === null || a.tag !== 6
      ? ((a = xl(f, c.mode, p)), (a.return = c), a)
      : ((a = l(a, f)), (a.return = c), a);
  }
  function s(c, a, f, p) {
    return a !== null && a.elementType === f.type
      ? ((p = l(a, f.props)), (p.ref = tn(c, a, f)), (p.return = c), p)
      : ((p = hr(f.type, f.key, f.props, null, c.mode, p)),
        (p.ref = tn(c, a, f)),
        (p.return = c),
        p);
  }
  function d(c, a, f, p) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== f.containerInfo ||
      a.stateNode.implementation !== f.implementation
      ? ((a = Pl(f, c.mode, p)), (a.return = c), a)
      : ((a = l(a, f.children || [])), (a.return = c), a);
  }
  function g(c, a, f, p, m) {
    return a === null || a.tag !== 7
      ? ((a = jt(f, c.mode, p, m)), (a.return = c), a)
      : ((a = l(a, f)), (a.return = c), a);
  }
  function N(c, a, f) {
    if (typeof a == "string" || typeof a == "number")
      return (a = xl("" + a, c.mode, f)), (a.return = c), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case sn:
          return (
            (f = hr(a.type, a.key, a.props, null, c.mode, f)),
            (f.ref = tn(c, null, a)),
            (f.return = c),
            f
          );
        case nt:
          return (a = Pl(a, c.mode, f)), (a.return = c), a;
      }
      if (bn(a) || Xt(a))
        return (a = jt(a, c.mode, f, null)), (a.return = c), a;
      er(c, a);
    }
    return null;
  }
  function h(c, a, f, p) {
    var m = a !== null ? a.key : null;
    if (typeof f == "string" || typeof f == "number")
      return m !== null ? null : u(c, a, "" + f, p);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case sn:
          return f.key === m
            ? f.type === Me
              ? g(c, a, f.props.children, p, m)
              : s(c, a, f, p)
            : null;
        case nt:
          return f.key === m ? d(c, a, f, p) : null;
      }
      if (bn(f) || Xt(f)) return m !== null ? null : g(c, a, f, p, null);
      er(c, f);
    }
    return null;
  }
  function k(c, a, f, p, m) {
    if (typeof p == "string" || typeof p == "number")
      return (c = c.get(f) || null), u(a, c, "" + p, m);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case sn:
          return (
            (c = c.get(p.key === null ? f : p.key) || null),
            p.type === Me ? g(a, c, p.props.children, m, p.key) : s(a, c, p, m)
          );
        case nt:
          return (c = c.get(p.key === null ? f : p.key) || null), d(a, c, p, m);
      }
      if (bn(p) || Xt(p)) return (c = c.get(f) || null), g(a, c, p, m, null);
      er(a, p);
    }
    return null;
  }
  function C(c, a, f, p) {
    for (
      var m = null, P = null, v = a, x = (a = 0), L = null;
      v !== null && x < f.length;
      x++
    ) {
      v.index > x ? ((L = v), (v = null)) : (L = v.sibling);
      var _ = h(c, v, f[x], p);
      if (_ === null) {
        v === null && (v = L);
        break;
      }
      e && v && _.alternate === null && t(c, v),
        (a = o(_, a, x)),
        P === null ? (m = _) : (P.sibling = _),
        (P = _),
        (v = L);
    }
    if (x === f.length) return n(c, v), m;
    if (v === null) {
      for (; x < f.length; x++)
        (v = N(c, f[x], p)),
          v !== null &&
            ((a = o(v, a, x)), P === null ? (m = v) : (P.sibling = v), (P = v));
      return m;
    }
    for (v = r(c, v); x < f.length; x++)
      (L = k(v, c, x, f[x], p)),
        L !== null &&
          (e && L.alternate !== null && v.delete(L.key === null ? x : L.key),
          (a = o(L, a, x)),
          P === null ? (m = L) : (P.sibling = L),
          (P = L));
    return (
      e &&
        v.forEach(function (H) {
          return t(c, H);
        }),
      m
    );
  }
  function E(c, a, f, p) {
    var m = Xt(f);
    if (typeof m != "function") throw Error(y(150));
    if (((f = m.call(f)), f == null)) throw Error(y(151));
    for (
      var P = (m = null), v = a, x = (a = 0), L = null, _ = f.next();
      v !== null && !_.done;
      x++, _ = f.next()
    ) {
      v.index > x ? ((L = v), (v = null)) : (L = v.sibling);
      var H = h(c, v, _.value, p);
      if (H === null) {
        v === null && (v = L);
        break;
      }
      e && v && H.alternate === null && t(c, v),
        (a = o(H, a, x)),
        P === null ? (m = H) : (P.sibling = H),
        (P = H),
        (v = L);
    }
    if (_.done) return n(c, v), m;
    if (v === null) {
      for (; !_.done; x++, _ = f.next())
        (_ = N(c, _.value, p)),
          _ !== null &&
            ((a = o(_, a, x)), P === null ? (m = _) : (P.sibling = _), (P = _));
      return m;
    }
    for (v = r(c, v); !_.done; x++, _ = f.next())
      (_ = k(v, c, x, _.value, p)),
        _ !== null &&
          (e && _.alternate !== null && v.delete(_.key === null ? x : _.key),
          (a = o(_, a, x)),
          P === null ? (m = _) : (P.sibling = _),
          (P = _));
    return (
      e &&
        v.forEach(function (el) {
          return t(c, el);
        }),
      m
    );
  }
  return function (c, a, f, p) {
    var m =
      typeof f == "object" && f !== null && f.type === Me && f.key === null;
    m && (f = f.props.children);
    var P = typeof f == "object" && f !== null;
    if (P)
      switch (f.$$typeof) {
        case sn:
          e: {
            for (P = f.key, m = a; m !== null; ) {
              if (m.key === P) {
                switch (m.tag) {
                  case 7:
                    if (f.type === Me) {
                      n(c, m.sibling),
                        (a = l(m, f.props.children)),
                        (a.return = c),
                        (c = a);
                      break e;
                    }
                    break;
                  default:
                    if (m.elementType === f.type) {
                      n(c, m.sibling),
                        (a = l(m, f.props)),
                        (a.ref = tn(c, m, f)),
                        (a.return = c),
                        (c = a);
                      break e;
                    }
                }
                n(c, m);
                break;
              } else t(c, m);
              m = m.sibling;
            }
            f.type === Me
              ? ((a = jt(f.props.children, c.mode, p, f.key)),
                (a.return = c),
                (c = a))
              : ((p = hr(f.type, f.key, f.props, null, c.mode, p)),
                (p.ref = tn(c, a, f)),
                (p.return = c),
                (c = p));
          }
          return i(c);
        case nt:
          e: {
            for (m = f.key; a !== null; ) {
              if (a.key === m)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === f.containerInfo &&
                  a.stateNode.implementation === f.implementation
                ) {
                  n(c, a.sibling),
                    (a = l(a, f.children || [])),
                    (a.return = c),
                    (c = a);
                  break e;
                } else {
                  n(c, a);
                  break;
                }
              else t(c, a);
              a = a.sibling;
            }
            (a = Pl(f, c.mode, p)), (a.return = c), (c = a);
          }
          return i(c);
      }
    if (typeof f == "string" || typeof f == "number")
      return (
        (f = "" + f),
        a !== null && a.tag === 6
          ? (n(c, a.sibling), (a = l(a, f)), (a.return = c), (c = a))
          : (n(c, a), (a = xl(f, c.mode, p)), (a.return = c), (c = a)),
        i(c)
      );
    if (bn(f)) return C(c, a, f, p);
    if (Xt(f)) return E(c, a, f, p);
    if ((P && er(c, f), typeof f == "undefined" && !m))
      switch (c.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Pt(c.type) || "Component"));
      }
    return n(c, a);
  };
}
var Or = Xs(!0),
  Zs = Xs(!1),
  Bn = {},
  Ee = Ze(Bn),
  Fn = Ze(Bn),
  Dn = Ze(Bn);
function ot(e) {
  if (e === Bn) throw Error(y(174));
  return e;
}
function Jl(e, t) {
  switch ((U(Dn, t), U(Fn, e), U(Ee, Bn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : jl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = jl(t, e));
  }
  j(Ee), U(Ee, t);
}
function $t() {
  j(Ee), j(Fn), j(Dn);
}
function uu(e) {
  ot(Dn.current);
  var t = ot(Ee.current),
    n = jl(t, e.type);
  t !== n && (U(Fn, e), U(Ee, n));
}
function Xo(e) {
  Fn.current === e && (j(Ee), j(Fn));
}
var D = Ze(0);
function Lr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 64) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ne = null,
  Fe = null,
  _e = !1;
function Js(e, t) {
  var n = ce(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.type = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (n.flags = 8),
    e.lastEffect !== null
      ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
      : (e.firstEffect = e.lastEffect = n);
}
function su(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 13:
      return !1;
    default:
      return !1;
  }
}
function ql(e) {
  if (_e) {
    var t = Fe;
    if (t) {
      var n = t;
      if (!su(e, t)) {
        if (((t = Lt(n.nextSibling)), !t || !su(e, t))) {
          (e.flags = (e.flags & -1025) | 2), (_e = !1), (Ne = e);
          return;
        }
        Js(Ne, n);
      }
      (Ne = e), (Fe = Lt(t.firstChild));
    } else (e.flags = (e.flags & -1025) | 2), (_e = !1), (Ne = e);
  }
}
function au(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ne = e;
}
function tr(e) {
  if (e !== Ne) return !1;
  if (!_e) return au(e), (_e = !0), !1;
  var t = e.type;
  if (e.tag !== 5 || (t !== "head" && t !== "body" && !Yl(t, e.memoizedProps)))
    for (t = Fe; t; ) Js(e, t), (t = Lt(t.nextSibling));
  if ((au(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Fe = Lt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Fe = null;
    }
  } else Fe = Ne ? Lt(e.stateNode.nextSibling) : null;
  return !0;
}
function kl() {
  (Fe = Ne = null), (_e = !1);
}
var zt = [];
function Zo() {
  for (var e = 0; e < zt.length; e++)
    zt[e]._workInProgressVersionPrimary = null;
  zt.length = 0;
}
var Sn = pt.ReactCurrentDispatcher,
  de = pt.ReactCurrentBatchConfig,
  Un = 0,
  V = null,
  Z = null,
  Y = null,
  Rr = !1,
  kn = !1;
function ne() {
  throw Error(y(321));
}
function Jo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!fe(e[n], t[n])) return !1;
  return !0;
}
function qo(e, t, n, r, l, o) {
  if (
    ((Un = o),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Sn.current = e === null || e.memoizedState === null ? cc : dc),
    (e = n(r, l)),
    kn)
  ) {
    o = 0;
    do {
      if (((kn = !1), !(25 > o))) throw Error(y(301));
      (o += 1),
        (Y = Z = null),
        (t.updateQueue = null),
        (Sn.current = pc),
        (e = n(r, l));
    } while (kn);
  }
  if (
    ((Sn.current = jr),
    (t = Z !== null && Z.next !== null),
    (Un = 0),
    (Y = Z = V = null),
    (Rr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function it() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Y === null ? (V.memoizedState = Y = e) : (Y = Y.next = e), Y;
}
function ht() {
  if (Z === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = Y === null ? V.memoizedState : Y.next;
  if (t !== null) (Y = t), (Z = e);
  else {
    if (e === null) throw Error(y(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      Y === null ? (V.memoizedState = Y = e) : (Y = Y.next = e);
  }
  return Y;
}
function Se(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function nn(e) {
  var t = ht(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Z,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (l = l.next), (r = r.baseState);
    var u = (i = o = null),
      s = l;
    do {
      var d = s.lane;
      if ((Un & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              eagerReducer: s.eagerReducer,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
      else {
        var g = {
          lane: d,
          action: s.action,
          eagerReducer: s.eagerReducer,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((i = u = g), (o = r)) : (u = u.next = g),
          (V.lanes |= d),
          (Wn |= d);
      }
      s = s.next;
    } while (s !== null && s !== l);
    u === null ? (o = r) : (u.next = i),
      fe(r, t.memoizedState) || (ge = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  return [t.memoizedState, n.dispatch];
}
function rn(e) {
  var t = ht(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    fe(o, t.memoizedState) || (ge = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function fu(e, t, n) {
  var r = t._getVersion;
  r = r(t._source);
  var l = t._workInProgressVersionPrimary;
  if (
    (l !== null
      ? (e = l === r)
      : ((e = e.mutableReadLanes),
        (e = (Un & e) === e) &&
          ((t._workInProgressVersionPrimary = r), zt.push(t))),
    e)
  )
    return n(t._source);
  throw (zt.push(t), Error(y(350)));
}
function qs(e, t, n, r) {
  var l = ee;
  if (l === null) throw Error(y(349));
  var o = t._getVersion,
    i = o(t._source),
    u = Sn.current,
    s = u.useState(function () {
      return fu(l, t, n);
    }),
    d = s[1],
    g = s[0];
  s = Y;
  var N = e.memoizedState,
    h = N.refs,
    k = h.getSnapshot,
    C = N.source;
  N = N.subscribe;
  var E = V;
  return (
    (e.memoizedState = { refs: h, source: t, subscribe: r }),
    u.useEffect(
      function () {
        (h.getSnapshot = n), (h.setSnapshot = d);
        var c = o(t._source);
        if (!fe(i, c)) {
          (c = n(t._source)),
            fe(g, c) ||
              (d(c), (c = Be(E)), (l.mutableReadLanes |= c & l.pendingLanes)),
            (c = l.mutableReadLanes),
            (l.entangledLanes |= c);
          for (var a = l.entanglements, f = c; 0 < f; ) {
            var p = 31 - Ye(f),
              m = 1 << p;
            (a[p] |= c), (f &= ~m);
          }
        }
      },
      [n, t, r]
    ),
    u.useEffect(
      function () {
        return r(t._source, function () {
          var c = h.getSnapshot,
            a = h.setSnapshot;
          try {
            a(c(t._source));
            var f = Be(E);
            l.mutableReadLanes |= f & l.pendingLanes;
          } catch (p) {
            a(function () {
              throw p;
            });
          }
        });
      },
      [t, r]
    ),
    (fe(k, n) && fe(C, t) && fe(N, r)) ||
      ((e = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Se,
        lastRenderedState: g,
      }),
      (e.dispatch = d = ti.bind(null, V, e)),
      (s.queue = e),
      (s.baseQueue = null),
      (g = fu(l, t, n)),
      (s.memoizedState = s.baseState = g)),
    g
  );
}
function bs(e, t, n) {
  var r = ht();
  return qs(r, e, t, n);
}
function ln(e) {
  var t = it();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = t.queue =
      {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Se,
        lastRenderedState: e,
      }),
    (e = e.dispatch = ti.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function zr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function cu(e) {
  var t = it();
  return (e = { current: e }), (t.memoizedState = e);
}
function Mr() {
  return ht().memoizedState;
}
function bl(e, t, n, r) {
  var l = it();
  (V.flags |= e),
    (l.memoizedState = zr(1 | t, n, void 0, r === void 0 ? null : r));
}
function bo(e, t, n, r) {
  var l = ht();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Z !== null) {
    var i = Z.memoizedState;
    if (((o = i.destroy), r !== null && Jo(r, i.deps))) {
      zr(t, n, o, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = zr(1 | t, n, o, r));
}
function du(e, t) {
  return bl(516, 4, e, t);
}
function Ir(e, t) {
  return bo(516, 4, e, t);
}
function ea(e, t) {
  return bo(4, 2, e, t);
}
function ta(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function na(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), bo(4, 2, ta.bind(null, t, e), n)
  );
}
function ei() {}
function ra(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function la(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function fc(e, t) {
  var n = Ut();
  ft(98 > n ? 98 : n, function () {
    e(!0);
  }),
    ft(97 < n ? 97 : n, function () {
      var r = de.transition;
      de.transition = 1;
      try {
        e(!1), t();
      } finally {
        de.transition = r;
      }
    });
}
function ti(e, t, n) {
  var r = ue(),
    l = Be(e),
    o = {
      lane: l,
      action: n,
      eagerReducer: null,
      eagerState: null,
      next: null,
    },
    i = t.pending;
  if (
    (i === null ? (o.next = o) : ((o.next = i.next), (i.next = o)),
    (t.pending = o),
    (i = e.alternate),
    e === V || (i !== null && i === V))
  )
    kn = Rr = !0;
  else {
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var u = t.lastRenderedState,
          s = i(u, n);
        if (((o.eagerReducer = i), (o.eagerState = s), fe(s, u))) return;
      } catch {
      } finally {
      }
    We(e, l, r);
  }
}
var jr = {
    readContext: pe,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useOpaqueIdentifier: ne,
    unstable_isNewReconciler: !1,
  },
  cc = {
    readContext: pe,
    useCallback: function (e, t) {
      return (it().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: pe,
    useEffect: du,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null), bl(4, 2, ta.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return bl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = it();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = it();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = r.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
        (e = e.dispatch = ti.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: cu,
    useState: ln,
    useDebugValue: ei,
    useDeferredValue: function (e) {
      var t = ln(e),
        n = t[0],
        r = t[1];
      return (
        du(
          function () {
            var l = de.transition;
            de.transition = 1;
            try {
              r(e);
            } finally {
              de.transition = l;
            }
          },
          [e]
        ),
        n
      );
    },
    useTransition: function () {
      var e = ln(!1),
        t = e[0];
      return (e = fc.bind(null, e[1])), cu(e), [e, t];
    },
    useMutableSource: function (e, t, n) {
      var r = it();
      return (
        (r.memoizedState = {
          refs: { getSnapshot: t, setSnapshot: null },
          source: e,
          subscribe: n,
        }),
        qs(r, e, t, n)
      );
    },
    useOpaqueIdentifier: function () {
      if (_e) {
        var e = !1,
          t = lc(function () {
            throw (
              (e || ((e = !0), n("r:" + (gl++).toString(36))), Error(y(355)))
            );
          }),
          n = ln(t)[1];
        return (
          (V.mode & 2) === 0 &&
            ((V.flags |= 516),
            zr(
              5,
              function () {
                n("r:" + (gl++).toString(36));
              },
              void 0,
              null
            )),
          t
        );
      }
      return (t = "r:" + (gl++).toString(36)), ln(t), t;
    },
    unstable_isNewReconciler: !1,
  },
  dc = {
    readContext: pe,
    useCallback: ra,
    useContext: pe,
    useEffect: Ir,
    useImperativeHandle: na,
    useLayoutEffect: ea,
    useMemo: la,
    useReducer: nn,
    useRef: Mr,
    useState: function () {
      return nn(Se);
    },
    useDebugValue: ei,
    useDeferredValue: function (e) {
      var t = nn(Se),
        n = t[0],
        r = t[1];
      return (
        Ir(
          function () {
            var l = de.transition;
            de.transition = 1;
            try {
              r(e);
            } finally {
              de.transition = l;
            }
          },
          [e]
        ),
        n
      );
    },
    useTransition: function () {
      var e = nn(Se)[0];
      return [Mr().current, e];
    },
    useMutableSource: bs,
    useOpaqueIdentifier: function () {
      return nn(Se)[0];
    },
    unstable_isNewReconciler: !1,
  },
  pc = {
    readContext: pe,
    useCallback: ra,
    useContext: pe,
    useEffect: Ir,
    useImperativeHandle: na,
    useLayoutEffect: ea,
    useMemo: la,
    useReducer: rn,
    useRef: Mr,
    useState: function () {
      return rn(Se);
    },
    useDebugValue: ei,
    useDeferredValue: function (e) {
      var t = rn(Se),
        n = t[0],
        r = t[1];
      return (
        Ir(
          function () {
            var l = de.transition;
            de.transition = 1;
            try {
              r(e);
            } finally {
              de.transition = l;
            }
          },
          [e]
        ),
        n
      );
    },
    useTransition: function () {
      var e = rn(Se)[0];
      return [Mr().current, e];
    },
    useMutableSource: bs,
    useOpaqueIdentifier: function () {
      return rn(Se)[0];
    },
    unstable_isNewReconciler: !1,
  },
  mc = pt.ReactCurrentOwner,
  ge = !1;
function re(e, t, n, r) {
  t.child = e === null ? Zs(t, null, n, r) : Or(t, e.child, n, r);
}
function pu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Rt(t, l),
    (r = qo(e, t, n, r, o, l)),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~l),
        Te(e, t, l))
      : ((t.flags |= 1), re(e, t, r, l), t.child)
  );
}
function mu(e, t, n, r, l, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ui(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), oa(e, t, i, r, l, o))
      : ((e = hr(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  return (
    (i = e.child),
    (l & o) === 0 &&
    ((l = i.memoizedProps),
    (n = n.compare),
    (n = n !== null ? n : zn),
    n(l, r) && e.ref === t.ref)
      ? Te(e, t, o)
      : ((t.flags |= 1),
        (e = Xe(i, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  );
}
function oa(e, t, n, r, l, o) {
  if (e !== null && zn(e.memoizedProps, r) && e.ref === t.ref)
    if (((ge = !1), (o & l) !== 0)) (e.flags & 16384) !== 0 && (ge = !0);
    else return (t.lanes = e.lanes), Te(e, t, o);
  return eo(e, t, n, r, o);
}
function El(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding")
    if ((t.mode & 4) === 0) (t.memoizedState = { baseLanes: 0 }), rr(t, n);
    else if ((n & 1073741824) !== 0)
      (t.memoizedState = { baseLanes: 0 }), rr(t, o !== null ? o.baseLanes : n);
    else
      return (
        (e = o !== null ? o.baseLanes | n : n),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = { baseLanes: e }),
        rr(t, e),
        null
      );
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      rr(t, r);
  return re(e, t, l, n), t.child;
}
function ia(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    (t.flags |= 128);
}
function eo(e, t, n, r, l) {
  var o = ie(n) ? at : b.current;
  return (
    (o = Dt(t, o)),
    Rt(t, l),
    (n = qo(e, t, n, r, o, l)),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -517),
        (e.lanes &= ~l),
        Te(e, t, l))
      : ((t.flags |= 1), re(e, t, n, l), t.child)
  );
}
function hu(e, t, n, r, l) {
  if (ie(n)) {
    var o = !0;
    fr(t);
  } else o = !1;
  if ((Rt(t, l), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      Ks(t, n, r),
      Zl(t, n, r, l),
      (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = pe(d))
      : ((d = ie(n) ? at : b.current), (d = Dt(t, d)));
    var g = n.getDerivedStateFromProps,
      N =
        typeof g == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    N ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== d) && iu(t, i, r, d)),
      (ze = !1);
    var h = t.memoizedState;
    (i.state = h),
      jn(t, r, i, l),
      (s = t.memoizedState),
      u !== r || h !== s || oe.current || ze
        ? (typeof g == "function" && (Tr(t, n, g, r), (s = t.memoizedState)),
          (u = ze || ou(t, n, u, r, h, s, d))
            ? (N ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = d),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4),
          (r = !1));
  } else {
    (i = t.stateNode),
      Ys(e, t),
      (u = t.memoizedProps),
      (d = t.type === t.elementType ? u : ve(t.type, u)),
      (i.props = d),
      (N = t.pendingProps),
      (h = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = pe(s))
        : ((s = ie(n) ? at : b.current), (s = Dt(t, s)));
    var k = n.getDerivedStateFromProps;
    (g =
      typeof k == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== N || h !== s) && iu(t, i, r, s)),
      (ze = !1),
      (h = t.memoizedState),
      (i.state = h),
      jn(t, r, i, l);
    var C = t.memoizedState;
    u !== N || h !== C || oe.current || ze
      ? (typeof k == "function" && (Tr(t, n, k, r), (C = t.memoizedState)),
        (d = ze || ou(t, n, d, r, h, C, s))
          ? (g ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, C, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, C, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 256))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 256),
            (t.memoizedProps = r),
            (t.memoizedState = C)),
        (i.props = r),
        (i.state = C),
        (i.context = s),
        (r = d))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 256),
        (r = !1));
  }
  return to(e, t, n, r, o, l);
}
function to(e, t, n, r, l, o) {
  ia(e, t);
  var i = (t.flags & 64) !== 0;
  if (!r && !i) return l && eu(t, n, !1), Te(e, t, o);
  (r = t.stateNode), (mc.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Or(t, e.child, null, o)), (t.child = Or(t, null, u, o)))
      : re(e, t, u, o),
    (t.memoizedState = r.state),
    l && eu(t, n, !0),
    t.child
  );
}
function yu(e) {
  var t = e.stateNode;
  t.pendingContext
    ? bi(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && bi(e, t.context, !1),
    Jl(e, t.containerInfo);
}
var nr = { dehydrated: null, retryLane: 0 };
function vu(e, t, n) {
  var r = t.pendingProps,
    l = D.current,
    o = !1,
    i;
  return (
    (i = (t.flags & 64) !== 0) ||
      (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    i
      ? ((o = !0), (t.flags &= -65))
      : (e !== null && e.memoizedState === null) ||
        r.fallback === void 0 ||
        r.unstable_avoidThisFallback === !0 ||
        (l |= 1),
    U(D, l & 1),
    e === null
      ? (r.fallback !== void 0 && ql(t),
        (e = r.children),
        (l = r.fallback),
        o
          ? ((e = gu(t, e, l, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = nr),
            e)
          : typeof r.unstable_expectedLoadTime == "number"
          ? ((e = gu(t, e, l, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = nr),
            (t.lanes = 33554432),
            e)
          : ((n = si({ mode: "visible", children: e }, t.mode, n, null)),
            (n.return = t),
            (t.child = n)))
      : e.memoizedState !== null
      ? o
        ? ((r = Su(e, t, r.children, r.fallback, n)),
          (o = t.child),
          (l = e.child.memoizedState),
          (o.memoizedState =
            l === null ? { baseLanes: n } : { baseLanes: l.baseLanes | n }),
          (o.childLanes = e.childLanes & ~n),
          (t.memoizedState = nr),
          r)
        : ((n = wu(e, t, r.children, n)), (t.memoizedState = null), n)
      : o
      ? ((r = Su(e, t, r.children, r.fallback, n)),
        (o = t.child),
        (l = e.child.memoizedState),
        (o.memoizedState =
          l === null ? { baseLanes: n } : { baseLanes: l.baseLanes | n }),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = nr),
        r)
      : ((n = wu(e, t, r.children, n)), (t.memoizedState = null), n)
  );
}
function gu(e, t, n, r) {
  var l = e.mode,
    o = e.child;
  return (
    (t = { mode: "hidden", children: t }),
    (l & 2) === 0 && o !== null
      ? ((o.childLanes = 0), (o.pendingProps = t))
      : (o = si(t, l, 0, null)),
    (n = jt(n, l, r, null)),
    (o.return = e),
    (n.return = e),
    (o.sibling = n),
    (e.child = o),
    n
  );
}
function wu(e, t, n, r) {
  var l = e.child;
  return (
    (e = l.sibling),
    (n = Xe(l, { mode: "visible", children: n })),
    (t.mode & 2) === 0 && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((e.nextEffect = null),
      (e.flags = 8),
      (t.firstEffect = t.lastEffect = e)),
    (t.child = n)
  );
}
function Su(e, t, n, r, l) {
  var o = t.mode,
    i = e.child;
  e = i.sibling;
  var u = { mode: "hidden", children: n };
  return (
    (o & 2) === 0 && t.child !== i
      ? ((n = t.child),
        (n.childLanes = 0),
        (n.pendingProps = u),
        (i = n.lastEffect),
        i !== null
          ? ((t.firstEffect = n.firstEffect),
            (t.lastEffect = i),
            (i.nextEffect = null))
          : (t.firstEffect = t.lastEffect = null))
      : (n = Xe(i, u)),
    e !== null ? (r = Xe(e, r)) : ((r = jt(r, o, l, null)), (r.flags |= 2)),
    (r.return = t),
    (n.return = t),
    (n.sibling = r),
    (t.child = n),
    r
  );
}
function ku(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Qs(e.return, t);
}
function _l(e, t, n, r, l, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
        lastEffect: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l),
      (i.lastEffect = o));
}
function Eu(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((re(e, t, r.children, n), (r = D.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 64);
  else {
    if (e !== null && (e.flags & 64) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ku(e, n);
        else if (e.tag === 19) ku(e, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((U(D, r), (t.mode & 2) === 0)) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Lr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          _l(t, !1, l, n, o, t.lastEffect);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Lr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        _l(t, !0, n, null, o, t.lastEffect);
        break;
      case "together":
        _l(t, !1, null, null, void 0, t.lastEffect);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Te(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Wn |= t.lanes),
    (n & t.childLanes) !== 0)
  ) {
    if (e !== null && t.child !== e.child) throw Error(y(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Xe(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Xe(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  return null;
}
var ua, no, sa, aa;
ua = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
no = function () {};
sa = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), ot(Ee.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Ol(e, l)), (r = Ol(e, r)), (o = []);
        break;
      case "option":
        (l = zl(e, l)), (r = zl(e, r)), (o = []);
        break;
      case "select":
        (l = F({}, l, { value: void 0 })),
          (r = F({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Ml(e, l)), (r = Ml(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Er);
    }
    Fl(n, r);
    var i;
    n = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === "style") {
          var u = l[d];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (xn.hasOwnProperty(d)
              ? o || (o = [])
              : (o = o || []).push(d, null));
    for (d in r) {
      var s = r[d];
      if (
        ((u = l != null ? l[d] : void 0),
        r.hasOwnProperty(d) && s !== u && (s != null || u != null))
      )
        if (d === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(d, n)), (n = s);
        else
          d === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(d, s))
            : d === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(d, "" + s)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (xn.hasOwnProperty(d)
                ? (s != null && d === "onScroll" && I("scroll", e),
                  o || u === s || (o = []))
                : typeof s == "object" && s !== null && s.$$typeof === To
                ? s.toString()
                : (o = o || []).push(d, s));
    }
    n && (o = o || []).push("style", n);
    var d = o;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
aa = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function on(e, t) {
  if (!_e)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function hc(e, t, n) {
  var r = t.pendingProps;
  switch (t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return ie(t.type) && Cr(), null;
    case 3:
      return (
        $t(),
        j(oe),
        j(b),
        Zo(),
        (r = t.stateNode),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (tr(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
        no(t),
        null
      );
    case 5:
      Xo(t);
      var l = ot(Dn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        sa(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return null;
        }
        if (((e = ot(Ee.current)), tr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[je] = t), (r[_r] = o), n)) {
            case "dialog":
              I("cancel", r), I("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              I("load", r);
              break;
            case "video":
            case "audio":
              for (e = 0; e < fn.length; e++) I(fn[e], r);
              break;
            case "source":
              I("error", r);
              break;
            case "img":
            case "image":
            case "link":
              I("error", r), I("load", r);
              break;
            case "details":
              I("toggle", r);
              break;
            case "input":
              Ei(r, o), I("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                I("invalid", r);
              break;
            case "textarea":
              Ci(r, o), I("invalid", r);
          }
          Fl(n, o), (e = null);
          for (var i in o)
            o.hasOwnProperty(i) &&
              ((l = o[i]),
              i === "children"
                ? typeof l == "string"
                  ? r.textContent !== l && (e = ["children", l])
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (e = ["children", "" + l])
                : xn.hasOwnProperty(i) &&
                  l != null &&
                  i === "onScroll" &&
                  I("scroll", r));
          switch (n) {
            case "input":
              Xn(r), _i(r, o, !0);
              break;
            case "textarea":
              Xn(r), xi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Er);
          }
          (r = e), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          switch (
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
            e === Il.html && (e = ns(n)),
            e === Il.html
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[je] = t),
            (e[_r] = r),
            ua(e, t, !1, !1),
            (t.stateNode = e),
            (i = Dl(n, r)),
            n)
          ) {
            case "dialog":
              I("cancel", e), I("close", e), (l = r);
              break;
            case "iframe":
            case "object":
            case "embed":
              I("load", e), (l = r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < fn.length; l++) I(fn[l], e);
              l = r;
              break;
            case "source":
              I("error", e), (l = r);
              break;
            case "img":
            case "image":
            case "link":
              I("error", e), I("load", e), (l = r);
              break;
            case "details":
              I("toggle", e), (l = r);
              break;
            case "input":
              Ei(e, r), (l = Ol(e, r)), I("invalid", e);
              break;
            case "option":
              l = zl(e, r);
              break;
            case "select":
              (e._wrapperState = { wasMultiple: !!r.multiple }),
                (l = F({}, r, { value: void 0 })),
                I("invalid", e);
              break;
            case "textarea":
              Ci(e, r), (l = Ml(e, r)), I("invalid", e);
              break;
            default:
              l = r;
          }
          Fl(n, l);
          var u = l;
          for (o in u)
            if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style"
                ? os(e, s)
                : o === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0), s != null && rs(e, s))
                : o === "children"
                ? typeof s == "string"
                  ? (n !== "textarea" || s !== "") && Pn(e, s)
                  : typeof s == "number" && Pn(e, "" + s)
                : o !== "suppressContentEditableWarning" &&
                  o !== "suppressHydrationWarning" &&
                  o !== "autoFocus" &&
                  (xn.hasOwnProperty(o)
                    ? s != null && o === "onScroll" && I("scroll", e)
                    : s != null && Eo(e, o, s, i));
            }
          switch (n) {
            case "input":
              Xn(e), _i(e, r, !1);
              break;
            case "textarea":
              Xn(e), xi(e);
              break;
            case "option":
              r.value != null && e.setAttribute("value", "" + Qe(r.value));
              break;
            case "select":
              (e.multiple = !!r.multiple),
                (o = r.value),
                o != null
                  ? Nt(e, !!r.multiple, o, !1)
                  : r.defaultValue != null &&
                    Nt(e, !!r.multiple, r.defaultValue, !0);
              break;
            default:
              typeof l.onClick == "function" && (e.onclick = Er);
          }
          Fs(n, r) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) aa(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        (n = ot(Dn.current)),
          ot(Ee.current),
          tr(t)
            ? ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[je] = t),
              r.nodeValue !== n && (t.flags |= 4))
            : ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[je] = t),
              (t.stateNode = r));
      }
      return null;
    case 13:
      return (
        j(D),
        (r = t.memoizedState),
        (t.flags & 64) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            (n = !1),
            e === null
              ? t.memoizedProps.fallback !== void 0 && tr(t)
              : (n = e.memoizedState !== null),
            r &&
              !n &&
              (t.mode & 2) !== 0 &&
              ((e === null &&
                t.memoizedProps.unstable_avoidThisFallback !== !0) ||
              (D.current & 1) !== 0
                ? G === 0 && (G = 3)
                : ((G === 0 || G === 3) && (G = 4),
                  ee === null ||
                    ((Wn & 134217727) === 0 && (Qt & 134217727) === 0) ||
                    Mt(ee, q))),
            (r || n) && (t.flags |= 4),
            null)
      );
    case 4:
      return $t(), no(t), e === null && Ms(t.stateNode.containerInfo), null;
    case 10:
      return Go(t), null;
    case 17:
      return ie(t.type) && Cr(), null;
    case 19:
      if ((j(D), (r = t.memoizedState), r === null)) return null;
      if (((o = (t.flags & 64) !== 0), (i = r.rendering), i === null))
        if (o) on(r, !1);
        else {
          if (G !== 0 || (e !== null && (e.flags & 64) !== 0))
            for (e = t.child; e !== null; ) {
              if (((i = Lr(e)), i !== null)) {
                for (
                  t.flags |= 64,
                    on(r, !1),
                    o = i.updateQueue,
                    o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                    r.lastEffect === null && (t.firstEffect = null),
                    t.lastEffect = r.lastEffect,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 2),
                    (o.nextEffect = null),
                    (o.firstEffect = null),
                    (o.lastEffect = null),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return U(D, (D.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          r.tail !== null &&
            J() > so &&
            ((t.flags |= 64), (o = !0), on(r, !1), (t.lanes = 33554432));
        }
      else {
        if (!o)
          if (((e = Lr(i)), e !== null)) {
            if (
              ((t.flags |= 64),
              (o = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              on(r, !0),
              r.tail === null && r.tailMode === "hidden" && !i.alternate && !_e)
            )
              return (
                (t = t.lastEffect = r.lastEffect),
                t !== null && (t.nextEffect = null),
                null
              );
          } else
            2 * J() - r.renderingStartTime > so &&
              n !== 1073741824 &&
              ((t.flags |= 64), (o = !0), on(r, !1), (t.lanes = 33554432));
        r.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = r.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (r.last = i));
      }
      return r.tail !== null
        ? ((n = r.tail),
          (r.rendering = n),
          (r.tail = n.sibling),
          (r.lastEffect = t.lastEffect),
          (r.renderingStartTime = J()),
          (n.sibling = null),
          (t = D.current),
          U(D, o ? (t & 1) | 2 : t & 1),
          n)
        : null;
    case 23:
    case 24:
      return (
        ii(),
        e !== null &&
          (e.memoizedState !== null) != (t.memoizedState !== null) &&
          r.mode !== "unstable-defer-without-hiding" &&
          (t.flags |= 4),
        null
      );
  }
  throw Error(y(156, t.tag));
}
function yc(e) {
  switch (e.tag) {
    case 1:
      ie(e.type) && Cr();
      var t = e.flags;
      return t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null;
    case 3:
      if (($t(), j(oe), j(b), Zo(), (t = e.flags), (t & 64) !== 0))
        throw Error(y(285));
      return (e.flags = (t & -4097) | 64), e;
    case 5:
      return Xo(e), null;
    case 13:
      return (
        j(D), (t = e.flags), t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null
      );
    case 19:
      return j(D), null;
    case 4:
      return $t(), null;
    case 10:
      return Go(e), null;
    case 23:
    case 24:
      return ii(), null;
    default:
      return null;
  }
}
function ni(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Xa(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l };
}
function ro(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var vc = typeof WeakMap == "function" ? WeakMap : Map;
function fa(e, t, n) {
  (n = Ve(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Dr || ((Dr = !0), (ao = r)), ro(e, t);
    }),
    n
  );
}
function ca(e, t, n) {
  (n = Ve(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function () {
      return ro(e, t), r(l);
    };
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        typeof r != "function" &&
          (ke === null ? (ke = new Set([this])) : ke.add(this), ro(e, t));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
var gc = typeof WeakSet == "function" ? WeakSet : Set;
function _u(e) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (n) {
        He(e, n);
      }
    else t.current = null;
}
function wc(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (t.flags & 256 && e !== null) {
        var n = e.memoizedProps,
          r = e.memoizedState;
        (e = t.stateNode),
          (t = e.getSnapshotBeforeUpdate(
            t.elementType === t.type ? n : ve(t.type, n),
            r
          )),
          (e.__reactInternalSnapshotBeforeUpdate = t);
      }
      return;
    case 3:
      t.flags & 256 && Wo(t.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Sc(e, t, n) {
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (
        ((t = n.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        e = t = t.next;
        do {
          if ((e.tag & 3) === 3) {
            var r = e.create;
            e.destroy = r();
          }
          e = e.next;
        } while (e !== t);
      }
      if (
        ((t = n.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        e = t = t.next;
        do {
          var l = e;
          (r = l.next),
            (l = l.tag),
            (l & 4) !== 0 && (l & 1) !== 0 && (Sa(n, e), Tc(n, e)),
            (e = r);
        } while (e !== t);
      }
      return;
    case 1:
      (e = n.stateNode),
        n.flags & 4 &&
          (t === null
            ? e.componentDidMount()
            : ((r =
                n.elementType === n.type
                  ? t.memoizedProps
                  : ve(n.type, t.memoizedProps)),
              e.componentDidUpdate(
                r,
                t.memoizedState,
                e.__reactInternalSnapshotBeforeUpdate
              ))),
        (t = n.updateQueue),
        t !== null && lu(n, t, e);
      return;
    case 3:
      if (((t = n.updateQueue), t !== null)) {
        if (((e = null), n.child !== null))
          switch (n.child.tag) {
            case 5:
              e = n.child.stateNode;
              break;
            case 1:
              e = n.child.stateNode;
          }
        lu(n, t, e);
      }
      return;
    case 5:
      (e = n.stateNode),
        t === null && n.flags & 4 && Fs(n.type, n.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      n.memoizedState === null &&
        ((n = n.alternate),
        n !== null &&
          ((n = n.memoizedState),
          n !== null && ((n = n.dehydrated), n !== null && hs(n))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function Cu(e, t) {
  for (var n = e; ; ) {
    if (n.tag === 5) {
      var r = n.stateNode;
      if (t)
        (r = r.style),
          typeof r.setProperty == "function"
            ? r.setProperty("display", "none", "important")
            : (r.display = "none");
      else {
        r = n.stateNode;
        var l = n.memoizedProps.style;
        (l = l != null && l.hasOwnProperty("display") ? l.display : null),
          (r.style.display = ls("display", l));
      }
    } else if (n.tag === 6) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
    else if (
      ((n.tag !== 23 && n.tag !== 24) || n.memoizedState === null || n === e) &&
      n.child !== null
    ) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function xu(e, t) {
  if (ut && typeof ut.onCommitFiberUnmount == "function")
    try {
      ut.onCommitFiberUnmount(Ho, t);
    } catch {}
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (
        ((e = t.updateQueue), e !== null && ((e = e.lastEffect), e !== null))
      ) {
        var n = (e = e.next);
        do {
          var r = n,
            l = r.destroy;
          if (((r = r.tag), l !== void 0))
            if ((r & 4) !== 0) Sa(t, n);
            else {
              r = t;
              try {
                l();
              } catch (o) {
                He(r, o);
              }
            }
          n = n.next;
        } while (n !== e);
      }
      break;
    case 1:
      if (
        (_u(t), (e = t.stateNode), typeof e.componentWillUnmount == "function")
      )
        try {
          (e.props = t.memoizedProps),
            (e.state = t.memoizedState),
            e.componentWillUnmount();
        } catch (o) {
          He(t, o);
        }
      break;
    case 5:
      _u(t);
      break;
    case 4:
      da(e, t);
  }
}
function Pu(e) {
  (e.alternate = null),
    (e.child = null),
    (e.dependencies = null),
    (e.firstEffect = null),
    (e.lastEffect = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.return = null),
    (e.updateQueue = null);
}
function Nu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Tu(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (Nu(t)) break e;
      t = t.return;
    }
    throw Error(y(160));
  }
  var n = t;
  switch (((t = n.stateNode), n.tag)) {
    case 5:
      var r = !1;
      break;
    case 3:
      (t = t.containerInfo), (r = !0);
      break;
    case 4:
      (t = t.containerInfo), (r = !0);
      break;
    default:
      throw Error(y(161));
  }
  n.flags & 16 && (Pn(t, ""), (n.flags &= -17));
  e: t: for (n = e; ; ) {
    for (; n.sibling === null; ) {
      if (n.return === null || Nu(n.return)) {
        n = null;
        break e;
      }
      n = n.return;
    }
    for (
      n.sibling.return = n.return, n = n.sibling;
      n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

    ) {
      if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
      (n.child.return = n), (n = n.child);
    }
    if (!(n.flags & 2)) {
      n = n.stateNode;
      break e;
    }
  }
  r ? lo(e, n, t) : oo(e, n, t);
}
function lo(e, t, n) {
  var r = e.tag,
    l = r === 5 || r === 6;
  if (l)
    (e = l ? e.stateNode : e.stateNode.instance),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Er));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (lo(e, t, n), e = e.sibling; e !== null; ) lo(e, t, n), (e = e.sibling);
}
function oo(e, t, n) {
  var r = e.tag,
    l = r === 5 || r === 6;
  if (l)
    (e = l ? e.stateNode : e.stateNode.instance),
      t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oo(e, t, n), e = e.sibling; e !== null; ) oo(e, t, n), (e = e.sibling);
}
function da(e, t) {
  for (var n = t, r = !1, l, o; ; ) {
    if (!r) {
      r = n.return;
      e: for (;;) {
        if (r === null) throw Error(y(160));
        switch (((l = r.stateNode), r.tag)) {
          case 5:
            o = !1;
            break e;
          case 3:
            (l = l.containerInfo), (o = !0);
            break e;
          case 4:
            (l = l.containerInfo), (o = !0);
            break e;
        }
        r = r.return;
      }
      r = !0;
    }
    if (n.tag === 5 || n.tag === 6) {
      e: for (var i = e, u = n, s = u; ; )
        if ((xu(i, s), s.child !== null && s.tag !== 4))
          (s.child.return = s), (s = s.child);
        else {
          if (s === u) break e;
          for (; s.sibling === null; ) {
            if (s.return === null || s.return === u) break e;
            s = s.return;
          }
          (s.sibling.return = s.return), (s = s.sibling);
        }
      o
        ? ((i = l),
          (u = n.stateNode),
          i.nodeType === 8 ? i.parentNode.removeChild(u) : i.removeChild(u))
        : l.removeChild(n.stateNode);
    } else if (n.tag === 4) {
      if (n.child !== null) {
        (l = n.stateNode.containerInfo),
          (o = !0),
          (n.child.return = n),
          (n = n.child);
        continue;
      }
    } else if ((xu(e, n), n.child !== null)) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      (n = n.return), n.tag === 4 && (r = !1);
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function Cl(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var n = t.updateQueue;
      if (((n = n !== null ? n.lastEffect : null), n !== null)) {
        var r = (n = n.next);
        do
          (r.tag & 3) === 3 &&
            ((e = r.destroy), (r.destroy = void 0), e !== void 0 && e()),
            (r = r.next);
        while (r !== n);
      }
      return;
    case 1:
      return;
    case 5:
      if (((n = t.stateNode), n != null)) {
        r = t.memoizedProps;
        var l = e !== null ? e.memoizedProps : r;
        e = t.type;
        var o = t.updateQueue;
        if (((t.updateQueue = null), o !== null)) {
          for (
            n[_r] = r,
              e === "input" && r.type === "radio" && r.name != null && es(n, r),
              Dl(e, l),
              t = Dl(e, r),
              l = 0;
            l < o.length;
            l += 2
          ) {
            var i = o[l],
              u = o[l + 1];
            i === "style"
              ? os(n, u)
              : i === "dangerouslySetInnerHTML"
              ? rs(n, u)
              : i === "children"
              ? Pn(n, u)
              : Eo(n, i, u, t);
          }
          switch (e) {
            case "input":
              Ll(n, r);
              break;
            case "textarea":
              ts(n, r);
              break;
            case "select":
              (e = n._wrapperState.wasMultiple),
                (n._wrapperState.wasMultiple = !!r.multiple),
                (o = r.value),
                o != null
                  ? Nt(n, !!r.multiple, o, !1)
                  : e !== !!r.multiple &&
                    (r.defaultValue != null
                      ? Nt(n, !!r.multiple, r.defaultValue, !0)
                      : Nt(n, !!r.multiple, r.multiple ? [] : "", !1));
          }
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(y(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      (n = t.stateNode), n.hydrate && ((n.hydrate = !1), hs(n.containerInfo));
      return;
    case 12:
      return;
    case 13:
      t.memoizedState !== null && ((oi = J()), Cu(t.child, !0)), Ou(t);
      return;
    case 19:
      Ou(t);
      return;
    case 17:
      return;
    case 23:
    case 24:
      Cu(t, t.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function Ou(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new gc()),
      t.forEach(function (r) {
        var l = Rc.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function kc(e, t) {
  return e !== null &&
    ((e = e.memoizedState), e === null || e.dehydrated !== null)
    ? ((t = t.memoizedState), t !== null && t.dehydrated === null)
    : !1;
}
var Ec = Math.ceil,
  Fr = pt.ReactCurrentDispatcher,
  ri = pt.ReactCurrentOwner,
  T = 0,
  ee = null,
  A = null,
  q = 0,
  ct = 0,
  io = Ze(0),
  G = 0,
  Zr = null,
  Ht = 0,
  Wn = 0,
  Qt = 0,
  li = 0,
  uo = null,
  oi = 0,
  so = 1 / 0;
function Yt() {
  so = J() + 500;
}
var S = null,
  Dr = !1,
  ao = null,
  ke = null,
  Ke = !1,
  En = null,
  cn = 90,
  fo = [],
  co = [],
  Oe = null,
  _n = 0,
  po = null,
  dr = -1,
  Pe = 0,
  pr = 0,
  Cn = null,
  mr = !1;
function ue() {
  return (T & 48) !== 0 ? J() : dr !== -1 ? dr : (dr = J());
}
function Be(e) {
  if (((e = e.mode), (e & 2) === 0)) return 1;
  if ((e & 4) === 0) return Ut() === 99 ? 1 : 2;
  if ((Pe === 0 && (Pe = Ht), ac.transition !== 0)) {
    pr !== 0 && (pr = uo !== null ? uo.pendingLanes : 0), (e = Pe);
    var t = 4186112 & ~pr;
    return (
      (t &= -t),
      t === 0 && ((e = 4186112 & ~e), (t = e & -e), t === 0 && (t = 8192)),
      t
    );
  }
  return (
    (e = Ut()),
    (T & 4) !== 0 && e === 98
      ? (e = Sr(12, Pe))
      : ((e = df(e)), (e = Sr(e, Pe))),
    e
  );
}
function We(e, t, n) {
  if (50 < _n) throw ((_n = 0), (po = null), Error(y(185)));
  if (((e = Jr(e, t)), e === null)) return null;
  Wr(e, t, n), e === ee && ((Qt |= t), G === 4 && Mt(e, q));
  var r = Ut();
  t === 1
    ? (T & 8) !== 0 && (T & 48) === 0
      ? mo(e)
      : (me(e, n), T === 0 && (Yt(), Ce()))
    : ((T & 4) === 0 ||
        (r !== 98 && r !== 99) ||
        (Oe === null ? (Oe = new Set([e])) : Oe.add(e)),
      me(e, n)),
    (uo = e);
}
function Jr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
function me(e, t) {
  for (
    var n = e.callbackNode,
      r = e.suspendedLanes,
      l = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var u = 31 - Ye(i),
      s = 1 << u,
      d = o[u];
    if (d === -1) {
      if ((s & r) === 0 || (s & l) !== 0) {
        (d = t), gt(s);
        var g = M;
        o[u] = 10 <= g ? d + 250 : 6 <= g ? d + 5e3 : -1;
      }
    } else d <= t && (e.expiredLanes |= s);
    i &= ~s;
  }
  if (((r = Ln(e, e === ee ? q : 0)), (t = M), r === 0))
    n !== null &&
      (n !== wl && Kl(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else {
    if (n !== null) {
      if (e.callbackPriority === t) return;
      n !== wl && Kl(n);
    }
    t === 15
      ? ((n = mo.bind(null, e)),
        xe === null ? ((xe = [n]), (cr = Qo(Kr, Hs))) : xe.push(n),
        (n = wl))
      : t === 14
      ? (n = In(99, mo.bind(null, e)))
      : ((n = pf(t)), (n = In(n, pa.bind(null, e)))),
      (e.callbackPriority = t),
      (e.callbackNode = n);
  }
}
function pa(e) {
  if (((dr = -1), (pr = Pe = 0), (T & 48) !== 0)) throw Error(y(327));
  var t = e.callbackNode;
  if (Je() && e.callbackNode !== t) return null;
  var n = Ln(e, e === ee ? q : 0);
  if (n === 0) return null;
  var r = n,
    l = T;
  T |= 16;
  var o = va();
  (ee !== e || q !== r) && (Yt(), It(e, r));
  do
    try {
      xc();
      break;
    } catch (u) {
      ya(e, u);
    }
  while (1);
  if (
    (Yo(),
    (Fr.current = o),
    (T = l),
    A !== null ? (r = 0) : ((ee = null), (q = 0), (r = G)),
    (Ht & Qt) !== 0)
  )
    It(e, 0);
  else if (r !== 0) {
    if (
      (r === 2 &&
        ((T |= 64),
        e.hydrate && ((e.hydrate = !1), Wo(e.containerInfo)),
        (n = Es(e)),
        n !== 0 && (r = dn(e, n))),
      r === 1)
    )
      throw ((t = Zr), It(e, 0), Mt(e, n), me(e, J()), t);
    switch (
      ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
    ) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        tt(e);
        break;
      case 3:
        if (
          (Mt(e, n), (n & 62914560) === n && ((r = oi + 500 - J()), 10 < r))
        ) {
          if (Ln(e, 0) !== 0) break;
          if (((l = e.suspendedLanes), (l & n) !== n)) {
            ue(), (e.pingedLanes |= e.suspendedLanes & l);
            break;
          }
          e.timeoutHandle = Zi(tt.bind(null, e), r);
          break;
        }
        tt(e);
        break;
      case 4:
        if ((Mt(e, n), (n & 4186112) === n)) break;
        for (r = e.eventTimes, l = -1; 0 < n; ) {
          var i = 31 - Ye(n);
          (o = 1 << i), (i = r[i]), i > l && (l = i), (n &= ~o);
        }
        if (
          ((n = l),
          (n = J() - n),
          (n =
            (120 > n
              ? 120
              : 480 > n
              ? 480
              : 1080 > n
              ? 1080
              : 1920 > n
              ? 1920
              : 3e3 > n
              ? 3e3
              : 4320 > n
              ? 4320
              : 1960 * Ec(n / 1960)) - n),
          10 < n)
        ) {
          e.timeoutHandle = Zi(tt.bind(null, e), n);
          break;
        }
        tt(e);
        break;
      case 5:
        tt(e);
        break;
      default:
        throw Error(y(329));
    }
  }
  return me(e, J()), e.callbackNode === t ? pa.bind(null, e) : null;
}
function Mt(e, t) {
  for (
    t &= ~li,
      t &= ~Qt,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ye(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function mo(e) {
  if ((T & 48) !== 0) throw Error(y(327));
  if ((Je(), e === ee && (e.expiredLanes & q) !== 0)) {
    var t = q,
      n = dn(e, t);
    (Ht & Qt) !== 0 && ((t = Ln(e, t)), (n = dn(e, t)));
  } else (t = Ln(e, 0)), (n = dn(e, t));
  if (
    (e.tag !== 0 &&
      n === 2 &&
      ((T |= 64),
      e.hydrate && ((e.hydrate = !1), Wo(e.containerInfo)),
      (t = Es(e)),
      t !== 0 && (n = dn(e, t))),
    n === 1)
  )
    throw ((n = Zr), It(e, 0), Mt(e, t), me(e, J()), n);
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    tt(e),
    me(e, J()),
    null
  );
}
function _c() {
  if (Oe !== null) {
    var e = Oe;
    (Oe = null),
      e.forEach(function (t) {
        (t.expiredLanes |= 24 & t.pendingLanes), me(t, J());
      });
  }
  Ce();
}
function ma(e, t) {
  var n = T;
  T |= 1;
  try {
    return e(t);
  } finally {
    (T = n), T === 0 && (Yt(), Ce());
  }
}
function ha(e, t) {
  var n = T;
  (T &= -2), (T |= 8);
  try {
    return e(t);
  } finally {
    (T = n), T === 0 && (Yt(), Ce());
  }
}
function rr(e, t) {
  U(io, ct), (ct |= t), (Ht |= t);
}
function ii() {
  (ct = io.current), j(io);
}
function It(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), rc(n)), A !== null))
    for (n = A.return; n !== null; ) {
      var r = n;
      switch (r.tag) {
        case 1:
          (r = r.type.childContextTypes), r != null && Cr();
          break;
        case 3:
          $t(), j(oe), j(b), Zo();
          break;
        case 5:
          Xo(r);
          break;
        case 4:
          $t();
          break;
        case 13:
          j(D);
          break;
        case 19:
          j(D);
          break;
        case 10:
          Go(r);
          break;
        case 23:
        case 24:
          ii();
      }
      n = n.return;
    }
  (ee = e),
    (A = Xe(e.current, null)),
    (q = ct = Ht = t),
    (G = 0),
    (Zr = null),
    (li = Qt = Wn = 0);
}
function ya(e, t) {
  do {
    var n = A;
    try {
      if ((Yo(), (Sn.current = jr), Rr)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Rr = !1;
      }
      if (
        ((Un = 0),
        (Y = Z = V = null),
        (kn = !1),
        (ri.current = null),
        n === null || n.return === null)
      ) {
        (G = 1), (Zr = t), (A = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = q),
          (u.flags |= 2048),
          (u.firstEffect = u.lastEffect = null),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var d = s;
          if ((u.mode & 2) === 0) {
            var g = u.alternate;
            g
              ? ((u.updateQueue = g.updateQueue),
                (u.memoizedState = g.memoizedState),
                (u.lanes = g.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var N = (D.current & 1) !== 0,
            h = i;
          do {
            var k;
            if ((k = h.tag === 13)) {
              var C = h.memoizedState;
              if (C !== null) k = C.dehydrated !== null;
              else {
                var E = h.memoizedProps;
                k =
                  E.fallback === void 0
                    ? !1
                    : E.unstable_avoidThisFallback !== !0
                    ? !0
                    : !N;
              }
            }
            if (k) {
              var c = h.updateQueue;
              if (c === null) {
                var a = new Set();
                a.add(d), (h.updateQueue = a);
              } else c.add(d);
              if ((h.mode & 2) === 0) {
                if (
                  ((h.flags |= 64),
                  (u.flags |= 16384),
                  (u.flags &= -2981),
                  u.tag === 1)
                )
                  if (u.alternate === null) u.tag = 17;
                  else {
                    var f = Ve(-1, 1);
                    (f.tag = 2), Ae(u, f);
                  }
                u.lanes |= 1;
                break e;
              }
              (s = void 0), (u = t);
              var p = o.pingCache;
              if (
                (p === null
                  ? ((p = o.pingCache = new vc()), (s = new Set()), p.set(d, s))
                  : ((s = p.get(d)),
                    s === void 0 && ((s = new Set()), p.set(d, s))),
                !s.has(u))
              ) {
                s.add(u);
                var m = Lc.bind(null, o, d, u);
                d.then(m, m);
              }
              (h.flags |= 4096), (h.lanes = t);
              break e;
            }
            h = h.return;
          } while (h !== null);
          s = Error(
            (Pt(u.type) || "A React component") +
              ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`
          );
        }
        G !== 5 && (G = 2), (s = ni(s, u)), (h = i);
        do {
          switch (h.tag) {
            case 3:
              (o = s), (h.flags |= 4096), (t &= -t), (h.lanes |= t);
              var P = fa(h, o, t);
              ru(h, P);
              break e;
            case 1:
              o = s;
              var v = h.type,
                x = h.stateNode;
              if (
                (h.flags & 64) === 0 &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (ke === null || !ke.has(x))))
              ) {
                (h.flags |= 4096), (t &= -t), (h.lanes |= t);
                var L = ca(h, o, t);
                ru(h, L);
                break e;
              }
          }
          h = h.return;
        } while (h !== null);
      }
      wa(n);
    } catch (_) {
      (t = _), A === n && n !== null && (A = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function va() {
  var e = Fr.current;
  return (Fr.current = jr), e === null ? jr : e;
}
function dn(e, t) {
  var n = T;
  T |= 16;
  var r = va();
  (ee === e && q === t) || It(e, t);
  do
    try {
      Cc();
      break;
    } catch (l) {
      ya(e, l);
    }
  while (1);
  if ((Yo(), (T = n), (Fr.current = r), A !== null)) throw Error(y(261));
  return (ee = null), (q = 0), G;
}
function Cc() {
  for (; A !== null; ) ga(A);
}
function xc() {
  for (; A !== null && !ic(); ) ga(A);
}
function ga(e) {
  var t = ka(e.alternate, e, ct);
  (e.memoizedProps = e.pendingProps),
    t === null ? wa(e) : (A = t),
    (ri.current = null);
}
function wa(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 2048) === 0)) {
      if (((n = hc(n, t, ct)), n !== null)) {
        A = n;
        return;
      }
      if (
        ((n = t),
        (n.tag !== 24 && n.tag !== 23) ||
          n.memoizedState === null ||
          (ct & 1073741824) !== 0 ||
          (n.mode & 4) === 0)
      ) {
        for (var r = 0, l = n.child; l !== null; )
          (r |= l.lanes | l.childLanes), (l = l.sibling);
        n.childLanes = r;
      }
      e !== null &&
        (e.flags & 2048) === 0 &&
        (e.firstEffect === null && (e.firstEffect = t.firstEffect),
        t.lastEffect !== null &&
          (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect),
          (e.lastEffect = t.lastEffect)),
        1 < t.flags &&
          (e.lastEffect !== null
            ? (e.lastEffect.nextEffect = t)
            : (e.firstEffect = t),
          (e.lastEffect = t)));
    } else {
      if (((n = yc(t)), n !== null)) {
        (n.flags &= 2047), (A = n);
        return;
      }
      e !== null && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
    }
    if (((t = t.sibling), t !== null)) {
      A = t;
      return;
    }
    A = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function tt(e) {
  var t = Ut();
  return ft(99, Pc.bind(null, e, t)), null;
}
function Pc(e, t) {
  do Je();
  while (En !== null);
  if ((T & 48) !== 0) throw Error(y(327));
  var n = e.finishedWork;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  e.callbackNode = null;
  var r = n.lanes | n.childLanes,
    l = r,
    o = e.pendingLanes & ~l;
  (e.pendingLanes = l),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= l),
    (e.mutableReadLanes &= l),
    (e.entangledLanes &= l),
    (l = e.entanglements);
  for (var i = e.eventTimes, u = e.expirationTimes; 0 < o; ) {
    var s = 31 - Ye(o),
      d = 1 << s;
    (l[s] = 0), (i[s] = -1), (u[s] = -1), (o &= ~d);
  }
  if (
    (Oe !== null && (r & 24) === 0 && Oe.has(e) && Oe.delete(e),
    e === ee && ((A = ee = null), (q = 0)),
    1 < n.flags
      ? n.lastEffect !== null
        ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
        : (r = n)
      : (r = n.firstEffect),
    r !== null)
  ) {
    if (
      ((l = T), (T |= 32), (ri.current = null), (yl = ur), (i = Wi()), Wl(i))
    ) {
      if ("selectionStart" in i)
        u = { start: i.selectionStart, end: i.selectionEnd };
      else
        e: if (
          ((u = ((u = i.ownerDocument) && u.defaultView) || window),
          (d = u.getSelection && u.getSelection()) && d.rangeCount !== 0)
        ) {
          (u = d.anchorNode),
            (o = d.anchorOffset),
            (s = d.focusNode),
            (d = d.focusOffset);
          try {
            u.nodeType, s.nodeType;
          } catch {
            u = null;
            break e;
          }
          var g = 0,
            N = -1,
            h = -1,
            k = 0,
            C = 0,
            E = i,
            c = null;
          t: for (;;) {
            for (
              var a;
              E !== u || (o !== 0 && E.nodeType !== 3) || (N = g + o),
                E !== s || (d !== 0 && E.nodeType !== 3) || (h = g + d),
                E.nodeType === 3 && (g += E.nodeValue.length),
                (a = E.firstChild) !== null;

            )
              (c = E), (E = a);
            for (;;) {
              if (E === i) break t;
              if (
                (c === u && ++k === o && (N = g),
                c === s && ++C === d && (h = g),
                (a = E.nextSibling) !== null)
              )
                break;
              (E = c), (c = E.parentNode);
            }
            E = a;
          }
          u = N === -1 || h === -1 ? null : { start: N, end: h };
        } else u = null;
      u = u || { start: 0, end: 0 };
    } else u = null;
    (vl = { focusedElem: i, selectionRange: u }),
      (ur = !1),
      (Cn = null),
      (mr = !1),
      (S = r);
    do
      try {
        Nc();
      } catch (_) {
        if (S === null) throw Error(y(330));
        He(S, _), (S = S.nextEffect);
      }
    while (S !== null);
    (Cn = null), (S = r);
    do
      try {
        for (i = e; S !== null; ) {
          var f = S.flags;
          if ((f & 16 && Pn(S.stateNode, ""), f & 128)) {
            var p = S.alternate;
            if (p !== null) {
              var m = p.ref;
              m !== null &&
                (typeof m == "function" ? m(null) : (m.current = null));
            }
          }
          switch (f & 1038) {
            case 2:
              Tu(S), (S.flags &= -3);
              break;
            case 6:
              Tu(S), (S.flags &= -3), Cl(S.alternate, S);
              break;
            case 1024:
              S.flags &= -1025;
              break;
            case 1028:
              (S.flags &= -1025), Cl(S.alternate, S);
              break;
            case 4:
              Cl(S.alternate, S);
              break;
            case 8:
              (u = S), da(i, u);
              var P = u.alternate;
              Pu(u), P !== null && Pu(P);
          }
          S = S.nextEffect;
        }
      } catch (_) {
        if (S === null) throw Error(y(330));
        He(S, _), (S = S.nextEffect);
      }
    while (S !== null);
    if (
      ((m = vl),
      (p = Wi()),
      (f = m.focusedElem),
      (i = m.selectionRange),
      p !== f && f && f.ownerDocument && Ls(f.ownerDocument.documentElement, f))
    ) {
      for (
        i !== null &&
          Wl(f) &&
          ((p = i.start),
          (m = i.end),
          m === void 0 && (m = p),
          ("selectionStart" in f)
            ? ((f.selectionStart = p),
              (f.selectionEnd = Math.min(m, f.value.length)))
            : ((m =
                ((p = f.ownerDocument || document) && p.defaultView) || window),
              m.getSelection &&
                ((m = m.getSelection()),
                (u = f.textContent.length),
                (P = Math.min(i.start, u)),
                (i = i.end === void 0 ? P : Math.min(i.end, u)),
                !m.extend && P > i && ((u = i), (i = P), (P = u)),
                (u = Bi(f, P)),
                (o = Bi(f, i)),
                u &&
                  o &&
                  (m.rangeCount !== 1 ||
                    m.anchorNode !== u.node ||
                    m.anchorOffset !== u.offset ||
                    m.focusNode !== o.node ||
                    m.focusOffset !== o.offset) &&
                  ((p = p.createRange()),
                  p.setStart(u.node, u.offset),
                  m.removeAllRanges(),
                  P > i
                    ? (m.addRange(p), m.extend(o.node, o.offset))
                    : (p.setEnd(o.node, o.offset), m.addRange(p)))))),
          p = [],
          m = f;
        (m = m.parentNode);

      )
        m.nodeType === 1 &&
          p.push({ element: m, left: m.scrollLeft, top: m.scrollTop });
      for (typeof f.focus == "function" && f.focus(), f = 0; f < p.length; f++)
        (m = p[f]),
          (m.element.scrollLeft = m.left),
          (m.element.scrollTop = m.top);
    }
    (ur = !!yl), (vl = yl = null), (e.current = n), (S = r);
    do
      try {
        for (f = e; S !== null; ) {
          var v = S.flags;
          if ((v & 36 && Sc(f, S.alternate, S), v & 128)) {
            p = void 0;
            var x = S.ref;
            if (x !== null) {
              var L = S.stateNode;
              switch (S.tag) {
                case 5:
                  p = L;
                  break;
                default:
                  p = L;
              }
              typeof x == "function" ? x(p) : (x.current = p);
            }
          }
          S = S.nextEffect;
        }
      } catch (_) {
        if (S === null) throw Error(y(330));
        He(S, _), (S = S.nextEffect);
      }
    while (S !== null);
    (S = null), sc(), (T = l);
  } else e.current = n;
  if (Ke) (Ke = !1), (En = e), (cn = t);
  else
    for (S = r; S !== null; )
      (t = S.nextEffect),
        (S.nextEffect = null),
        S.flags & 8 && ((v = S), (v.sibling = null), (v.stateNode = null)),
        (S = t);
  if (
    ((r = e.pendingLanes),
    r === 0 && (ke = null),
    r === 1 ? (e === po ? _n++ : ((_n = 0), (po = e))) : (_n = 0),
    (n = n.stateNode),
    ut && typeof ut.onCommitFiberRoot == "function")
  )
    try {
      ut.onCommitFiberRoot(Ho, n, void 0, (n.current.flags & 64) === 64);
    } catch {}
  if ((me(e, J()), Dr)) throw ((Dr = !1), (e = ao), (ao = null), e);
  return (T & 8) !== 0 || Ce(), null;
}
function Nc() {
  for (; S !== null; ) {
    var e = S.alternate;
    mr ||
      Cn === null ||
      ((S.flags & 8) !== 0
        ? Ti(S, Cn) && (mr = !0)
        : S.tag === 13 && kc(e, S) && Ti(S, Cn) && (mr = !0));
    var t = S.flags;
    (t & 256) !== 0 && wc(e, S),
      (t & 512) === 0 ||
        Ke ||
        ((Ke = !0),
        In(97, function () {
          return Je(), null;
        })),
      (S = S.nextEffect);
  }
}
function Je() {
  if (cn !== 90) {
    var e = 97 < cn ? 97 : cn;
    return (cn = 90), ft(e, Oc);
  }
  return !1;
}
function Tc(e, t) {
  fo.push(t, e),
    Ke ||
      ((Ke = !0),
      In(97, function () {
        return Je(), null;
      }));
}
function Sa(e, t) {
  co.push(t, e),
    Ke ||
      ((Ke = !0),
      In(97, function () {
        return Je(), null;
      }));
}
function Oc() {
  if (En === null) return !1;
  var e = En;
  if (((En = null), (T & 48) !== 0)) throw Error(y(331));
  var t = T;
  T |= 32;
  var n = co;
  co = [];
  for (var r = 0; r < n.length; r += 2) {
    var l = n[r],
      o = n[r + 1],
      i = l.destroy;
    if (((l.destroy = void 0), typeof i == "function"))
      try {
        i();
      } catch (s) {
        if (o === null) throw Error(y(330));
        He(o, s);
      }
  }
  for (n = fo, fo = [], r = 0; r < n.length; r += 2) {
    (l = n[r]), (o = n[r + 1]);
    try {
      var u = l.create;
      l.destroy = u();
    } catch (s) {
      if (o === null) throw Error(y(330));
      He(o, s);
    }
  }
  for (u = e.current.firstEffect; u !== null; )
    (e = u.nextEffect),
      (u.nextEffect = null),
      u.flags & 8 && ((u.sibling = null), (u.stateNode = null)),
      (u = e);
  return (T = t), Ce(), !0;
}
function Lu(e, t, n) {
  (t = ni(n, t)),
    (t = fa(e, t, 1)),
    Ae(e, t),
    (t = ue()),
    (e = Jr(e, 1)),
    e !== null && (Wr(e, 1, t), me(e, t));
}
function He(e, t) {
  if (e.tag === 3) Lu(e, e, t);
  else
    for (var n = e.return; n !== null; ) {
      if (n.tag === 3) {
        Lu(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ke === null || !ke.has(r)))
        ) {
          e = ni(t, e);
          var l = ca(n, e, 1);
          if ((Ae(n, l), (l = ue()), (n = Jr(n, 1)), n !== null))
            Wr(n, 1, l), me(n, l);
          else if (
            typeof r.componentDidCatch == "function" &&
            (ke === null || !ke.has(r))
          )
            try {
              r.componentDidCatch(t, e);
            } catch {}
          break;
        }
      }
      n = n.return;
    }
}
function Lc(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (q & n) === n &&
      (G === 4 || (G === 3 && (q & 62914560) === q && 500 > J() - oi)
        ? It(e, 0)
        : (li |= n)),
    me(e, t);
}
function Rc(e, t) {
  var n = e.stateNode;
  n !== null && n.delete(t),
    (t = 0),
    t === 0 &&
      ((t = e.mode),
      (t & 2) === 0
        ? (t = 1)
        : (t & 4) === 0
        ? (t = Ut() === 99 ? 1 : 2)
        : (Pe === 0 && (Pe = Ht),
          (t = wt(62914560 & ~Pe)),
          t === 0 && (t = 4194304))),
    (n = ue()),
    (e = Jr(e, t)),
    e !== null && (Wr(e, t, n), me(e, n));
}
var ka;
ka = function (e, t, n) {
  var r = t.lanes;
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || oe.current) ge = !0;
    else if ((n & r) !== 0) ge = (e.flags & 16384) !== 0;
    else {
      switch (((ge = !1), t.tag)) {
        case 3:
          yu(t), kl();
          break;
        case 5:
          uu(t);
          break;
        case 1:
          ie(t.type) && fr(t);
          break;
        case 4:
          Jl(t, t.stateNode.containerInfo);
          break;
        case 10:
          r = t.memoizedProps.value;
          var l = t.type._context;
          U(xr, l._currentValue), (l._currentValue = r);
          break;
        case 13:
          if (t.memoizedState !== null)
            return (n & t.child.childLanes) !== 0
              ? vu(e, t, n)
              : (U(D, D.current & 1),
                (t = Te(e, t, n)),
                t !== null ? t.sibling : null);
          U(D, D.current & 1);
          break;
        case 19:
          if (((r = (n & t.childLanes) !== 0), (e.flags & 64) !== 0)) {
            if (r) return Eu(e, t, n);
            t.flags |= 64;
          }
          if (
            ((l = t.memoizedState),
            l !== null &&
              ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
            U(D, D.current),
            r)
          )
            break;
          return null;
        case 23:
        case 24:
          return (t.lanes = 0), El(e, t, n);
      }
      return Te(e, t, n);
    }
  else ge = !1;
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      if (
        ((r = t.type),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps),
        (l = Dt(t, b.current)),
        Rt(t, n),
        (l = qo(null, t, r, e, l, n)),
        (t.flags |= 1),
        typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0)
      ) {
        if (
          ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), ie(r))
        ) {
          var o = !0;
          fr(t);
        } else o = !1;
        (t.memoizedState =
          l.state !== null && l.state !== void 0 ? l.state : null),
          Ko(t);
        var i = r.getDerivedStateFromProps;
        typeof i == "function" && Tr(t, r, i, e),
          (l.updater = Xr),
          (t.stateNode = l),
          (l._reactInternals = t),
          Zl(t, r, e, n),
          (t = to(null, t, r, !0, o, n));
      } else (t.tag = 0), re(null, t, l, n), (t = t.child);
      return t;
    case 16:
      l = t.elementType;
      e: {
        switch (
          (e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (o = l._init),
          (l = o(l._payload)),
          (t.type = l),
          (o = t.tag = Mc(l)),
          (e = ve(l, e)),
          o)
        ) {
          case 0:
            t = eo(null, t, l, e, n);
            break e;
          case 1:
            t = hu(null, t, l, e, n);
            break e;
          case 11:
            t = pu(null, t, l, e, n);
            break e;
          case 14:
            t = mu(null, t, l, ve(l.type, e), r, n);
            break e;
        }
        throw Error(y(306, l, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ve(r, l)),
        eo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ve(r, l)),
        hu(e, t, r, l, n)
      );
    case 3:
      if ((yu(t), (r = t.updateQueue), e === null || r === null))
        throw Error(y(282));
      if (
        ((r = t.pendingProps),
        (l = t.memoizedState),
        (l = l !== null ? l.element : null),
        Ys(e, t),
        jn(t, r, null, n),
        (r = t.memoizedState.element),
        r === l)
      )
        kl(), (t = Te(e, t, n));
      else {
        if (
          ((l = t.stateNode),
          (o = l.hydrate) &&
            ((Fe = Lt(t.stateNode.containerInfo.firstChild)),
            (Ne = t),
            (o = _e = !0)),
          o)
        ) {
          if (((e = l.mutableSourceEagerHydrationData), e != null))
            for (l = 0; l < e.length; l += 2)
              (o = e[l]),
                (o._workInProgressVersionPrimary = e[l + 1]),
                zt.push(o);
          for (n = Zs(t, null, r, n), t.child = n; n; )
            (n.flags = (n.flags & -3) | 1024), (n = n.sibling);
        } else re(e, t, r, n), kl();
        t = t.child;
      }
      return t;
    case 5:
      return (
        uu(t),
        e === null && ql(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Yl(r, l) ? (i = null) : o !== null && Yl(r, o) && (t.flags |= 16),
        ia(e, t),
        re(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && ql(t), null;
    case 13:
      return vu(e, t, n);
    case 4:
      return (
        Jl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Or(t, null, r, n)) : re(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ve(r, l)),
        pu(e, t, r, l, n)
      );
    case 7:
      return re(e, t, t.pendingProps, n), t.child;
    case 8:
      return re(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return re(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        (r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value);
        var u = t.type._context;
        if ((U(xr, u._currentValue), (u._currentValue = o), i !== null))
          if (
            ((u = i.value),
            (o = fe(u, o)
              ? 0
              : (typeof r._calculateChangedBits == "function"
                  ? r._calculateChangedBits(u, o)
                  : 1073741823) | 0),
            o === 0)
          ) {
            if (i.children === l.children && !oe.current) {
              t = Te(e, t, n);
              break e;
            }
          } else
            for (u = t.child, u !== null && (u.return = t); u !== null; ) {
              var s = u.dependencies;
              if (s !== null) {
                i = u.child;
                for (var d = s.firstContext; d !== null; ) {
                  if (d.context === r && (d.observedBits & o) !== 0) {
                    u.tag === 1 &&
                      ((d = Ve(-1, n & -n)), (d.tag = 2), Ae(u, d)),
                      (u.lanes |= n),
                      (d = u.alternate),
                      d !== null && (d.lanes |= n),
                      Qs(u.return, n),
                      (s.lanes |= n);
                    break;
                  }
                  d = d.next;
                }
              } else i = u.tag === 10 && u.type === t.type ? null : u.child;
              if (i !== null) i.return = u;
              else
                for (i = u; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((u = i.sibling), u !== null)) {
                    (u.return = i.return), (i = u);
                    break;
                  }
                  i = i.return;
                }
              u = i;
            }
        re(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (o = t.pendingProps),
        (r = o.children),
        Rt(t, n),
        (l = pe(l, o.unstable_observedBits)),
        (r = r(l)),
        (t.flags |= 1),
        re(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (l = t.type),
        (o = ve(l, t.pendingProps)),
        (o = ve(l.type, o)),
        mu(e, t, l, o, r, n)
      );
    case 15:
      return oa(e, t, t.type, t.pendingProps, r, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ve(r, l)),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        ie(r) ? ((e = !0), fr(t)) : (e = !1),
        Rt(t, n),
        Ks(t, r, l),
        Zl(t, r, l, n),
        to(null, t, r, !0, e, n)
      );
    case 19:
      return Eu(e, t, n);
    case 23:
      return El(e, t, n);
    case 24:
      return El(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function zc(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.flags = 0),
    (this.lastEffect = this.firstEffect = this.nextEffect = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ce(e, t, n, r) {
  return new zc(e, t, n, r);
}
function ui(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Mc(e) {
  if (typeof e == "function") return ui(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Vr)) return 11;
    if (e === Ar) return 14;
  }
  return 2;
}
function Xe(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.nextEffect = null),
        (n.firstEffect = null),
        (n.lastEffect = null)),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function hr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) ui(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Me:
        return jt(n.children, l, o, t);
      case Ju:
        (i = 8), (l |= 16);
        break;
      case _o:
        (i = 8), (l |= 1);
        break;
      case pn:
        return (
          (e = ce(12, n, t, l | 8)),
          (e.elementType = pn),
          (e.type = pn),
          (e.lanes = o),
          e
        );
      case mn:
        return (
          (e = ce(13, n, t, l)),
          (e.type = mn),
          (e.elementType = mn),
          (e.lanes = o),
          e
        );
      case yr:
        return (e = ce(19, n, t, l)), (e.elementType = yr), (e.lanes = o), e;
      case Oo:
        return si(n, l, o, t);
      case Tl:
        return (e = ce(24, n, t, l)), (e.elementType = Tl), (e.lanes = o), e;
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Co:
              i = 10;
              break e;
            case xo:
              i = 9;
              break e;
            case Vr:
              i = 11;
              break e;
            case Ar:
              i = 14;
              break e;
            case Po:
              (i = 16), (r = null);
              break e;
            case No:
              i = 22;
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ce(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function jt(e, t, n, r) {
  return (e = ce(7, e, r, t)), (e.lanes = n), e;
}
function si(e, t, n, r) {
  return (e = ce(23, e, r, t)), (e.elementType = Oo), (e.lanes = n), e;
}
function xl(e, t, n) {
  return (e = ce(6, e, null, t)), (e.lanes = n), e;
}
function Pl(e, t, n) {
  return (
    (t = ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ic(e, t, n) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.pendingContext = this.context = null),
    (this.hydrate = n),
    (this.callbackNode = null),
    (this.callbackPriority = 0),
    (this.eventTimes = al(0)),
    (this.expirationTimes = al(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = al(0)),
    (this.mutableSourceEagerHydrationData = null);
}
function jc(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: nt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ur(e, t, n, r) {
  var l = t.current,
    o = ue(),
    i = Be(l);
  e: if (n) {
    n = n._reactInternals;
    t: {
      if (mt(n) !== n || n.tag !== 1) throw Error(y(170));
      var u = n;
      do {
        switch (u.tag) {
          case 3:
            u = u.stateNode.context;
            break t;
          case 1:
            if (ie(u.type)) {
              u = u.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        u = u.return;
      } while (u !== null);
      throw Error(y(171));
    }
    if (n.tag === 1) {
      var s = n.type;
      if (ie(s)) {
        n = Us(n, s, u);
        break e;
      }
    }
    n = u;
  } else n = Ge;
  return (
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ve(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    Ae(l, t),
    We(l, i, o),
    i
  );
}
function Nl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ru(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ai(e, t) {
  Ru(e, t), (e = e.alternate) && Ru(e, t);
}
function Fc() {
  return null;
}
function fi(e, t, n) {
  var r =
    (n != null &&
      n.hydrationOptions != null &&
      n.hydrationOptions.mutableSources) ||
    null;
  if (
    ((n = new Ic(e, t, n != null && n.hydrate === !0)),
    (t = ce(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0)),
    (n.current = t),
    (t.stateNode = n),
    Ko(t),
    (e[Wt] = n.current),
    Ms(e.nodeType === 8 ? e.parentNode : e),
    r)
  )
    for (e = 0; e < r.length; e++) {
      t = r[e];
      var l = t._getVersion;
      (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
    }
  this._internalRoot = n;
}
fi.prototype.render = function (e) {
  Ur(e, this._internalRoot, null, null);
};
fi.prototype.unmount = function () {
  var e = this._internalRoot,
    t = e.containerInfo;
  Ur(null, e, null, function () {
    t[Wt] = null;
  });
};
function Hn(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Dc(e, t) {
  if (
    (t ||
      ((t = e ? (e.nodeType === 9 ? e.documentElement : e.firstChild) : null),
      (t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot")))),
    !t)
  )
    for (var n; (n = e.lastChild); ) e.removeChild(n);
  return new fi(e, 0, t ? { hydrate: !0 } : void 0);
}
function qr(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o._internalRoot;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var d = Nl(i);
        u.call(d);
      };
    }
    Ur(t, i, e, l);
  } else {
    if (
      ((o = n._reactRootContainer = Dc(n, r)),
      (i = o._internalRoot),
      typeof l == "function")
    ) {
      var s = l;
      l = function () {
        var d = Nl(i);
        s.call(d);
      };
    }
    ha(function () {
      Ur(t, i, e, l);
    });
  }
  return Nl(i);
}
ds = function (e) {
  if (e.tag === 13) {
    var t = ue();
    We(e, 4, t), ai(e, 4);
  }
};
Io = function (e) {
  if (e.tag === 13) {
    var t = ue();
    We(e, 67108864, t), ai(e, 67108864);
  }
};
ps = function (e) {
  if (e.tag === 13) {
    var t = ue(),
      n = Be(e);
    We(e, n, t), ai(e, n);
  }
};
ms = function (e, t) {
  return t();
};
Ul = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ll(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Gr(r);
            if (!l) throw Error(y(90));
            bu(r), Ll(r, l);
          }
        }
      }
      break;
    case "textarea":
      ts(e, n);
      break;
    case "select":
      (t = n.value), t != null && Nt(e, !!n.multiple, t, !1);
  }
};
Ro = ma;
ss = function (e, t, n, r, l) {
  var o = T;
  T |= 4;
  try {
    return ft(98, e.bind(null, t, n, r, l));
  } finally {
    (T = o), T === 0 && (Yt(), Ce());
  }
};
zo = function () {
  (T & 49) === 0 && (_c(), Je());
};
as = function (e, t) {
  var n = T;
  T |= 2;
  try {
    return e(t);
  } finally {
    (T = n), T === 0 && (Yt(), Ce());
  }
};
function Ea(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Hn(t)) throw Error(y(200));
  return jc(e, t, null, n);
}
var Uc = { Events: [An, _t, Gr, is, us, Je, { current: !1 }] },
  un = {
    findFiberByHostInstance: lt,
    bundleType: 0,
    version: "17.0.2",
    rendererPackageName: "react-dom",
  },
  $c = {
    bundleType: un.bundleType,
    version: un.version,
    rendererPackageName: un.rendererPackageName,
    rendererConfig: un.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = cs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: un.findFiberByHostInstance || Fc,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
  var lr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!lr.isDisabled && lr.supportsFiber)
    try {
      (Ho = lr.inject($c)), (ut = lr);
    } catch {}
}
he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uc;
he.createPortal = Ea;
he.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : Error(y(268, Object.keys(e)));
  return (e = cs(t)), (e = e === null ? null : e.stateNode), e;
};
he.flushSync = function (e, t) {
  var n = T;
  if ((n & 48) !== 0) return e(t);
  T |= 1;
  try {
    if (e) return ft(99, e.bind(null, t));
  } finally {
    (T = n), Ce();
  }
};
he.hydrate = function (e, t, n) {
  if (!Hn(t)) throw Error(y(200));
  return qr(null, e, t, !0, n);
};
he.render = function (e, t, n) {
  if (!Hn(t)) throw Error(y(200));
  return qr(null, e, t, !1, n);
};
he.unmountComponentAtNode = function (e) {
  if (!Hn(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (ha(function () {
        qr(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Wt] = null);
        });
      }),
      !0)
    : !1;
};
he.unstable_batchedUpdates = ma;
he.unstable_createPortal = function (e, t) {
  return Ea(
    e,
    t,
    2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  );
};
he.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Hn(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return qr(e, t, n, !1, r);
};
he.version = "17.0.2";
function _a() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_a);
    } catch (e) {
      console.error(e);
    }
}
_a(), (Gu.exports = he);
var Vc = Gu.exports,
  Ca = { exports: {} },
  Ac = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Bc = Ac,
  Wc = Bc;
function xa() {}
function Pa() {}
Pa.resetWarningCache = xa;
var Hc = function () {
  function e(r, l, o, i, u, s) {
    if (s !== Wc) {
      var d = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((d.name = "Invariant Violation"), d);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Pa,
    resetWarningCache: xa,
  };
  return (n.PropTypes = n), n;
};
Ca.exports = Hc();
var Qc = Ca.exports,
  br = { exports: {} },
  Qn = {};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yc = st.exports,
  Na = 60103;
Qn.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
  var zu = Symbol.for;
  (Na = zu("react.element")), (Qn.Fragment = zu("react.fragment"));
}
var Gc =
    Yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Kc = Object.prototype.hasOwnProperty,
  Xc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ta(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Kc.call(t, r) && !Xc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Na,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Gc.current,
  };
}
Qn.jsx = Ta;
Qn.jsxs = Ta;
br.exports = Qn;
const le = br.exports.jsx,
  ci = br.exports.jsxs,
  Oa = br.exports.Fragment,
  La = ({ setCategories: e }) => {
    const [t, n] = st.exports.useState("");
    return le("form", {
      onSubmit: (o) => {
        o.preventDefault(), t.trim().length > 2 && (e((i) => [t, ...i]), n(""));
      },
      children: le("input", {
        type: "text",
        value: t,
        onChange: (o) => {
          n(o.target.value);
        },
      }),
    });
  };
La.propTypes = { setCategories: Qc.func.isRequired };
const Zc = async (e) => {
    const t = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        e
      )}&limit=10&api_key=eRmwaPk1zB6Rg3TIko9PGAH21OBZpYI3`,
      n = await fetch(t),
      { data: r } = await n.json();
    return r.map((o) => {
      var i;
      return {
        id: o.id,
        title: o.title,
        url: (i = o.images) == null ? void 0 : i.original.url,
      };
    });
  },
  Jc = (e) => {
    const [t, n] = st.exports.useState({ data: [], loading: !0 });
    return (
      st.exports.useEffect(() => {
        Zc(e).then((r) => {
          n({ data: r, loading: !1 });
        });
      }, [e]),
      t
    );
  },
  qc = ({ title: e, url: t }) =>
    ci("div", {
      className: "card animate__animated animate__fadeIn",
      children: [le("img", { src: t, alt: e }), le("p", { children: e })],
    }),
  bc = ({ category: e }) => {
    const { data: t, loading: n } = Jc(e);
    return ci(Oa, {
      children: [
        le("h4", {
          className: "animate__animated animate__fadeIn",
          children: e,
        }),
        n &&
          le("p", {
            className: "animate__animated animate__flash",
            children: "Cargando...",
          }),
        le("div", {
          className: "card-grid",
          children: t.map((r) => le(qc, mi({}, r), r.id)),
        }),
      ],
    });
  },
  ed = () => {
    const [e, t] = st.exports.useState(["One punch"]);
    return ci(Oa, {
      children: [
        le("h2", { children: "GifExpertApp" }),
        le(La, { setCategories: t }),
        le("hr", {}),
        le("ol", { children: e.map((n) => le(bc, { category: n }, n)) }),
      ],
    });
  };
Vc.render(le(ed, {}), document.getElementById("root"));
