const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const checkSessionEndsAfterStart = require('../../src/hooks/check-session-ends-after-start');

describe('\'checkSessionEndsAfterStart\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: checkSessionEndsAfterStart()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
