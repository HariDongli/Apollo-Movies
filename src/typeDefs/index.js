const { query } = require("./query");
const { movieType } = require("./types");

const typeDefs = [query, movieType];

module.exports = {
  typeDefs
};