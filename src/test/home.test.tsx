import { render, waitFor, screen } from "@testing-library/react";
import Home from "../components/home";
import { MovieData } from "../data/data";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn()
}));

describe("Home", () => {
  let consoleLogSpy: jest.SpyInstance;
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });
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

    const { getAllByText } = render(
      <BrowserRouter>
        <Home movies={movies} />
      </BrowserRouter>);

    // Verifica que se rendericen los títulos de las películas.
    await waitFor(() => {
      expect(getAllByText(/Los mercenarios 4/).length).toBe(1);
    });
  });
  test('Debería poner imagen predeterminada si hay error con la original', () => {

  const movie = 
    {
      adult: true,
      backdrop_path: 'string',
      genre_ids: [27],
      id: 904613,
      original_language: 'es',
      original_title: 'movie',
      overview: ' movie description',
      popularity: 35,
      poster_path: 'src/images/Notfound.png',
      release_date: '2022-01-01', 
      title: 'the movie',
      video: false,
      vote_average: 54,
      vote_count: 65,
    }
  ;
  
    render  (
    <MemoryRouter>
    <Home movies={[movie]} />
  </MemoryRouter>)
  
    // Busca el elemento img
    const imgElement = screen.getByAltText('') as HTMLImageElement;
  
    // Simula un evento de error en la imagen
    const errorEvent = new Event('error');
    Object.defineProperty(imgElement, 'src', { writable: true });
    imgElement.src = 'initial-source.jpg';
    imgElement.dispatchEvent(errorEvent);
  
    expect(imgElement.getAttribute('src')).toBe('src/images/Notfound.png');
  });
});


