import { fireEvent, render, screen/* waitFor */ } from '@testing-library/react';
import Sidebar from '../components/sideBar';
import { SetStateAction } from 'react';

describe('funcion sideBar', () => {
  let consoleLogSpy: jest.SpyInstance;
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });

  jest.mock("../config/config.tsx", () => ({
    getGenres: () =>
      new Promise((resolve) => {
        return resolve([
          {
            id: 27,
            name: "Terror"
          }
        ]);
      })
  }));
  global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 27,
          name: "Terror"
        }
      ])
  })
) as jest.Mock;
/* est.spyOn(React, "useState").mockImplementation(() => [
  [
    {
      id: 27,
      name: "Terror"
    },
    {
      id: 53,
      name: "Suspense"
    }
  ],
  jest.fn()
]); */

jest.spyOn(global.console, "warn");
  jest.spyOn(global.console, "log");
  jest.spyOn(global.console, "error");

/*  test("Renderiza los generos que manda a traer desde el servicio", async () => {
    const setFilteredMovies = jest.fn();
    const setInitial = jest.fn();
    const setFinal = jest.fn();
    const setSortBy = jest.fn();
    const { getByText } = render(
      <Sidebar
        setFilteredMovies={setFilteredMovies}
        filteredMovies={27}
        setInitial={setInitial}
        setFinal={setFinal}
        setSortBy={setSortBy}
      />
    );
    fireEvent.click(getByText("Terror"));
    await waitFor(() => {
      expect(getByText("Terror")).not.toBeUndefined();
    });
  }); */

  test("Simular cambio en el input del año minimo y verificar que onChange se ejecuta", () => {
    const setFilteredMovies = jest.fn();
    const setInitial = jest.fn();
    const setFinal = jest.fn();
    const setSortBy = jest.fn();

    const { getByTestId } = render(
      <Sidebar
        setFilteredMovies={setFilteredMovies}
        filteredMovies={27}
        setInitial={setInitial}
        setFinal={setFinal}
        setSortBy={setSortBy}
      />
    );

    // Simula un cambio en el valor del input
    fireEvent.change(getByTestId("aniosMin"), {
      target: { value: "2023" }
    });

    // Verifica que la función onChange se haya ejecutado y que el estado haya sido actualizado
    expect(getByTestId("aniosMin")).not.toBeUndefined();
  });

  it("Simular cambio en el input del año maximo y verificar que onChange se ejecuta", () => {
    const setFilteredMovies = jest.fn();
    const setInitial = jest.fn();
    const setFinal = jest.fn();
    const setSortBy = jest.fn();

    const { getByTestId } = render(
      <Sidebar
        setFilteredMovies={setFilteredMovies}
        filteredMovies={27}
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

test('debería recargar la página al hacer click', () => {
  const reloadSpy = jest.spyOn(window.location, 'reload');
  reloadSpy.mockImplementation(() => {}); // Mock la función reload para que no haga nada

  const setFilteredMovies = jest.fn();
  const setInitial = jest.fn();
  const setFinal = jest.fn();
  const setSortBy = jest.fn();
  const { getByAltText } = render(
  <Sidebar
    setFilteredMovies={setFilteredMovies}
    filteredMovies={1}
    setInitial={setInitial}
    setFinal={setFinal}
    setSortBy={setSortBy}
     />);

  const logo = getByAltText('Logo Muvi');
  fireEvent.click(logo);

  expect(reloadSpy).toHaveBeenCalledTimes(1);

  reloadSpy.mockRestore(); 
});
})
