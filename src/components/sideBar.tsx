
export function SidebarOpened() {
  return (
<section id="mySidebar" className="sidebar">
  <a href="javascript:void(0)" className="closebtn" /* onclick="closeNav()"" */>×</a>
  <a href="#">Ordenar por</a>
  <a href="#">Filtrar por</a>
</section>
  );
}
export default function Sidebar() {
  return (
<section id="main">
  <button className="openbtn" /* onClick="openNav()" */>☰ Menú </button>  
</section> )
}

/* export function OpenNav() {
  SidebarOpened.style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
} */
/* 

    <section className="sidebar-genre">
      <h1 className="sidebar-title">Genero</h1>
      <section className="genre-contain" id="genreContain">
        <button className="btn">Terror</button>
        <button className="btn">Suspenso</button>
      </section>
      <h1 className="sidebar-year">Años</h1>
      <section className="container-inputs">
        <input
          className="sidebar-input"
          type="number"
          id="añosMin"
          min="1900"
          max="2023"
          maxLength={4}
          placeholder="1900"
        />
        <span>-</span>
        <input
          className="sidebar-input"
          type="number"
          id="añosMax"
          min="1900"
          max="2023"
          maxLength={4}
          placeholder="2023"
        />
      </section>
      <section className="sidebar-search" id="btn-search">
        <button className="btn btn--100 btn--amarillo">Buscar</button>
      </section>
    </section> */
