const express = require('express');
const {MoviesAPI} = require("./src/data/MoviesAPI");
const { ApolloServer, gql } = require('apollo-server-express');
const { typeDefs } = require("./src/typeDefs");
let { resolvers } = require("./src/resolvers");

const server = new ApolloServer({ typeDefs, resolvers,
  dataSources: () => {
    return {
      moviesAPI: new MoviesAPI()
    };
  },
  context: () => {
    return {
      token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGE1MGI1ZTc0OGU5MDBhZTNjZDE5N2I2MTU5ZmNhNiIsInN1YiI6IjVmYzVlMTRmZDEzMmQ2MDA0MTFkYjIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yx78HwZ5Z10Ui5RkwLZMPcMctYKlprRdOPR2aazRqaI',
    };
  }, });
 
const app = express();
app.use(express.json());
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);