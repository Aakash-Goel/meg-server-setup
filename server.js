const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const app = express();
app.use(cors());


const rootSchema = require('./rootSchema');
const rootResolver = require('./rootResolver');

const server = new ApolloServer({
  typeDefs: rootSchema,
  resolvers: rootResolver
});

const graphQlPath = server.graphqlPath || '/graphql';

server.applyMiddleware({ app, path: `${graphQlPath}` });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${graphQlPath}`)
);

