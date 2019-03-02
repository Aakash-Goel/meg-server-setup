const { gql } = require('apollo-server-express');

const schema = gql`
  extend type Query {
    hello: String
  }
`;

module.exports = schema;
