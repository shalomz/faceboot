/*! lolight v0.6.0 - https://larsjung.de/lolight/ */ ! function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : e.lolight = t()
}(this, function () {
  var e = ".lolight",
    t = "ll-",
    n = "_nam#2196f3}_num#ec407a}_str#43a047}_rex#ef6c00}_pct#666}_key#555;font-weight:bold}_com#aaa;font-style:italic}".replace(/_/g, "." + t).replace(/#/g, "{color:#"),
    o = /^(a(bstract|lias|nd|rguments|rray|s(m|sert)?|uto)|b(ase|egin|ool(ean)?|reak|yte)|c(ase|atch|har|hecked|lass|lone|ompl|onst|ontinue)|de(bugger|cimal|clare|f(ault|er)?|init|l(egate|ete)?)|do|double|e(cho|ls?if|lse(if)?|nd|nsure|num|vent|x(cept|ec|p(licit|ort)|te(nds|nsion|rn)))|f(allthrough|alse|inal(ly)?|ixed|loat|or(each)?|riend|rom|unc(tion)?)|global|goto|guard|i(f|mp(lements|licit|ort)|n(it|clude(_once)?|line|out|stanceof|t(erface|ernal)?)?|s)|l(ambda|et|ock|ong)|m(odule|utable)|NaN|n(amespace|ative|ext|ew|il|ot|ull)|o(bject|perator|r|ut|verride)|p(ackage|arams|rivate|rotected|rotocol|ublic)|r(aise|e(adonly|do|f|gister|peat|quire(_once)?|scue|strict|try|turn))|s(byte|ealed|elf|hort|igned|izeof|tatic|tring|truct|ubscript|uper|ynchronized|witch)|t(emplate|hen|his|hrows?|ransient|rue|ry|ype(alias|def|id|name|of))|u(n(checked|def(ined)?|ion|less|signed|til)|se|sing)|v(ar|irtual|oid|olatile)|w(char_t|hen|here|hile|ith)|xor|yield)$/,
    r = "com",
    i = "key",
    a = "nam",
    l = "num",
    c = "pct",
    s = "rex",
    f = "spc",
    u = "str",
    d = "unk",
    h = [
      [l, /#([0-9a-f]{6}|[0-9a-f]{3})\b/],
      [r, /(\/\/|#).*?(?=\n|$)/],
      [r, /\/\*[\s\S]*?\*\//],
      [r, /<!--[\s\S]*?-->/],
      [s, /\/(\\\/|[^\n])*?\//],
      [u, /(['"`])(\\\1|[\s\S])*?\1/],
      [l, /[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?/],
      [c, /[\\.,:;+\-*\/=<>()[\]{}|?!&@~]/],
      [f, /\s+/],
      [a, /[\w$]+/],
      [d, /./]
    ],
    m = function (e) {
      if ("string" != typeof e) throw new Error("tok: no string");
      for (var t = [], n = h.length, r = !1; e;)
        for (var c = 0; c < n; c += 1) {
          var u = h[c][1].exec(e);
          if (u && 0 === u.index) {
            var d = h[c][0];
            if (d !== s || !r) {
              var m = u[0];
              d === a && o.test(m) && (d = i), d === f ? m.indexOf("\n") >= 0 && (r = !1) : r = d === l || d === a, e = e.slice(m.length), t.push([d, m]);
              break
            }
          }
        }
      return t
    },
    p = function (e, t) {
      if ("undefined" != typeof document) t(document);
      else if (e) throw new Error("no doc")
    },
    g = function (e) {
      p(!0, function (n) {
        var o = m(e.textContent);
        e.innerHTML = "", o.forEach(function (o) {
          var r = n.createElement("span");
          r.className = t + o[0], r.textContent = o[1], e.appendChild(r)
        })
      })
    },
    y = function (t) {
      p(!0, function (n) {
        [].forEach.call(n.querySelectorAll(t || e), function (e) {
          g(e)
        })
      })
    };
  return p(!1, function (e) {
    var t = e.querySelector("head"),
      o = e.createElement("style");
    o.textContent = n, t.insertBefore(o, t.firstChild), /^(i|c|loade)/.test(e.readyState) ? y() : e.addEventListener("DOMContentLoaded", function () {
      y()
    })
  }), y.tok = m, y.el = g, y
});