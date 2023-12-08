import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookById } from '../services/mockAPI'; // Assuming a mock API service

const BookDetails = ({ addToCart }) => {
  const [book, setBook] = useState(null);
  const { bookId } = useParams();

  useEffect(() => {
    // Fetch book details by ID from the API
    fetchBookById(bookId)
      .then(data => {
        setBook(data);
      })
      .catch(error => {
        console.error('Error fetching book details: ', error);
      });
  }, [bookId]);

  const handleAddToCart = () => {
    if (book) {
      addToCart({ id: book.id, title: book.title, price: book.price });
    }
  };

  return (
    <div className='book-details'>
      <h2>Book Details</h2>
      {book ? (
        <div>
          <img src={book.image} alt={book.title} />
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Price: ${book.price}</p>
          <p>Description: {book.description}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetails;
