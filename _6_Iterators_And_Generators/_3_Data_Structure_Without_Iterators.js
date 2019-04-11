class _6_3_ {
  constructor() { 
    this.Run()
  }

  Run () {
    console.log("6.3. Data Structure without Iterators")

    //object does not have an iterator
    var obj = {
      a: 1,
      b: 2,
      c: 3
    };

    /*for (let v of obj) {
      console.log(v);
    }*/
    //TypeError!


    //we should create our own iterator
    var obj2 = {
      a: 1,
      b: 2,
      c: 3,
      [Symbol.iterator]: function() {
        var keys = Object.keys(this);
        var index = 0;
        return {
          next: () =>
            (index < keys.length) ?
              { done: false, value: obj2[[keys[index++]]]} : 
              { done: true, value: undefined}
        };
      }
    }
    var it = obj2[Symbol.iterator]();
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(...obj2)


  }

}