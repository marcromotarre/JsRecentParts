class _4_2_ {
  constructor() { 
    this.defaults = {
      url: "http://some.base.url/api",
      method: "post",
      headers: [
        "Content-Type: text/plain",
        "headers1",
        "headers2",
        "headers3"
      ]
    };

    this.settings = {
      url: "http://some.other.url/",
      data: 42,
      callback: function(resp) { /*  .. */ },
      /*headers: [
        "headers4",
        "headers5"
      ]*/
      
    }
    this.Run()

  }

  Run () {
    console.log("4.2. Destructuring & Restructuring")
    console.log(this.defaults);

    //using underscore.js  --> https://underscorejs.org/#
    let extendVar = _.extend({}, this.defaults, this.settings);
    console.log(extendVar);
    console.log("Calling ajaxOptions")
    var ajaxOptions = this.ajaxOptions(this.settings);
    console.log('url:', ajaxOptions.url);
    console.log('method:', ajaxOptions.method);
    console.log('data:', ajaxOptions.data);
    console.log('callback:', ajaxOptions.callback);
    console.log('headers:', ajaxOptions.headers);
    console.log('headers0:', ajaxOptions.headers0);
    console.log('otherHeaders:', ajaxOptions.otherHeaders);


  }

  ajaxOptions ({
    url = "http://some.base.url/api",
    method = "post",
    data,
    callback,
    headers: [
      headers0 = "Content-Type: text/plain",
      ...otherHeaders
    ] = []

  } = {}) {
    return {
      url, method, data, callback, 
      headers: [ 
        headers0,
        ...otherHeaders
      ]
    };
  }

}