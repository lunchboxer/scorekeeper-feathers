const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const sanityCheckSessionDates = require('../../src/hooks/sanity-check-session-dates');

describe('\'SanityCheckSessionDates\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: sanityCheckSessionDates()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
