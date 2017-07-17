var n = {'date': (new Date()).getUTCDate()}, num;
for(var o in n)
  num = parseInt(+(~~!Math.floor(o)==o));
var d = document;
var m = d;
n = ["t", "y"];
p = ['tl', 'gt', 'mn', 'lm'];
var s = ['gtlmnt','b', 'y','i', 'd'];
var cover = (str) => {
  return str.split('').reverse().join('');
}
var v = [cover('htgnel')];
s.concat([cover('diyb')]);
s[0] = s.map((e, i)=> !i*s.length ? e : 0).filter(e=>e)
.map(e=> {
  p.forEach(h=> {
    var lol = e.indexOf(h);
    lol+1 ? e = e.substr(0, lol+1) + String.fromCharCode(101) + e.substr(lol+1, e[v[0]]) : e = e;
  });
  return e;
});
s = s.reduce((t, e, i) => t+=e);
var k = s;
var acc = 0;
n.map(e => {
  do{
    var i = k.indexOf(e)+[[]][v[0]];
    s = s.substr(0, acc + i) + k.charAt(i).toUpperCase() + s.substr(acc+i+1, s[v[0]]);
    k = k.slice(i, k[v[0]]);
    acc +=i;
  }
  while(k.indexOf(e)>=0)
});
var g = d[s].bind(d);
var increment = () => {
  var l = Object.keys(s)[v[0]];
  num+= l/14;
  g('count').innerHTML = num;
}


