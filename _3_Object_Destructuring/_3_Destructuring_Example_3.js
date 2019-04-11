console.log(" --------------  Object Destructuring Example 3  --------------")

function data() {
  return { b: 2, c: 3, d: 4 };
}

var first, second;

({
  b: second,
  a: first
} = data());

console.log(first, second);

function data2() {
  return;
}

var first, second;

var {
  b: second,
  a: first
} = data2() || {};

console.log(first, second);
console.log('');
console.log('');

