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
 */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

const rootSchema = require('./rootSchema');
const rootResolver = require('./rootResolver');

/**
 * Module variables.
 * @private
 */
const app = express();
const graphQlPath = '/graphql';

/**
 * Added cors to express middleware
 */
app.use(cors());

/**
 * Create new ApolloServer instance
 */
const server = new ApolloServer({
  typeDefs: rootSchema,
  resolvers: rootResolver,
});

server.applyMiddleware({ app, path: `${graphQlPath}` });

/**
 * Connect to mongoDB and then start the server
 */
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@cluster-cxxw1.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`,
    { useNewUrlParser: true }
  )
  .then(() => {
    // Start up the server and listening to port
    app.listen({ port: 4000 }, () =>
      console.log(`🚀 Server ready at http://localhost:4000${graphQlPath}`)
    );
  })
  .catch(err => {
    console.log(err);
  });
