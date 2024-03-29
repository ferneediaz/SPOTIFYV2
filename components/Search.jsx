import { MdOutlineShortText } from "react-icons/md";
import { useState, useEffect } from "react";

function Search({ search, setSearch }) {
  // State variable to keep track of the timeout ID returned by setTimeout
  const [typingTimeout, setTypingTimeout] = useState(0);

  // Function to handle changes to the search input
  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    // If there is a timeout already set, clear it
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    // Set a new timeout of 500ms before calling setSearch with the new search text
    setTypingTimeout(
      setTimeout(() => {
        setSearch(searchText);
      }, 500)
    );
  };

  return (
    <div className="max-w-[1150px] bg-[#1a1a1a] rounded-full overflow-hidden border-2 border-[#333333] p-1.5 px-5 pr-8 flex items-center">
      <div className="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse " />
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        className="bg-[#1a1a1a] text-white border-none lg:w-full focus:ring-0 outline-none placeholder-[#fafafa] text-xs"
        placeholder="Search..."
      />
      <div className="flex items-center divide-dotted divide-x-2 divide-[#333333] ml-auto">
        <div className="flex space-x-2 pr-5">
          <button className="tag">Minimal</button>
          <button className="tag">House</button>
          <button className="tag">Minimal</button>
        </div>
        <div className="flex items-center space-x-1.5 text-[#cecece] pl-4">
          <MdOutlineShortText className="text-2xl animate-pulse" />
          <span className="font-medium text-sm">Filters</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
