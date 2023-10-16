import {Dispatch, SetStateAction} from "react";

interface PaginationProps {
    setPage: Dispatch<SetStateAction<number>>;
    page: number;
  }
  
  export default function Pages({ setPage, page }: PaginationProps) {
  return (
    <section className="pages">
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
    </section>
  );
}