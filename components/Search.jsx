import { MdOutlineShortText } from "react-icons/md";

const Search = ({ search, setSearch }) => (
  <div className="max-w-[1350px] bg-[#1a1a1a] rounded-full overflow-hidden border-2 border-[#333333] p-1.5 lg:px-6 flex items-center">
    <div className="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse " />
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="bg-[#1a1a1a] text-white border-none lg:w-full focus:ring-0 outline-none placeholder-[#fafafa] text-xs px-2 py-1.5 lg:py-2 lg:text-sm"
      placeholder="Search..."
    />
    <div className="flex items-center divide-dotted divide-x-2 divide-[#333333] ml-auto">
      <div className="flex space-x-3 pr-6">
        <button className="tag flex items-center justify-center px-3" style={{ minWidth: '6rem' }}>
          Top Hits
        </button>
        <button className="tag flex items-center justify-center px-3" style={{ minWidth: '7rem' }}>
          Most Viewed
        </button>
        <button className="tag flex items-center justify-center px-3" style={{ minWidth: '6rem' }}>
          PodCasts
        </button>
      </div>
      <div className="flex items-center space-x-1.5 text-[#cecece] pl-4">
        <MdOutlineShortText className="text-2xl animate-pulse" />
        <span className="font-medium text-sm">Filters</span>
      </div>
    </div>
  </div>
);

export default Search;
