class _6_5_ {
  constructor() { 
    this.numbers = {
      // ..
    }
    console.log("6.5. Iterator & Generator Exercise")

    //this.Run()
  }

  Run () {
    for (let num of this.numbers) {
      //should print 0..100 by 1s
      console.log(num)
    } 

    // should print 6..30 by 4s
    console.log("My lucky numbers are: ____")

    //Hint:
    // [...numbers[Symbol.iterator]( ?? )]
  }
}