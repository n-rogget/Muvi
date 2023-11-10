import { render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Movie from '../components/movie';

jest.mock('../config/config.tsx', () => ({
  getMovieInfo: () =>
    new Promise((resolve) => {
      return resolve({

        'adult': false,
        'backdrop_path': '/gN79aDbZdaSJkFS1iVA17HplF2X.jpg',
        'belongs_to_collection': {
          'id': 968052,
          'name': 'La Monja - Colección',
          'poster_path': '/zc308kZRudZYBpwcVPL8qgze9J9.jpg',
          'backdrop_path': '/bKpqH9y3SjovMM3VqzezBbJtuf7.jpg'
        },
        'budget': 38500000,
        'genres': [
          {
            'id': 27,
            'name': 'Terror'
          },
          {
            'id': 9648,
            'name': 'Misterio'
          },
          {
            'id': 53,
            'name': 'Suspense'
          }
        ],
        'homepage': '',
        'id': 968051,
        'imdb_id': 'tt10160976',
        'original_language': 'en',
        'original_title': 'The Nun II',
        // eslint-disable-next-line max-len
        'overview': 'En 1956 en Francia, un sacerdote es asesinado y parece que un mal se está extendiendo. La hermana Irene una vez más se encuentra cara a cara con una fuerza demoníaca.',
        'popularity': 1948.958,
        'poster_path': '/x0ryPlzZjpOojEAuGrre2lFuBv6.jpg',
        'production_companies': [
          {
            'id': 12,
            'logo_path': '/mevhneWSqbjU22D1MXNd4H9x0r0.png',
            'name': 'New Line Cinema',
            'origin_country': 'US'
          },
          {
            'id': 76907,
            'logo_path': '/ygMQtjsKX7BZkCQhQZY82lgnCUO.png',
            'name': 'Atomic Monster',
            'origin_country': 'US'
          },
          {
            'id': 11565,
            'logo_path': null,
            'name': 'The Safran Company',
            'origin_country': 'US'
          }
        ],
        'production_countries': [
          {
            'iso_3166_1': 'US',
            'name': 'United States of America'
          }
        ],
        'release_date': '2023-09-06',
        'revenue': 262010000,
        'runtime': 110,
        'spoken_languages': [
          {
            'english_name': 'French',
            'iso_639_1': 'fr',
            'name': 'Français'
          },
          {
            'english_name': 'English',
            'iso_639_1': 'en',
            'name': 'English'
          }
        ],
        'status': 'Released',
        'tagline': 'El mayor mal en el universo de El Conjuro.',
        'title': 'La monja II',
        'video': false,
        'vote_average': 7,
        'vote_count': 1232

      });
    })
}));
// Mock the react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ movieId: 968051 })
}));

describe('Movie', () => {
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

  it('Debe mostrarme los detalles de la pelicula ', async () => {
    const { getAllByText } = render(
      <BrowserRouter>
        <Movie />
      </BrowserRouter>
    );
    // Verifica que me muestre los detalles de las películas.
    await waitFor(() => {
      expect(getAllByText(/La monja II/).length).toBe(1);
    });
  });
});
