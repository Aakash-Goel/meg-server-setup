const { gql } = require('apollo-server-express');

const schema = gql`
  type Message {
    _id: ID!
    title: String!
  }

  input MessageInput {
    title: String!
  }

  extend type Query {
    messages: [Message!]!
  }

  extend type Mutation {
    createMessage(messageInput: MessageInput): Message
  }
`;

module.exports = schema;
