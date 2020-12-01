const { gql } = require("apollo-server-express");

const movieType = gql`
  type Movie {
    title: String
    director: String
  }
`;

module.exports = {
  movieType,
};