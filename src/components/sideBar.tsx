/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getGenres } from "../config/config";
import { GenreData } from "../data/data";

interface SidebarProps {
  setFilteredMovies: Dispatch<SetStateAction<number>>;
  filteredMovies: number;
  setInitial: Dispatch<SetStateAction<string>>;
  setFinal: Dispatch<SetStateAction<string>>;
  setSortBy: Dispatch<SetStateAction<string>>;
}
export default function Sidebar({
  setFilteredMovies,
  filteredMovies,
  setInitial,
  setFinal,
  setSortBy
}: SidebarProps) {


  //hook de estado (useState) para guardar  el array de generos
  const [genres, setGenres] = useState<GenreData[]>([]);
  useEffect(() => {
    getGenres()
      .then((data: GenreData[]) => {
        console.log("GENEROS: ", data);
        setGenres(data);
      })
      .catch((error) => console.error(error));
  }, []);

  // input por select
  return (
    <section className="side">
      <img
        src="src/images/Muvi (10).png"
        alt="Logo Muvi"
        className="logoHome"
        onClick={() => window.location.reload()}
      />

      <section id="main">
        <section className="order">
          <section className="search-container">
            <img
              className="search-icon"
              src="src/images/icono-lupa.png"
              alt="Buscar" />
            <input
              type="text"
              className="input-style"
              id="muviSearch"
              placeholder="Busca tu película"
            /*      value={searchText}
                 onChange={handleSearchChange} */
            />      </section>

        </section>
        <section className="filter">
          <h4> <img src="src/images/Filtrar.png"
            alt="filtrar"
            className="imgSidebar" /> Filtrar por </h4>
          <h2> Categoría </h2>
          {/*  <button
            id='btnTerror'
            className="btn" >
            Terror
          </button>
          <button
            id='btnSuspenso'
            className="btn" >
            Suspenso
          </button> */}
          <section
            className="contenedor-generos"
            id="filtroGeneros">
            {genres
              .filter((genre) => genre.id === 27 || genre.id === 53)
              .map((genre: GenreData, i: number) => (
                <button
                  className={genre.id === filteredMovies ? "btn active" : "btn"}
                  onClick={() => {
                    setFilteredMovies(genre.id);
                  }}
                  key={i}
                >
                  {genre.name}
                </button>
              ))}
          </section>
          <h3> Fecha de estreno </h3>
          <input
            className="sidebar-input"
            type="date"
            id="añosMin"
            placeholder="1900-01-01"
            data-testid={"aniosMin"}
            onChange={(event) => {
              const date = new Date(event.target.value);
              console.log("initialYear input:", event.target.value);
              const formateDate = `${date.getFullYear()}-${(date.getMonth() + 1)
                .toString()
                .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
              setInitial(formateDate);
            }}
          />
          <span>-</span>
          <input
            className="sidebar-input"
            type="date"
            id="añosMin"
            placeholder="2023-12-31"
            data-testid={"aniosMax"}
            onChange={(event) => {
              const date = new Date(event.target.value);
              console.log("finalYear input:", date);
              const formateDate = `${date.getFullYear()}-${(date.getMonth() + 1)
                .toString()
                .padStart(2, "0")}-${date.getDate()
                  .toString()
                  .padStart(2, "0")}`;
              setFinal(formateDate);
            }}
          />
          <section className="list-choice">
            <section className="list-choice-title" >
              <img src="src/images/Ordenar.png"
                alt="Ordenar"
                className="imgSidebar" />Ordenar por</section>
            <select className="list-choice-objects"
              id="ordenar"
              data-testid={"orderBy"}
              onChange={(event) => {
                setSortBy(event.target.value);
              }}>
              <option
                value={'default'}
                className="orderYear">
                Defecto</option>
              <option
                value={'new'}
                className="orderYear">
                Más nuevas</option>
              <option
                value={'old'}
                className="orderYear" >
                Más antiguas</option>


            </select>
          </section>
        </section>
      </section>
    </section >)
}


