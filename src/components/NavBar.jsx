const NavBar = () => {
  return (
    <>
      <div className="p-3 bg-black items-center flex justify-between">
        <logo className="text-red-600 font-bold text-2xl cursor-pointer hover:scale-105 transition-all duration-300">
          MFLIX
        </logo>
        <div>
          <ul className="text-red-600  flex gap-4  font-medium">
            <li className="hover:underline cursor-pointer hover:text-red-400">
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
            </li>
          </ul>
        </div>
        <button className="text-red-600 border-red-600 border-2 rounded-lg p-2 hover:bg-red-600 hover:text-black font-semibold transition-all duration-300">
          SigUp/SignIn
        </button>
      </div>
    </>
  );
};

export default NavBar;
