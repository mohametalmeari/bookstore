import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import progressIcon from '../images/progress-icon.png';

const Book = ({
  id, category, title, author,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="book-container">
      <div>
        <span>
          {category}
        </span>
        <h2>
          {title}
        </h2>
        <span>
          {author}
        </span>
        <ul className="book-btns">
          <li>
            <button className="interaction-btn" type="button">
              Comments
            </button>
          </li>
          <li>
            <button className="interaction-btn" type="button" onClick={() => { dispatch(removeBook(id)); }}>
              Remove
            </button>
          </li>
          <li>
            <button className="interaction-btn" type="button">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="book-progress">
        <img className="progress-icon" alt="Progress" src={progressIcon} />
        <div>
          <span className="progress-text">
            40%
          </span>
          <span className="progress-text">
            Completed
          </span>
        </div>
      </div>
      <div className="book-chapters">
        <span>
          CURRENT CHAPTER
        </span>
        <span>
          Chapter 17
        </span>
        <button className="update-btn" type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
