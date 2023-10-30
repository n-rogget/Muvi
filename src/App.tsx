import { useEffect, useState } from "react";
import { MovieData } from "./data/data";
import { getMovies } from "./config/config";
import Sidebar from "./components/sideBar";
import Home from "./components/home";
import Pages from "./components/pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieView from "./components/movie";

const App : React.FC = () => {
  // Estado para todas las películas
  const [allMovies, setAllMovies] = useState<MovieData[]>([]); 
  // Estado para películas filtradas
  const [filteredMovies, setFilteredMovies] = useState<number>(0); 
  const [page, setPage] = useState<number>(1);
  const [initial, setInitial] = useState<string>("1900-01-01");
  const [final, setFinal] = useState<string>("2023-12-31");
  const [sortBy, setSortBy] = useState<string>("new");

  useEffect(() => {
    getMovies(page, filteredMovies, initial, final, sortBy)
      .then((data: MovieData[]) => {
        setAllMovies(data);
      })
      .catch((error) => console.error(error));
  }, [page, filteredMovies, initial, final, sortBy]);
 
  return (
    <Router>
    <section id="generalSection">
      <Sidebar
       setFilteredMovies={setFilteredMovies}
       filteredMovies={filteredMovies}
       setInitial={setInitial}
       setFinal={setFinal}
       setSortBy={setSortBy}
      />
      <main>
      <Routes>
      <Route path="/movie/:id" element={<MovieView />} />          
       </Routes>
        <section className="menu">
          <Home movies={allMovies} />
          <Pages setPage={setPage} page={page} />
        </section>
      </main>
    </section>
    </Router>

  );
}

export default App;