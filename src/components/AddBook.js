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
  const createBook = () => {
    const bookData = {
      item_id: uuid(),
      title,
      author,
      category: 'Under construction',
    };
    dispatch(addBook(bookData));
    setTitle('');
    setAuthor('');
  };
  return (
    <div className="addbook-container">
      <h2>
        ADD NEW BOOK
      </h2>
      <form className="addbook-form">
        <input className="addbook-title" type="text" placeholder="Book title" value={title} onChange={handleInputTitle} required />
        <input className="addbook-author" type="text" placeholder="Author" value={author} onChange={handleInputAuthor} required />
        <button
          className="addbook-btn"
          type="button"
          onSubmit={createBook}
        >
          ADD BOOK
        </button>
      </form>

    </div>
  );
};

export default AddBook;
