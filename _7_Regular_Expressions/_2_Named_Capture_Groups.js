class _7_2_ {
  constructor() { 
    this.Run()
  }

  Run () {
    console.log("7.2. Named Capture Groups")

    var msg = "Hello World"

    console.log(msg.match(/.(l.)/)) //  ["ell", "ll"]
    console.log(msg.match(/([jkl])o Wor\1/)) // ["lo Worl", "l"]
    console.log(msg.match(/(?<cap>l.)/).groups) // {cap: "ll"}
    console.log(msg.match(/(?<cap>[jkl])o Wor\k<cap>/)) // ["lo Worl", "l"]

    console.log(msg.replace(/(?<cap>l.)/g,"-$<cap>-")) //He-ll-o Wor-ld-
    console.log(msg.replace(/(?<cap>l.)/g,function re(...args) {
      var [,,,,{ cap }] = args;
      return cap.toUpperCase();
    })) // HeLLo WorLD



  }

}