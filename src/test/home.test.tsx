import { render, waitFor } from "@testing-library/react";
import Home from "../components/home";
import { MovieData } from "../data/data";

describe("SeccionPrincipal", () => {
  it("debe renderizar una lista de películas de terror y suspenso", async () => {
    const movies: MovieData[] = [
      {
        "adult": false,
        "backdrop_path": "/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 299054,
        "original_language": "en",
        "original_title": "Expend4bles",
        "overview": "Cuarta entrega de la saga Los Mercenarios. El veterano mercenario Barney “Esquizo” Ross (Sylvester Stallone) y su equipo de estrellas, formado por los hombres más duros (Jason Statham, Dolph Lundgren, 50 Cent, Megan Fox…), afrontan un nuevo desafío, en una trama cargada de acción. Para superarlo y salir airosos, deberán recurrir a su ingenio, experiencia y a la fuerza bruta que los caracteriza.",
        "popularity": 2085.194,
        "poster_path": "/g6bfq26jmzEGNGMw768Fwu6OmdZ.jpg",
        "release_date": "2023-09-15",
        "title": "Los mercenarios 4",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 280
      },
      {
        "adult": false,
        "backdrop_path": "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 575264,
        "original_language": "en",
        "original_title": "Mission: Impossible - Dead Reckoning Part One",
        "overview": "Ethan Hunt y su equipo del FMI, se embarcan en su misión más peligrosa hasta la fecha: localizar, antes de que caiga en las manos equivocadas, una nueva y terrorífica arma que amenaza a toda la humanidad. En esta tesitura, y con unas fuerzas oscuras del pasado de Ethan acechando, comienza una carrera mortal alrededor del mundo en la que está en juego el control del futuro y el destino del planeta. Enfrentado a un enemigo misterioso y todopoderoso, Ethan se ve obligado a considerar que nada puede anteponerse a su misión, ni siquiera las vidas de aquellos que más le importan.",
        "popularity": 1984.315,
        "poster_path": "/83sGKvCv2T2CulYbd40Aeduc7n2.jpg",
        "release_date": "2023-07-08",
        "title": "Misión: Imposible - Sentencia mortal parte uno",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 1724
      },
    ]

    const { getAllByText } = render(<Home movies={movies} />);

    // Verifica que se rendericen los títulos de las películas.
    await waitFor(() => {
      expect(getAllByText(/Los mercenarios 4/).length).toBe(1);
    });
  });
});