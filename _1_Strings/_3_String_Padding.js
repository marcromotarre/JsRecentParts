console.log(" --------------  String Padding  --------------")

var str = "Hello";

//padStart
str.padStart( 5 ); //"Hello"

str.padStart( 8 ); //"   Hello"

str.padStart( 8, "*" ); // "***Hello"

str.padStart( 8, "12345" ); // "123Hello"

str.padStart( 8, "ab" ); // "abaHello"

//padEnd
str.padEnd( 5 ); //"Hello"

str.padEnd( 8 ); //"Hello   "

str.padEnd( 8, "*" ); // "Hello***"

str.padEnd( 8, "12345" ); // "Hello123"

str.padEnd( 8, "ab" ); // "Helloaba"


