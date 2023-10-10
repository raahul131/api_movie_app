import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Download = ({ closeModal }) => {
  const [download, setDownload] = useState([]);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    toDownload();
  }, []);

  const toDownload = () => {
    axios
      .get("https://yts.mx/api/v2/movie_details.json?movie_id=" + id)
      .then((res) => {
        setDownload(res?.data?.data?.movie?.torrents);
        // console.log(res?.data?.data?.movie?.torrents);
      })

      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleDownloadMovie = (quality) => {
    const movieUrl = download?.filter((movie) => {
      return movie?.quality === quality;
    });
    if (movieUrl) {
    //   console.log("I am here", movieUrl);
      const link = document.createElement("a");
    //   console.log("link",link)
      link.href = movieUrl[0]?.url;
      link.download = `${movieUrl[0]?.quality}`;
      link.click();
      closeModal();
    }
  };

  return (
    <>
      <div
        className="left-0 right-0 top-0 bottom-0 fixed bg-white/30"
        onClick={closeModal}
      ></div>
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black p-10 rounded-lg">
        <h1 className="text-white text-center">Download Quality..?</h1>
        <div className="flex gap-5 mt-5">
          <button
            onClick={() => handleDownloadMovie("720p")}
            className="bg-blue-700 hover:bg-blue-500 py-2 px-4 rounded-md text-white text-lg font-bold tracking-wider"
          >
            720p
          </button>
          <button
            onClick={() => handleDownloadMovie("1080p")}
            className="bg-blue-700 hover:bg-blue-500 py-2 px-4 rounded-md text-white text-lg font-bold tracking-wider"
          >
            1080p
          </button>
        </div>
      </div>
    </>
  );
};

export default Download;
