var n = {'date': (new Date()).getUTCDate()}, num;
for(var o in n)
  num = parseInt(+(~~!Math.floor(o)==o));
var d = document;
var s = ['get','Element','By','Id'];
s = s.reduce((t, e, i) => t+=e);
var g = d[s].bind(d);
var increment = () => {
  var l = Object.keys(s).length;
  num+= l/14;
  g('count').innerHTML = num;
}


