console.log(" --------------  Destructuring Declarative  --------------")

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


console.log(firstName,firstEmail)
console.log(secondName,secondEmail)


console.log("")
console.log("")

