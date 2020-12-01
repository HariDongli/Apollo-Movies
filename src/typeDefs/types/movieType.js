const { gql } = require("apollo-server-express");

const movieType = gql`
  type Movie {
    id: Int!
    title: String
    original_language: String
    backdrop_path:String
  }
  type Movies {
    movie:[Movie]
    searchCount: Int
  }
  type MovieDetail {
    id: Int!
    title: String
    release_date: String
    overview: String
    vote_count: Int
    tagline: String
    status: String
    vote_average: String
    revenue: Int
    viewCount: Int
  }
`;

module.exports = {
  movieType,
};