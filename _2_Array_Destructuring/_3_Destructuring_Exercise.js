console.log(" --------------  Destructuring Exercise  --------------")

function data() {
  return [1,2,3,['a','b','c','d'],4,5,6,7,8,9];
}

var tmp = data();
var o = {};
[ 
  o.first,
  , //dont care about number 2
  o.third,
  ...o.fourth
] = tmp;

console.log(o);

var x = 10;
var y = 20;

[y,x] = [x,y];

console.log(`x: ${x} & y: ${y}` );

console.log();
console.log();