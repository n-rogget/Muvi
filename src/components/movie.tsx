import { useEffect, useState } from "react";
import { GenreData, MovieInfo, Start } from "../data/data";
import { Link, useParams } from "react-router-dom";
import { getMovieInfo } from "../config/config";


export default function MovieDetails() {
  const [movie, setMovie] = useState<MovieInfo>();
  const { movieId } = useParams();
  useEffect(() => {
    getMovieInfo(Number(movieId))
      .then((data) => {
        console.log("INFO: ", data);
        setMovie(data);
      })
      .catch((error) => console.log("ERROR: ", error));
  }, [movieId]);

  const getTotalVotes = (vote_average: number): number => {
    const result = (vote_average * 5) / 10.0;
    const starts = Math.round(result);
    return starts;
  };

  const renderStarts = (starts: number): Start[] => {
    const arrayStarts = [];

    for (let index = 0; index <= 5; index++) {
      if (index + 1 <= starts) {
        arrayStarts.push({ start: index + 1, status: true });
      } else if (index + 1 <= 5) {
        arrayStarts.push({ start: index + 1, status: false });
      }
    }
    return arrayStarts;
  };

  return (
    <section className="SectionMovie" id="sectionMovie">
      <section className="imagen-section">
        <img
          className="movie-img"
          src={`https://image.tmdb.org/t/p/w154/${movie?.poster_path}`}
          alt=""
        />
      </section>

      <section className="info">
        <section className="background">
          <Link className="closeBtn" to={"/"}>
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <span>Regresar a movie</span>
        </section>
        <p className="tittle-info">{movie?.title}</p>
        <p>{new Date(movie?.release_date || "").getFullYear()}</p>
        <p className="infoMovie">{movie?.overview}</p>
        <p>{movie?.genres.map((genre: GenreData) => genre.name).join(", ")}</p>
        <p> Promedio de votos : {movie?.vote_average.toFixed(2)}%</p>
        <p>
          Total de votos : {movie?.vote_count}{" "}
          {renderStarts(getTotalVotes(movie?.vote_average || 0)).map(
            (start: Start) =>
              start.status ? (
                <i className="fa-solid fa-star" />
              ) : (
                <i className="fa-regular fa-star" />
              )
          )}
        </p>
      </section>


    </section>
  );
}