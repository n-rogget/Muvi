import { MovieData, GenreData } from "../data/data";

  export const getMovies = (options: { page: number; genreId?: number }): Promise<MovieData[]> =>
  new Promise((resolve, reject) => {
    const { page, genreId } = options;
    const requestOptions = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTMyMDJmOWVhY2U4MTQ1YjFiMDZkNzVhYjgwMTA3NSIsInN1YiI6IjY1MjU5MDhiMGNiMzM1MTZmNjNiZDdkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0JUyouktibpXNuSwTQrqu8H-iXYCTXw7eOhE4mBRe18'
      }
    };
    let url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es&page=${page}&sort_by=popularity.desc&with_genres=27%7C53`
    if (genreId) {
      url += `&with_genres=${genreId}`;
    }

    fetch(
    url,      requestOptions
    )
      .then((response) => response.json())
      .then((response) => resolve(response?.results))
      .catch((err) => reject(err));
  });


// Esta function obtiene los generos de la API y los retorna como un array de Generos
export const getGenres = (): Promise<GenreData[]> =>
  new Promise((resolve, reject) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTMyMDJmOWVhY2U4MTQ1YjFiMDZkNzVhYjgwMTA3NSIsInN1YiI6IjY1MjU5MDhiMGNiMzM1MTZmNjNiZDdkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0JUyouktibpXNuSwTQrqu8H-iXYCTXw7eOhE4mBRe18'
      }
    };
    fetch("https://api.themoviedb.org/3/genre/movie/list?language=es", options)
      .then((response) => response.json())
      .then((response) => resolve(response?.genres))
      .catch((err) => reject(err));
  });



