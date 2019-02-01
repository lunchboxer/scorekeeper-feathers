const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const oneGroupPerSemPerStudent = require('../../src/hooks/one-group-per-sem-per-student');

describe('\'one-group-per-sem-per-student\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: oneGroupPerSemPerStudent()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
