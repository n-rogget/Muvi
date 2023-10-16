import { MovieData } from "../data/data";

  export const getMovies = (page: number): Promise<MovieData[]> =>
  new Promise((resolve, reject) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTMyMDJmOWVhY2U4MTQ1YjFiMDZkNzVhYjgwMTA3NSIsInN1YiI6IjY1MjU5MDhiMGNiMzM1MTZmNjNiZDdkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0JUyouktibpXNuSwTQrqu8H-iXYCTXw7eOhE4mBRe18'
      }
    };

    fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=horror`,
      options
    )
      .then((response) => response.json())
      .then((response) => resolve(response?.results))
      .catch((err) => reject(err));
  });