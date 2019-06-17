/**
 * index.js
 *
 * Import/Export Message graphQL schema and resolvers
 *
 */

'use strict';

const messageSchema = require('./schema');
const messageResolvers = require('./resolvers');

module.exports = {
  messageSchema,
  messageResolvers,
};
