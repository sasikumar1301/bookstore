import React, { useState } from 'react';
import './Search.css'

const Search = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className='search-input'>
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
