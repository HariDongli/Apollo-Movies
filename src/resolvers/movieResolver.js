
const movieResolver = {
  Query: {
    movies: async (_source,  _args, { dataSources }) => {
      const moviesList = await dataSources.moviesAPI.getMovies(_args.keyword, _args.page);
      return moviesList.results;
    },
    movieDetail: async(_source, _args, {dataSources})=>{
      const movieDetail = await dataSources.moviesAPI.getMovieDetails(_args.id);
      console.log(movieDetail)
      return movieDetail
    }
    // mostViewedMovies: async (_source, _args, { dataSources }) => {
    //   return dataSources.moviesAPI.getMostViewedMovies();
    // },
    // favorites: async (_source, _args, { dataSources }) => {
    //   return dataSources.personalizationAPI.getFavorites();
    // },
  },
};

module.exports = {
    movieResolver,
}