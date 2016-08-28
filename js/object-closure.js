var setAge = function (newAge) {
  this.age = newAge;
};

// bob:
var bob = { age: setAge };
bob.age(90);

// mark:
var mark = { age: setAge };
mark.age(1);

console.log(`mark age: ` + mark.age + `; bob age: ` + bob.age);
