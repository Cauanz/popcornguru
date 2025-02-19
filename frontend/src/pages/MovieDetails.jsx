import { Link, useParams } from "react-router"
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getCast, getMovie, getProviders, getSimilar } from "../redux/moviesRelated/moviesHandle";
// import { AiFillStar } from "react-icons/ai";
import { IoAdd, IoStar } from "react-icons/io5";
import FlyoutMenu from "../components/FlyoutMenu";

export default function MovieDetails() {

  const urlParams = useParams();
  const movieId = urlParams.id;

  const [movieDetails, setMovieDetails] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [cast, setCast] = useState([]);
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    //USAR REDUX PARA EVITAR ISSO AQUI
    async function fetchMovie() {
      const response = await getMovie(movieId);
      setMovieDetails(response.data);
    }
    
    async function fetchSimilar() {
      const response = await getSimilar(movieId);
      setSimilarMovies(response.data);
    }
    
    async function fetchCast() {
      const response = await getCast(movieId);
      setCast(response.data);
    }
    
    async function fetchProviders() {
      const response = await getProviders(movieId);
      setProviders(response.data);
    }

    fetchMovie();
    fetchSimilar();
    fetchCast();
    fetchProviders();
  }, [movieId]);

  console.log(movieDetails);

  return (
    <>

    <Header />

    {/* <div className="p-20 w-full flex flex-col items-center justify-center">

      <img src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`} alt="" />

      <h1 className="font-bold text-6xl">{movieDetails.title}</h1>

      <span className="flex ">
        <ul className="flex">
          {movieDetails.genres && movieDetails.genres.map((genre) => (
          <li key={genre.id} className="flex p-1 rounded-2xl border-1 m-1">
            {genre.name}
          </li>
          ))}
        </ul>
      </span>

      <p>{movieDetails.overview}</p>

      <p>Data de lançamento: {new Date(movieDetails.release_date).toLocaleDateString()}</p>

      <span className="flex justify-center items-center">
        Nota <AiFillStar color="yellow" /> {movieDetails.vote_average}
      </span>
    </div> */}

    <div className="min-h-screen bg-[#2c1b47] text-white">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] md:h-[60vh] bg-cover bg-top"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w400${movieDetails.poster_path})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c1b47] to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">{movieDetails.title}</h1>
        <p className="text-[#b2b2b2] mb-4">
          {new Date(movieDetails.release_date).getFullYear()} • 
          {movieDetails.genres && movieDetails.genres.map((genre) => genre.name + " " )} • 
          {Math.floor(movieDetails.runtime / 60)}h{Math.floor(movieDetails.runtime % 60)}min
        </p>
          <div className="flex space-x-4 mb-4">
            {/* <button className="bg-[#00b4d8] hover:bg-[#0090b0] text-white p-2 rounded-xl flex items-center justify-center">
              <IoPlayOutline className="mr-2 h-4 w-4" /> Assistir Agora
            </button> */}
            <button className="text-white border-white hover:bg-white hover:text-[#2c1b47] p-2 rounded-xl flex items-center justify-center">
              <IoAdd className="mr-2 h-4 w-4" /> Adicionar à Lista
            </button>
            <FlyoutMenu title={"Onde assistir?"} items={providers.buy} />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-10 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Sinopse</h2>
          <p className="text-[#b2b2b2] mb-6">
            {movieDetails.overview}
          </p>

          <h2 className="text-2xl font-semibold mb-4">Elenco Principal</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {cast.cast && cast.cast.slice(0, 3).map((actor) => (
              <div key={actor.id} className="bg-[#3d2a5b] p-4 rounded-lg">
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.name}
                  className="w-30 h-40 rounded-full mx-auto mb-2"
                />
                <p className="text-center">{actor.character} - {actor.name}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-4">Avaliações</h2>
          <div className="flex items-center space-x-4 mb-2">
            <div className="flex items-center">
              <IoStar className="h-6 w-6 text-[#00b4d8] fill-current" />
              <span className="ml-2 text-2xl font-bold">8.8</span>
            </div>
            <span className="w-full h-4 bg-amber-300 relative">
              <span className="h-4 bg-blue-400 absolute" style={{ width: `${movieDetails.vote_average * 10}%` }}>
              </span>
            </span>
          </div>
          <p className="text-[#b2b2b2] mb-6">Baseado em {movieDetails.vote_count} avaliações</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Filmes Relacionados</h2>
          <div className="space-y-4">
            {similarMovies.slice(0, 3).map((movie) => (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
              <div className="bg-[#3d2a5b] p-4 rounded-lg flex items-center">
                <img
                  src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-20 h-28 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="font-semibold">{movie.title}</h3>
                  <p className="text-[#b2b2b2] text-sm">{new Date(movie.release_date).getFullYear()} • Sci-Fi</p>
                  <div className="flex items-center mt-2">
                    <IoStar className="h-4 w-4 text-[#00b4d8] fill-current" />
                    <span className="ml-1 text-sm">{(movie.vote_average).toFixed(1)}</span>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>



    </>
  )
}
