import { MovieData } from '../data/data';
import { Link } from 'react-router-dom';
import Notfound from '../images/Notfound.png';

interface HomeProps {
  movies: MovieData[];
}
// como argumento se le pasa el objeto
export default function Home({ movies }: HomeProps) {

  return (
    <section className='grid-muvi'>
      {movies.map((movie: MovieData) => (
        <section
          className='main-muvi'
          id='main-muvi'
          key={movie.id}
          style={{ cursor: 'pointer' }}
        >
          <Link to={`/details/${movie.id}`} className='link-movie'>

            <img
              className='img-muvi'
              src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} 
              onError={(e) => {
                e.currentTarget.src = Notfound;
              }}
              alt=''
            />
          </Link>

          <p className='title-muvi'>{movie.title}</p>
          <p className='muvi-date'>
            {new Date(movie.release_date).getFullYear()}
          </p>
        </section>
      ))}
    </section>
  );
}

