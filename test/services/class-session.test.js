const assert = require('assert')
const app = require('../../src/app')

describe("'classSession' service", () => {
  it('registered the service', () => {
    const service = app.service('class-session')

    assert.ok(service, 'Registered the service')
  })
})
