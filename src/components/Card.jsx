import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import MovieCardShimmer from "./MovieCardShimmer";

function filterData(searchText, movies) {
  return movies.filter((movies) =>
    movies.title.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Card = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  // console.log(movies);

  useEffect(() => {
    moviesLIst();
  }, []);
  async function moviesLIst() {
    const data = await fetch("https://yts.mx/api/v2/list_movies.json");
    const json = await data.json();
    const movieList = json.data.movies;
    setAllMovies(movieList);
    setFilteredMovies(movieList);
    // console.log(json?.data?.movies[0]?.torrents);
  }

  // Early return
  if (!allMovies) {
    return null;
  }

  return (
    <>
      {!allMovies.length ? (
        <MovieCardShimmer />
      ) : (
        <div>
          <div className=" flex items-center justify-between gap-4 p-4 mx-14">
            <input
              type="text"
              placeholder="Search your favourite movies and shows"
              className="border-2 border-gray-500 rounded-xl p-2 w-full text-center"
              value={searchText}
              onChange={(e) => {
                if (!e.target.value) {
                  setSearchText(e.target.value);
                  setFilteredMovies(allMovies);
                  return;
                }

                setSearchText(e.target.value);
                const data = filterData(searchText, allMovies);
                setFilteredMovies(data);
              }}
            />
            {/* <button
              className="border-2 p-2 border-gray-500 rounded-full bg-white font-bold text-2xl"
              onClick={() => {
                const data = filterData(searchText, allMovies);
                setFilteredMovies(data);
              }}
            >
              <BiSearch />
            </button> */}
          </div>

          {filteredMovies?.length > 0 ? (
            <div className="flex flex-wrap gap-8 md:gap-11  justify-center my-10 mx-5">
              {filteredMovies.map((data, id) => (
                <Link
                  to={"/movie/" + data.id}
                  key={data.id}
                  className="shadow-md rounded-lg shadow-white h-auto w-56"
                >
                  <MovieCard
                    key={id}
                    title={data.title}
                    rating={data.rating}
                    genres={data.genres}
                    year={data.year}
                    image={data.medium_cover_image}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-1 justify-center items-center font-mono text-lg text-white h-[70vh]">
              Oops, No movies or shows found !!!
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Card;
