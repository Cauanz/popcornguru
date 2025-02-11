import { useEffect, useState } from 'react'
import './App.css'
import { getMovies } from './redux/moviesRelated/moviesHandle';

function App() {

  const [allMovies, setAllMovies] = useState([]);
  //FAZER REQUISIÇÕES PARA PEGAR FILMES, SÉRIES ETC.. E ARMAZENAR EM STATES SEPARADOS (FILMES FAVORITOS, LANÇAMENTOS ETC...)

  useEffect(() => {
    //USAR REDUX PARA EVITAR ISSO AQUI
    async function fetchMovies() {
      setAllMovies(await getMovies())
    }
    fetchMovies();
  }, [])

  useEffect(() => {
    console.log(allMovies);
  }, [allMovies])


  return (
    <>
      <div className="container">

        <section className='movies'>
          {allMovies.map((movie) => (
            <div key={movie.id}>
              <p>Titulo: {movie.title}</p>
              <img src={movie.poster_path} alt="Movie image" />
              <p></p>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

export default App
