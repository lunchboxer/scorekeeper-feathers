const assert = require('assert')
const feathers = require('@feathersjs/feathers')
const autoPinyin = require('../../src/hooks/auto-pinyin')

describe("'auto-pinyin' hook", () => {
  let app

  beforeEach(() => {
    app = feathers()

    app.use('/dummy', {
      async get (id) {
        return { id }
      }
    })

    app.service('dummy').hooks({
      before: autoPinyin()
    })
  })

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test')

    assert.deepEqual(result, { id: 'test' })
  })
})
