import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";

const Card = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesLIst();
  }, []);
  async function moviesLIst() {
    const data = await fetch(
      "https://yts.mx/api/v2/list_movies.json?quality=3D"
    );
    const json = await data.json();
    const movieList = json.data.movies;
    setMovies(movieList);
    console.log(json);
  }

  return (
    <div className="flex flex-wrap gap-8 md:gap-11  justify-center my-10 mx-5">
      {movies.map((data, id) => (
        <MovieCard
          key={id}
          title={data.title}
          rating={data.rating}
          genres={data.genres}
          year={data.year}
          image={data.medium_cover_image}
        />
      ))}
    </div>
  );
};

export default Card;
