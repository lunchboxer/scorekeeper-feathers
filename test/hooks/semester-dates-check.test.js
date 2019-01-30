const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const semesterDatesCheck = require('../../src/hooks/semester-dates-check');

describe('\'semester-dates-check\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: semesterDatesCheck()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
