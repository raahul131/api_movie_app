const MovieCard = ({ title, rating, genres, year, image }) => {
  return (
    <>
      <div>
        <img src={image} className="rounded-t-lg" />
        <div className="pl-2 pb-2">
          <div className="font-bold text-white pt-3">{title}</div>
          <div className="text-yellow-400">{rating} stars</div>
          <div className="text-white flex ">{genres.join(", ")}</div>
          <div className="text-gray-400">{year}</div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
