console.log(" --------------  Object Destructuring Example 2  --------------")

function data() {
  return { b: 2, c: 3, d: 4 };
}

var {
  b: second,
  a: first,
  ...third
} = data();

console.log(first, second, third);

console.log('');
console.log('');