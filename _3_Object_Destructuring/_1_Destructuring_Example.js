console.log(" --------------  Object Destructuring Example  --------------")

function data() {
  return { a: 1, c: 3, d: 4 };
}

var {
  b: second = 42,
  a: first,
  c: third,
  d: fourth,
  e: fifth
} = data();

console.log(first, second, third, fourth, fifth);

console.log('');
console.log('');