var num = 0;
var d = document;
var s = ['get','Element','By','Id'];
s = s.reduce((t, e, i) => t+=e);
var g = d[s].bind(d);
var increment = () => {
  var l = Object.keys(s).length;
  num+= l/14;
  g('count').innerHTML = num;
}


