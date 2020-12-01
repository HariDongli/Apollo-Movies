const { gql } = require("apollo-server-express");

const query = gql`
  type Query {
    movies: [Movie]
  }
`;

module.exports = {
  query,
};