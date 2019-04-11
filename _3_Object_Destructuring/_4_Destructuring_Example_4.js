console.log(" --------------  Object Destructuring Example 4  --------------")

function dataExample4() {
  return { 
    a: 1, 
    b:{ 
      c: 3, 
      d: 4
    }
  };
}

var example4 = {
  a,
  b: {
    c,
    d
  },
  e: {
    f = 10,
    g = 20
  } = {}
} = dataExample4() || {};

console.log(example4);

console.log('');
console.log('');

