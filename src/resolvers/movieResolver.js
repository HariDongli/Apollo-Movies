const {ViewCount} = require("../models/viewCount");

const movieResolver = {
  Query: {
    movies: async (_source,  _args, { dataSources }) => {
     

      const moviesList = await dataSources.moviesAPI.getMovies(_args.keyword, _args.page);
      return moviesList.results;
    },
    movieDetail: async(_source, _args, {dataSources})=>{
      let vc = 1;
      if(_args.id){
        // update count
        //  fetch count
        const val = await ViewCount.findAll({
          where: {
            movieId: _args.id
          }
        });
        let task ;
        if(val.length==0){
          task =  ViewCount.build({movieId: _args.id})
          await task.save();
        }else{
          vc = val[0].dataValues.count+1 
          await ViewCount.update({
                count: val[0].dataValues.count+1
              }, {
                where: {
                  movieId: _args.id
                }
              });
        }
    
      
      }
      const movieDetail = await dataSources.moviesAPI.getMovieDetails(_args.id);
      // console.log(movieDetail)
      movieDetail["viewCount"] = vc;
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