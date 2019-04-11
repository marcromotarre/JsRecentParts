console.log(" --------------  Object Destructuring ObjectParameters  --------------")

function data({
  a,
  b
} = {}) {
  // ..
}
data({ a: 1, b: 2, x: 42})

//Nested Object Destructuring

console.log('Nested Object Destructuring');

var obj = {
  a:1,
  b: {
    x:2
  },
  c: 3
};

var {
  a,
  b,
  b: Q,
  b: {
    x: W
  },
  c
} = obj;

console.log('a = ', a);
console.log('b = ', b);
console.log('c = ', c);
console.log('Q = ', Q);
console.log('W = ', W);

//Nested Array Destructuring
console.log('Nested Array Destructuring');

var obj = {
  a:1,
  b: [500, 5000],
  c: 3
};

var {
  a,
  b,
  b: [
    W, 
    Y
  ],
  c
} = obj;

console.log('a = ', a);
console.log('b = ', b);
console.log('c = ', c);
console.log('Q = ', W);
console.log('W = ', Y);



console.log('');
console.log('');

