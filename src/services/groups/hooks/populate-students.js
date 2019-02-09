module.exports = function () {
  return async context => {
    const { method, result, app } = context
    const groups = method === 'find' ? result.data : [result]
    await Promise.all(
      groups.map(async group => {
        group.students = []
        const groupStudents = await app
          .service('group-students')
          .find({ query: { groupId: group._id } })
        await Promise.all(
          groupStudents.data.map(async groupStudent => {
            const student = await app
              .service('students')
              .get(groupStudent.studentId)
            group.students.push(student)
          })
        )
      })
    )
    return context
  }
}
