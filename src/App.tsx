import { useEffect, useState } from "react";
import { MovieData } from "./data/data";
import { getMovies } from "./config/config";
import Sidebar from "./components/sideBar";
import Home from "./components/home";
import Pages from "./components/pages";

function App() {
  const [allMovies, setAllMovies] = useState<MovieData[]>([]); // Estado para todas las películas
  const [filteredMovies, setFilteredMovies] = useState<MovieData[]>([]); // Estado para películas filtradas
  const [page, setPage] = useState<number>(1);
  const [, setSortAZ] = useState<boolean>(false);
  const [, setSortNew] = useState<boolean>(false);  // Nuevo estado para ordenar por fecha nueva
  const [, setSortOlder] = useState<boolean>(false);  // Nuevo estado para ordenar por fecha antigua

  useEffect(() => {
    getMovies({ page: 1 })
      .then((data: MovieData[]) => {
        setAllMovies(data);
        setFilteredMovies(data); // Inicialmente, todas las películas están visibles
      })
      .catch((error) => console.error(error));
  }, []);
  const handleSortAZ = () => {
    setSortAZ(true);
    // Ordenar todas las películas
   const sortedMovies = [...filteredMovies].sort((a, b) => a.title.localeCompare(b.title));
   setFilteredMovies(sortedMovies);
  };

  const handleSortZA = () => {
    setSortAZ(false);
    // Ordenar todas las películas
   const sortedMovies = [...filteredMovies].sort((a, b) => b.title.localeCompare(a.title));
   setFilteredMovies(sortedMovies);
  };

  const handleSearch = (searchText: string) => {
    // Filtra las películas en función del texto de búsqueda en todas las películas
    const filteredMovies = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredMovies(filteredMovies);
  };
  const handleSortNew = () => {
    setSortNew(true);
    setSortOlder(false);
    const sortedMovies = [...filteredMovies].sort((a, b) =>
      new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
    );
    setFilteredMovies(sortedMovies);
  };

  const handleSortOlder = () => {
    setSortOlder(true);
    setSortNew(false);
    const sortedMovies = [...filteredMovies].sort((a, b) =>
      new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
    );
    setFilteredMovies(sortedMovies);
  };

  return (
    <section id="generalSection">
      <Sidebar
       setMovies={setFilteredMovies} // Actualizar películas filtradas
       moviesToSort={allMovies}
       onSortAZ={handleSortAZ}
       onSortZA={handleSortZA}
       onSearch={handleSearch} // Agregar la función de búsqueda
       onSortNew={handleSortNew}
       onSortOlder={handleSortOlder}
      />
      <main>
        <section className="menu">
          <Home movies={filteredMovies} />
          <Pages setPage={setPage} page={page} />
        </section>
      </main>
    </section>

  );
}

export default App;