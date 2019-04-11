class _6_1_ {
  constructor() { 
    this.Run()
  }

  Run () {
    console.log("6.1. Iterators")

    var str = "Hello";
    var world = ["W", "o", "r", "l", "d"];

    var it1 = str[Symbol.iterator]();
    var it2 = world[Symbol.iterator]();

    console.log(it1.next()); // { value: "H", done: false }
    console.log(it1.next()); // { value: "e", done: false }
    console.log(it1.next()); // { value: "l", done: false }
    console.log(it1.next()); // { value: "l", done: false }
    console.log(it1.next()); // { value: "o", done: false }
    console.log(it1.next()); // { value: undefined, done: true }

    console.log(it2.next()); // { value: "W", done: false }
    console.log(it2.next()); // { value: "o", done: false }
    console.log(it2.next()); // { value: "r", done: false }
    console.log(it2.next()); // { value: "l", done: false }
    console.log(it2.next()); // { value: "d", done: false }
    console.log(it2.next()); // { value: undefined, done: true }

  }

}