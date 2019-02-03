
// Define the Feathers schema for service `attendances`. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
  // !<DEFAULT> code: schema_header
  title: 'Attendances',
  description: 'Attendances database.',
  // !end
  // !code: schema_definitions // !end

  // Required fields.
  required: [
    // !code: schema_required
    'status',
    'studentId',
    'sessionId',
    // !end
  ],
  // Fields with unique values.
  uniqueItemProperties: [
    // !code: schema_unique // !end
  ],

  // Fields in the model.
  properties: {
    // !code: schema_properties
    status: {
      enum: ['leftEarly', 'present', 'late', 'absent', 'lateLeftEarly'],
    },
    arrivedAt: { format: 'date-time' },
    studentId: { type: 'ID' },
    sessionId: { type: 'ID' },
    // !end
  },
  // !code: schema_more // !end
}

// Define optional, non-JSON-schema extensions.
let extensions = {
  // GraphQL generation.
  graphql: {
    // !code: graphql_header
    name: 'Attendance',
    service: {
      sort: { createdAt: -1 },
    },
    // sql: {
    //   sqlTable: 'Attendances',
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
    },
    // !code: graphql_more // !end
  },
}

// !code: more // !end

let moduleExports = {
  schema,
  extensions,
  // !code: moduleExports // !end
}

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
