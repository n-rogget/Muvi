import { MovieData } from "../data/data";

//Esta interfaz especifíca las props que se pueden pasar a este
//componente
interface SeccionPrincipalProps {
  //se define la prop movies que debe ser un array con las pelis
  movies: MovieData[];
}
// como argumento se le pasa el objeto
export default function Home({ movies }: SeccionPrincipalProps) {
  return (
    <section className="grid-muvi">
      {movies.map((movie: MovieData, i: number) => (
        <section className="main-muvi" id='main-muvi' key={i}>
          <a href="#" className="link-muvi">
            <img
              className="img-muvi"
              src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
              alt=""
            />
          </a>
          <p className="title-muvi">{movie.title}</p>
          <p className="muvi-date">
            {new Date(movie.release_date).getFullYear()}
          </p>
        </section>
      ))}
    </section>
  );
}

