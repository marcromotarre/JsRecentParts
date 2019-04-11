class _4_1_ {
  constructor() { 
    this.Run()
  }

  
  Run () {
    console.log("4.1. Named Arguments")
    this.lookupRecord( {id: 42})
  }
/*
  lookupRecord(store = "person-records", id = -1) {
    // ..
  }
*/

  lookupRecord({
    store = "person-records", 
    id = -1
  }) {
    console.log('store: ', store)
    console.log('id: ', id)

  }

  

}