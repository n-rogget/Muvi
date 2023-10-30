import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../config/config';
import { MovieData } from '../data/data';

export default function MovieView () {
  const { movieId } = useParams(); 
  const [movie, setMovie] = useState<MovieData | null>(null); 

  useEffect(() => {
    const options: RequestInit = { 
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_KEY,
      },
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=es`, options) 
      .then((response) => response.json()) 
      .then((data) => {
        setMovie(data); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [movieId]); 

  if (!movie) {
    console.log('No existe');
    return <p>...</p>; 
  }
  return (
    <>
    <section className= 'muvi-container'>

      <section className='infoMuvi'>     
        <h1 className='muviTittle'>{movie.original_title}</h1>
        <section className='cardInfo'>
          <a className='score' href= '#'>{movie.vote_average}</a>
          <p className='date-detail'>{movie.release_date} | {movie.genre_ids} | {movie.vote_count}</p>
        </section>

        <h2>Muvi</h2>
        <h3>{movie.overview}</h3>
      </section>

    </section>

    <section className='posterCard'>
      <img className='movie-poster' 
      src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
      alt={movie.original_title}/> 
    </section>
    </>
  );
}

