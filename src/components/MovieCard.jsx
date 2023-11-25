const MovieCard = ({ title, year, image }) => {
  return (
    <>
      <div>
        <img src={image} className="border-4 border-red-700" />
        <div className="pl-2 pb-2">
          <div className="font-bold text-white pt-1">{title}</div>
          <div className="text-red-800">{year}</div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
