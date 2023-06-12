import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleInputAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const dispatch = useDispatch();
  const createBook = () => ({
    id: uuid(),
    category: 'Under construction',
    title,
    author,
  });
  return (
    <div className="addbook-container">
      <h2>
        ADD NEW BOOK
      </h2>
      <form className="addbook-form">
        <input className="addbook-title" type="text" placeholder="Book title" onChange={handleInputTitle} />
        <input className="addbook-author" type="text" placeholder="Author" onChange={handleInputAuthor} />
        <button
          className="addbook-btn"
          type="button"
          onClick={() => {
            dispatch(addBook(createBook()));
          }}
        >
          ADD BOOK
        </button>
      </form>

    </div>
  );
};

export default AddBook;
