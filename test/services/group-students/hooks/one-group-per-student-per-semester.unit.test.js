const assert = require('assert')
const oneGroupPerStudentPerSemester = require('../../../../src/services/group-students/hooks/one-group-per-student-per-semester')

describe('Test group-students/hooks/one-group-per-student-per-semester.unit.test.js', () => {
  // eslint-disable-next-line no-unused-vars
  let contextBefore,
    contextAfterPaginated,
    // eslint-disable-next-line no-unused-vars
    contextAfter,
    contextAfterMultiple

  beforeEach(() => {
    contextBefore = {
      type: 'before',
      params: { provider: 'socketio' },
      data: {}
    }

    contextAfter = {
      type: 'after',
      params: { provider: 'socketio' },
      result: {}
    }

    contextAfterMultiple = {
      type: 'after',
      params: { provider: 'socketio' },
      result: []
    }

    contextAfterPaginated = {
      type: 'after',
      method: 'find',
      params: { provider: 'socketio' },
      result: {
        data: []
      }
    }
    contextAfterPaginated.result.total =
      contextAfterPaginated.result.data.length
  })

  it('Hook exists', () => {
    assert(
      typeof oneGroupPerStudentPerSemester === 'function',
      'Hook is not a function.'
    )
  })

  it('???', () => {
    contextBefore.method = 'create'
    assert(true)

    /*
    oneGroupPerStudentPerSemester()(contextBefore)

    assert.deepEqual(contextBefore.data, {

    })
    */
  })
})
