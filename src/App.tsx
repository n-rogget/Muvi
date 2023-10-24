import { useEffect, useState } from "react";
import { MovieData } from "./data/data";
import { getMovies } from "./config/config";
import Sidebar from "./components/sideBar";
import Home from "./components/home";
import Pages from "./components/pages";

function App() {
  const [allMovies, setAllMovies] = useState<MovieData[]>([]); // Estado para todas las películas
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [sortAZ, setSortAZ] = useState<boolean>(true);

// El código muestra el uso del hook useEffect en React. 
//Este hook se ejecuta cada vez que cambia el valor de la variable "page".
//En este caso, se llama a la función getMovies con un objeto que contiene el número de página actual.
  useEffect(() => {
    getMovies({ page: page })
    //Cuando la promesa se resuelve, se ejecuta esta función de devolución de llamada 
    //que recibe los datos como parámetro. En este caso, los datos son un array de objetos MovieData 
    //y se establecen en el estado allMovies mediante la función setAllMovies()
      .then((data: MovieData[]) => {
        setAllMovies(data);
        let filteredMovies = data;
        // Si la variable sortAZ es verdadera, se ordenan las películas 
        // en orden alfabético ascendente utilizando el método sort()
        if (sortAZ) {
          filteredMovies = filteredMovies.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
        }
        setMovies(filteredMovies);
      })
      .catch((error) => console.error(error));
  }, [page, sortAZ]);
  const handleSortAZ = () => {
    setSortAZ(true);
    // Ordenar todas las películas
   const sortedMovies = [...allMovies].sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sortedMovies); 
  };

  const handleSortZA = () => {
    setSortAZ(false);
    // Ordenar todas las películas
   const sortedMovies = [...allMovies].sort((a, b) => b.title.localeCompare(a.title));
    setMovies(sortedMovies);
  };

  // ...

  return (
    <section id="generalSection">
      <Sidebar
        setMovies={setMovies}
        moviesToSort={allMovies}
        onSortAZ={handleSortAZ}
        onSortZA={handleSortZA}
      />
      <main>
        <section className="menu">
          <Home movies={movies} />
          <Pages setPage={setPage} page={page} />
        </section>
      </main>
    </section>

  );
}

export default App;