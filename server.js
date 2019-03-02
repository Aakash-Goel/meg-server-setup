/**
 * server.js
 * Copyright (c) 2019-present, Aakash Goel
 * MIT Licensed
 *
 * This is the main file where server starts up
 *
 */

'use strict';

/**
 * Module dependencies.
 *
 */
const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const rootSchema = require('./rootSchema');
const rootResolver = require('./rootResolver');

/**
 * Module variables.
 * @private
 *
 */
const app = express();
const graphQlPath = '/graphql';

/**
 * Added cors to express middleware
 *
 */
app.use(cors());

/**
 * Create new ApolloServer instance
 *
 */
const server = new ApolloServer({
  typeDefs: rootSchema,
  resolvers: rootResolver,
});

server.applyMiddleware({ app, path: `${graphQlPath}` });

/**
 * Start server
 *
 */
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${graphQlPath}`)
);
