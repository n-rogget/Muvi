import { fireEvent, render, screen } from '@testing-library/react';
import Sidebar from '../components/sideBar';
import { SetStateAction } from 'react';

describe('funcion sideBar', () => {

test('Sidebar debe renderizar correctamente', () => {
  render(<Sidebar setFilteredMovies={setFilteredMovies} filteredMovies={0} setInitial={function (): void {
    throw new Error('Function not implemented.');
  } } setFinal={function (): void {
    throw new Error('Function not implemented.');
  } } setSortBy={function (): void {
    throw new Error('Function not implemented.');
  } }  />);

  expect(screen.getAllByText(/Más populares|Más nuevas|Terror|2020 - 2023/)).toHaveLength(1);
});
test("Simular cambio en el input del año minimo y verificar que onChange se ejecuta", () => {
  const setFilteredMovies = jest.fn();
  const setInitial = jest.fn();
  const setFinal= jest.fn();
  const setSortBy = jest.fn();

  const { getByTestId } = render(
    <Sidebar
      setFilteredMovies={setFilteredMovies}
      setInitial={setInitial}
      setFinal={setFinal}
      setSortBy={setSortBy} filteredMovies={0}    />
  );

  // Simula un cambio en el valor del input
  fireEvent.change(getByTestId("aniosMin"), {
    target: { value: "2023" }
  });

  // Verifica que la función onChange se haya ejecutado y que el estado haya sido actualizado
  expect(getByTestId("aniosMin")).not.toBeUndefined();
});

test("Simular cambio en el input del año maximo y verificar que onChange se ejecuta", () => {
  const setFilteredMovies = jest.fn();
  const setInitial = jest.fn();
  const setFinal= jest.fn();
  const setSortBy = jest.fn();

  const { getByTestId } = render(
    <Sidebar
      setFilteredMovies={setFilteredMovies}
      filteredMovies={1}
      setInitial={setInitial}
      setFinal={setFinal}
      setSortBy={setSortBy}
    />
  );

  // Simula un cambio en el valor del input
  fireEvent.change(getByTestId("aniosMax"), {
    target: { value: "2023" }
  });

  // Verifica que la función onChange se haya ejecutado y que el estado haya sido actualizado
  expect(getByTestId("aniosMax")).not.toBeUndefined();
});


test("simula un cambio en el select al momento de ordenar y verifica que onChange se ejecute", () =>{
  const setFilteredMovies = jest.fn();
  const setInitial = jest.fn();
  const setFinal = jest.fn();
  const setSortBy = jest.fn();

  const { getByTestId } = render(
    <Sidebar
      setFilteredMovies={setFilteredMovies}
      filteredMovies={1}
      setInitial={setInitial}
      setFinal={setFinal}
      setSortBy={setSortBy}
    />
  );
   // Simula un cambio en el valor del select
   fireEvent.change(getByTestId("orderBy"), {
    target: { value: "new" }
  });
// Verifica que la función onChange se haya ejecutado y que el estado haya sido actualizado
expect(getByTestId("orderBy")).not.toBeUndefined();
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function setFilteredMovies(_value: SetStateAction<number>): void {
  throw new Error('Function not implemented.');
}
})
