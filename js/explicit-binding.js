//----- EXAMPLE 1: -----//

function aaa1() {
  console.log( this.a );
}

var obj1 = {
  a: 2
};

var bbb1 = function() {
  aaa1.call( obj1 );
};

bbb1(); // returns: 2
setTimeout( bbb1, 100 ); // returns: 2

// `bbb1` hard binds `this` of `aaa1` to `obj1`
// so that it cannot be overriden

bbb1.call( window ); // returns: 2

//-----EXAMPLE2: -----// 

function aaa2(something) {
  console.log( this.a, something );
  return this.a + something;
}

// simple `binder`
function bind(fn, obj2) {
  return function() {
    return fn.apply( obj2, arguments );
  };
}

var obj2 = {
  a: 2
};

var bbb2 = bind( aaa2, obj2 );

var b2 = bbb2( 3 ); // returns: 2 3
console.log( b2 ); // returns: 5

//----- EXAMPLE3: -----//
//-----'ES5' build-in utility `Function.prototype.bind` -----//

function aaa3(something) {
  console.log( this.a, something );
  return this.a + something;
}

var obj3 = {
  a: 2
};

var bbb3 = aaa3.bind( obj3 );

var b3 = bbb3( 3 ); // returns: 2 3
console.log( b3 ); // returns: 5

