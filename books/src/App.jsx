import { useState } from "react";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    // BAD CODE
    // books.push({id: 123, title: title})
    // setBooks(books)

    const updatedBooks = [...books, {id: (new Date()).getTime(), title}];
    setBooks(updatedBooks);
  }

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if(book.id === id) {
        return { ...book, title: newTitle}
      }

      return book;
    })

    setBooks(updatedBooks);
  }

  const deleteBookById = (id) => {
    // Filter does not updates the array it just returns a new array with the satisfied condition.
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    })

    setBooks(updatedBooks);
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App