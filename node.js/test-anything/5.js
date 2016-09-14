var test = require('tape');
var feedCat = require(process.argv[2]);

test('yum', function(t) {
  t.equal(feedCat(), 'yum');
  t.throws(function() {
    feedCat('chocolate');
  });
  t.end();
});
