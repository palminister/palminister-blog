const SearchBox = ({ setSearch }) => {
  return (
    <div className="flex justify-end max-w-lg px-2 pr-8 mx-auto my-0 lg:pr-10 lg:max-w-none lg:px-4 font-sourcecode">
      <div className="relative max-w-xs">
        <div className="absolute inset-y-0 left-0 flex items-center h-10 pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          className="w-32 h-10 mb-2 text-gray-500 placeholder-gray-500 transition duration-300 bg-white border-gray-200 rounded-full pl-9 focus:outline-none focus:border-green-300"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  )
}

export default SearchBox
