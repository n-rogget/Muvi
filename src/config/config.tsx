import { MovieData, GenreData, MovieInfo } from "../data/data";

export const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTMyMDJmOWVhY2U4MTQ1YjFiMDZkNzVhYjgwMTA3NSIsInN1YiI6IjY1MjU5MDhiMGNiMzM1MTZmNjNiZDdkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0JUyouktibpXNuSwTQrqu8H-iXYCTXw7eOhE4mBRe18'
export const getMovies = (
  page: number,
  filteredMovies: number,
  initial: string,
  final: string,
  sortBy: string
): Promise<MovieData[]> =>
  new Promise((resolve, reject) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: API_KEY
      }
    };
    console.log(filteredMovies)
    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es&page=${page}&primary_release_date.gte=${initial}&primary_release_date.lte=${final}&sort_by=popularity.desc&with_genres=${filteredMovies > 0 ? filteredMovies : "27||53"
      }`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        // Array de movies de la API
        let movies: MovieData[] = response?.results;
        
        if (sortBy === "old") {
          movies = orderOld(movies);
        }
       
        else if  (sortBy === 'new') {
          movies = orderNew(movies);
        }
        else {
          movies = sortDefault(movies)
        }
        resolve(movies);
      })
      .catch((err) => reject(err));
  });
const orderNew = (movies: MovieData[]): MovieData[] =>
  movies.sort((a, b) => {
    if (new Date(a.release_date) > new Date(b.release_date)) {
      return -1;
    } else if (new Date(a.release_date) < new Date(b.release_date)) {
      return 1;
    } else {
      return 0;
    }
  });
const orderOld = (movies: MovieData[]) =>
  movies.sort((a, b) => {
    if (new Date(a.release_date) < new Date(b.release_date)) {
      return -1;
    } else if (new Date(a.release_date) > new Date(b.release_date)) {
      return 1;
    } else {
      return 0;
    }
  });
const sortDefault = (movies: MovieData[]): MovieData[] => {
  // Usar el método sort para ordenar las películas por popularidad descendente
  return movies.sort((a, b) => b.popularity - a.popularity);
};


// Esta function obtiene los generos de la API y los retorna como un array de Generos
export const getGenres = (): Promise<GenreData[]> =>
  new Promise((resolve, reject) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: API_KEY
      }
    };
    fetch("https://api.themoviedb.org/3/genre/movie/list?language=es", options)
      .then((response) => response.json())
      .then((response) => resolve(response?.genres))
      .catch((err) => reject(err));
  });
 
  export const getMovieInfo = (movieId: number): Promise<MovieInfo> =>
  new Promise((resolve, reject) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: API_KEY
      }
    };
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=es-MX`, options)
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  });