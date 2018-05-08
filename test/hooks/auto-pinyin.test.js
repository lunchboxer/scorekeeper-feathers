const assert = require('assert')
const feathers = require('@feathersjs/feathers')
const autoPinyin = require('../../src/hooks/auto-pinyin')

describe("'auto-pinyin' hook", () => {
  let app

  beforeEach(() => {
    app = feathers()

    app.use('/students', {
      async create (data) {
        return data
      }
    })

    app.service('students').hooks({
      before: {
        create: autoPinyin()
      }
    })
  })

  it('auto-fills pinyin field on new student', async () => {
    const user = { _id: 'test' }
    const params = { user }
    const student = await app.service('students').create(
      {
        chineseName: '范冰冰'
      },
      params
    )
    assert.equal(student.chineseName, '范冰冰')
    assert.equal(student.pinyinName, 'Fànbīngbīng')
  })
})
