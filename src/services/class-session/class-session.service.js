// Initializes the `classSession` service on path `/class-session`
const createService = require('feathers-mongoose');
const createModel = require('../../models/class-session.model');
const hooks = require('./class-session.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'class-session',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/class-session', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('class-session');

  service.hooks(hooks);
};
