import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";

function Search({ onOpen, filterContacts, e }) {
  return (
    <div className="relative flex items-center px-4 flex-grow gap-2">
      <IoMdSearch className="absolute text-3xl ml-1 text-white  " />
      <input
        onChange={() => filterContacts(e)}
        placeholder="Search"
        className="border border-white bg-transparent rounded-md h-[40px] flex-grow text-white pl-9 "
        type="text"
      />
      <FaPlusCircle
        onClick={onOpen}
        className="text-5xl text-white cursor-pointer"
      />
    </div>
  );
}

export default Search;
