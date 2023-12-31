import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import { FaImdb } from "react-icons/fa";
import Download from "./Download";
import DetailShimmer from "./DetailShimmer";

const MovieDetails = () => {
  const [details, setDetails] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [casts, setCasts] = useState([]);
  const params = useParams();
  const { id } = params;

  const closeModal = () => setShowModal(false);

  useEffect(() => {
    getMovieDetails();
    getMovieSuggestions();
    getCastDetails();
  }, []);

  const getMovieDetails = () => {
    axios
      .get(
        "https://yts.mx/api/v2/movie_details.json?movie_id=" +
          id +
          "&with_images=true&with_cast=true"
      )
      .then((res) => {
        setDetails(res?.data?.data?.movie);
        // console.log(res?.data?.data?.movie);
      })

      .catch((err) => {
        console.log("err", err);
      });
  };

  const getMovieSuggestions = () => {
    axios
      .get("https://yts.mx/api/v2/movie_suggestions.json?movie_id=" + id)
      .then((res) => {
        setSuggestions(res?.data?.data?.movies);
        // console.log(res?.data?.data?.movies);
      })

      .catch((err) => {
        console.log("err", err);
      });
  };

  const getCastDetails = () => {
    axios
      .get(
        "https://yts.mx/api/v2/movie_details.json?movie_id=" +
          id +
          "&with_images=true&with_cast=true"
      )
      .then((res) => {
        setCasts(res?.data?.data?.movie.cast);
        // console.log(res.data.data.movie.cast);
      })

      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      {!details ? (
        <DetailShimmer />
      ) : (
        <div className="md:flex py-5 gap-4 md:gap-10 px-10 md:px-5 justify-evenly">
          <h1 className="text-white text-4xl underline mb-2 font-semibold md:hidden text-center">{details.title}</h1>
          <div className="w-full md:w-72">
            <img
              src={details.medium_cover_image}
              alt=""
              className="border-white border-8 rounded-md w-full"
            />
            <button
              onClick={() => setShowModal(true)}
              className="bg-red-600 w-full cursor-pointer hover:bg-red-700 text-center mt-4 md:mt-2 p-2 font-semibold text-white rounded-md tracking-wider text-lg"
            >
              Download
            </button>
            {showModal && <Download closeModal={closeModal} />}
            <div className="bg-red-600 hover:bg-red-700 cursor-pointer text-center mt-4 md:mt-2 p-2 font-semibold text-white rounded-md tracking-wider text-lg">
              Watch
            </div>
          </div>

          <div className="pr-3">
            <h1 className="font-bold tracking-wider text-lg md:text-4xl text-white hidden md:block">
              {details.title}
            </h1>
            <h2 className="pt-6 text-white text-base md:text-xl font-semibold tracking-wider">
              {details.year}
            </h2>
            <h1 className="text-white text-lg md:text-3xl font-semibold tracking-wider">
              {details.genres?.join(" . ")}
            </h1>

            <div className="pt-3 md:pt-7 ">
              <span className="text-white text-lg italic">Availabe in:</span>

              <button className="text-white md:w-24 border p-1 ml-4 rounded-md hover:text-white/60">
                720p.WEB
              </button>
              <button className="text-white border  md:w-24 p-1 mt-2 ml-4 rounded-md hover:text-white/60">
                1080p.WEB
              </button>
            </div>

            <div className="text-white/50 text-base font-semibold pt-1">
              <span>WEB: </span>
              <span>same quality as BluRay</span>
            </div>

            <button className="text-white text-xs md:text-base border px-2 py-1 rounded-md my-5 flex items-center gap-3 hover:text-white/60">
              <p className="text-2xl text-green-700">
                <AiOutlineDownload />
              </p>
              Download Subtitles
            </button>
            <div className="text-white text-xl font-semibold pt-3 flex items-center gap-4">
              <p className="text-5xl text-yellow-500">
                <FaImdb />
              </p>
              <p className="underline">
                <span className="text-xl"> {details.rating}</span>
                <span className="text-zinc-500 text-sm">/10</span>
              </p>
            </div>

            {/* Get Casts */}
            <div className="pt-4">
              <h1 className="text-white font-semibold text-lg underline">
                Casts
              </h1>
              <ul className="flex gap-3">
                {casts?.map((item) => (
                  <li key={item.id} className="w-full">
                    <div>
                      <img
                        src={item.url_small_image}
                        alt=""
                        className="pt-1 rounded-md h-14 shadow-md shadow-gray-50"
                      />
                    </div>
                    <div className="text-white italic pt-1 text-xs">{item.name}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Suggestions */}
          <div className="">
            <h1 className="text-white font-semibold text-lg mt-5">Similar movies</h1>
            <ul className="md:grid md:grid-cols-2 gap-4 flex">
              {suggestions?.map((item) => (
                <li key={item.id} className="cursor-pointer">
                  <div>
                    <img
                      src={item.medium_cover_image}
                      alt=""
                      className="md:w-28 border-4 border-white rounded hover:scale-105 transition-all duration-500 hover:rounded-none"
                    />
                  </div>
                  {/* <h1 className="text-white text-xs pt-1">{item.title}</h1> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
