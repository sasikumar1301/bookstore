// data/booksData.js (Simulated book data and API calls)
const books= [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author A',
      price: 10.99,
      image: 'book1.jpg',
      category: 'Fiction',
    },
    {
        id: 2,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        price: 9.99,
        image: 'mockingbird.jpg',
        category: 'Fiction',
      },
      {
        id: 3,
        title: '1984',
        author: 'George Orwell',
        price: 11.50,
        image: '1984.jpg',
        category: 'Fiction',
      },
      {
        id: 4,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        price: 8.75,
        image: 'pride.jpg',
        category: 'Fiction',
      },
      {
        id: 5,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: 10.25,
        image: 'gatsby.jpg',
        category: 'Fiction',
      },
      {
        id: 6,
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J.K. Rowling',
        price: 14.99,
        image: 'harry_potter.jpg',
        category: 'Fantasy',
      },
      {
        id: 7,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        price: 13.50,
        image: 'hobbit.jpg',
        category: 'Fantasy',
      },
      {
        id: 8,
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        price: 11.99,
        image: 'davinci.jpg',
        category: 'Mystery',
      },
      {
        id: 9,
        title: 'The Girl with the Dragon Tattoo',
        author: 'Stieg Larsson',
        price: 9.75,
        image: 'dragon_tattoo.jpg',
        category: 'Mystery',
      },
      {
        id: 10,
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        price: 17.50,
        image: 'lotr.jpg',
        category: 'Fantasy',
      },
      {
        id: 11,
        title: 'Gone Girl',
        author: 'Gillian Flynn',
        price: 10.99,
        image: 'gone_girl.jpg',
        category: 'Mystery',
      },
      {
        id: 12,
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        price: 8.99,
        image: 'hunger_games.jpg',
        category: 'Fantasy',
      },
      {
        id: 13,
        title: 'The Road',
        author: 'Cormac McCarthy',
        price: 9.25,
        image: 'road.jpg',
        category: 'Fiction',
      },
      {
        id: 14,
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        price: 12.25,
        image: 'silent_patient.jpg',
        category: 'Mystery',
      },
      {
        id: 15,
        title: 'The Martian',
        author: 'Andy Weir',
        price: 11.50,
        image: 'martian.jpg',
        category: 'Science Fiction',
      },
      {
        id: 16,
        title: 'Dune',
        author: 'Frank Herbert',
        price: 13.75,
        image: 'dune.jpg',
        category: 'Science Fiction',
      },
      {
        id: 17,
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        price: 10.99,
        image: 'alchemist.jpg',
        category: 'Fiction',
      },
      {
        id: 18,
        title: 'The Shining',
        author: 'Stephen King',
        price: 11.25,
        image: 'shining.jpg',
        category: 'Horror',
      },
      {
        id: 19,
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        price: 9.50,
        image: 'dorian_gray.jpg',
        category: 'Classics',
      },
      {
        id: 20,
        title: 'Moby-Dick',
        author: 'Herman Melville',
        price: 12.75,
        image: 'moby_dick.jpg',
        category: 'Classics',
      },
  ];
  
  export const fetchBooks = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(books);
      }, 1000); // Simulating delay for API fetch
    });
  };
  
  export const fetchBookById = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const book = books.find(book => book.id === parseInt(id));
        if (book) {
          resolve(book);
        } else {
          reject('Book not found');
        }
      }, 500); // Simulating delay for API fetch
    });
  };