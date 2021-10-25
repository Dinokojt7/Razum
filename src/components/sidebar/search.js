import React from 'react';

const Search = ({keyword,setKeyword}) => {
    return (
      <input 
       className="text-sm bg-gray-50 text-gray-base pr-10 mr-0 h-8 py-2 pl-3 font-base shadow-md
       border border-gray-300 rounded mb-3 focus:outline-none focus:ring-0.5 focus:border-gray-300"
       key="random1"
       value={keyword}
       placeholder={"Search"}
       onChange={(e) => setKeyword(e.target.value)}
      />
    );
  }
  
  export default Search