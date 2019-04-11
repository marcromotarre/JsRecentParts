class _5_1_ {
  constructor() { 
    this.Run();
  }

  Run () {
    console.log("5.1. Find, FindIndex & Includes")
    var arr = [ { a:1 }, { a:2 } ];

    var findResult = arr.find(function match(v){
      return v && v.a > 10;
    });
    console.log('find: ', findResult)

    var findIndexResult = arr.findIndex(function match(v){
      return v && v.a > 10;
    })
    console.log('findIndex: ', findIndexResult);

    var arr2 = [10, 20, NaN, 30, 40, 50];
    console.log(arr2.indexOf( 30 ) != -1);
    console.log(arr2.indexOf( 20 ));
    console.log(arr2.indexOf( NaN ));

  }

}