const { gql } = require("apollo-server-express");

const query = gql`
  type Query {
    movies(keyword: String, page: Int): Movies
    movieDetail(id: ID!): MovieDetail
    moviesList(keyword: String, page: Int): Movies
  }
`;

module.exports = {
  query,
};