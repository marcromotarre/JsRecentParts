class _7_3_ {
  constructor() { 
    this.Run()
  }

  Run () {
    console.log("7.3. Dotall Mode")
    var msg = `
    The quick brown fox
    jumps over the
    lazy dog`;

    console.log(msg.match(/brown.*over/)) //null

    console.log(msg.match(/brown.*over/s)) //brown fox\njumps over
  }

}