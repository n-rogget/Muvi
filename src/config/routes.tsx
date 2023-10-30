
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieView from "../components/movie";
import Home from "../components/home";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home movies={[]} />} /> {/* Ruta de inicio */}
        <Route path="/movie/:id" element={<MovieView />} /> {/* Ruta de película */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
