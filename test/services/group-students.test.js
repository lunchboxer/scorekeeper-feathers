const assert = require('assert')
const app = require('../../src/app')

describe('\'groupStudents\' service', () => {
  it('registered the service', () => {
    const service = app.service('group-students')

    assert.ok(service, 'Registered the service')
  })
})
