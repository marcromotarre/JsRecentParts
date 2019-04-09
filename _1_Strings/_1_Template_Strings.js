console.log(" --------------  Template Strings  --------------")


var name = "Kyle Simpson";
var email = "getify@gmail.com";
var title = "Teacher";

var msg = "Welcome to this class! Your " + title + " is " + name + ", contact: " + email + ".";
var msg2 = `Welcome to this class! Your ${title} is ${name}, contact: ${email}.`;

console.log(msg);
console.log(msg2);

var amount = 12.3;
var msg3 = `The total for your order is ${formatCurrency('$',amount)}`;
console.log(msg3);


var v = 42;
var o = { a: 1, b: [2,3,4] };

logger`This is my value ${v} and another: ${o}`

try {
  nothing();
}
catch(err) {
  logger`Caught: ${err}`;
}


function formatCurrency(strings,...value) {
  var str = "";
  for (let i = 0; i < strings.length; i++) {
    if(i > 0) {
      if(typeof values[i-1] == "number") {
        str += `${values[i-1].toFixed(2)}`;
      }
      else {
        str += values[i-1];
      }
    }
    str += strings[i]
  }
  return str;
}

function logger(strings, ...values) {
  var str = "";
  for(let i = 0; i < strings.length; i++) {
    if(i > 0) {
      if(values[i-1] && typeof values[i-1] == "object") {
        if(values[i-1] instanceof Error) {
          if(values[i-1].stack) {
            str += values[i-1].stack;
            continue;
          }
        }
        else {
          try {
            str += JSON.stringify(values[i-1]);
            continue;
          }
          catch (err) {}
        }
      }
      str += values[i-1];
    }
    str += strings[i];
  }
  console.log(str);
  return str;
}

console.log("")
console.log("")
