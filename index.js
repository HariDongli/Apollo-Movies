const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { typeDefs } = require("./src/typeDefs");
let { resolvers } = require("./src/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });
 
const app = express();
app.use(express.json());
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);