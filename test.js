const test = require('ava');

test('some snapshots', t => {
  if (process.env.SKIP_ID) {
    t.snapshot.skip(null, {id: 'an id'});
  } else {
    t.snapshot(null, {id: 'an id'});
  }

  t.snapshot('one');
  t.snapshot('two');
});
