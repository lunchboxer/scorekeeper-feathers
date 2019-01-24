const assert = require('assert')
const feathers = require('@feathersjs/feathers')
const logit = require('../../src/hooks/logit')

describe("'logit' hook", () => {
  let app

  beforeEach(() => {
    app = feathers()

    app.use('/dummy', {
      async get (id) {
        return { id }
      }
    })

    app.service('dummy').hooks({
      after: logit()
    })
  })

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test')

    assert.deepEqual(result, { id: 'test' })
  })
})
