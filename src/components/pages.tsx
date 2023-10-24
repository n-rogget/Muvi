import { Dispatch, SetStateAction } from "react";

// La interfaz PaginationProps define las propiedades que se pueden pasar al componente Pages.
interface PaginationProps {
  // setPage es una función que se utiliza para actualizar el estado de page. 
  //page es una variable de tipo número que representa la página actual.
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
}
//La función Pages es un componente de React que recibe dos propiedades: setPage y page.
// Esta función se exporta como el valor predeterminado del módulo.

export default function Pages({ setPage, page }: PaginationProps) {
  return (
    <section className="pages">
      <button
        className="btn-first"
        id="page-initial"
        onClick={() => { setPage(1) }}>
        <i className="fa-solid fa-arrow-left"></i>
        Inicio
      </button>
      <button
        className="btn-bef"
        id="page-before"
        onClick={() => { setPage(page > 1 ? page - 1 : 1) }}
      >
        <i className="fa-solid fa-arrow-left"></i>
        Anterior
      </button>

      <button
        className="btn-aft"
        id="page-after"
        onClick={() => { setPage(page + 1) }}
      >
        Siguiente
        <i className="fa-solid fa-arrow-right"></i>
      </button>
      <button
        className="btn-last"
        id="page-last"
        onClick={() => { setPage(500) }
        }>
        <i className="fa-solid fa-arrow-left"></i>
        Final
      </button>
    </section>
  );
}