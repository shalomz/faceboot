var n = {'date': (new Date()).getUTCDate()}, num;
for(var o in n)
  num = parseInt(+(~~!Math.floor(o)==o));
var d = document;
var m = d;
n = ["t", "y"];
p = ['tl', 'gt', 'mn', 'lm'];
var s = ['gtlmnt','b', 'y','i', 'd'];
s[0] = s.map((e, i)=> !i*s.length ? e : 0).filter(e=>e)
.map(e=> {
  p.forEach(h=> {
    var lol = e.indexOf(h);
    lol+1 ? e = e.substr(0, lol+1) + String.fromCharCode(101) + e.substr(lol+1, e.length) : e = e;
  });
  return e;
});
s = s.reduce((t, e, i) => t+=e);
var k = s;
var acc = 0;
n.map(e => {
  do{
    var i = k.indexOf(e)+[[]].length;
    s = s.substr(0, acc + i) + k.charAt(i).toUpperCase() + s.substr(acc+i+1, s.length);
    k = k.slice(i, k.length);
    acc +=i;
  }
  while(k.indexOf(e)>=0)
});
var g = d[s].bind(d);
var increment = () => {
  var l = Object.keys(s).length;
  num+= l/14;
  g('count').innerHTML = num;
}


