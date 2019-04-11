class _6_2_ {
  constructor() { 
    this.Run()
  }

  Run () {
    console.log("6.2. Declarative Iterators")

    var str = "Hello";

    for(
      let it = str[Symbol.iterator](), v, result;
      (result = it.next()) && !result.done && 
        (v = result.value || true);
    ) {
      console.log(v);
    }
    // "H" "e" "l" "l" "o"

    var letters = [...str];
     // ["H", "e", "l", "l", "o"]
    console.log(letters);

  }

}