var fancify = require(process.argv[2]);
var test = require('tape');

test('ok', function(t) {
  t.deepEqual(fancify('Hello'), '~*~Hello~*~', 'wraps a string in ~*~');
  t.deepEqual(fancify('Hello', true), '~*~HELLO~*~', 'optionally makes a string ALLCAPS');
  t.deepEqual(fancify('Hello', false, '!'), '~!~Hello~!~', 'optionally allows to set a character');
  t.end();
});
