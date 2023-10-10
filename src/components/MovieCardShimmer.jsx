const MovieCardShimmer = () => {
  return (
    <>
      <div className="flex flex-wrap gap-8 md:gap-11  justify-center my-10 mx-5 animate-pulse">
        {Array(20)
          .fill("")
          .map((item, index) => {
            return (
              <div key={index}>
                <div className="h-[420px] w-48 my-1 mx-5 rounded-md">
                  <div className="h-[350px] w-56 bg-gray-500 rounded-t-md"></div>
                  <div className="w-[95%] h-4 my-4 mx-1 bg-gray-500"></div>
                  <div className="w-[95%] h-4 my-2 mx-1 bg-gray-500"></div>
                  <div className="w-[25%] h-4 my-2 mx-1 bg-gray-500"></div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MovieCardShimmer;
