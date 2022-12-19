import { useState } from "react";
import { useBooksContext } from "../hooks/useBooksContext";

const BookCreate = ({ onCreate }) => {
  const { createBook } = useBooksContext;
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <div style={{ maxWidth: "1024px", margin: 'auto' }}>
        <h3>Add a book</h3>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input className="input" value={title} onChange={handleChange} />
          <button className="button">Create!</button>
        </form>
      </div>
    </div>
  );
};

export default BookCreate;
