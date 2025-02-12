import { useParams } from "react-router"
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getMovie } from "../redux/moviesRelated/moviesHandle";
import { AiFillStar } from "react-icons/ai";

export default function MovieDetails() {

  const urlParams = useParams();
  const movieId = urlParams.id;

  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    //USAR REDUX PARA EVITAR ISSO AQUI
    async function fetchMovie() {
      setMovieDetails(await getMovie(movieId));
    }
    fetchMovie();
  }, [movieId]);

  return (
    <>

    <Header />

    <div className="p-20 w-full flex flex-col items-center justify-center">

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

      <p>Ano de lançamento: {movieDetails.release_date}</p>

      <span>
        Nota <AiFillStar color="yellow" /> {movieDetails.vote_average}
      </span>
    </div>

  {/*//TODO RECOMENDAÇÕES PARECIDAS? */}

    </>
  )
}
