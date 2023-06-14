import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { getBooks } from '../redux/books/booksSlice';

const BooksList = () => {
  const { books, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="bookslist-container">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="bookslist-container">
      {
      books.map((item) => (
        <Book
          key={item.item_id}
          id={item.item_id}
          category={item.category}
          title={item.title}
          author={item.author}
        />
      ))
    }
    </div>
  );
};

export default BooksList;
