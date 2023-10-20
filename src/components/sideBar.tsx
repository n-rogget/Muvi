/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { getGenres, getMovies } from "../config/config";
import { GenreData, MovieData } from "../data/data";

export default function Sidebar({ setMovies }) {
  const [genreId, setGenreId] = useState<number | null>(null);
  const [genres, setGenres] = useState<GenreData[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<MovieData[]>([]);

  useEffect(() => {
    getGenres()
      .then((genres) => {
        setGenres(genres);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleFilterByGenre = (id: number) => {
    setGenreId(id);
    getMovies({ page: 1, genreId: id })
      .then((movies) => {
        console.log("Películas filtradas:", movies)
        setFilteredMovies(movies);
        setMovies(movies)
      })
      .catch((error) => {
        console.error(error);
      });

  };
  return (
    <section className="side">
      <img
        src="src/images/Muvi (10).png"
        alt="Logo Muvi"
        className="logoHome"
        onClick={() => window.location.reload()}
      />
      <section className="search-container">
        <img className="search-icon" src="src/images/icono-lupa.png" alt="Buscar" />
        <input type="text" className="input-style" id="muviSearch" placeholder="... Busca tu película"></input>
      </section>
      <section id="main">
        <section className="order">
          <img src="src/images/Ordenar.png"
            alt="Ordenar"
            className="imgSidebar" /> Ordenar por  </section>
        <section className="filter">
          <h2> Más populares </h2>
          <h2> Menos populares </h2>
          <h2> Más nuevas </h2>
          <h2> Más antiguas </h2>
          <h2> A - Z </h2>
          <h2> Z - A </h2>
        </section>
        <section className="order">
          <img src="src/images/Filtrar.png"
            alt="filtrar"
            className="imgSidebar" /> Filtrar por  </section>
        <section className="filter">
          <h1> Categoría </h1>
          <button id='btnTerror' className="btn" onClick={() => handleFilterByGenre(27)}>Terror</button>
          <button id='btnSuspenso' className="btn" onClick={() => handleFilterByGenre(53)} >Suspenso</button>
          <h1> Año de estreno </h1>
          <button className="btn">2020 - 2023</button>
          <button className="btn">2000 - 2019</button>
          <button className="btn">1980 - 1999</button>
          <button className="btn">1960 - 1979</button>
          <button className="btn">1940 - 1959</button>
          <button className="btn">1920 - 1939</button>
          <button className="btn">1900 - 1919</button>
        </section>

      </section>
    </section>)
}



/* export function OpenNav() {
  SidebarOpened.style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
} */
/* 

    <section className="sidebar-genre">
      <h1 className="sidebar-title">Genero</h1>
      <section className="genre-contain" id="genreContain">
        <button className="btn">Terror</button>
        <button className="btn">Suspenso</button>
      </section>
      <h1 className="sidebar-year">Años</h1>
      <section className="container-inputs">
        <input
          className="sidebar-input"
          type="number"
          id="añosMin"
          min="1900"
          max="2023"
          maxLength={4}
          placeholder="1900"
        />
        <span>-</span>
        <input
          className="sidebar-input"
          type="number"
          id="añosMax"
          min="1900"
          max="2023"
          maxLength={4}
          placeholder="2023"
        />
      </section>
      <section className="sidebar-search" id="btn-search">
        <button className="btn btn--100 btn--amarillo">Buscar</button>
      </section>
    </section> */
