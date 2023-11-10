import { useEffect, useState } from 'react';
import { MovieData } from './data/data';
import { getMovies } from './config/config';
import Sidebar from './components/sideBar';
import Home from './components/home';
import Pages from './components/pages';

function App () {
  // Estado para todas las películas
  const [allMovies, setAllMovies] = useState<MovieData[]>([]);
  // Estado para películas filtradas
  const [filteredMovies, setFilteredMovies] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [initial, setInitial] = useState<string>('1900-01-01');
  const [final, setFinal] = useState<string>('2023-12-31');
  const [sortBy, setSortBy] = useState<string>('default');

  useEffect(() => {
    getMovies(page, filteredMovies, initial, final, sortBy)
      .then((data: MovieData[]) => {
        setAllMovies(data);
      })
      .catch((error) => console.error(error));
  }, [page, filteredMovies, initial, final, sortBy]);

  return (
    <section id="generalSection">
      <Sidebar
        setFilteredMovies={setFilteredMovies}
        filteredMovies={filteredMovies}
        setInitial={setInitial}
        setFinal={setFinal}
        setSortBy={setSortBy}
      />
      <main>
        <section className="menu">
          <Home movies={allMovies} />
          <Pages setPage={setPage} page={page} />
        </section>
      </main>
    </section>

  );
}

export default App;
