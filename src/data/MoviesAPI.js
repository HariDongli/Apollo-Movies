
const { RESTDataSource,RequestOptions } = require('apollo-datasource-rest');

class MoviesAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = 'https://api.themoviedb.org/3/';
    }
    
    willSendRequest(request) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`);
      }

    async getMovieDetails(id){
     return  this.get(`movie/${id}`);
    }
    async getMovies(keyword, page=1) {
      if(keyword && keyword.length>0)
        return this.get(`search/movie?query=${keyword}&page=${page}`);
      else
       return this.get(`trending/movie/day?page=${page}`);
      }
    
    // an example making an HTTP POST request
    async postMovie(movie) {
      return this.post(
        `search/movie`, // path
        movie, // request body
      );
    }
  
    // an example making an HTTP PUT request
    async newMovie(movie) {
      return this.put(
        `movies`, // path
        movie, // request body
      );
    }
  
    // an example making an HTTP PATCH request
    async updateMovie(movie) {
      return this.patch(
        `movies`, // path
        { id: movie.id, movie }, // request body
      );
    }
  
    // an example making an HTTP DELETE request
    async deleteMovie(movie) {
      return this.delete(
        `movies/${movie.id}`, // path
      );
    }
  }
  

  module.exports = {
    MoviesAPI
  }