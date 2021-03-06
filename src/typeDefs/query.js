const { gql } = require("apollo-server-express");

const query = gql`
  type Query {
    movies(keyword: String, page: Int): Movies
    movieDetail(id: ID!): MovieDetail
  }
`;

module.exports = {
  query,
};