import { useParams } from "react-router"
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { getSerie } from "../redux/seriesRelated/seriesHandle";
import ConcludedTag from "../components/ConcludedTag";

export default function SerieDetails() {

  const urlParams = useParams();
  const serieId = urlParams.id;

  const [serieDetails, setSerieDetails] = useState([]);

  useEffect(() => {
    //USAR REDUX PARA EVITAR ISSO AQUI
    async function fetchSerie() {
      setSerieDetails(await getSerie(serieId));
    }
    fetchSerie();
  }, [serieId]);

  return (
    <>

    <Header />

    <div className="p-20 w-full flex flex-col items-center justify-center">

      <img src={`https://image.tmdb.org/t/p/w400${serieDetails.poster_path}`} alt="" />

      <h1 className="font-bold text-6xl">{serieDetails.title}</h1>

      <span className="flex ">
        <ul className="flex">
          {serieDetails.genres && serieDetails.genres.map((genre) => (
          <li key={genre.id} className="flex p-1 rounded-2xl border-1 m-1">
            {genre.name}
          </li>
          ))}
        </ul>
      </span>

      <p>{serieDetails.overview}</p>

      <p>Data de lançamento: {new Date(serieDetails.first_air_date).toLocaleDateString()}</p>

      <span>
        Nota <AiFillStar color="yellow" /> {serieDetails.vote_average}
      </span>

      <ConcludedTag state={serieDetails.in_production} />

    </div>

  {/*//TODO RECOMENDAÇÕES PARECIDAS? */}

    </>
  )
}

