const assert = require('assert')
const feathers = require('@feathersjs/feathers')
const validateBirthdate = require('../../src/hooks/validate-birthdate')

describe("'validate-birthdate' hook", () => {
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
        create: validateBirthdate()
      }
    })
  })

  it('makes birthdate with midnight UTC time', async () => {
    const user = { _id: 'test' }
    const params = { user }
    const student = await app.service('students').create(
      {
        chineseName: '范冰冰',
        birthdate: '2012-04-23T18:25:43.511Z'
      },
      params
    )
    assert.equal(student.chineseName, '范冰冰')
    assert.equal(student.birthdate, '2012-04-23T00:00:00Z')
  })
})
