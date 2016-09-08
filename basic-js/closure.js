// EXAMPLE 1:
function test1() {
  let a = 2;

  function test2() {
    console.log(a);
  }

  return test2;
}

let test3 = test1();
test3();

// EXAMPLE 2:
let fn;

function aaa() {
  let a = 2;

  function bbb() {
    console.log(a);
  }

  fn = bbb;
}

function ccc() {
  fn();
}

aaa();
ccc();

// EXAMPLE 3:
function wait(msg) {
  setTimeout(function timer() {
    console.log(msg);
  }, 1000 );
}

wait("Hello, closure!");

// EXAMPLE 4:
function Module() {
  let something = "cool";
  let another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join("!"));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
}

let foo = Module();

foo.doSomething();
foo.doAnother();
