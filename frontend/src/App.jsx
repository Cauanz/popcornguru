import { useEffect, useState } from "react";
import "./App.css";
import { getMovies } from "./redux/moviesRelated/moviesHandle";
import Header from "./components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router";
import { getSeries } from "./redux/seriesRelated/seriesHandle";

function App() {
  
  const [allMovies, setAllMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]); 
  //FAZER REQUISIÇÕES PARA PEGAR FILMES, SÉRIES ETC.. E ARMAZENAR EM STATES SEPARADOS (FILMES FAVORITOS, LANÇAMENTOS ETC...)

  useEffect(() => {
    //USAR REDUX PARA EVITAR ISSO AQUI
    async function fetchMovies() {
      setAllMovies(await getMovies());
    }
    async function fetchSeries() {
      setPopularSeries(await getSeries());
    }
    
    fetchMovies();
    fetchSeries();
  }, []);

  useEffect(() => {
    console.log(popularSeries);
  }, [popularSeries]);

  return (
    <>
      <Header />

      {/* //TODO CRIAR PRIMEIRA LISTA/CARROSEL COMO RECOMENDAÇÕES, MAS POR ENQUANTO DEIXE SEM */}

      <div className="w-full">
        <span className="flex w-full h-40 items-center justify-center text-8xl bg-gray-800 text-neutral-50 mb-5 mt-5">
          Movies
        </span>

        <section className="allMovies p-3">
          <h1 className="w-full flex items-center justify-center pb-3 text-5xl">
            Popular Movies
          </h1>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={3}
            autoplay
          >
            {allMovies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt="Movie image"
                  />
                  <p>Titulo: {movie.title}</p>
                </Link>
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

        <span className="flex w-full h-40 items-center justify-center text-8xl bg-gray-800 text-neutral-50 mb-5 mt-5">
          Series
        </span>

        <section className="allMovies p-3">
          <h1 className="w-full flex items-center justify-center pb-3 text-5xl">
            Popular Series
          </h1>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={3}
            autoplay
          >
            {popularSeries.map((serie) => (
              <SwiperSlide key={serie.id}>
                <Link to={`/serie/${serie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`}
                    alt="serie image"
                  />
                  <p>Titulo: {serie.name}</p>
                </Link>
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
  );
}

export default App;
