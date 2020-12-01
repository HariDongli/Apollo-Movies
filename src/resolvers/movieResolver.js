const {viewCountService, searchCountService} = require("../services/countService");

const movieResolver = {
  Query: {
    movies: async (_source,  _args, { dataSources }) => {
      let vc = 1;
      if(_args.keyword){
        // update count/ fetch count
       vc =  searchCountService(_args.keyword);
      }
      const moviesList = await dataSources.moviesAPI.getMovies(_args.keyword, _args.page);
      moviesList["searchCount"] = vc;
      return {movie: moviesList.results, ...moviesList};
    },
    
    movieDetail: async(_source, _args, {dataSources})=>{
      let vc = 1;
      if(_args.id){
        // update count/ fetch count
       vc =  viewCountService(_args.id);
      }
      const movieDetail = await dataSources.moviesAPI.getMovieDetails(_args.id);
      // console.log(movieDetail)
      movieDetail["viewCount"] = vc;
      return movieDetail
    }

  },
};

module.exports = {
    movieResolver,
}