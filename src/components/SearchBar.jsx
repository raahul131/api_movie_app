const SearchBar = () => {
  return (
    <>
      <div className=" flex items-center justify-between gap-4 p-4 mx-14">
        <input
          type="text"
          placeholder="Search your favourite movies and shows"
          className="border-2 border-gray-500 rounded-xl p-2 w-full text-center"
        />
        <button className="border-2 p-2 border-gray-500 rounded-full bg-white font-semibold">
          search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
