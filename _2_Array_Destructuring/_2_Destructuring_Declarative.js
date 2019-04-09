console.log(" --------------  Destructuring Declarative  --------------")

var [
  {
    name: firstName,
    email: firstEmail = "nobody@none.tld"
  },
  {
    name: secondName,
    email: secondEmail = "nobody@none.tld"
  }
] = getSomeRecords();

var tmp = getSomeRecords();



var first = tmp[0];
var second = tmp[1];

console.log(tmp)

console.log("")
console.log("")

