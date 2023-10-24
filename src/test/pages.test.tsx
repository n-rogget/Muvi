import { render, fireEvent } from '@testing-library/react';
import Pages from '../components/pages';

describe('Pages', () => {
    test('debe mostrar los botones de "inicio", "Anterior", "Siguiente" y "final" ', () => {
      const setPage = jest.fn();
      const { getByText } = render(<Pages setPage={setPage} page={1} />);
  
      // Verifica que los botones "Anterior" y "Siguiente" estén presentes en el componente.
      expect(getByText('Inicio')).toBeDefined();
      expect(getByText('Anterior')).toBeDefined()
      expect(getByText('Siguiente')).toBeDefined();
      expect(getByText('Final')).toBeDefined();
    });
    
    test('debe llamar a la función setPage con el número correcto al hacer clic en "Inicio"', () => {
      const setPage = jest.fn();
      const { getByText } = render(<Pages setPage={setPage} page={3} />);
  
      // Simula hacer clic en el botón "Inicio".
      fireEvent.click(getByText('Inicio'));
        expect(setPage).toHaveBeenCalledWith(1);
    });
  
    test('debe llamar a la función setPage con el número correcto al hacer clic en "Anterior"', () => {
      const setPage = jest.fn();
      const { getByText } = render(<Pages setPage={setPage} page={2} />);
  
      fireEvent.click(getByText('Anterior'));

  
      expect(setPage).toHaveBeenCalledWith(1);
    });
    test('debe llamar a la función setPage y permanecer en la página 1 si se hace click en página 1', () => {
      const setPage = jest.fn();
      const { getByText } = render(<Pages setPage={setPage} page={1} />);
  
      fireEvent.click(getByText('Anterior'));
  
      expect(setPage).toHaveBeenCalledWith(1);
    });
    test('debe llamar a la función setPage con el número correcto al hacer clic en "Siguiente"', () => {
      const setPage = jest.fn();
      const { getByText } = render(<Pages setPage={setPage} page={3} />);
  
      fireEvent.click(getByText('Siguiente'));
  
      expect(setPage).toHaveBeenCalledWith(4);
    });
    test('debe llamar a la función setPage con el número correcto al hacer clic en "Final"', () => {
      const setPage = jest.fn();
      const { getByText } = render(<Pages setPage={setPage} page={3} />);
  
      fireEvent.click(getByText('Final'));
  
      expect(setPage).toHaveBeenCalledWith(500);
    });
  }); 