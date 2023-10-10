import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import MovieCardShimmer from "./MovieCardShimmer";

const Card = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesLIst();
  }, []);
  async function moviesLIst() {
    const data = await fetch("https://yts.mx/api/v2/list_movies.json");
    const json = await data.json();
    const movieList = json.data.movies;
    setMovies(movieList);
    // console.log(json?.data?.movies[0]?.torrents);
  }

  return (
    <>
      {!movies.length ? (
        <MovieCardShimmer />
      ) : (
        <div className="flex flex-wrap gap-8 md:gap-11  justify-center my-10 mx-5">
          {movies.map((data, id) => (
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
      )}
    </>
  );
};

export default Card;
