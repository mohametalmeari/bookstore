import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const { books } = useSelector((state) => state.books);
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
