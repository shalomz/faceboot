var printer = function () {
  var n = {
      'date': (new Date()).getUTCDate()
    },
    num;
  for (var o in n)
    num = parseInt(+(~~!Math.floor(o) == o));
  var d = document;
  var m = d;
  n = ["t", "y"];
  var p = ['tl', 'gt', 'mn', 'lm'];
  var s = ['gtlmgnltttn', 'bybiydbyi']
    .map(e => e.split('')
      .filter((j, i, g) => num ? g.indexOf(j) === i : g.indexOf(j) == i)
      .join().replace(/,/g, '')) //regex :)
    .reduce((t, e, i) => {
      t.push(e);
      return t;
    }, []);
  var cover = (str) => {
    return str.split('').reverse().join('');
  }
  // I need more coffee...
  var v = [cover('htgnel')][+!true];
  s.concat([cover('diyb')]);
  var ouch = r => { // a very aptly named method
    r = r || s;
    return r[v];
  };
  s = [(s.map((e, i) => !i * s.length ? e : 0).filter(e => e)
      .map(e => {
        p.forEach(h => {
          var lol = e.indexOf(h) + 1;
          lol ? e = [e.slice(0, lol), String.fromCharCode(101), e.slice(lol)].join('') : e;
        });
        return e;
      }) + 't'), ...s.slice(1 - ouch(s))]
    .reduce((t, e, i) => t += e);
  var k = s;
  var acc = 0; // initialization is so boring
  n.map(e => {
    do {
      var i = k.indexOf(e) + ouch([
        []
      ]);
      s = s.substr(0, acc + i) + k.charAt(i).toUpperCase() + s.substr(acc + i + 1, ouch());
      k = k.slice(i, k[v]);
      acc += i;
    }
    while (k.indexOf(e) >= 0)
  });
  var increment = () => d[s].bind(d)('count')['innerHTML'] = num += ouch(Object.keys(s)) / ouch();
  return {
    increment,
  }
}
/*************************************************************/

if (location.hostname) {
  function reqListener() {
    dispCode(this.responseText);
  }
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", reqListener);
  xhr.open("GET", "main.js");
  xhr.send();
} else(notify('Oh okay, not hosting me? Fine.'));

function notify(msg) {
  // fallback for local hosting
  let el = document.getElementsByClassName("notification")[0];
  el.innerHTML = msg;
  dispCode(printer.toString());
}

function dispCode(str) {
  setTimeout(function () {
    var int = 0;
    setInterval(() => {
      int += Math.floor(Math.random() * 4);
      document.querySelector('code').innerHTML = str.slice(0, int);
      /* manually fire DOMContentLoaded event to trigger re-highlighting */
      var domLoadEvent = document.createEvent("Event")
      domLoadEvent.initEvent("DOMContentLoaded", true, true);
      window.document.dispatchEvent(domLoadEvent);
    }, 80);
  }, 3000);

}
var increment = printer().increment;