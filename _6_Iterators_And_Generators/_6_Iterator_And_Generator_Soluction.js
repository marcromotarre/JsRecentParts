class _6_6_ {
  constructor() { 
    this.numbers = this.NumberGenerator();
    this.Run()
  }

  Run () {
    console.log("6.6. Iterator & Generator Solution")
    console.log([...this.numbers])
    
    // should print 6..30 by 4s
    this.numbers = this.NumberGenerator(6, 30, 4);
    console.log(`My lucky numbers are: ${[...this.numbers]}`)
    
    //this is how teacher has done it
    var numbers2 = {
      *[Symbol.iterator] ({
        start = 0,
        end = 100,
        step = 1
      } = {}) {
        for(var i = start; i <= end; i+= step) {
          yield i;
        }
      }
    }
  
    console.log(`TEACHER SOLUTION: My lucky numbers are: " ${[...numbers2[Symbol.iterator]({
      start: 10,
      end: 20,
      step: 2
    })]}`)

    console.log(`TEACHER SOLUTION: My lucky numbers are: " ${[...numbers2[Symbol.iterator]({
      start: 10,
      end: 15
    })]}`)
  
  
  }

  *NumberGenerator (init = 0, end = 100, step = 1) {
    for(var i = init; i <= end; i+= step) {
      yield i;
    }
    return end+1;
  }
}