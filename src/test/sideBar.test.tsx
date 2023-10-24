import { render, screen } from '@testing-library/react';
import Sidebar from '../components/sideBar';

test('Sidebar debe renderizar correctamente', () => {
  render(<Sidebar setMovies={setMovies}  />);

 // expect(screen.getByAltText('Logo Muvi')).toBeInTheDocument();
 // expect(screen.getByPlaceholderText('... Busca tu película')).toBeInTheDocument();
  expect(screen.getAllByText(/Más populares|Más nuevas|Terror|2020 - 2023/)).toHaveLength(4);
});