const DetailShimmer = () => {
  return (
    <>
      <div className="text-white flex py-5 px-5 gap-10 justify-evenly">
        <div className="w-72">
          <div className="w-full rounded-md bg-slate-400 animate-pulse h-[360px]"></div>
          <div className="bg-slate-400 animate-pulse w-full h-12 mt-2 rounded-md"></div>
          <div className="bg-slate-400 animate-pulse w-full h-12 mt-2 rounded-md"></div>
        </div>
        <div className="">
          <div className="bg-slate-400 animate-pulse h-20 w-96 rounded-md"></div>
          <div className="bg-slate-400 animate-pulse h-12 w-60 rounded-md mt-4"></div>
          <div className="bg-slate-400 animate-pulse h-14 w-60 rounded-md mt-4"></div>
          <div className="bg-slate-400 animate-pulse h-10 w-44 rounded-md mt-4"></div>
          <div className="bg-slate-400 animate-pulse h-14 w-20 mt-4 rounded-md"></div>

          <div className="flex gap-3">
            <div className="h-14 w-16 bg-slate-400 animate-pulse rounded-md mt-6"></div>
            <div className="h-14 w-16 bg-slate-400 animate-pulse rounded-md mt-6"></div>
            <div className="h-14 w-16 bg-slate-400 animate-pulse rounded-md mt-6"></div>
            <div className="h-14 w-16 bg-slate-400 animate-pulse rounded-md mt-6"></div>
          </div>
        </div>

        <div className="hidden md:block">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="bg-slate-400 animate-pulse h-44 w-28 rounded-md"></li>
            <li className="bg-slate-400 animate-pulse h-44 w-28 rounded-md"></li>
            <li className="bg-slate-400 animate-pulse h-44 w-28 rounded-md"></li>
            <li className="bg-slate-400 animate-pulse h-44 w-28 rounded-md"></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DetailShimmer;
