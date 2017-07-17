var n = {'date': (new Date()).getUTCDate()}, num;
for(var o in n)
  num = parseInt(+(~~!Math.floor(o)==o));
var d = document;
var m = d;
n = ["t", "y"];
p = ['tl', 'gt', 'mn', 'lm'];
var s = ['gtlmgnltttn','bybiydbyi']
.map(e=>e.split('').filter((j, i, g)=>g.indexOf(j)==i).join().replace(/,/g,''))
.reduce((t, e, i) => {
  t.push(e);
  return t;
}, []);
var cover = (str) => {
  return str.split('').reverse().join('');
}
var v = [cover('htgnel')];
s.concat([cover('diyb')]);
s[0] = s.map((e, i)=> !i*s.length ? e : 0).filter(e=>e)
.map(e=> {
  p.forEach(h=> {
    var lol = e.indexOf(h)+1;
    lol ? e = e.substr(0, lol) + String.fromCharCode(101) + e.substr(lol, e[v[0]]) : e = e;
  });
  return e;
}) + 't';
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


