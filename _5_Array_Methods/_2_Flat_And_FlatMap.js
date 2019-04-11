class _5_2_ {
  constructor() { 
    this.Run();
  }

  Run () {

    //Flat
    console.log("5.2. Flat & FlatMap")
    
    var nestedValues = [ 1, [2, 3], [[]], [4, [5] ], 6];
    
    nestedValues.flat(0); // [ 1, [2, 3], [[]], [4, [5] ], 6]
    console.log(nestedValues.flat(0));
  
    nestedValues.flat(/*default:1*/) // [ 1, 2, 3, [], 4, [ 5 ], 6 ]
    console.log(nestedValues.flat());

    nestedValues.flat(2); // [ 1, 2, 3, 4, 5, 6 ]
    console.log(nestedValues.flat(2)); 

    nestedValues.flat(3); // [ 1, 2, 3, 4, 5, 6 ]
    console.log(nestedValues.flat(3)); 

    
    //FlatMap
    let result1 = [1, 2, 3].map(function tuples(v) {
      return [ v * 2, String(v * 2) ];
    });
    // [ [2, "2"], [4, "4"], [6, "6"] ]
    console.log(result1);

    let result2 = [1, 2, 3].map(function tuples(v) {
      return [ v * 2, String(v * 2) ];
    }).flat();
    //[ 2, "2", 4, "4", 6, "6" ]
    console.log(result2);

    let result3 = [1, 2, 3].flatMap(function tuples(v) {
      return [ v * 2, String(v * 2) ];
    });
    //[ 2, "2", 4, "4", 6, "6" ]
    console.log(result3);

    let result4 = [1, 2, 3, 4, 5, 6].map(function doubleEvens(v) {
      if (v % 2 == 0) {
        return [v, v * 2];
      }
      else {
        return [];
      }
    });
    //[ [], [2, 4], [], [4, 8], [], [6, 12] ]
    console.log(result4);

    let result5 = [1, 2, 3, 4, 5, 6].flatMap(function doubleEvens(v) {
      if (v % 2 == 0) {
        return [v, v * 2];
      }
      else {
        return [];
      }
    });
    //[ 2, 4, 4, 8, 6, 12 ]
    console.log(result5);

  }

}