
const assert = require('assert')
const limitEntries = require('../../../../src/services/messages/hooks/limit-entries')

describe('Test messages/hooks/limit-entries.unit.test.js', () => {
  // eslint-disable-next-line no-unused-vars
  let contextBefore, contextAfterPaginated,
    // eslint-disable-next-line no-unused-vars
    contextAfter, contextAfterMultiple

  beforeEach(() => {
    contextBefore = {
      type: 'before',
      params: { provider: 'socketio' },
      data: {

      }
    }

    contextAfter = {
      type: 'after',
      params: { provider: 'socketio' },
      result: {

      }
    }

    contextAfterMultiple = {
      type: 'after',
      params: { provider: 'socketio' },
      result: [

      ]
    }

    contextAfterPaginated = {
      type: 'after',
      method: 'find',
      params: { provider: 'socketio' },
      result: {
        data: [

        ]
      }
    }
    contextAfterPaginated.result.total = contextAfterPaginated.result.data.length
  })

  it('Hook exists', () => {
    assert(typeof limitEntries === 'function', 'Hook is not a function.')
  })

  it('???', () => {
    contextBefore.method = 'create'
    assert(true)

    /*
    limitEntries()(contextBefore)

    assert.deepEqual(contextBefore.data, {

    })
    */
  })
})
