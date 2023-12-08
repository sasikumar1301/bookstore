import React, { useState, useEffect } from 'react';
import BookCatalog from '../components/BookCatalog';
import Search from '../components/Search';
import { fetchBooks } from '../services/mockAPI'; // Import fetchBooks from your API

const CatalogPage = () => {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  // Fetch books initially
  useEffect(() => {
    fetchBooks()
      .then(data => {
        setBooks(data);
        setSearchResults(data); // Initialize searchResults with all books
      })
      .catch(error => {
        console.error('Error fetching books: ', error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredBooks);
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <BookCatalog books={searchResults} />
    </div>
  );
};

export default CatalogPage;
