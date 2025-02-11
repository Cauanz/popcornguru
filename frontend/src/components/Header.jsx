import { Link } from "react-router";

export default function Header() {

  return (
    <>
      <div className="h-11 w-full flex flex-row items-center p-1.5">
        <ul className="w-full flex justify-between">
          <li className="h-11 w-auto flex items-center justify-center font-bold text-[40px]">PopcornGuru</li>
          <li>
            <ul className="flex justify-between gap-2">
              <Link to="/home">
                <li className="w-20 h-11 flex items-center justify-center bg-amber-300 text-black font-bold">
                  Home
                </li>
              </Link>
              <Link to="/movies">
                <li className="w-20 h-11 flex items-center justify-center bg-amber-300 text-black font-bold">
                  Movies
                </li>
              </Link>
              <Link to="/series">
                <li className="w-20 h-11 flex items-center justify-center bg-amber-300 text-black font-bold">
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
