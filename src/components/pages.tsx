import { Dispatch, SetStateAction } from 'react';

interface PaginationProps {
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
}
export default function Pages ({ setPage, page }: PaginationProps) {
  return (
    <section className='pages'>
      <button
        className='btn-pages'
        id='page-initial'
        onClick={() => { setPage(1); }}>
        Inicio
      </button>
      <button
        className='btn-pages'
        id='page-before'
        onClick={() => { setPage(page > 1 ? page - 1 : 1); }}
      >
        Anterior
      </button>
      <button
        className='btn-pages'
        id='page-after'
        onClick={() => { setPage(page + 1); }}
      >
        Siguiente
      </button>
      <button
        className='btn-pages'
        id='page-last'
        onClick={() => { setPage(500); }
        }>
        Final
      </button>
    </section>
  );
}
