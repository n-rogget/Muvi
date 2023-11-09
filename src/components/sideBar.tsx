/* eslint-disable @typescript-eslint/no-unused-vars */
import { 
  Dispatch, 
  SetStateAction, 
  useEffect, 
  useState 
} from "react";
import { 
  getGenres
 } from "../config/config";
import { 
  GenreData
 } from "../data/data";

interface SidebarProps {
  // fx para actualizar estado de un número (cambia valor de filtered movies)
  setFilteredMovies: Dispatch<SetStateAction<number>>;
  filteredMovies: number;
  //Actualizar valor inicial de fechas
  setInitial: Dispatch<SetStateAction<string>>;
  setFinal: Dispatch<SetStateAction<string>>;
  //Actualiza el estado de sortby
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
  // Variable de estado genres, se inicia como array vacío de GenreDaata
  // setGenres, actualiza valor de genres
  const [genres, setGenres] = useState<GenreData[]>([]);
  useEffect(() => {
    getGenres()
    // data es el resultado de la promesa y se espera que sea un array de obj de GenreData
      .then((data: GenreData[]) => {
        console.log("GENEROS: ", data);
        setGenres(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="side">
      <img
        src="src/images/LogoMuvi.png"
        alt="Logo Muvi"
        className="logoHome"
        onClick={() => window.location.reload()}
      />

      <section id="main">
        {/* <section className="order">
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

            />      </section>

        </section> */}
        <section className="filter">
          <h4> <img src="src/images/Filtrar.png"
            alt="filtrar"
            className="imgSidebar" /> Filtrar por </h4>
          <h2> Categoría </h2>
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
            data-testid={"aniosMin"}
            onChange={(event) => {
              console.log("initialYear input:", event.target.value);
              const formateDate = `${event.target.value}`
              setInitial(formateDate);
            }}
          />
          <br></br>
          <label className="dateP"> Hasta:
          </label>
          <input
            className="sidebar-input"
            type="number"
            id="añosMin"
            min="1900"
            max="2023"
            placeholder="2023"
            maxLength={4}
            data-testid={"aniosMax"}
            onChange={(event) => {
              console.log("finalYear input:", event.target.value);
              const formateDate = `${event.target.value}`
              setFinal(formateDate);
            }}
          />
          </form>
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


