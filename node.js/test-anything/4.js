var repeat = require(process.argv[2]);
var test = require('tape');

test('repeat', function(t) {
  t.plan(4);
  repeat(4, function() { t.pass('callback called'); });
});
