import { Link } from "react-router-dom";
import { NAVBAR_HEADINGS } from "../../constants/utils";

const NavBar = () => {
  return (
    <>
      <div className="p-3 bg-black items-center flex justify-between shadow-white shadow-sm sticky">
        <Link
          to="/"
          className="text-white font-bold text-2xl cursor-pointer hover:scale-105 transition-all duration-300"
        >
          MFLIX
        </Link>
        <div>
          <ul className="text-white/70  flex gap-4  font-medium">
            {/* <li className="hover:underline cursor-pointer hover:text-red-400">
              Bollywood
            </li>
            <li className="hover:underline cursor-pointer hover:text-red-400">
              Hollywood
            </li>
            <li className="hover:underline cursor-pointer hover:text-red-400">
              Action
            </li>
            <li className="hover:underline cursor-pointer hover:text-red-400">
              Thriller
            </li>
            <li className="hover:underline cursor-pointer hover:text-red-400">
              Sci-Fi
            </li> */}
            {NAVBAR_HEADINGS.map((item, index) => (
              <li
                key={`navbaritem_${item.name}_${index}`}
                className="hover:underline cursor-pointer hover:text-white"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <button className="text-white border-white border-2 mx-5 rounded-lg p-2 hover:bg-white hover:text-black font-semibold transition-all duration-300">
            SignIn
          </button>
          <button className="text-white border-white border-2 rounded-lg p-2 hover:bg-white hover:text-black font-semibold transition-all duration-300">
            SigUp
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
