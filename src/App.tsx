import { useEffect, useState } from "react";
import { MovieData } from "./data/data";
import { getMovies } from "./config/config";
import  Sidebar  from "./components/sideBar";
import Home from "./components/home";
import Pages from "./components/pages";

function App() {
  const [allMovies, setAllMovies] = useState<MovieData[]>([]); // Estado para todas las películas
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getMovies({ page: page })
    .then((data: MovieData[]) => {
      setAllMovies(data);
        setMovies(data);
      })
      .catch((error) => console.error(error));
  }, [page]);
 
  return (
    <section id="generalSection">
      <Sidebar setMovies={setMovies} moviesToSort={allMovies} />
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