import { MovieData } from "../data/data";

//La interfaz SeccionPrincipalProps se utiliza para definir las propiedades esperadas en el componente Home.
// En este caso, se espera que el componente Home reciba una lista de películas (movies) como propiedad.

interface SeccionPrincipalProps {
  //Aquí se almacena la lista de películas
  movies: MovieData[];
}
//La función Home es un componente de React que se exporta por defecto. 
// Recibe un objeto destructurado como argumento, donde se espera que exista una propiedad llamada movies.
// Esta función renderiza un elemento de tipo <section> con la clase "grid-muvi".

export default function Home({ movies }: SeccionPrincipalProps) {
  return (
    <section className="grid-muvi">
      {movies.map((movie: MovieData, i: number) => (
        <section className="main-muvi" id='main-muvi' key={i}>
          <a href="#" className="link-muvi">
            <img
              className="img-muvi"
              src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
              alt=""
            />
          </a>
          <p className="title-muvi">{movie.title}</p>
          <p className="muvi-date">
            {new Date(movie.release_date).getFullYear()}
          </p>
        </section>
      ))}
    </section>
  );
}

// new Date obtiene el año de la fecha de lanzamiento de una película.
//Utiliza el objeto Date para crear una nueva instancia con la fecha proporcionada
//y luego llama al método getFullYear() para obtener el año.
// Esto se utiliza para mostrar el año de lanzamiento de cada película en el componente Home.

// movies.map  El código muestra el uso del método map en un array de películas (movies).
// Para cada película, se ejecuta una función que recibe dos parámetros: la película actual y su índice.
// Esto permite realizar alguna operación o renderizar elementos para cada película en el componente Home.

