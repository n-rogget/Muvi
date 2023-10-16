import { MovieData } from "../data/data";

interface SeccionPrincipalProps {
  movies: MovieData[];
}

export default function Home({ movies }: SeccionPrincipalProps) {
  return (
    <section className="grid-muvi">
      {movies?.map((movie: MovieData, i: number) => (
        <section className="main-muvi" id='main-muvi' key={i}>
          <a href="#" className="link-muvi">
            <img
              className="img-muvi"
              src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
              alt=""
            />
          </a>
          <p className="title-movie">{movie.title}</p>
          <p className="muvi-date">
            {new Date(movie.release_date).getFullYear()}
          </p>
        </section>
      ))}
    </section>
  );
}