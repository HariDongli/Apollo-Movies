
const { RESTDataSource, RequestOptions } = require('apollo-datasource-rest');

class MoviesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3/';
  }

  willSendRequest(request) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getMovieDetails(id) {
    return this.get(`movie/${id}`);
  }
  async getMovies(keyword, page = 1) {
    if (keyword && keyword.length > 0)
      return this.get(`search/movie?query=${keyword}&page=${page}`);
    else
      return this.get(`trending/movie/day?page=${page}`);
  }

}


module.exports = {
  MoviesAPI
}