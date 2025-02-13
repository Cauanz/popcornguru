import { Link } from "react-router";

export default function Header() {

  return (
    <>
    {/* //TODO ESCOLHER ESQUEMA DE CORES */}
      <div className="h-15 w-full flex flex-row items-center p-1 border-b-1">
        <ul className="w-full flex items-center justify-between">
          <Link to="/">
            <li className="h-11 w-auto flex items-center justify-center font-bold text-[40px]">PopcornGuru</li>
          </Link>
          <li>
            <ul className="flex justify-between gap-2">
              <Link to="/home">
                <li className="w-20 h-11 flex items-center justify-center bg-[#FF2D11] text-black font-bold">
                  Home
                </li>
              </Link>
              <Link to="/movies">
                <li className="w-20 h-11 flex items-center justify-center bg-[#FF2D11] text-black font-bold">
                  Movies
                </li>
              </Link>
              <Link to="/series">
                <li className="w-20 h-11 flex items-center justify-center bg-[#FF2D11] text-black font-bold">
                Series
                </li>
              </Link>
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}
