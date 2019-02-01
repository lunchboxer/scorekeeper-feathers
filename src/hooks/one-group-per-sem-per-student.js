// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function () {
  return async context => {
    // first see if we are doing anything with groups otherwise return
    // if its a new student we don't care, no possible conflicts if we
    // make certain assumptions on the client side.

    // we can validate the create with array of bad groups later
    const group = context.data.$push && context.data.$push.groups
    if (!group) return context

    const currentGroups = await context.service.get(context.id, {
      query: {
        $populate: 'groups',
        $select: ['groups']
      }
    })
    if (!currentGroups.groups || currentGroups.groups.length === 0) {
      return context
    }

    const match = currentGroups.groups.find(existinggroup => {
      return existinggroup._id.toString() === group
    })
    console.log('match', match)
    if (match) {
      throw new Error(
        'Student already in ' + match.name + " class. Can't add twice."
      )
    }
    const semester = await context.app.service('groups').get(group)
    const semMatch = currentGroups.groups.find(existinggroup => {
      return existinggroup.semester.toString() === semester.semester.toString()
    })
    if (semMatch) {
      throw new Error(
        'Student already in ' + semMatch.name + ' class this semester.'
      )
    }
    return context
  }
}
