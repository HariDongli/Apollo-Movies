
const movieResolver = {
  Query: {
    movies: () => [{"title": "Hello", director: "World"}, {"title": "Hello1", director: "World1"}],
  },
};

module.exports = {
    movieResolver,
}