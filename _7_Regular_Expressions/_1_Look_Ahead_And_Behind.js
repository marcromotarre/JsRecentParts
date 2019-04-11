class _7_1_ {
  constructor() { 
    this.Run()
  }

  Run () {
    console.log("7.1. Look ahead and Behind")

    //Look ahead
    console.log("Look Ahead")
    var msg = "Hello World";
    console.log(msg.match(/(l.)/g)); // ["ll", "ld"] //finds l chracter and return this and next character
    console.log(msg.match(/(l.)$/g)); // ["ld"]
    console.log(msg.match(/(l.)(?=o)/g)); // ["ll"]
    console.log(msg.match(/(l.)(?!o)/g)); // ["lo", "ld"]

    //Look behind
    console.log("Look Behind")
    console.log(msg.match(/(?<=e)(l.)/g)); // ["ll"]
    console.log(msg.match(/(?<!e)(l.)/g)); // ["lo", "ld"]

  }

}