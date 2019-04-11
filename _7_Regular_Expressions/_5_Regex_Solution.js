class _7_5_ {
  constructor() { 
    this.poem = `
    The power of a gun can kill
    and the power of fire can burn
    the power of the wind can chill and the power of a mind can learn
    the power of anger can rage
    inside until it tears u apart
    but the power of a smile
    especially yours can heal a frozen heart`; 
    //this.Run()
  }

  Run () {
    let msg = this.poem
    console.log("7.5. Regex Solution")
    let powers = this.powers();
    console.log(powers);
  }

  *powers(poem) {
    //var re = /(?<=power of )(?<thing>(?:a )?\w+).*?(?<=can )(?<verb>\w+)/gs;

    //var re = /(?<=power of )(?<thing>(?:a )?\w+).*?(?<=can )(?<verb>\w+)/gs;

    var match;
    while (match = re.exec(poem)) {
      let {
        groups: {
          thing,
          verb
        }
      } = match;
      yield `${thing}: ${verb}`;
    }
  }

}