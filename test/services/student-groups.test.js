const assert = require('assert');
const app = require('../../src/app');

describe('\'studentGroups\' service', () => {
  it('registered the service', () => {
    const service = app.service('student-groups');

    assert.ok(service, 'Registered the service');
  });
});
