/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { getGenres, getMovies } from "../config/config";
import { GenreData, MovieData } from "../data/data";

// Esta es una función exportada llamada "Sidebar" que acepta un objeto de propiedades como argumento.

export default function Sidebar({ 
  setMovies, 
  moviesToSort,
onSortAZ,
onSortZA, 
onSortNew,  // Agregar función para ordenar por fecha nueva
  onSortOlder,  // Agregar función para ordenar por fecha antigua

}: { 
  setMovies: (movies: MovieData[]) => void;
   moviesToSort: MovieData[];
   onSortAZ: () => void;
   onSortZA: () => void;
   onSearch: (searchText: string) => void; // Define la prop onSearch
   onSortNew: () => void;  // Agregar función para ordenar por fecha nueva
   onSortOlder: () => void;  // Agregar función para ordenar por fecha antigua
 }) {
  //La línea de código crea un estado llamado "searchText" 
  //y una función para actualizar ese estado llamada "setSearchText".
  // El valor inicial del estado es una cadena vacía. 
  //Este estado se utiliza para almacenar el texto de búsqueda ingresado por el usuario en un campo de entrada.
  const [searchText, setSearchText] = useState("");
  // La función handleSearchChange es una función que se ejecuta cuando hay un cambio en el campo de entrada.
  // Recibe un evento de cambio como argumento, que contiene información sobre el cambio realizado en el campo de entrada.
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //asigna el valor del campo de entrada a la variable "searchText". 
    //Esto se hace utilizando el evento "e" que contiene información sobre el cambio realizado en el campo de entrada.
    const searchText = e.target.value;
    // actualiza el estado searchText con el valor del campo de entrada. 
    // Esto se hace utilizando la función setSearchText, que es proporcionada por el hook useState.
    // Al actualizar el estado, se desencadena una re-renderización del componente 
    // para reflejar los cambios en la interfaz de usuario.
    setSearchText(searchText);

    // Filtra las películas en función del texto de búsqueda
    // actualiza el estado searchText con el valor del campo de entrada.
    // Esto se hace utilizando la función setSearchText, que es proporcionada por el hook useState.
    // Al actualizar el estado, se desencadena una re-renderización del componente para reflejar los cambios en la interfaz de usuario.
    const filteredMovies = moviesToSort.filter((movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    );

    // Actualiza las películas en Home
    setMovies(filteredMovies);
  }
  //La función handleSortAZ se ejecuta cuando se realiza una acción de ordenar en orden ascendente.
      const handleSortAZ = () => {
        onSortAZ();
      };
    const handleSortZA = () => {
      onSortZA();
  };
  // setGenreId que inicialmente tiene un valor de null. 
  // Esta variable se utiliza para almacenar el ID del género seleccionado en la aplicación.
    const [, setGenreId] = useState<number | null>(null);
    //  El valor inicial de la variable es un array vacío de tipo GenreData[]. 
    // El primer elemento del array devuelto por useState se ignora,
    // ya que solo nos interesa la función para actualizar el estado de genres.
    const [, setGenres] = useState<GenreData[]>([]);
    // El valor inicial de la variable es un array vacío de tipo MovieData[]. 
    //La función setFilteredMovies se utiliza para actualizar el estado de la variable 
    //y desencadenar una re-renderización del componente cuando sea necesario.
    const [, setFilteredMovies] = useState<MovieData[]>([]);

    //seEffect se utiliza para ejecutar efectos secundarios en el componente, 
    // como realizar llamadas a API o suscribirse a eventos.
    // En este caso, la función pasada como argumento se ejecutará después de que el componente se haya renderizado por primera vez.
    useEffect(() => {
      getGenres()
        .then((genres) => {
          setGenres(genres);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
    // Esta función se utiliza para filtrar las películas por género en la aplicación.
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
    // La función handleSortNew se utiliza para manejar la acción de ordenar las películas por las más nuevas.
    const handleSortNew = () => {
      onSortNew();
    };
  
    const handleSortOlder = () => {
      onSortOlder();
    };
    /*   const handleFilterByYear = (startYear: number, endYear: number) => {
        getMovies({ page: 1 })
          .then((movies) => {
            const filteredMovies = movies.filter((movie) => {
              const releaseYear = new Date(movie.release_date).getFullYear();
              return releaseYear >= startYear && releaseYear <= endYear;
            });
      
            if (filteredMovies.length === 0) {
              console.log("No se encontraron películas para el rango de años seleccionado.");
            } else {
              console.log("Películas filtradas:", filteredMovies);
            }
      
            setFilteredMovies(filteredMovies);
            setMovies(filteredMovies);
          })
          .catch((error) => {
            console.error("Error al obtener películas:", error);
          });
      }; */

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
          <input
            type="text"
            className="input-style"
            id="muviSearch"
            placeholder="... Busca tu película"
            value={searchText}
            onChange={handleSearchChange}
          />      </section>
        <section id="main">
          <section className="order">
            <img src="src/images/Ordenar.png"
              alt="Ordenar"
              className="imgSidebar" /> Ordenar por  </section>
          <section className="filter">
            <h2 id="Sortpopular"> Más populares </h2>
            <h2 id='sortLessPopular'> Menos populares </h2>
            <h2 id="sortNew" onClick={handleSortNew}> Más nuevas </h2>
            <h2 id="sortOlder" onClick={handleSortOlder}> Más antiguas </h2>
            <h2 id="sortAz" onClick={handleSortAZ} > A - Z </h2>
            <h2 id="sortZa" onClick={handleSortZA}> Z - A </h2>
          </section>
          <section className="order">
            <img src="src/images/Filtrar.png"
              alt="filtrar"
              className="imgSidebar" /> Filtrar por  </section>
          <section className="filter">
            <h1> Categoría </h1>
            <button id='btnTerror' className="btn" onClick={() => handleFilterByGenre(27)}>Terror</button>
            <button id='btnSuspenso' className="btn" onClick={() => handleFilterByGenre(53)} >Suspenso</button>
            {/* <h1> Año de estreno </h1>
          <button id='btn2020' className="btn" onClick={() => handleFilterByYear(2020, new Date().getFullYear())}>2020 - 2023</button>
          <button id='btn2000' className="btn" onClick={() => handleFilterByYear(2000, 2019)}>2000 - 2019</button>
          <button id='btn1980' className="btn">1980 - 1999</button>
          <button id='btn1960' className="btn">1960 - 1979</button>
          <button id='btn1840' className="btn">1940 - 1959</button>
          <button id='btn1920' className="btn">1920 - 1939</button>
          <button id='btn1900' className="btn">1900 - 1919</button>  */}
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
