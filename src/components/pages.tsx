import {Dispatch, SetStateAction} from "react";

interface PaginationProps {
  //setPage actualiza el estado de la página 
    setPage: Dispatch<SetStateAction<number>>;
    // page representa el número de la página actual
    page: number;
  }
  
  export default function Pages({ setPage, page }: PaginationProps) {
  return (
    <section className="pages">
       <button className="btn-first" id="page-initial" onClick={()=>{
        setPage(1)
      }}>
        <i className="fa-solid fa-arrow-left"></i>
        Inicio
      </button>
      <button className="btn-bef" id="page-before" onClick={()=>{
        setPage(page > 1 ? page - 1:1)
      }}>
        <i className="fa-solid fa-arrow-left"></i>
        Anterior
      </button>

      <button className="btn-aft" id="page-after" onClick={()=>{
        setPage(page + 1)
      }}>
        Siguiente
        <i className="fa-solid fa-arrow-right"></i>
      </button>
      <button className="btn-last" id="page-last" onClick={()=>{
        setPage(/* Math.max(page) */500)
      }}>
        <i className="fa-solid fa-arrow-left"></i>
        Final
      </button>
    </section>
  );
}