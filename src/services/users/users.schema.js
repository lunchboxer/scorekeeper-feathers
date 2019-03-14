// Define the Feathers schema for service `users`. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
  // !<DEFAULT> code: schema_header
  title: 'Users',
  description: 'Users database.',
  // !end
  // !code: schema_definitions
  fakeRecords: 4,
  // !end

  // Required fields.
  required: [
    // !code: schema_required
    'username'
    // !end
  ],
  // Fields with unique values.
  uniqueItemProperties: [
    // !code: schema_unique
    'username'
    // !end
  ],

  // Fields in the model.
  properties: {
    // !code: schema_properties
    username: { minLegth: 2, maxLength: 30, faker: 'internet.userName' },
    firstName: { minLength: 2, maxLength: 30, faker: 'name.firstName' },
    lastName: { minLength: 2, maxLength: 30, faker: 'name.lastName' },
    password: { faker: { exp: 'ctx.hashPassword("secret")' } },
    roleId: { type: 'ID', faker: { fk: 'roles:random' } }
    // !end
  }
  // !code: schema_more // !end
}

// Define optional, non-JSON-schema extensions.
let extensions = {
  // GraphQL generation.
  graphql: {
    // !code: graphql_header
    name: 'User',
    service: {
      sort: { _id: 1 }
    },
    // sql: {
    //   sqlTable: 'Users',
    //   uniqueKey: '_id',
    //   sqlColumn: {
    //     __authorId__: '__author_id__',
    //   },
    // },
    // !end
    discard: [
      // !code: graphql_discard // !end
    ],
    add: {
      // !<DEFAULT> code: graphql_add
      // __author__: { type: '__User__!', args: false, relation: { ourTable: '__authorId__', otherTable: '_id' } },
      // !end
    }
    // !code: graphql_more // !end
  }
}

// !code: more // !end

let moduleExports = {
  schema,
  extensions
  // !code: moduleExports // !end
}

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
