import { useEffect, useState } from 'react'
import './App.css'
import { getMovies } from './redux/moviesRelated/moviesHandle';
import Header from './components/Header';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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

    <Header />

      <div className="w-full">
        <section className='movies'>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
            >
              {allMovies.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="Movie image" />
                  <p>Titulo: {movie.title}</p>
                </SwiperSlide>
              ))}
              </Swiper>

          {/* <ul className='flex '>
            {allMovies.map((movie) => (
              <li key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="Movie image" />
                <p>Titulo: {movie.title}</p>
              </li>
            ))}
          </ul> */}
        </section>
      </div>
    </>
  )
}

export default App
