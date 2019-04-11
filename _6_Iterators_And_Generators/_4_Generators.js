class _6_4_ {
  constructor() { 
    this.Run()
  }

  Run () {
    console.log("6.4. Generators")

    var it = this.main();
    console.log(it.next()); // { value: 1, done: false }
    console.log(it.next()); // { value: 2, done: false }
    console.log(it.next()); // { value: 3, done: false }
    console.log(it.next()); // { value: 4, done: true }
    console.log([...this.main()])
  }

  *main() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
  }
}