/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getGenres } from '../config/config';
import { GenreData } from '../data/data';
import LogoMuvi from '../images/LogoMuvi.png';
import Filtrar from '../images/Filtrar.png';
import Ordenar from '../images/Ordenar.png';

interface SidebarProps {
  setFilteredMovies: Dispatch<SetStateAction<number>>;
  filteredMovies: number;
  setInitial: Dispatch<SetStateAction<string>>;
  setFinal: Dispatch<SetStateAction<string>>;
  setSortBy: Dispatch<SetStateAction<string>>;
}
export default function Sidebar ({
  setFilteredMovies,
  setInitial,
  setFinal,
  setSortBy,
}: SidebarProps) {
  const [genres, setGenres] = useState<GenreData[]>([]);
  useEffect(() => {
    getGenres()
      .then((data: GenreData[]) => {
        setGenres(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <section className="side">
      <img
        src={LogoMuvi}
        className="logoHome"
        onClick={() => window.location.reload()}
      />
      <section id="main">
        <section className="filter">
          <section className="category">
            <h4>
              {' '}
              <img src={Filtrar} alt="filtrar" className="imgSidebar" /> Filtrar
              por{' '}
            </h4>

            <h2> Categoría </h2>
            <section className="contenedor-generos" id="filtroGeneros">
              {genres
                .filter((genre) => genre.id === 27 || genre.id === 53)
                .map((genre: GenreData, i: number) => (
                  <button
                    className="btn"
                    onClick={() => {
                      setFilteredMovies(genre.id);
                    }}
                    key={i}
                  >
                    {genre.name}
                  </button>
                ))}
            </section>
          </section>
          <section className="category">
            <h3> Fecha de estreno </h3>
            <form>
              <label className="dateP"> Desde: </label>
              <input
                className="sidebar-input"
                type="number"
                id="añosMin"
                min="1900"
                max="2023"
                placeholder="1900"
                maxLength={4}
                data-testid={'aniosMin'}
                onChange={(event) => {
                  const formateDate = `${event.target.value}`;
                  setInitial(formateDate);
                }}
              />
              <br></br>
              <label className="dateP"> Hasta:</label>
              <input
                className="sidebar-input"
                type="number"
                id="añosMin"
                min="1900"
                max="2023"
                placeholder="2023"
                maxLength={4}
                data-testid={'aniosMax'}
                onChange={(event) => {
                  const formateDate = `${event.target.value}`;
                  setFinal(formateDate);
                }}
              />
            </form>
          </section>
          <section className="list-choice">
            <section className="list-choice-title">
              <img src={Ordenar} alt="Ordenar" className="imgSidebar" />
              Ordenar por
            </section>
            <select
              className="list-choice-objects"
              id="ordena"
              data-testid={'orderBy'}
              onChange={(event) => {
                setSortBy(event.target.value);
              }}
            >
              <option value={'default'} className="orderYear">
                Defecto
              </option>
              <option value={'new'} className="orderYear">
                Más nuevas
              </option>
              <option value={'old'} className="orderYear">
                Más antiguas
              </option>
            </select>
          </section>
        </section>
      </section>
    </section>
  );
}
