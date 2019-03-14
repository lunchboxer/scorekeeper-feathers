// Define the Feathers schema for service `students`. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
  // !<DEFAULT> code: schema_header
  title: 'Students',
  description: 'Students database.',
  // !end
  // !code: schema_definitions
  fakeRecords: 40,
  // !end

  // Required fields.
  required: [
    // !code: schema_required // !end
  ],
  // Fields with unique values.
  uniqueItemProperties: [
    // !code: schema_unique // !end
  ],

  // Fields in the model.
  properties: {
    // !code: schema_properties
    chineseName: {
      minLength: 1,
      maxLength: 10,
      // pattern: '/^\p{Unified_Ideograph}+$/u', // eslint-disable-line no-useless-escape
      pattern: '^[\u4e00-\u9fa5]+$'
    },
    pinyinName: {
      minLength: 2,
      pattern: '^[a-zA-Zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜs\']+$'
    },
    englishName: { minLength: 2, maxLength: 30, faker: 'name.firstName' },
    birthdate: { format: 'date' },
    gender: { enum: ['F', 'M'] }
    // !end
  }
  // !code: schema_more // !end
}

// Define optional, non-JSON-schema extensions.
let extensions = {
  // GraphQL generation.
  graphql: {
    // !code: graphql_header
    name: 'Student',
    service: {
      sort: { _id: 1 }
    },
    // sql: {
    //   sqlTable: 'Students',
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
