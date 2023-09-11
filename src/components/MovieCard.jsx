import Card from "./Card";

const MovieCard = ({ title, rating, genres, year, image }) => {
  console.log(image);
  return (
    <>
      <card className="p-4 h-auto w-44 bg-black rounded-lg cursor-pointer">
        <img src={image} className="rounded border-2 border-white hover:scale-105 transition-all duration-300" />
        <div className="font-bold text-white underline pt-3">{title}</div>
        <div className="text-yellow-400">{rating} stars</div>
        <div className="text-white flex ">{genres.join(", ")}</div>
        <div className="text-gray-400">{year}</div>
      </card>
    </>
  );
};

export default MovieCard;
