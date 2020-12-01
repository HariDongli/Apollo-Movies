# Apollo-Movies
1. Make sure docker installed in your system.(for runnig the docker image)
2. Build image -> docker build -t <your name>/<appname> (e.g, docker build -t apollo/movie)
3. Run the docker image -> docker run -p <public port>:<app port> <your name>/<appname> 
    (docker run -p 49160:8080 apollo/movie)
4. open url http://localhost:8000/graphql in the browser.




#query

  <!-- 
  {
      movieDetail(id: 768141){
       title
       vote_count
     overview
     viewCount
     } 
  movies(keyword: "Avengers Endgame" page: 1){
  movie{
    title
  }
    searchCount
  }
    }-->