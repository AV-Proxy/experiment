//--------- EXAMPLE 1: ---------
function test1() {
  var a = 2;
  
  function test2() {
    console.log( a );
  }
  return test2;
}

var test3 = test1();
test3();
//------------------------------


//-------- EXAMPLE 2: ----------
var fn;

function aaa() {
  var a = 2;

  function bbb() {
    console.log( a );
  }
  fn = bbb;
}

function ccc() {
    fn();
}

aaa();
ccc();
//------------------------------


//--------- EXAMPLE 3: ---------
function wait(msg) {
  setTimeout( function timer() {
    console.log( msg );
  }, 1000 );
}

wait( "Hello, closure!" );
//------------------------------


//--------- EXAMPLE 4: ---------
function Module() {
  var something = "cool";
  var another = [1, 2, 3];

  function doSomething() {
    console.log( something );
  }

  function doAnother() {
    console.log( another.join( " ! " ) );
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
}

var foo = Module();

foo.doSomething(); 
foo.doAnother(); 
//------------------------------