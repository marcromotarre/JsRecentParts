console.log(" --------------  Destructuring Imperative  --------------")

//Destructuring: decomposing a structure into its individual parts

var tmp = getSomeRecords();

var first = tmp[0];
var second = tmp[1];

var firstName = first.name;
var firstEmail = first.email !== undefined ? first.email : "nobody@none.tld";
console.log(firstName, firstEmail);

var secondName = second.name;
var secondEmail = second.email !== undefined ? second.email : "nobody@none.tld";
console.log(secondName, secondEmail);

function getSomeRecords() {
  return [
    {
      'name': "Marc",
      'email': "marcromotarre@gmail.com"
    },
    {
      'name': 'Laia'
    }
  ]
}


console.log("")
console.log("")

