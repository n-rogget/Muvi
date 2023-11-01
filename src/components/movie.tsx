import { useEffect, useState } from "react";
import { GenreData, MovieInfo, Start, /* Start */ } from "../data/data";
import { Link, useParams } from "react-router-dom";
import { getMovieInfo } from "../config/config";
import LogoMuvi from '../images/LogoMuvi.png';



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
    <section className="SectionMovie" id="sectionMovie" >
      <section className="logo-movie">
        <img
          src={LogoMuvi}
          className="logoHome"
          id="imgLogo"
        />
        <section className="section-title">
          <p className="title-info">{movie?.title}</p>
          <p className="yearP">{new Date(movie?.release_date || "").getFullYear()}</p>
        </section>
      </section>
      
      <section className="img-info">
        <section className="imagen-section">
          <img
            className="movie-img"
            src={`https://image.tmdb.org/t/p/w154/${movie?.poster_path}`}
            alt=""
          />

        </section>

        <section className="info">
          <p className="infoMovie">{movie?.overview}</p>
          <section className="votesSection">
            <p className="percent">{movie?.vote_average.toFixed(2)}%</p>
            <p className="votes">
              {movie?.vote_count}{" "}
              {renderStarts(getTotalVotes(movie?.vote_average || 0)).map(
                (start: Start) =>
                  start.status ? (
                    <i className="fa-solid fa-star" />
                  ) : (
                    <i className="fa-regular fa-star" />
                  )
              )} votos
            </p>
          </section>
          <p className="category"> {movie?.genres.filter((genre) => genre.id === 27 || genre.id === 53)
            .map((genre: GenreData) => genre.name).join(", ")}</p>
        </section>
      </section>
      <section className="backBttn">
        <Link className="closeBtn" to={"/"}>
          <button className="back">Regresar </button>
        </Link>
      </section>


    </section>
  );
}