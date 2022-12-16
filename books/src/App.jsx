import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:4000/books');

    setBooks(response.data);
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    // BAD CODE
    // books.push({id: 123, title: title})
    // setBooks(books)

    const response = await axios.post("http://localhost:4000/books", {
      id: (new Date()).getTime(),
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const editBookById = async(id, newTitle) => {
    const response = await axios.put(`http://localhost:4000/books/${id}`, {
      title: newTitle
    })

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:4000/books/${id}`)

    // Filter does not updates the array it just returns a new array with the satisfied condition.
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
