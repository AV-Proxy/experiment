//----- EXAMPLE 1: -----//

function test1() {
  console.log( this.a );
}

var obj = {
  a: 2,
  test1: test1
};

obj.test1();

//----- EXAMPLE 2: -----//

function test2() {
  console.log( this.a );
}

var obj2 = {
  a: 42,
  test2: test2
};

var obj1 = {
  a: 2,
  obj2: obj2
};

obj1.obj2.test2();

//----- EXAMPLE 3: -----//

function test3() {
  console.log( this.a );
}

var obj = {
  a: 2,
  test3: test3
};

var aaa = obj.test3; 

var a = "global"; 

aaa(); // returns "global" instead of `2`, because `a` is defined in global scope

//----- EXAMPLE 4: -----//

function test4() {
  console.log( this.a );
}

function doTest4(fn) {
  fn(); 
}

var obj = {
  a: 2,
  test4: test4
};

var a = "global"; // `a` also property on global object

doTest4( obj.test4 ); // hence this returns "global" instead of `2`

//----- EXAMPLE 5: -----//

function test5() {
  console.log( this.a );
}

var obj = {
  a: 2,
  test5: test5
};

var a = "global"; // `a` also property on global object

setTimeout( obj.test5, 100 ); // returns "global"