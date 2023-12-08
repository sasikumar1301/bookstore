// BookCatalog.js

import React, { useState, useEffect } from 'react';
import { fetchBooks } from '../services/mockAPI'; // Assuming a mock API service
import { Link } from 'react-router-dom';
import './BookCatalog.css'; // Import your CSS file

const BookCatalog = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the API
    fetchBooks()
      .then(data => {
        setBooks(data);
      })
      .catch(error => {
        console.error('Error fetching books: ', error);
      });
  }, []);

  return (
    <div>
      <h2>Book Catalog</h2>
      <div className='book'>
        {books.map(book => (
          <div key={book.id}>
            <Link to={`/book/${book.id}`}>
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Price: ${book.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCatalog;
